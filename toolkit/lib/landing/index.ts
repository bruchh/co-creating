import { computed } from 'vue';
import { useData } from 'vitepress';
import { en } from './en';
import { de } from './de';

export function useLandingContent() {
  const { lang } = useData();
  const isGerman = computed(() => lang.value.split('-')[0] === 'de');
  const content = computed(() => isGerman.value ? de : en);

  // Only toolkit routes are localized; media and document URLs are shared paths.
  const localizedLink = (path: string) =>
    isGerman.value && /^\/docs(?:\/|$)/.test(path) ? `/de${path}` : path;

  const format = (text: string, values: Record<string, string | number>) =>
    text.replace(/\{(\w+)\}/g, (placeholder, key: string) =>
      values[key] === undefined ? placeholder : String(values[key]));

  return { content, isGerman, localizedLink, format };
}
