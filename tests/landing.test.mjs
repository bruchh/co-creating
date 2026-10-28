// Run after `npm run build`: node --test tests/landing.test.mjs
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

const dist = resolve('toolkit/.vitepress/dist');
const pages = {
  en: readFileSync(resolve(dist, 'index.html'), 'utf8'),
  de: readFileSync(resolve(dist, 'de/index.html'), 'utf8'),
};
const links = html => [...html.matchAll(/href="([^"#]+)"/g)].map(match => match[1]);
const headings = html => [...html.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)]
  .map(match => match[1].replace(/<[^>]+>/g, ''));

function builtPageExists(url) {
  const path = decodeURIComponent(url).split(/[?#]/)[0].replace(/^\//, '');
  return [path, `${path}.html`, `${path.replace(/\/$/, '')}/index.html`]
    .some(candidate => existsSync(resolve(dist, candidate)));
}

test('both landing pages are rendered in their own language without redirects', () => {
  assert.match(pages.en, /<html[^>]+lang="en-US"/);
  assert.match(pages.de, /<html[^>]+lang="de-DE"/);
  assert.match(pages.en, /Youth and Decision-Makers Shaping Participation and Change/);
  assert.match(pages.de, /junge Menschen und Entscheidungsträger\*innen gestalten Partizipation und Transformation/);
  for (const html of Object.values(pages)) {
    assert.doesNotMatch(html, /window\.location\.replace/);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
  }
});

test('all German landing sections and the German process graphic are present', () => {
  const titles = headings(pages.de);
  for (const title of [
    'Warum deine Stadt „Co-Creating Our City“ braucht',
    'Vorteile',
    'Forschung mit der Community, nicht über sie',
    'Echte Wirkung in Charlotte und Düsseldorf',
    'Eckdaten',
    'Forschungsdesign (Mixed Methods)',
    'Wirkung',
    'Starte dein eigenes Projekt mit unserem Toolkit',
    'Bereit, dein eigenes Projekt zu starten?',
  ]) assert(titles.includes(title), `Missing German heading: ${title}`);
  assert(!titles.some(title => /Key Facts|Start Your|Traditional Approach/.test(title)));
  assert.doesNotMatch(pages.de, /<em>/);
  assert.doesNotMatch(pages.de, /\\\*innen/);
  assert.match(pages.de, /Partner\*innen/);
});

test('landing and toolkit infographics use the correct language and existing image files', () => {
  const chapter = 'docs/doing-participatory-research/five-steps-to-organizing-your-project.html';
  const cases = [
    [pages.en, ['Infografik_dpart_5_steps']],
    [pages.de, ['Infografik_dpart_DE-1']],
    [readFileSync(resolve(dist, chapter), 'utf8'), ['five-steps', 'info-2']],
    [readFileSync(resolve(dist, 'de', chapter), 'utf8'), ['Infografik_dpart_DE-1', 'Infografik_dpart_DE-2']],
  ];
  for (const [html, expected] of cases) {
    const images = [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map(match => match[1]);
    for (const name of expected) {
      // Imported Vue assets get a content hash; Markdown uses public URLs.
      const image = images.find(src => src.split('/').pop().split('.')[0] === name);
      assert(image, `Missing infographic: ${name}`);
      const file = readFileSync(resolve(dist, image.slice(1)));
      assert.equal(file.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    }
    if (expected.some(image => image.includes('_DE-'))) {
      assert(!images.some(image => /five-steps|info-2|Infografik_dpart_5_steps/.test(image)));
    } else {
      assert(!images.some(image => image.includes('_DE-')));
    }
  }
});

test('toolkit links stay in the selected language and point to generated pages', () => {
  for (const [locale, html] of Object.entries(pages)) {
    const toolkitLinks = links(html).filter(link => /^\/(?:de\/)?docs\//.test(link));
    assert(toolkitLinks.length >= 7);
    for (const link of toolkitLinks) {
      assert(link.startsWith(locale === 'de' ? '/de/docs/' : '/docs/'), link);
      assert(builtPageExists(link), `Missing toolkit destination: ${link}`);
    }
  }
});

test('language navigation and localized accessible labels are rendered', () => {
  assert(links(pages.en).includes('/de/'));
  assert(links(pages.de).includes('/'));
  assert.match(pages.de, /Startseite/);
  assert.match(pages.de, /Nächste Folie/);
  assert.match(pages.de, /Vorherige Folie/);
  assert.match(pages.de, /title="Projektvideo: Charlotte"/);
  assert.match(pages.de, /Website von Gambrell Foundation besuchen/);
  assert.match(pages.en, /Next Slide/);
  assert.match(pages.en, /title="Charlotte Project Video"/);
});

test('each language offers an existing toolkit PDF and keeps the contact address', () => {
  for (const [locale, html] of Object.entries(pages)) {
    const expected = locale === 'de'
      ? '/documents/Toolkit-Co-Creating-Our-City-DE.pdf'
      : '/documents/Toolkit-dpart_2026-02-26.pdf';
    assert(links(html).includes(expected));
    assert(builtPageExists(expected));
    assert.equal(readFileSync(resolve(dist, expected.slice(1))).subarray(0, 5).toString(), '%PDF-');
    assert(links(html).includes('mailto:citiescomms@gmfus.org'));
  }
});
