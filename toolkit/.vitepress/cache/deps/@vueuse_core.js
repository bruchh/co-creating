import {
  Fragment,
  TransitionGroup,
  computed,
  customRef,
  defineComponent,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  h,
  hasInjectionContext,
  inject,
  isReactive,
  isReadonly,
  isRef,
  markRaw,
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onScopeDispose,
  onUnmounted,
  onUpdated,
  provide,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  toRaw,
  toRef,
  toRefs,
  toValue,
  unref,
  watch,
  watchEffect
} from "./chunk-TMJZV6YU.js";
import "./chunk-PZ5AY32C.js";

// node_modules/@vueuse/core/node_modules/@vueuse/shared/dist/index.js
function computedEager(fn, options) {
  var _options$flush;
  const result = shallowRef();
  watchEffect(() => {
    result.value = fn();
  }, {
    ...options,
    flush: (_options$flush = options === null || options === void 0 ? void 0 : options.flush) !== null && _options$flush !== void 0 ? _options$flush : "sync"
  });
  return readonly(result);
}
var eagerComputed = computedEager;
function computedWithControl(source, fn, options = {}) {
  let v = void 0;
  let track;
  let trigger;
  let dirty = true;
  const update = () => {
    dirty = true;
    trigger();
  };
  watch(source, update, {
    flush: "sync",
    ...options
  });
  const get$1 = typeof fn === "function" ? fn : fn.get;
  const set$1 = typeof fn === "function" ? void 0 : fn.set;
  const result = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty) {
          v = get$1(v);
          dirty = false;
        }
        track();
        return v;
      },
      set(v$1) {
        set$1 === null || set$1 === void 0 || set$1(v$1);
      }
    };
  });
  result.trigger = update;
  return result;
}
var controlledComputed = computedWithControl;
function tryOnScopeDispose(fn, failSilently) {
  if (getCurrentScope()) {
    onScopeDispose(fn, failSilently);
    return true;
  }
  return false;
}
function createEventHook() {
  const fns = /* @__PURE__ */ new Set();
  const off = (fn) => {
    fns.delete(fn);
  };
  const clear = () => {
    fns.clear();
  };
  const on = (fn) => {
    fns.add(fn);
    const offFn = () => off(fn);
    tryOnScopeDispose(offFn);
    return { off: offFn };
  };
  const trigger = (...args) => {
    return Promise.all(Array.from(fns).map((fn) => fn(...args)));
  };
  return {
    on,
    off,
    trigger,
    clear
  };
}
function createGlobalState(stateFactory) {
  let initialized = false;
  let state;
  const scope = effectScope(true);
  return ((...args) => {
    if (!initialized) {
      state = scope.run(() => stateFactory(...args));
      initialized = true;
    }
    return state;
  });
}
var localProvidedStateMap = /* @__PURE__ */ new WeakMap();
var injectLocal = (...args) => {
  var _getCurrentInstance;
  const key = args[0];
  const instance = (_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy;
  const owner = instance !== null && instance !== void 0 ? instance : getCurrentScope();
  if (owner == null && !hasInjectionContext()) throw new Error("injectLocal must be called in setup");
  if (owner && localProvidedStateMap.has(owner) && key in localProvidedStateMap.get(owner)) return localProvidedStateMap.get(owner)[key];
  return inject(...args);
};
function provideLocal(key, value) {
  var _getCurrentInstance;
  const instance = (_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy;
  const owner = instance !== null && instance !== void 0 ? instance : getCurrentScope();
  if (owner == null) throw new Error("provideLocal must be called in setup");
  if (!localProvidedStateMap.has(owner)) localProvidedStateMap.set(owner, /* @__PURE__ */ Object.create(null));
  const localProvidedState = localProvidedStateMap.get(owner);
  localProvidedState[key] = value;
  return provide(key, value);
}
function createInjectionState(composable, options) {
  const key = (options === null || options === void 0 ? void 0 : options.injectionKey) || Symbol(composable.name || "InjectionState");
  const defaultValue = options === null || options === void 0 ? void 0 : options.defaultValue;
  const useProvidingState = (...args) => {
    const state = composable(...args);
    provideLocal(key, state);
    return state;
  };
  const useInjectedState = () => injectLocal(key, defaultValue);
  return [useProvidingState, useInjectedState];
}
function createRef(value, deep) {
  if (deep === true) return ref(value);
  else return shallowRef(value);
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
var isWorker = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var isDef = (val) => typeof val !== "undefined";
var notNullish = (val) => val != null;
var assert = (condition, ...infos) => {
  if (!condition) console.warn(...infos);
};
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var now = () => Date.now();
var timestamp = () => +Date.now();
var clamp = (n, min, max) => Math.min(max, Math.max(min, n));
var noop = () => {
};
var rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var hasOwn = (val, key) => Object.prototype.hasOwnProperty.call(val, key);
var isIOS = getIsIOS();
function getIsIOS() {
  var _window, _window2, _window3;
  return isClient && ((_window = window) === null || _window === void 0 || (_window = _window.navigator) === null || _window === void 0 ? void 0 : _window.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.maxTouchPoints) > 2 && /iPad|Macintosh/.test((_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.navigator.userAgent));
}
function toRef2(...args) {
  if (args.length !== 1) return toRef(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({
    get: r,
    set: noop
  }))) : ref(r);
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), {
        fn,
        thisArg: this,
        args
      })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
var bypassFilter = (invoke$1) => {
  return invoke$1();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer$1) => {
    clearTimeout(timer$1);
    lastRejector();
    lastRejector = noop;
  };
  let lastInvoker;
  const filter = (invoke$1) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer) _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = void 0;
      }
      return Promise.resolve(invoke$1());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      lastInvoker = invoke$1;
      if (maxDuration && !maxTimer) maxTimer = setTimeout(() => {
        if (timer) _clearTimeout(timer);
        maxTimer = void 0;
        resolve(lastInvoker());
      }, maxDuration);
      timer = setTimeout(() => {
        if (maxTimer) _clearTimeout(maxTimer);
        maxTimer = void 0;
        resolve(invoke$1());
      }, duration);
    });
  };
  return filter;
}
function throttleFilter(...args) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  let ms;
  let trailing;
  let leading;
  let rejectOnCancel;
  if (!isRef(args[0]) && typeof args[0] === "object") ({ delay: ms, trailing = true, leading = true, rejectOnCancel = false } = args[0]);
  else [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke$1 = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke$1();
    }
    if (elapsed > duration) {
      lastExec = Date.now();
      if (leading || !isLeading) invoke$1();
    } else if (trailing) lastValue = new Promise((resolve, reject) => {
      lastRejector = rejectOnCancel ? reject : resolve;
      timer = setTimeout(() => {
        lastExec = Date.now();
        isLeading = true;
        resolve(invoke$1());
        clear();
      }, Math.max(0, duration - elapsed));
    });
    if (!leading && !timer) timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter, options = {}) {
  const { initialState = "active" } = options;
  const isActive = toRef2(initialState === "active");
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value) extendFilter(...args);
  };
  return {
    isActive: readonly(isActive),
    pause,
    resume,
    eventFilter
  };
}
function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout) setTimeout(() => reject(reason), ms);
    else setTimeout(resolve, ms);
  });
}
function identity(arg) {
  return arg;
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise) _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev) await _prev;
  };
  return wrapper;
}
function invoke(fn) {
  return fn();
}
function containsProp(obj, ...props) {
  return props.some((k) => k in obj);
}
function increaseWithUnit(target, delta) {
  var _target$match;
  if (typeof target === "number") return target + delta;
  const value = ((_target$match = target.match(/^-?\d+\.?\d*/)) === null || _target$match === void 0 ? void 0 : _target$match[0]) || "";
  const unit = target.slice(value.length);
  const result = Number.parseFloat(value) + delta;
  if (Number.isNaN(result)) return target;
  return result + unit;
}
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function objectPick(obj, keys2, omitUndefined = false) {
  return keys2.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || obj[k] !== void 0) n[k] = obj[k];
    }
    return n;
  }, {});
}
function objectOmit(obj, keys2, omitUndefined = false) {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => {
    return (!omitUndefined || value !== void 0) && !keys2.includes(key);
  }));
}
function objectEntries(obj) {
  return Object.entries(obj);
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function cacheStringFunction(fn) {
  const cache = /* @__PURE__ */ Object.create(null);
  return ((str) => {
    return cache[str] || (cache[str] = fn(str));
  });
}
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
function createSharedComposable(composable) {
  if (!isClient) return composable;
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return ((...args) => {
    subscribers += 1;
    if (!scope) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    tryOnScopeDispose(dispose);
    return state;
  });
}
function extendRef(ref$1, extend, { enumerable = false, unwrap = true } = {}) {
  for (const [key, value] of Object.entries(extend)) {
    if (key === "value") continue;
    if (isRef(value) && unwrap) Object.defineProperty(ref$1, key, {
      get() {
        return value.value;
      },
      set(v) {
        value.value = v;
      },
      enumerable
    });
    else Object.defineProperty(ref$1, key, {
      value,
      enumerable
    });
  }
  return ref$1;
}
function get(obj, key) {
  if (key == null) return unref(obj);
  return unref(obj)[key];
}
function isDefined(v) {
  return unref(v) != null;
}
function makeDestructurable(obj, arr) {
  if (typeof Symbol !== "undefined") {
    const clone = { ...obj };
    Object.defineProperty(clone, Symbol.iterator, {
      enumerable: false,
      value() {
        let index = 0;
        return { next: () => ({
          value: arr[index++],
          done: index > arr.length
        }) };
      }
    });
    return clone;
  } else return Object.assign([...arr], obj);
}
function reactify(fn, options) {
  const unrefFn = (options === null || options === void 0 ? void 0 : options.computedGetter) === false ? unref : toValue;
  return function(...args) {
    return computed(() => fn.apply(this, args.map((i) => unrefFn(i))));
  };
}
var createReactiveFn = reactify;
function reactifyObject(obj, optionsOrKeys = {}) {
  let keys2 = [];
  let options;
  if (Array.isArray(optionsOrKeys)) keys2 = optionsOrKeys;
  else {
    options = optionsOrKeys;
    const { includeOwnProperties = true } = optionsOrKeys;
    keys2.push(...Object.keys(obj));
    if (includeOwnProperties) keys2.push(...Object.getOwnPropertyNames(obj));
  }
  return Object.fromEntries(keys2.map((key) => {
    const value = obj[key];
    return [key, typeof value === "function" ? reactify(value.bind(obj), options) : value];
  }));
}
function toReactive(objectRef) {
  if (!isRef(objectRef)) return reactive(objectRef);
  return reactive(new Proxy({}, {
    get(_, p, receiver) {
      return unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if (isRef(objectRef.value[p]) && !isRef(value)) objectRef.value[p].value = value;
      else objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  }));
}
function reactiveComputed(fn) {
  return toReactive(computed(fn));
}
function reactiveOmit(obj, ...keys2) {
  const flatKeys = keys2.flat();
  const predicate = flatKeys[0];
  return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries(toRefs(obj)).filter(([k, v]) => !predicate(toValue(v), k))) : Object.fromEntries(Object.entries(toRefs(obj)).filter((e) => !flatKeys.includes(e[0]))));
}
function reactivePick(obj, ...keys2) {
  const flatKeys = keys2.flat();
  const predicate = flatKeys[0];
  return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries(toRefs(obj)).filter(([k, v]) => predicate(toValue(v), k))) : Object.fromEntries(flatKeys.map((k) => [k, toRef2(obj, k)])));
}
function refAutoReset(defaultValue, afterMs = 1e4) {
  return customRef((track, trigger) => {
    let value = toValue(defaultValue);
    let timer;
    const resetAfter = () => setTimeout(() => {
      value = toValue(defaultValue);
      trigger();
    }, toValue(afterMs));
    tryOnScopeDispose(() => {
      clearTimeout(timer);
    });
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
        clearTimeout(timer);
        timer = resetAfter();
      }
    };
  });
}
var autoResetRef = refAutoReset;
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}
function refDebounced(value, ms = 200, options = {}) {
  const debounced = ref(toValue(value));
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return shallowReadonly(debounced);
}
var debouncedRef = refDebounced;
var useDebounce = refDebounced;
function refDefault(source, defaultValue) {
  return computed({
    get() {
      var _source$value;
      return (_source$value = source.value) !== null && _source$value !== void 0 ? _source$value : defaultValue;
    },
    set(value) {
      source.value = value;
    }
  });
}
function refManualReset(defaultValue) {
  let value = toValue(defaultValue);
  let trigger;
  const reset = () => {
    value = toValue(defaultValue);
    trigger();
  };
  const refValue = customRef((track, _trigger) => {
    trigger = _trigger;
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
      }
    };
  });
  refValue.reset = reset;
  return refValue;
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
function refThrottled(value, delay = 200, trailing = true, leading = true) {
  if (delay <= 0) return value;
  const throttled = ref(toValue(value));
  const updater = useThrottleFn(() => {
    throttled.value = value.value;
  }, delay, trailing, leading);
  watch(value, () => updater());
  return throttled;
}
var throttledRef = refThrottled;
var useThrottle = refThrottled;
function refWithControl(initial, options = {}) {
  let source = initial;
  let track;
  let trigger;
  const ref$1 = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        return get$1();
      },
      set(v) {
        set$1(v);
      }
    };
  });
  function get$1(tracking = true) {
    if (tracking) track();
    return source;
  }
  function set$1(value, triggering = true) {
    var _options$onBeforeChan, _options$onChanged;
    if (value === source) return;
    const old = source;
    if (((_options$onBeforeChan = options.onBeforeChange) === null || _options$onBeforeChan === void 0 ? void 0 : _options$onBeforeChan.call(options, value, old)) === false) return;
    source = value;
    (_options$onChanged = options.onChanged) === null || _options$onChanged === void 0 || _options$onChanged.call(options, value, old);
    if (triggering) trigger();
  }
  const untrackedGet = () => get$1(false);
  const silentSet = (v) => set$1(v, false);
  const peek = () => get$1(false);
  const lay = (v) => set$1(v, false);
  return extendRef(ref$1, {
    get: get$1,
    set: set$1,
    untrackedGet,
    silentSet,
    peek,
    lay
  }, { enumerable: true });
}
var controlledRef = refWithControl;
function set(...args) {
  if (args.length === 2) {
    const [ref$1, value] = args;
    ref$1.value = value;
  }
  if (args.length === 3) {
    const [target, key, value] = args;
    target[key] = value;
  }
}
function watchWithFilter(source, cb, options = {}) {
  const { eventFilter = bypassFilter, ...watchOptions } = options;
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
function watchPausable(source, cb, options = {}) {
  const { eventFilter: filter, initialState = "active", ...watchOptions } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter, { initialState });
  return {
    stop: watchWithFilter(source, cb, {
      ...watchOptions,
      eventFilter
    }),
    pause,
    resume,
    isActive
  };
}
var pausableWatch = watchPausable;
function syncRef(left, right, ...[options]) {
  const { flush = "sync", deep = false, immediate = true, direction = "both", transform = {} } = options || {};
  const watchers = [];
  const transformLTR = "ltr" in transform && transform.ltr || ((v) => v);
  const transformRTL = "rtl" in transform && transform.rtl || ((v) => v);
  if (direction === "both" || direction === "ltr") watchers.push(pausableWatch(left, (newValue) => {
    watchers.forEach((w) => w.pause());
    right.value = transformLTR(newValue);
    watchers.forEach((w) => w.resume());
  }, {
    flush,
    deep,
    immediate
  }));
  if (direction === "both" || direction === "rtl") watchers.push(pausableWatch(right, (newValue) => {
    watchers.forEach((w) => w.pause());
    left.value = transformRTL(newValue);
    watchers.forEach((w) => w.resume());
  }, {
    flush,
    deep,
    immediate
  }));
  const stop = () => {
    watchers.forEach((w) => w.stop());
  };
  return stop;
}
function syncRefs(source, targets, options = {}) {
  const { flush = "sync", deep = false, immediate = true } = options;
  const targetsArray = toArray(targets);
  return watch(source, (newValue) => targetsArray.forEach((target) => target.value = newValue), {
    flush,
    deep,
    immediate
  });
}
function toRefs2(objectRef, options = {}) {
  if (!isRef(objectRef)) return toRefs(objectRef);
  const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
  for (const key in objectRef.value) result[key] = customRef(() => ({
    get() {
      return objectRef.value[key];
    },
    set(v) {
      var _toValue;
      if ((_toValue = toValue(options.replaceRef)) !== null && _toValue !== void 0 ? _toValue : true) if (Array.isArray(objectRef.value)) {
        const copy = [...objectRef.value];
        copy[key] = v;
        objectRef.value = copy;
      } else {
        const newObject = {
          ...objectRef.value,
          [key]: v
        };
        Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
        objectRef.value = newObject;
      }
      else objectRef.value[key] = v;
    }
  }));
  return result;
}
function tryOnBeforeMount(fn, sync = true, target) {
  if (getLifeCycleTarget(target)) onBeforeMount(fn, target);
  else if (sync) fn();
  else nextTick(fn);
}
function tryOnBeforeUnmount(fn, target) {
  if (getLifeCycleTarget(target)) onBeforeUnmount(fn, target);
}
function tryOnMounted(fn, sync = true, target) {
  if (getLifeCycleTarget(target)) onMounted(fn, target);
  else if (sync) fn();
  else nextTick(fn);
}
function tryOnUnmounted(fn, target) {
  if (getLifeCycleTarget(target)) onUnmounted(fn, target);
}
function createUntil(r, isNot = false) {
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const promises = [new Promise((resolve) => {
      stop = watch(r, (v) => {
        if (condition(v) !== isNot) {
          if (stop) stop();
          else nextTick(() => stop === null || stop === void 0 ? void 0 : stop());
          resolve(v);
        }
      }, {
        flush,
        deep,
        immediate: true
      });
    })];
    if (timeout != null) promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => stop === null || stop === void 0 ? void 0 : stop()));
    return Promise.race(promises);
  }
  function toBe(value, options) {
    if (!isRef(value)) return toMatch((v) => v === value, options);
    const { flush = "sync", deep = false, timeout, throwOnTimeout } = options !== null && options !== void 0 ? options : {};
    let stop = null;
    const promises = [new Promise((resolve) => {
      stop = watch([r, value], ([v1, v2]) => {
        if (isNot !== (v1 === v2)) {
          if (stop) stop();
          else nextTick(() => stop === null || stop === void 0 ? void 0 : stop());
          resolve(v1);
        }
      }, {
        flush,
        deep,
        immediate: true
      });
    })];
    if (timeout != null) promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => {
      stop === null || stop === void 0 || stop();
      return toValue(r);
    }));
    return Promise.race(promises);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes(toValue(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(toValue(r))) return {
    toMatch,
    toContains,
    changed,
    changedTimes,
    get not() {
      return createUntil(r, !isNot);
    }
  };
  else return {
    toMatch,
    toBe,
    toBeTruthy,
    toBeNull,
    toBeNaN,
    toBeUndefined,
    changed,
    changedTimes,
    get not() {
      return createUntil(r, !isNot);
    }
  };
}
function until(r) {
  return createUntil(r);
}
function defaultComparator(value, othVal) {
  return value === othVal;
}
function useArrayDifference(...args) {
  var _args$, _args$2;
  const list = args[0];
  const values = args[1];
  let compareFn = (_args$ = args[2]) !== null && _args$ !== void 0 ? _args$ : defaultComparator;
  const { symmetric = false } = (_args$2 = args[3]) !== null && _args$2 !== void 0 ? _args$2 : {};
  if (typeof compareFn === "string") {
    const key = compareFn;
    compareFn = (value, othVal) => value[key] === othVal[key];
  }
  const diff1 = computed(() => toValue(list).filter((x) => toValue(values).findIndex((y) => compareFn(x, y)) === -1));
  if (symmetric) {
    const diff2 = computed(() => toValue(values).filter((x) => toValue(list).findIndex((y) => compareFn(x, y)) === -1));
    return computed(() => symmetric ? [...toValue(diff1), ...toValue(diff2)] : toValue(diff1));
  } else return diff1;
}
function useArrayEvery(list, fn) {
  return computed(() => toValue(list).every((element, index, array) => fn(toValue(element), index, array)));
}
function useArrayFilter(list, fn) {
  return computed(() => toValue(list).map((i) => toValue(i)).filter(fn));
}
function useArrayFind(list, fn) {
  return computed(() => toValue(toValue(list).find((element, index, array) => fn(toValue(element), index, array))));
}
function useArrayFindIndex(list, fn) {
  return computed(() => toValue(list).findIndex((element, index, array) => fn(toValue(element), index, array)));
}
function findLast(arr, cb) {
  let index = arr.length;
  while (index-- > 0) if (cb(arr[index], index, arr)) return arr[index];
}
function useArrayFindLast(list, fn) {
  return computed(() => toValue(!Array.prototype.findLast ? findLast(toValue(list), (element, index, array) => fn(toValue(element), index, array)) : toValue(list).findLast((element, index, array) => fn(toValue(element), index, array))));
}
function isArrayIncludesOptions(obj) {
  return isObject(obj) && containsProp(obj, "formIndex", "comparator");
}
function useArrayIncludes(...args) {
  var _comparator;
  const list = args[0];
  const value = args[1];
  let comparator = args[2];
  let formIndex = 0;
  if (isArrayIncludesOptions(comparator)) {
    var _comparator$fromIndex;
    formIndex = (_comparator$fromIndex = comparator.fromIndex) !== null && _comparator$fromIndex !== void 0 ? _comparator$fromIndex : 0;
    comparator = comparator.comparator;
  }
  if (typeof comparator === "string") {
    const key = comparator;
    comparator = (element, value$1) => element[key] === toValue(value$1);
  }
  comparator = (_comparator = comparator) !== null && _comparator !== void 0 ? _comparator : ((element, value$1) => element === toValue(value$1));
  return computed(() => toValue(list).slice(formIndex).some((element, index, array) => comparator(toValue(element), toValue(value), index, toValue(array))));
}
function useArrayJoin(list, separator) {
  return computed(() => toValue(list).map((i) => toValue(i)).join(toValue(separator)));
}
function useArrayMap(list, fn) {
  return computed(() => toValue(list).map((i) => toValue(i)).map(fn));
}
function useArrayReduce(list, reducer, ...args) {
  const reduceCallback = (sum, value, index) => reducer(toValue(sum), toValue(value), index);
  return computed(() => {
    const resolved = toValue(list);
    return args.length ? resolved.reduce(reduceCallback, typeof args[0] === "function" ? toValue(args[0]()) : toValue(args[0])) : resolved.reduce(reduceCallback);
  });
}
function useArraySome(list, fn) {
  return computed(() => toValue(list).some((element, index, array) => fn(toValue(element), index, array)));
}
function uniq(array) {
  return Array.from(new Set(array));
}
function uniqueElementsBy(array, fn) {
  return array.reduce((acc, v) => {
    if (!acc.some((x) => fn(v, x, array))) acc.push(v);
    return acc;
  }, []);
}
function useArrayUnique(list, compareFn) {
  return computed(() => {
    const resolvedList = toValue(list).map((element) => toValue(element));
    return compareFn ? uniqueElementsBy(resolvedList, compareFn) : uniq(resolvedList);
  });
}
function useCounter(initialValue = 0, options = {}) {
  let _initialValue = unref(initialValue);
  const count = shallowRef(initialValue);
  const { max = Number.POSITIVE_INFINITY, min = Number.NEGATIVE_INFINITY } = options;
  const inc = (delta = 1) => count.value = Math.max(Math.min(max, count.value + delta), min);
  const dec = (delta = 1) => count.value = Math.min(Math.max(min, count.value - delta), max);
  const get$1 = () => count.value;
  const set$1 = (val) => count.value = Math.max(min, Math.min(max, val));
  const reset = (val = _initialValue) => {
    _initialValue = val;
    return set$1(val);
  };
  return {
    count: shallowReadonly(count),
    inc,
    dec,
    get: get$1,
    set: set$1,
    reset
  };
}
var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i;
var REGEX_FORMAT = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;
function defaultMeridiem(hours, minutes, isLowercase, hasPeriod) {
  let m = hours < 12 ? "AM" : "PM";
  if (hasPeriod) m = m.split("").reduce((acc, curr) => acc += `${curr}.`, "");
  return isLowercase ? m.toLowerCase() : m;
}
function formatOrdinal(num) {
  const suffixes = [
    "th",
    "st",
    "nd",
    "rd"
  ];
  const v = num % 100;
  return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}
function formatDate(date, formatStr, options = {}) {
  var _options$customMeridi;
  const years = date.getFullYear();
  const month = date.getMonth();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const day = date.getDay();
  const meridiem = (_options$customMeridi = options.customMeridiem) !== null && _options$customMeridi !== void 0 ? _options$customMeridi : defaultMeridiem;
  const stripTimeZone = (dateString) => {
    var _dateString$split$;
    return (_dateString$split$ = dateString.split(" ")[1]) !== null && _dateString$split$ !== void 0 ? _dateString$split$ : "";
  };
  const matches = {
    Yo: () => formatOrdinal(years),
    YY: () => String(years).slice(-2),
    YYYY: () => years,
    M: () => month + 1,
    Mo: () => formatOrdinal(month + 1),
    MM: () => `${month + 1}`.padStart(2, "0"),
    MMM: () => date.toLocaleDateString(toValue(options.locales), { month: "short" }),
    MMMM: () => date.toLocaleDateString(toValue(options.locales), { month: "long" }),
    D: () => String(days),
    Do: () => formatOrdinal(days),
    DD: () => `${days}`.padStart(2, "0"),
    H: () => String(hours),
    Ho: () => formatOrdinal(hours),
    HH: () => `${hours}`.padStart(2, "0"),
    h: () => `${hours % 12 || 12}`.padStart(1, "0"),
    ho: () => formatOrdinal(hours % 12 || 12),
    hh: () => `${hours % 12 || 12}`.padStart(2, "0"),
    m: () => String(minutes),
    mo: () => formatOrdinal(minutes),
    mm: () => `${minutes}`.padStart(2, "0"),
    s: () => String(seconds),
    so: () => formatOrdinal(seconds),
    ss: () => `${seconds}`.padStart(2, "0"),
    SSS: () => `${milliseconds}`.padStart(3, "0"),
    d: () => day,
    dd: () => date.toLocaleDateString(toValue(options.locales), { weekday: "narrow" }),
    ddd: () => date.toLocaleDateString(toValue(options.locales), { weekday: "short" }),
    dddd: () => date.toLocaleDateString(toValue(options.locales), { weekday: "long" }),
    A: () => meridiem(hours, minutes),
    AA: () => meridiem(hours, minutes, false, true),
    a: () => meridiem(hours, minutes, true),
    aa: () => meridiem(hours, minutes, true, true),
    z: () => stripTimeZone(date.toLocaleDateString(toValue(options.locales), { timeZoneName: "shortOffset" })),
    zz: () => stripTimeZone(date.toLocaleDateString(toValue(options.locales), { timeZoneName: "shortOffset" })),
    zzz: () => stripTimeZone(date.toLocaleDateString(toValue(options.locales), { timeZoneName: "shortOffset" })),
    zzzz: () => stripTimeZone(date.toLocaleDateString(toValue(options.locales), { timeZoneName: "longOffset" }))
  };
  return formatStr.replace(REGEX_FORMAT, (match, $1) => {
    var _ref, _matches$match;
    return (_ref = $1 !== null && $1 !== void 0 ? $1 : (_matches$match = matches[match]) === null || _matches$match === void 0 ? void 0 : _matches$match.call(matches)) !== null && _ref !== void 0 ? _ref : match;
  });
}
function normalizeDate(date) {
  if (date === null) return /* @__PURE__ */ new Date(NaN);
  if (date === void 0) return /* @__PURE__ */ new Date();
  if (date instanceof Date) return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    const d = date.match(REGEX_PARSE);
    if (d) {
      const m = d[2] - 1 || 0;
      const ms = (d[7] || "0").substring(0, 3);
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
}
function useDateFormat(date, formatStr = "HH:mm:ss", options = {}) {
  return computed(() => formatDate(normalizeDate(toValue(date)), toValue(formatStr), options));
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
  const { immediate = true, immediateCallback = false } = options;
  let timer = null;
  const isActive = shallowRef(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0) return;
    isActive.value = true;
    if (immediateCallback) cb();
    clean();
    if (isActive.value) timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient) resume();
  if (isRef(interval) || typeof interval === "function") tryOnScopeDispose(watch(interval, () => {
    if (isActive.value && isClient) resume();
  }));
  tryOnScopeDispose(pause);
  return {
    isActive: shallowReadonly(isActive),
    pause,
    resume
  };
}
function useInterval(interval = 1e3, options = {}) {
  const { controls: exposeControls = false, immediate = true, callback } = options;
  const counter = shallowRef(0);
  const update = () => counter.value += 1;
  const reset = () => {
    counter.value = 0;
  };
  const controls = useIntervalFn(callback ? () => {
    update();
    callback(counter.value);
  } : update, interval, { immediate });
  if (exposeControls) return {
    counter: shallowReadonly(counter),
    reset,
    ...controls
  };
  else return shallowReadonly(counter);
}
function useLastChanged(source, options = {}) {
  var _options$initialValue;
  const ms = shallowRef((_options$initialValue = options.initialValue) !== null && _options$initialValue !== void 0 ? _options$initialValue : null);
  watch(source, () => ms.value = timestamp(), options);
  return shallowReadonly(ms);
}
function useTimeoutFn(cb, interval, options = {}) {
  const { immediate = true, immediateCallback = false } = options;
  const isPending = shallowRef(false);
  let timer;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    if (immediateCallback) cb();
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = void 0;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient) start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: shallowReadonly(isPending),
    start,
    stop
  };
}
function useTimeout(interval = 1e3, options = {}) {
  const { controls: exposeControls = false, callback } = options;
  const controls = useTimeoutFn(callback !== null && callback !== void 0 ? callback : noop, interval, options);
  const ready = computed(() => !controls.isPending.value);
  if (exposeControls) return {
    ready,
    ...controls
  };
  else return ready;
}
function useToNumber(value, options = {}) {
  const { method = "parseFloat", radix, nanToZero } = options;
  return computed(() => {
    let resolved = toValue(value);
    if (typeof method === "function") resolved = method(resolved);
    else if (typeof resolved === "string") resolved = Number[method](resolved, radix);
    if (nanToZero && Number.isNaN(resolved)) resolved = 0;
    return resolved;
  });
}
function useToString(value) {
  return computed(() => `${toValue(value)}`);
}
function useToggle(initialValue = false, options = {}) {
  const { truthyValue = true, falsyValue = false } = options;
  const valueIsRef = isRef(initialValue);
  const _value = shallowRef(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = toValue(truthyValue);
      _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef) return toggle;
  else return [_value, toggle];
}
function watchArray(source, cb, options) {
  let oldList = (options === null || options === void 0 ? void 0 : options.immediate) ? [] : [...typeof source === "function" ? source() : Array.isArray(source) ? source : toValue(source)];
  return watch(source, (newList, _, onCleanup) => {
    const oldListRemains = Array.from({ length: oldList.length });
    const added = [];
    for (const obj of newList) {
      let found = false;
      for (let i = 0; i < oldList.length; i++) if (!oldListRemains[i] && obj === oldList[i]) {
        oldListRemains[i] = true;
        found = true;
        break;
      }
      if (!found) added.push(obj);
    }
    const removed = oldList.filter((_$1, i) => !oldListRemains[i]);
    cb(newList, oldList, added, removed, onCleanup);
    oldList = [...newList];
  }, options);
}
function watchAtMost(source, cb, options) {
  const { count, ...watchOptions } = options;
  const current = shallowRef(0);
  const { stop, resume, pause } = watchWithFilter(source, (...args) => {
    current.value += 1;
    if (current.value >= toValue(count)) nextTick(() => stop());
    cb(...args);
  }, watchOptions);
  return {
    count: current,
    stop,
    resume,
    pause
  };
}
function watchDebounced(source, cb, options = {}) {
  const { debounce = 0, maxWait = void 0, ...watchOptions } = options;
  return watchWithFilter(source, cb, {
    ...watchOptions,
    eventFilter: debounceFilter(debounce, { maxWait })
  });
}
var debouncedWatch = watchDebounced;
function watchDeep(source, cb, options) {
  return watch(source, cb, {
    ...options,
    deep: true
  });
}
function watchIgnorable(source, cb, options = {}) {
  const { eventFilter = bypassFilter, ...watchOptions } = options;
  const filteredCb = createFilterWrapper(eventFilter, cb);
  let ignoreUpdates;
  let ignorePrevAsyncUpdates;
  let stop;
  if (watchOptions.flush === "sync") {
    let ignore = false;
    ignorePrevAsyncUpdates = () => {
    };
    ignoreUpdates = (updater) => {
      ignore = true;
      updater();
      ignore = false;
    };
    stop = watch(source, (...args) => {
      if (!ignore) filteredCb(...args);
    }, watchOptions);
  } else {
    const disposables = [];
    let ignoreCounter = 0;
    let syncCounter = 0;
    ignorePrevAsyncUpdates = () => {
      ignoreCounter = syncCounter;
    };
    disposables.push(watch(source, () => {
      syncCounter++;
    }, {
      ...watchOptions,
      flush: "sync"
    }));
    ignoreUpdates = (updater) => {
      const syncCounterPrev = syncCounter;
      updater();
      ignoreCounter += syncCounter - syncCounterPrev;
    };
    disposables.push(watch(source, (...args) => {
      const ignore = ignoreCounter > 0 && ignoreCounter === syncCounter;
      ignoreCounter = 0;
      syncCounter = 0;
      if (ignore) return;
      filteredCb(...args);
    }, watchOptions));
    stop = () => {
      disposables.forEach((fn) => fn());
    };
  }
  return {
    stop,
    ignoreUpdates,
    ignorePrevAsyncUpdates
  };
}
var ignorableWatch = watchIgnorable;
function watchImmediate(source, cb, options) {
  return watch(source, cb, {
    ...options,
    immediate: true
  });
}
function watchOnce(source, cb, options) {
  return watch(source, cb, {
    ...options,
    once: true
  });
}
function watchThrottled(source, cb, options = {}) {
  const { throttle = 0, trailing = true, leading = true, ...watchOptions } = options;
  return watchWithFilter(source, cb, {
    ...watchOptions,
    eventFilter: throttleFilter(throttle, trailing, leading)
  });
}
var throttledWatch = watchThrottled;
function watchTriggerable(source, cb, options = {}) {
  let cleanupFn;
  function onEffect() {
    if (!cleanupFn) return;
    const fn = cleanupFn;
    cleanupFn = void 0;
    fn();
  }
  function onCleanup(callback) {
    cleanupFn = callback;
  }
  const _cb = (value, oldValue) => {
    onEffect();
    return cb(value, oldValue, onCleanup);
  };
  const res = watchIgnorable(source, _cb, options);
  const { ignoreUpdates } = res;
  const trigger = () => {
    let res$1;
    ignoreUpdates(() => {
      res$1 = _cb(getWatchSources(source), getOldValue(source));
    });
    return res$1;
  };
  return {
    ...res,
    trigger
  };
}
function getWatchSources(sources) {
  if (isReactive(sources)) return sources;
  if (Array.isArray(sources)) return sources.map((item) => toValue(item));
  return toValue(sources);
}
function getOldValue(source) {
  return Array.isArray(source) ? source.map(() => void 0) : void 0;
}
function whenever(source, cb, options) {
  const stop = watch(source, (v, ov, onInvalidate) => {
    if (v) {
      if (options === null || options === void 0 ? void 0 : options.once) nextTick(() => stop());
      cb(v, ov, onInvalidate);
    }
  }, {
    ...options,
    once: false
  });
  return stop;
}

// node_modules/@vueuse/core/dist/index.js
function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  var _globalThis$reportErr;
  let options;
  if (isRef(optionsOrRef)) options = { evaluating: optionsOrRef };
  else options = optionsOrRef || {};
  const { lazy = false, flush = "sync", evaluating = void 0, shallow = true, onError = (_globalThis$reportErr = globalThis.reportError) !== null && _globalThis$reportErr !== void 0 ? _globalThis$reportErr : noop } = options;
  const started = shallowRef(!lazy);
  const current = shallow ? shallowRef(initialState) : ref(initialState);
  let counter = 0;
  watchEffect(async (onInvalidate) => {
    if (!started.value) return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) Promise.resolve().then(() => {
      evaluating.value = true;
    });
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating) evaluating.value = false;
          if (!hasFinished) cancelCallback();
        });
      });
      if (counterAtBeginning === counter) current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating && counterAtBeginning === counter) evaluating.value = false;
      hasFinished = true;
    }
  }, { flush });
  if (lazy) return computed(() => {
    started.value = true;
    return current.value;
  });
  else return current;
}
var asyncComputed = computedAsync;
function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
  let source = inject(key);
  if (defaultSource) source = inject(key, defaultSource);
  if (treatDefaultAsFactory) source = inject(key, defaultSource, treatDefaultAsFactory);
  if (typeof options === "function") return computed((oldValue) => options(source, oldValue));
  else return computed({
    get: (oldValue) => options.get(source, oldValue),
    set: options.set
  });
}
function createReusableTemplate(options = {}) {
  const { inheritAttrs = true } = options;
  const render = shallowRef();
  const define = defineComponent({ setup(_, { slots }) {
    return () => {
      render.value = slots.default;
    };
  } });
  const reuse = defineComponent({
    inheritAttrs,
    props: options.props,
    setup(props, { attrs, slots }) {
      return () => {
        var _render$value;
        if (!render.value && true) throw new Error("[VueUse] Failed to find the definition of reusable template");
        const vnode = (_render$value = render.value) === null || _render$value === void 0 ? void 0 : _render$value.call(render, {
          ...options.props == null ? keysToCamelKebabCase(attrs) : props,
          $slots: slots
        });
        return inheritAttrs && (vnode === null || vnode === void 0 ? void 0 : vnode.length) === 1 ? vnode[0] : vnode;
      };
    }
  });
  return makeDestructurable({
    define,
    reuse
  }, [define, reuse]);
}
function keysToCamelKebabCase(obj) {
  const newObj = {};
  for (const key in obj) newObj[camelize(key)] = obj[key];
  return newObj;
}
function createTemplatePromise(options = {}) {
  let index = 0;
  const instances = ref([]);
  function create(...args) {
    const props = shallowReactive({
      key: index++,
      args,
      promise: void 0,
      resolve: () => {
      },
      reject: () => {
      },
      isResolving: false,
      options
    });
    instances.value.push(props);
    props.promise = new Promise((_resolve, _reject) => {
      props.resolve = (v) => {
        props.isResolving = true;
        return _resolve(v);
      };
      props.reject = _reject;
    }).finally(() => {
      props.promise = void 0;
      const index$1 = instances.value.indexOf(props);
      if (index$1 !== -1) instances.value.splice(index$1, 1);
    });
    return props.promise;
  }
  function start(...args) {
    if (options.singleton && instances.value.length > 0) return instances.value[0].promise;
    return create(...args);
  }
  const component = defineComponent((_, { slots }) => {
    const renderList = () => instances.value.map((props) => {
      var _slots$default;
      return h(Fragment, { key: props.key }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, props));
    });
    if (options.transition) return () => h(TransitionGroup, options.transition, renderList);
    return renderList;
  });
  component.start = start;
  return component;
}
function createUnrefFn(fn) {
  return function(...args) {
    return fn.apply(this, args.map((i) => toValue(i)));
  };
}
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
var defaultLocation = isClient ? window.location : void 0;
function unrefElement(elRef) {
  var _$el;
  const plain = toValue(elRef);
  return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(() => {
    var _firstParamTargets$va, _firstParamTargets$va2;
    return [
      (_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e) => unrefElement(e))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow].filter((e) => e != null),
      toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
      toArray(unref(firstParamTargets.value ? args[2] : args[1])),
      toValue(firstParamTargets.value ? args[3] : args[2])
    ];
  }, ([raw_targets, raw_events, raw_listeners, raw_options]) => {
    cleanup();
    if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
    const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
    cleanups.push(...raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone)))));
  }, { flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
var _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window$1 = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
  if (!window$1) return controls ? {
    stop: noop,
    cancel: noop,
    trigger: noop
  } : noop;
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    const listenerOptions = { passive: true };
    Array.from(window$1.document.body.children).forEach((el) => el.addEventListener("click", noop, listenerOptions));
    window$1.document.documentElement.addEventListener("click", noop, listenerOptions);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return toValue(ignore).some((target$1) => {
      if (typeof target$1 === "string") return Array.from(window$1.document.querySelectorAll(target$1)).some((el) => el === event.target || event.composedPath().includes(el));
      else {
        const el = unrefElement(target$1);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target$1) {
    const vm = toValue(target$1);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target$1, event) {
    const vm = toValue(target$1);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children)) return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const el = unrefElement(target);
    if (event.target == null) return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event)) return;
    if (!el || el === event.target || event.composedPath().includes(el)) return;
    if ("detail" in event && event.detail === 0) shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(window$1, "click", (event) => {
      if (!isProcessingClick) {
        isProcessingClick = true;
        setTimeout(() => {
          isProcessingClick = false;
        }, 0);
        listener(event);
      }
    }, {
      passive: true,
      capture
    }),
    useEventListener(window$1, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window$1, "blur", (event) => {
      setTimeout(() => {
        var _window$document$acti;
        const el = unrefElement(target);
        if (((_window$document$acti = window$1.document.activeElement) === null || _window$document$acti === void 0 ? void 0 : _window$document$acti.tagName) === "IFRAME" && !(el === null || el === void 0 ? void 0 : el.contains(window$1.document.activeElement))) handler(event);
      }, 0);
    }, { passive: true })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  if (controls) return {
    stop,
    cancel: () => {
      shouldListen = false;
    },
    trigger: (event) => {
      shouldListen = true;
      listener(event);
      shouldListen = false;
    }
  };
  return stop;
}
function useMounted() {
  const isMounted = shallowRef(false);
  const instance = getCurrentInstance();
  if (instance) onMounted(() => {
    isMounted.value = true;
  }, instance);
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window$1 = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = useSupported(() => window$1 && "MutationObserver" in window$1);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(computed(() => {
    const items = toArray(toValue(target)).map(unrefElement).filter(notNullish);
    return new Set(items);
  }), (newTargets) => {
    cleanup();
    if (isSupported.value && newTargets.size) {
      observer = new MutationObserver(callback);
      newTargets.forEach((el) => observer.observe(el, mutationOptions));
    }
  }, {
    immediate: true,
    flush: "post"
  });
  const takeRecords = () => {
    return observer === null || observer === void 0 ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
function onElementRemoval(target, callback, options = {}) {
  const { window: window$1 = defaultWindow, document: document$1 = window$1 === null || window$1 === void 0 ? void 0 : window$1.document, flush = "sync" } = options;
  if (!window$1 || !document$1) return noop;
  let stopFn;
  const cleanupAndUpdate = (fn) => {
    stopFn === null || stopFn === void 0 || stopFn();
    stopFn = fn;
  };
  const stopWatch = watchEffect(() => {
    const el = unrefElement(target);
    if (el) {
      const { stop } = useMutationObserver(document$1, (mutationsList) => {
        if (mutationsList.map((mutation) => [...mutation.removedNodes]).flat().some((node) => node === el || node.contains(el))) callback(mutationsList);
      }, {
        window: window$1,
        childList: true,
        subtree: true
      });
      cleanupAndUpdate(stop);
    }
  }, { flush });
  const stopHandle = () => {
    stopWatch();
    cleanupAndUpdate();
  };
  tryOnScopeDispose(stopHandle);
  return stopHandle;
}
function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function") return keyFilter;
  else if (typeof keyFilter === "string") return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter)) return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) if (typeof args[1] === "object") {
    key = true;
    handler = args[0];
    options = args[1];
  } else {
    key = args[0];
    handler = args[1];
  }
  else {
    key = true;
    handler = args[0];
  }
  const { target = defaultWindow, eventName = "keydown", passive = false, dedupe = false } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && toValue(dedupe)) return;
    if (predicate(e)) handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
  return onKeyStroke(key, handler, {
    ...options,
    eventName: "keydown"
  });
}
function onKeyPressed(key, handler, options = {}) {
  return onKeyStroke(key, handler, {
    ...options,
    eventName: "keypress"
  });
}
function onKeyUp(key, handler, options = {}) {
  return onKeyStroke(key, handler, {
    ...options,
    eventName: "keyup"
  });
}
var DEFAULT_DELAY = 500;
var DEFAULT_THRESHOLD = 10;
function onLongPress(target, handler, options) {
  var _options$modifiers10, _options$modifiers11;
  const elementRef = computed(() => unrefElement(target));
  let timeout;
  let posStart;
  let startTimestamp;
  let hasLongPressed = false;
  function clear() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    }
    posStart = void 0;
    startTimestamp = void 0;
    hasLongPressed = false;
  }
  function getDelay(ev) {
    const delay = options === null || options === void 0 ? void 0 : options.delay;
    if (typeof delay === "function") return delay(ev);
    return delay !== null && delay !== void 0 ? delay : DEFAULT_DELAY;
  }
  function onRelease(ev) {
    var _options$modifiers, _options$modifiers2, _options$modifiers3;
    const [_startTimestamp, _posStart, _hasLongPressed] = [
      startTimestamp,
      posStart,
      hasLongPressed
    ];
    clear();
    if (!(options === null || options === void 0 ? void 0 : options.onMouseUp) || !_posStart || !_startTimestamp) return;
    if ((options === null || options === void 0 || (_options$modifiers = options.modifiers) === null || _options$modifiers === void 0 ? void 0 : _options$modifiers.self) && ev.target !== elementRef.value) return;
    if (options === null || options === void 0 || (_options$modifiers2 = options.modifiers) === null || _options$modifiers2 === void 0 ? void 0 : _options$modifiers2.prevent) ev.preventDefault();
    if (options === null || options === void 0 || (_options$modifiers3 = options.modifiers) === null || _options$modifiers3 === void 0 ? void 0 : _options$modifiers3.stop) ev.stopPropagation();
    const dx = ev.x - _posStart.x;
    const dy = ev.y - _posStart.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    options.onMouseUp(ev.timeStamp - _startTimestamp, distance, _hasLongPressed);
  }
  function onDown(ev) {
    var _options$modifiers4, _options$modifiers5, _options$modifiers6;
    if ((options === null || options === void 0 || (_options$modifiers4 = options.modifiers) === null || _options$modifiers4 === void 0 ? void 0 : _options$modifiers4.self) && ev.target !== elementRef.value) return;
    clear();
    if (options === null || options === void 0 || (_options$modifiers5 = options.modifiers) === null || _options$modifiers5 === void 0 ? void 0 : _options$modifiers5.prevent) ev.preventDefault();
    if (options === null || options === void 0 || (_options$modifiers6 = options.modifiers) === null || _options$modifiers6 === void 0 ? void 0 : _options$modifiers6.stop) ev.stopPropagation();
    posStart = {
      x: ev.x,
      y: ev.y
    };
    startTimestamp = ev.timeStamp;
    timeout = setTimeout(() => {
      hasLongPressed = true;
      handler(ev);
    }, getDelay(ev));
  }
  function onMove(ev) {
    var _options$modifiers7, _options$modifiers8, _options$modifiers9, _options$distanceThre;
    if ((options === null || options === void 0 || (_options$modifiers7 = options.modifiers) === null || _options$modifiers7 === void 0 ? void 0 : _options$modifiers7.self) && ev.target !== elementRef.value) return;
    if (!posStart || (options === null || options === void 0 ? void 0 : options.distanceThreshold) === false) return;
    if (options === null || options === void 0 || (_options$modifiers8 = options.modifiers) === null || _options$modifiers8 === void 0 ? void 0 : _options$modifiers8.prevent) ev.preventDefault();
    if (options === null || options === void 0 || (_options$modifiers9 = options.modifiers) === null || _options$modifiers9 === void 0 ? void 0 : _options$modifiers9.stop) ev.stopPropagation();
    const dx = ev.x - posStart.x;
    const dy = ev.y - posStart.y;
    if (Math.sqrt(dx * dx + dy * dy) >= ((_options$distanceThre = options === null || options === void 0 ? void 0 : options.distanceThreshold) !== null && _options$distanceThre !== void 0 ? _options$distanceThre : DEFAULT_THRESHOLD)) clear();
  }
  const listenerOptions = {
    capture: options === null || options === void 0 || (_options$modifiers10 = options.modifiers) === null || _options$modifiers10 === void 0 ? void 0 : _options$modifiers10.capture,
    once: options === null || options === void 0 || (_options$modifiers11 = options.modifiers) === null || _options$modifiers11 === void 0 ? void 0 : _options$modifiers11.once
  };
  const cleanup = [
    useEventListener(elementRef, "pointerdown", onDown, listenerOptions),
    useEventListener(elementRef, "pointermove", onMove, listenerOptions),
    useEventListener(elementRef, ["pointerup", "pointerleave"], onRelease, listenerOptions)
  ];
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function isFocusedElementEditable() {
  const { activeElement, body } = document;
  if (!activeElement) return false;
  if (activeElement === body) return false;
  switch (activeElement.tagName) {
    case "INPUT":
    case "TEXTAREA":
      return true;
  }
  return activeElement.hasAttribute("contenteditable");
}
function isTypedCharValid({ keyCode, metaKey, ctrlKey, altKey }) {
  if (metaKey || ctrlKey || altKey) return false;
  if (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105) return true;
  if (keyCode >= 65 && keyCode <= 90) return true;
  return false;
}
function onStartTyping(callback, options = {}) {
  const { document: document$1 = defaultDocument } = options;
  const keydown = (event) => {
    if (!isFocusedElementEditable() && isTypedCharValid(event)) callback(event);
  };
  if (document$1) useEventListener(document$1, "keydown", keydown, { passive: true });
}
function templateRef(key, initialValue = null) {
  const instance = getCurrentInstance();
  let _trigger = () => {
  };
  const element = customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _instance$proxy$$refs, _instance$proxy;
        track();
        return (_instance$proxy$$refs = instance === null || instance === void 0 || (_instance$proxy = instance.proxy) === null || _instance$proxy === void 0 ? void 0 : _instance$proxy.$refs[key]) !== null && _instance$proxy$$refs !== void 0 ? _instance$proxy$$refs : initialValue;
      },
      set() {
      }
    };
  });
  tryOnMounted(_trigger);
  onUpdated(_trigger);
  return element;
}
function useActiveElement(options = {}) {
  var _options$document;
  const { window: window$1 = defaultWindow, deep = true, triggerOnRemoval = false } = options;
  const document$1 = (_options$document = options.document) !== null && _options$document !== void 0 ? _options$document : window$1 === null || window$1 === void 0 ? void 0 : window$1.document;
  const getDeepActiveElement = () => {
    let element = document$1 === null || document$1 === void 0 ? void 0 : document$1.activeElement;
    if (deep) {
      var _element$shadowRoot;
      while (element === null || element === void 0 ? void 0 : element.shadowRoot) element = element === null || element === void 0 || (_element$shadowRoot = element.shadowRoot) === null || _element$shadowRoot === void 0 ? void 0 : _element$shadowRoot.activeElement;
    }
    return element;
  };
  const activeElement = shallowRef();
  const trigger = () => {
    activeElement.value = getDeepActiveElement();
  };
  if (window$1) {
    const listenerOptions = {
      capture: true,
      passive: true
    };
    useEventListener(window$1, "blur", (event) => {
      if (event.relatedTarget !== null) return;
      trigger();
    }, listenerOptions);
    useEventListener(window$1, "focus", trigger, listenerOptions);
  }
  if (triggerOnRemoval) onElementRemoval(activeElement, trigger, { document: document$1 });
  trigger();
  return activeElement;
}
function useRafFn(fn, options = {}) {
  const { immediate = true, fpsLimit = void 0, window: window$1 = defaultWindow, once = false } = options;
  const isActive = shallowRef(false);
  const intervalLimit = computed(() => {
    return fpsLimit ? 1e3 / toValue(fpsLimit) : null;
  });
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp$1) {
    if (!isActive.value || !window$1) return;
    if (!previousFrameTimestamp) previousFrameTimestamp = timestamp$1;
    const delta = timestamp$1 - previousFrameTimestamp;
    if (intervalLimit.value && delta < intervalLimit.value) {
      rafId = window$1.requestAnimationFrame(loop);
      return;
    }
    previousFrameTimestamp = timestamp$1;
    fn({
      delta,
      timestamp: timestamp$1
    });
    if (once) {
      isActive.value = false;
      rafId = null;
      return;
    }
    rafId = window$1.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window$1) {
      isActive.value = true;
      previousFrameTimestamp = 0;
      rafId = window$1.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window$1) {
      window$1.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate) resume();
  tryOnScopeDispose(pause);
  return {
    isActive: readonly(isActive),
    pause,
    resume
  };
}
function useAnimate(target, keyframes, options) {
  let config;
  let animateOptions;
  if (isObject(options)) {
    config = options;
    animateOptions = objectOmit(options, [
      "window",
      "immediate",
      "commitStyles",
      "persist",
      "onReady",
      "onError"
    ]);
  } else {
    config = { duration: options };
    animateOptions = options;
  }
  const { window: window$1 = defaultWindow, immediate = true, commitStyles, persist, playbackRate: _playbackRate = 1, onReady, onError = (e) => {
    console.error(e);
  } } = config;
  const isSupported = useSupported(() => window$1 && HTMLElement && "animate" in HTMLElement.prototype);
  const animate = shallowRef(void 0);
  const store = shallowReactive({
    startTime: null,
    currentTime: null,
    timeline: null,
    playbackRate: _playbackRate,
    pending: false,
    playState: immediate ? "idle" : "paused",
    replaceState: "active"
  });
  const pending = computed(() => store.pending);
  const playState = computed(() => store.playState);
  const replaceState = computed(() => store.replaceState);
  const startTime = computed({
    get() {
      return store.startTime;
    },
    set(value) {
      store.startTime = value;
      if (animate.value) animate.value.startTime = value;
    }
  });
  const currentTime = computed({
    get() {
      return store.currentTime;
    },
    set(value) {
      store.currentTime = value;
      if (animate.value) {
        animate.value.currentTime = value;
        syncResume();
      }
    }
  });
  const timeline = computed({
    get() {
      return store.timeline;
    },
    set(value) {
      store.timeline = value;
      if (animate.value) animate.value.timeline = value;
    }
  });
  const playbackRate = computed({
    get() {
      return store.playbackRate;
    },
    set(value) {
      store.playbackRate = value;
      if (animate.value) animate.value.playbackRate = value;
    }
  });
  const play = () => {
    if (animate.value) try {
      animate.value.play();
      syncResume();
    } catch (e) {
      syncPause();
      onError(e);
    }
    else update();
  };
  const pause = () => {
    try {
      var _animate$value;
      (_animate$value = animate.value) === null || _animate$value === void 0 || _animate$value.pause();
      syncPause();
    } catch (e) {
      onError(e);
    }
  };
  const reverse = () => {
    if (!animate.value) update();
    try {
      var _animate$value2;
      (_animate$value2 = animate.value) === null || _animate$value2 === void 0 || _animate$value2.reverse();
      syncResume();
    } catch (e) {
      syncPause();
      onError(e);
    }
  };
  const finish = () => {
    try {
      var _animate$value3;
      (_animate$value3 = animate.value) === null || _animate$value3 === void 0 || _animate$value3.finish();
      syncPause();
    } catch (e) {
      onError(e);
    }
  };
  const cancel = () => {
    try {
      var _animate$value4;
      (_animate$value4 = animate.value) === null || _animate$value4 === void 0 || _animate$value4.cancel();
      syncPause();
    } catch (e) {
      onError(e);
    }
  };
  watch(() => unrefElement(target), (el) => {
    if (el) update(true);
    else animate.value = void 0;
  });
  watch(() => keyframes, (value) => {
    if (animate.value) {
      update();
      const targetEl = unrefElement(target);
      if (targetEl) animate.value.effect = new KeyframeEffect(targetEl, toValue(value), animateOptions);
    }
  }, { deep: true });
  tryOnMounted(() => update(true), false);
  tryOnScopeDispose(cancel);
  function update(init) {
    const el = unrefElement(target);
    if (!isSupported.value || !el) return;
    if (!animate.value) animate.value = el.animate(toValue(keyframes), animateOptions);
    if (persist) animate.value.persist();
    if (_playbackRate !== 1) animate.value.playbackRate = _playbackRate;
    if (init && !immediate) animate.value.pause();
    else syncResume();
    onReady === null || onReady === void 0 || onReady(animate.value);
  }
  const listenerOptions = { passive: true };
  useEventListener(animate, [
    "cancel",
    "finish",
    "remove"
  ], syncPause, listenerOptions);
  useEventListener(animate, "finish", () => {
    var _animate$value5;
    if (commitStyles) (_animate$value5 = animate.value) === null || _animate$value5 === void 0 || _animate$value5.commitStyles();
  }, listenerOptions);
  const { resume: resumeRef, pause: pauseRef } = useRafFn(() => {
    if (!animate.value) return;
    store.pending = animate.value.pending;
    store.playState = animate.value.playState;
    store.replaceState = animate.value.replaceState;
    store.startTime = animate.value.startTime;
    store.currentTime = animate.value.currentTime;
    store.timeline = animate.value.timeline;
    store.playbackRate = animate.value.playbackRate;
  }, { immediate: false });
  function syncResume() {
    if (isSupported.value) resumeRef();
  }
  function syncPause() {
    if (isSupported.value && window$1) window$1.requestAnimationFrame(pauseRef);
  }
  return {
    isSupported,
    animate,
    play,
    pause,
    reverse,
    finish,
    cancel,
    pending,
    playState,
    replaceState,
    startTime,
    currentTime,
    timeline,
    playbackRate
  };
}
function useAsyncQueue(tasks, options) {
  const { interrupt = true, onError = noop, onFinished = noop, signal } = options || {};
  const promiseState = {
    aborted: "aborted",
    fulfilled: "fulfilled",
    pending: "pending",
    rejected: "rejected"
  };
  const result = reactive(Array.from(Array.from({ length: tasks.length }), () => ({
    state: promiseState.pending,
    data: null
  })));
  const activeIndex = shallowRef(-1);
  if (!tasks || tasks.length === 0) {
    onFinished();
    return {
      activeIndex,
      result
    };
  }
  function updateResult(state, res) {
    activeIndex.value++;
    result[activeIndex.value].data = res;
    result[activeIndex.value].state = state;
  }
  tasks.reduce((prev, curr) => {
    return prev.then((prevRes) => {
      var _result$activeIndex$v;
      if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
        updateResult(promiseState.aborted, new Error("aborted"));
        return;
      }
      if (((_result$activeIndex$v = result[activeIndex.value]) === null || _result$activeIndex$v === void 0 ? void 0 : _result$activeIndex$v.state) === promiseState.rejected && interrupt) {
        onFinished();
        return;
      }
      const done = curr(prevRes).then((currentRes) => {
        updateResult(promiseState.fulfilled, currentRes);
        if (activeIndex.value === tasks.length - 1) onFinished();
        return currentRes;
      });
      if (!signal) return done;
      return Promise.race([done, whenAborted(signal)]);
    }).catch((e) => {
      if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
        updateResult(promiseState.aborted, e);
        return e;
      }
      updateResult(promiseState.rejected, e);
      onError();
      return e;
    });
  }, Promise.resolve());
  return {
    activeIndex,
    result
  };
}
function whenAborted(signal) {
  return new Promise((resolve, reject) => {
    const error = new Error("aborted");
    if (signal.aborted) reject(error);
    else signal.addEventListener("abort", () => reject(error), { once: true });
  });
}
function useAsyncState(promise, initialState, options) {
  var _globalThis$reportErr;
  const { immediate = true, delay = 0, onError = (_globalThis$reportErr = globalThis.reportError) !== null && _globalThis$reportErr !== void 0 ? _globalThis$reportErr : noop, onSuccess = noop, resetOnExecute = true, shallow = true, throwError } = options !== null && options !== void 0 ? options : {};
  const state = shallow ? shallowRef(initialState) : ref(initialState);
  const isReady = shallowRef(false);
  const isLoading = shallowRef(false);
  const error = shallowRef(void 0);
  let executionsCount = 0;
  async function execute(delay$1 = 0, ...args) {
    const executionId = executionsCount += 1;
    if (resetOnExecute) state.value = toValue(initialState);
    error.value = void 0;
    isReady.value = false;
    isLoading.value = true;
    if (delay$1 > 0) await promiseTimeout(delay$1);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      if (executionId === executionsCount) {
        state.value = data;
        isReady.value = true;
      }
      onSuccess(data);
    } catch (e) {
      if (executionId === executionsCount) error.value = e;
      onError(e);
      if (throwError) throw e;
    } finally {
      if (executionId === executionsCount) isLoading.value = false;
    }
    return state.value;
  }
  if (immediate) execute(delay);
  const shell = {
    state,
    isReady,
    isLoading,
    error,
    execute,
    executeImmediate: (...args) => execute(0, ...args)
  };
  function waitUntilIsLoaded() {
    return new Promise((resolve, reject) => {
      until(isLoading).toBe(false).then(() => resolve(shell)).catch(reject);
    });
  }
  return {
    ...shell,
    then(onFulfilled, onRejected) {
      return waitUntilIsLoaded().then(onFulfilled, onRejected);
    }
  };
}
var defaults = {
  array: (v) => JSON.stringify(v),
  object: (v) => JSON.stringify(v),
  set: (v) => JSON.stringify(Array.from(v)),
  map: (v) => JSON.stringify(Object.fromEntries(v)),
  null: () => ""
};
function getDefaultSerialization(target) {
  if (!target) return defaults.null;
  if (target instanceof Map) return defaults.map;
  else if (target instanceof Set) return defaults.set;
  else if (Array.isArray(target)) return defaults.array;
  else return defaults.object;
}
function useBase64(target, options) {
  const base64 = shallowRef("");
  const promise = shallowRef();
  function execute() {
    if (!isClient) return;
    promise.value = new Promise((resolve, reject) => {
      try {
        const _target = toValue(target);
        if (_target == null) resolve("");
        else if (typeof _target === "string") resolve(blobToBase64(new Blob([_target], { type: "text/plain" })));
        else if (_target instanceof Blob) resolve(blobToBase64(_target));
        else if (_target instanceof ArrayBuffer) resolve(window.btoa(String.fromCharCode(...new Uint8Array(_target))));
        else if (_target instanceof HTMLCanvasElement) resolve(_target.toDataURL(options === null || options === void 0 ? void 0 : options.type, options === null || options === void 0 ? void 0 : options.quality));
        else if (_target instanceof HTMLImageElement) {
          const img = _target.cloneNode(false);
          img.crossOrigin = "Anonymous";
          imgLoaded(img).then(() => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL(options === null || options === void 0 ? void 0 : options.type, options === null || options === void 0 ? void 0 : options.quality));
          }).catch(reject);
        } else if (typeof _target === "object") {
          const serialized = ((options === null || options === void 0 ? void 0 : options.serializer) || getDefaultSerialization(_target))(_target);
          return resolve(blobToBase64(new Blob([serialized], { type: "application/json" })));
        } else reject(new Error("target is unsupported types"));
      } catch (error) {
        reject(error);
      }
    });
    promise.value.then((res) => {
      base64.value = (options === null || options === void 0 ? void 0 : options.dataUrl) === false ? res.replace(/^data:.*?;base64,/, "") : res;
    });
    return promise.value;
  }
  if (isRef(target) || typeof target === "function") watch(target, execute, { immediate: true });
  else execute();
  return {
    base64,
    promise,
    execute
  };
}
function imgLoaded(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => {
        resolve();
      };
      img.onerror = reject;
    } else resolve();
  });
}
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = (e) => {
      resolve(e.target.result);
    };
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}
function useBattery(options = {}) {
  const { navigator: navigator$1 = defaultNavigator } = options;
  const events$1 = [
    "chargingchange",
    "chargingtimechange",
    "dischargingtimechange",
    "levelchange"
  ];
  const isSupported = useSupported(() => navigator$1 && "getBattery" in navigator$1 && typeof navigator$1.getBattery === "function");
  const charging = shallowRef(false);
  const chargingTime = shallowRef(0);
  const dischargingTime = shallowRef(0);
  const level = shallowRef(1);
  let battery;
  function updateBatteryInfo() {
    charging.value = this.charging;
    chargingTime.value = this.chargingTime || 0;
    dischargingTime.value = this.dischargingTime || 0;
    level.value = this.level;
  }
  if (isSupported.value) navigator$1.getBattery().then((_battery) => {
    battery = _battery;
    updateBatteryInfo.call(battery);
    useEventListener(battery, events$1, updateBatteryInfo, { passive: true });
  });
  return {
    isSupported,
    charging,
    chargingTime,
    dischargingTime,
    level
  };
}
function useBluetooth(options) {
  let { acceptAllDevices = false } = options || {};
  const { filters = void 0, optionalServices = void 0, navigator: navigator$1 = defaultNavigator } = options || {};
  const isSupported = useSupported(() => navigator$1 && "bluetooth" in navigator$1);
  const device = shallowRef();
  const error = shallowRef(null);
  watch(device, () => {
    connectToBluetoothGATTServer();
  });
  async function requestDevice() {
    if (!isSupported.value) return;
    error.value = null;
    if (filters && filters.length > 0) acceptAllDevices = false;
    try {
      device.value = await (navigator$1 === null || navigator$1 === void 0 ? void 0 : navigator$1.bluetooth.requestDevice({
        acceptAllDevices,
        filters,
        optionalServices
      }));
    } catch (err) {
      error.value = err;
    }
  }
  const server = shallowRef();
  const isConnected = shallowRef(false);
  function reset() {
    isConnected.value = false;
    device.value = void 0;
    server.value = void 0;
  }
  async function connectToBluetoothGATTServer() {
    error.value = null;
    if (device.value && device.value.gatt) {
      useEventListener(device, "gattserverdisconnected", reset, { passive: true });
      try {
        server.value = await device.value.gatt.connect();
        isConnected.value = server.value.connected;
      } catch (err) {
        error.value = err;
      }
    }
  }
  tryOnMounted(() => {
    var _device$value$gatt;
    if (device.value) (_device$value$gatt = device.value.gatt) === null || _device$value$gatt === void 0 || _device$value$gatt.connect();
  });
  tryOnScopeDispose(() => {
    var _device$value$gatt2;
    if (device.value) (_device$value$gatt2 = device.value.gatt) === null || _device$value$gatt2 === void 0 || _device$value$gatt2.disconnect();
  });
  return {
    isSupported,
    isConnected: readonly(isConnected),
    device,
    requestDevice,
    server,
    error
  };
}
var ssrWidthSymbol = Symbol("vueuse-ssr-width");
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function provideSSRWidth(width, app) {
  if (app !== void 0) app.provide(ssrWidthSymbol, width);
  else provideLocal(ssrWidthSymbol, width);
}
function useMediaQuery(query, options = {}) {
  const { window: window$1 = defaultWindow, ssrWidth = useSSRWidth() } = options;
  const isSupported = useSupported(() => window$1 && "matchMedia" in window$1 && typeof window$1.matchMedia === "function");
  const ssrSupport = shallowRef(typeof ssrWidth === "number");
  const mediaQuery = shallowRef();
  const matches = shallowRef(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      matches.value = toValue(query).split(",").some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) res = ssrWidth >= pxValue(minWidth[1]);
        if (maxWidth && res) res = ssrWidth <= pxValue(maxWidth[1]);
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value) return;
    mediaQuery.value = window$1.matchMedia(toValue(query));
    matches.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => matches.value);
}
var breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
var breakpointsBootstrapV5 = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
var breakpointsVuetifyV2 = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1264,
  xl: 1904
};
var breakpointsVuetifyV3 = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
};
var breakpointsVuetify = breakpointsVuetifyV2;
var breakpointsAntDesign = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
var breakpointsQuasar = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1440,
  xl: 1920
};
var breakpointsSematic = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop4K: 2560
};
var breakpointsMasterCss = {
  "3xs": 360,
  "2xs": 480,
  "xs": 600,
  "sm": 768,
  "md": 1024,
  "lg": 1280,
  "xl": 1440,
  "2xl": 1600,
  "3xl": 1920,
  "4xl": 2560
};
var breakpointsPrimeFlex = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
var breakpointsElement = {
  xs: 0,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1920
};
function useBreakpoints(breakpoints, options = {}) {
  function getValue$1(k, delta) {
    let v = toValue(breakpoints[toValue(k)]);
    if (delta != null) v = increaseWithUnit(v, delta);
    if (typeof v === "number") v = `${v}px`;
    return v;
  }
  const { window: window$1 = defaultWindow, strategy = "min-width", ssrWidth = useSSRWidth() } = options;
  const ssrSupport = typeof ssrWidth === "number";
  const mounted = ssrSupport ? shallowRef(false) : { value: true };
  if (ssrSupport) tryOnMounted(() => mounted.value = !!window$1);
  function match(query, size) {
    if (!mounted.value && ssrSupport) return query === "min" ? ssrWidth >= pxValue(size) : ssrWidth <= pxValue(size);
    if (!window$1) return false;
    return window$1.matchMedia(`(${query}-width: ${size})`).matches;
  }
  const greaterOrEqual = (k) => {
    return useMediaQuery(() => `(min-width: ${getValue$1(k)})`, options);
  };
  const smallerOrEqual = (k) => {
    return useMediaQuery(() => `(max-width: ${getValue$1(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => strategy === "min-width" ? greaterOrEqual(k) : smallerOrEqual(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  function current() {
    const points = Object.keys(breakpoints).map((k) => [
      k,
      shortcutMethods[k],
      pxValue(getValue$1(k))
    ]).sort((a, b) => a[2] - b[2]);
    return computed(() => points.filter(([, v]) => v.value).map(([k]) => k));
  }
  return Object.assign(shortcutMethods, {
    greaterOrEqual,
    smallerOrEqual,
    greater(k) {
      return useMediaQuery(() => `(min-width: ${getValue$1(k, 0.1)})`, options);
    },
    smaller(k) {
      return useMediaQuery(() => `(max-width: ${getValue$1(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(() => `(min-width: ${getValue$1(a)}) and (max-width: ${getValue$1(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match("min", getValue$1(k, 0.1));
    },
    isGreaterOrEqual(k) {
      return match("min", getValue$1(k));
    },
    isSmaller(k) {
      return match("max", getValue$1(k, -0.1));
    },
    isSmallerOrEqual(k) {
      return match("max", getValue$1(k));
    },
    isInBetween(a, b) {
      return match("min", getValue$1(a)) && match("max", getValue$1(b, -0.1));
    },
    current,
    active() {
      const bps = current();
      return computed(() => bps.value.length === 0 ? "" : bps.value.at(strategy === "min-width" ? -1 : 0));
    }
  });
}
function useBroadcastChannel(options) {
  const { name, window: window$1 = defaultWindow } = options;
  const isSupported = useSupported(() => window$1 && "BroadcastChannel" in window$1);
  const isClosed = shallowRef(false);
  const channel = ref();
  const data = ref();
  const error = shallowRef(null);
  const post = (data$1) => {
    if (channel.value) channel.value.postMessage(data$1);
  };
  const close = () => {
    if (channel.value) channel.value.close();
    isClosed.value = true;
  };
  if (isSupported.value) tryOnMounted(() => {
    error.value = null;
    channel.value = new BroadcastChannel(name);
    const listenerOptions = { passive: true };
    useEventListener(channel, "message", (e) => {
      data.value = e.data;
    }, listenerOptions);
    useEventListener(channel, "messageerror", (e) => {
      error.value = e;
    }, listenerOptions);
    useEventListener(channel, "close", () => {
      isClosed.value = true;
    }, listenerOptions);
  });
  tryOnScopeDispose(() => {
    close();
  });
  return {
    isSupported,
    channel,
    data,
    post,
    close,
    error,
    isClosed
  };
}
var WRITABLE_PROPERTIES = [
  "hash",
  "host",
  "hostname",
  "href",
  "pathname",
  "port",
  "protocol",
  "search"
];
function useBrowserLocation(options = {}) {
  const { window: window$1 = defaultWindow } = options;
  const refs = Object.fromEntries(WRITABLE_PROPERTIES.map((key) => [key, ref()]));
  for (const [key, ref$1] of objectEntries(refs)) watch(ref$1, (value) => {
    if (!(window$1 === null || window$1 === void 0 ? void 0 : window$1.location) || window$1.location[key] === value) return;
    window$1.location[key] = value;
  });
  const buildState = (trigger) => {
    var _window$location;
    const { state: state$1, length } = (window$1 === null || window$1 === void 0 ? void 0 : window$1.history) || {};
    const { origin } = (window$1 === null || window$1 === void 0 ? void 0 : window$1.location) || {};
    for (const key of WRITABLE_PROPERTIES) refs[key].value = window$1 === null || window$1 === void 0 || (_window$location = window$1.location) === null || _window$location === void 0 ? void 0 : _window$location[key];
    return reactive({
      trigger,
      state: state$1,
      length,
      origin,
      ...refs
    });
  };
  const state = ref(buildState("load"));
  if (window$1) {
    const listenerOptions = { passive: true };
    useEventListener(window$1, "popstate", () => state.value = buildState("popstate"), listenerOptions);
    useEventListener(window$1, "hashchange", () => state.value = buildState("hashchange"), listenerOptions);
  }
  return state;
}
function useCached(refValue, comparator = (a, b) => a === b, options) {
  const { deepRefs = true, ...watchOptions } = options || {};
  const cachedValue = createRef(refValue.value, deepRefs);
  watch(() => refValue.value, (value) => {
    if (!comparator(value, cachedValue.value)) cachedValue.value = value;
  }, watchOptions);
  return cachedValue;
}
function usePermission(permissionDesc, options = {}) {
  const { controls = false, navigator: navigator$1 = defaultNavigator } = options;
  const isSupported = useSupported(() => navigator$1 && "permissions" in navigator$1);
  const permissionStatus = shallowRef();
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = shallowRef();
  const update = () => {
    var _permissionStatus$val, _permissionStatus$val2;
    state.value = (_permissionStatus$val = (_permissionStatus$val2 = permissionStatus.value) === null || _permissionStatus$val2 === void 0 ? void 0 : _permissionStatus$val2.state) !== null && _permissionStatus$val !== void 0 ? _permissionStatus$val : "prompt";
  };
  useEventListener(permissionStatus, "change", update, { passive: true });
  const query = createSingletonPromise(async () => {
    if (!isSupported.value) return;
    if (!permissionStatus.value) try {
      permissionStatus.value = await navigator$1.permissions.query(desc);
    } catch (_unused) {
      permissionStatus.value = void 0;
    } finally {
      update();
    }
    if (controls) return toRaw(permissionStatus.value);
  });
  query();
  if (controls) return {
    state,
    isSupported,
    query
  };
  else return state;
}
function useClipboard(options = {}) {
  const { navigator: navigator$1 = defaultNavigator, read = false, source, copiedDuring = 1500, legacy = false } = options;
  const isClipboardApiSupported = useSupported(() => navigator$1 && "clipboard" in navigator$1);
  const permissionRead = usePermission("clipboard-read");
  const permissionWrite = usePermission("clipboard-write");
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text = shallowRef("");
  const copied = shallowRef(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring, { immediate: false });
  async function updateText() {
    let useLegacy = !(isClipboardApiSupported.value && isAllowed(permissionRead.value));
    if (!useLegacy) try {
      text.value = await navigator$1.clipboard.readText();
    } catch (_unused) {
      useLegacy = true;
    }
    if (useLegacy) text.value = legacyRead();
  }
  if (isSupported.value && read) useEventListener(["copy", "cut"], updateText, { passive: true });
  async function copy(value = toValue(source)) {
    if (isSupported.value && value != null) {
      let useLegacy = !(isClipboardApiSupported.value && isAllowed(permissionWrite.value));
      if (!useLegacy) try {
        await navigator$1.clipboard.writeText(value);
      } catch (_unused2) {
        useLegacy = true;
      }
      if (useLegacy) legacyCopy(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = document.createElement("textarea");
    ta.value = value;
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _document$getSelectio, _document, _document$getSelectio2;
    return (_document$getSelectio = (_document = document) === null || _document === void 0 || (_document$getSelectio2 = _document.getSelection) === null || _document$getSelectio2 === void 0 || (_document$getSelectio2 = _document$getSelectio2.call(_document)) === null || _document$getSelectio2 === void 0 ? void 0 : _document$getSelectio2.toString()) !== null && _document$getSelectio !== void 0 ? _document$getSelectio : "";
  }
  function isAllowed(status) {
    return status === "granted" || status === "prompt";
  }
  return {
    isSupported,
    text: readonly(text),
    copied: readonly(copied),
    copy
  };
}
function useClipboardItems(options = {}) {
  const { navigator: navigator$1 = defaultNavigator, read = false, source, copiedDuring = 1500 } = options;
  const isSupported = useSupported(() => navigator$1 && "clipboard" in navigator$1);
  const content = ref([]);
  const copied = shallowRef(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring, { immediate: false });
  function updateContent() {
    if (isSupported.value) navigator$1.clipboard.read().then((items) => {
      content.value = items;
    });
  }
  if (isSupported.value && read) useEventListener(["copy", "cut"], updateContent, { passive: true });
  async function copy(value = toValue(source)) {
    if (isSupported.value && value != null) {
      await navigator$1.clipboard.write(value);
      content.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  return {
    isSupported,
    content: shallowReadonly(content),
    copied: readonly(copied),
    copy,
    read: updateContent
  };
}
function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
function useCloned(source, options = {}) {
  const cloned = ref({});
  const isModified = shallowRef(false);
  let _lastSync = false;
  const { manual, clone = cloneFnJSON, deep = true, immediate = true } = options;
  watch(cloned, () => {
    if (_lastSync) {
      _lastSync = false;
      return;
    }
    isModified.value = true;
  }, {
    deep: true,
    flush: "sync"
  });
  function sync() {
    _lastSync = true;
    isModified.value = false;
    cloned.value = clone(toValue(source));
  }
  if (!manual && (isRef(source) || typeof source === "function")) watch(source, sync, {
    ...options,
    deep,
    immediate
  });
  else sync();
  return {
    cloned,
    isModified,
    sync
  };
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers = getHandlers();
function getHandlers() {
  if (!(globalKey in _global)) _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function setSSRHandler(key, fn) {
  handlers[key] = fn;
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
var customStorageEventName = "vueuse-storage";
function useStorage(key, defaults$1, storage, options = {}) {
  var _options$serializer;
  const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window: window$1 = defaultWindow, eventFilter, onError = (e) => {
    console.error(e);
  }, initOnMounted } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults$1 === "function" ? defaults$1() : defaults$1);
  const keyComputed = computed(() => toValue(key));
  if (!storage) try {
    storage = getSSRHandler("getDefaultStorage", () => defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.localStorage)();
  } catch (e) {
    onError(e);
  }
  if (!storage) return data;
  const rawInit = toValue(defaults$1);
  const type = guessSerializerType(rawInit);
  const serializer = (_options$serializer = options.serializer) !== null && _options$serializer !== void 0 ? _options$serializer : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = pausableWatch(data, (newValue) => write(newValue), {
    flush,
    deep,
    eventFilter
  });
  watch(keyComputed, () => update(), { flush });
  let firstMounted = false;
  const onStorageEvent = (ev) => {
    if (initOnMounted && !firstMounted) return;
    update(ev);
  };
  const onStorageCustomEvent = (ev) => {
    if (initOnMounted && !firstMounted) return;
    updateFromCustomEvent(ev);
  };
  if (window$1 && listenToStorageChanges) if (storage instanceof Storage) useEventListener(window$1, "storage", onStorageEvent, { passive: true });
  else useEventListener(window$1, customStorageEventName, onStorageCustomEvent);
  if (initOnMounted) tryOnMounted(() => {
    firstMounted = true;
    update();
  });
  else update();
  function dispatchWriteEvent(oldValue, newValue) {
    if (window$1) {
      const payload = {
        key: keyComputed.value,
        oldValue,
        newValue,
        storageArea: storage
      };
      window$1.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, { detail: payload }));
    }
  }
  function write(v) {
    try {
      const oldValue = storage.getItem(keyComputed.value);
      if (v == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(keyComputed.value);
      } else {
        const serialized = serializer.write(v);
        if (oldValue !== serialized) {
          storage.setItem(keyComputed.value, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null) storage.setItem(keyComputed.value, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function") return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value)) return {
        ...rawInit,
        ...value
      };
      return value;
    } else if (typeof rawValue !== "string") return rawValue;
    else return serializer.read(rawValue);
  }
  function update(event) {
    if (event && event.storageArea !== storage) return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== keyComputed.value) return;
    pauseWatch();
    try {
      const serializedData = serializer.write(data.value);
      if (event === void 0 || (event === null || event === void 0 ? void 0 : event.newValue) !== serializedData) data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event) nextTick(resumeWatch);
      else resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data;
}
var CSS_DISABLE_TRANS = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function useColorMode(options = {}) {
  const { selector = "html", attribute = "class", initialValue = "auto", window: window$1 = defaultWindow, storage, storageKey = "vueuse-color-scheme", listenToStorageChanges = true, storageRef, emitAuto, disableTransition = true } = options;
  const modes = {
    auto: "",
    light: "light",
    dark: "dark",
    ...options.modes || {}
  };
  const preferredDark = usePreferredDark({ window: window$1 });
  const system = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? toRef2(initialValue) : useStorage(storageKey, initialValue, storage, {
    window: window$1,
    listenToStorageChanges
  }));
  const state = computed(() => store.value === "auto" ? system.value : store.value);
  const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector$1, attribute$1, value) => {
    const el = typeof selector$1 === "string" ? window$1 === null || window$1 === void 0 ? void 0 : window$1.document.querySelector(selector$1) : unrefElement(selector$1);
    if (!el) return;
    const classesToAdd = /* @__PURE__ */ new Set();
    const classesToRemove = /* @__PURE__ */ new Set();
    let attributeToChange = null;
    if (attribute$1 === "class") {
      const current = value.split(/\s/g);
      Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
        if (current.includes(v)) classesToAdd.add(v);
        else classesToRemove.add(v);
      });
    } else attributeToChange = {
      key: attribute$1,
      value
    };
    if (classesToAdd.size === 0 && classesToRemove.size === 0 && attributeToChange === null) return;
    let style;
    if (disableTransition) {
      style = window$1.document.createElement("style");
      style.appendChild(document.createTextNode(CSS_DISABLE_TRANS));
      window$1.document.head.appendChild(style);
    }
    for (const c of classesToAdd) el.classList.add(c);
    for (const c of classesToRemove) el.classList.remove(c);
    if (attributeToChange) el.setAttribute(attributeToChange.key, attributeToChange.value);
    if (disableTransition) {
      window$1.getComputedStyle(style).opacity;
      document.head.removeChild(style);
    }
  });
  function defaultOnChanged(mode) {
    var _modes$mode;
    updateHTMLAttrs(selector, attribute, (_modes$mode = modes[mode]) !== null && _modes$mode !== void 0 ? _modes$mode : mode);
  }
  function onChanged(mode) {
    if (options.onChanged) options.onChanged(mode, defaultOnChanged);
    else defaultOnChanged(mode);
  }
  watch(state, onChanged, {
    flush: "post",
    immediate: true
  });
  tryOnMounted(() => onChanged(state.value));
  const auto = computed({
    get() {
      return emitAuto ? store.value : state.value;
    },
    set(v) {
      store.value = v;
    }
  });
  return Object.assign(auto, {
    store,
    system,
    state
  });
}
function useConfirmDialog(revealed = shallowRef(false)) {
  const confirmHook = createEventHook();
  const cancelHook = createEventHook();
  const revealHook = createEventHook();
  let _resolve = noop;
  const reveal = (data) => {
    revealHook.trigger(data);
    revealed.value = true;
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  };
  const confirm = (data) => {
    revealed.value = false;
    confirmHook.trigger(data);
    _resolve({
      data,
      isCanceled: false
    });
  };
  const cancel = (data) => {
    revealed.value = false;
    cancelHook.trigger(data);
    _resolve({
      data,
      isCanceled: true
    });
  };
  return {
    isRevealed: computed(() => revealed.value),
    reveal,
    confirm,
    cancel,
    onReveal: revealHook.on,
    onConfirm: confirmHook.on,
    onCancel: cancelHook.on
  };
}
function useCountdown(initialCountdown, options) {
  var _options$interval, _options$immediate;
  const remaining = shallowRef(toValue(initialCountdown));
  const intervalController = useIntervalFn(() => {
    var _options$onTick;
    const value = remaining.value - 1;
    remaining.value = value < 0 ? 0 : value;
    options === null || options === void 0 || (_options$onTick = options.onTick) === null || _options$onTick === void 0 || _options$onTick.call(options);
    if (remaining.value <= 0) {
      var _options$onComplete;
      intervalController.pause();
      options === null || options === void 0 || (_options$onComplete = options.onComplete) === null || _options$onComplete === void 0 || _options$onComplete.call(options);
    }
  }, (_options$interval = options === null || options === void 0 ? void 0 : options.interval) !== null && _options$interval !== void 0 ? _options$interval : 1e3, { immediate: (_options$immediate = options === null || options === void 0 ? void 0 : options.immediate) !== null && _options$immediate !== void 0 ? _options$immediate : false });
  const reset = (countdown) => {
    var _toValue;
    remaining.value = (_toValue = toValue(countdown)) !== null && _toValue !== void 0 ? _toValue : toValue(initialCountdown);
  };
  const stop = () => {
    intervalController.pause();
    reset();
  };
  const resume = () => {
    if (!intervalController.isActive.value) {
      if (remaining.value > 0) intervalController.resume();
    }
  };
  const start = (countdown) => {
    reset(countdown);
    intervalController.resume();
  };
  return {
    remaining,
    reset,
    stop,
    start,
    pause: intervalController.pause,
    resume,
    isActive: intervalController.isActive
  };
}
function useCssVar(prop, target, options = {}) {
  const { window: window$1 = defaultWindow, initialValue, observe = false } = options;
  const variable = shallowRef(initialValue);
  const elRef = computed(() => {
    var _window$document;
    return unrefElement(target) || (window$1 === null || window$1 === void 0 || (_window$document = window$1.document) === null || _window$document === void 0 ? void 0 : _window$document.documentElement);
  });
  function updateCssVar() {
    const key = toValue(prop);
    const el = toValue(elRef);
    if (el && window$1 && key) {
      var _window$getComputedSt;
      variable.value = ((_window$getComputedSt = window$1.getComputedStyle(el).getPropertyValue(key)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.trim()) || variable.value || initialValue;
    }
  }
  if (observe) useMutationObserver(elRef, updateCssVar, {
    attributeFilter: ["style", "class"],
    window: window$1
  });
  watch([elRef, () => toValue(prop)], (_, old) => {
    if (old[0] && old[1]) old[0].style.removeProperty(old[1]);
    updateCssVar();
  }, { immediate: true });
  watch([variable, elRef], ([val, el]) => {
    const raw_prop = toValue(prop);
    if ((el === null || el === void 0 ? void 0 : el.style) && raw_prop) if (val == null) el.style.removeProperty(raw_prop);
    else el.style.setProperty(raw_prop, val);
  }, { immediate: true });
  return variable;
}
function useCurrentElement(rootComponent) {
  const vm = getCurrentInstance();
  const currentElement = computedWithControl(() => null, () => rootComponent ? unrefElement(rootComponent) : vm.proxy.$el);
  onUpdated(currentElement.trigger);
  onMounted(currentElement.trigger);
  return currentElement;
}
function useCycleList(list, options) {
  const state = shallowRef(getInitialValue());
  const listRef = toRef2(list);
  const index = computed({
    get() {
      var _options$fallbackInde;
      const targetList = listRef.value;
      let index$1 = (options === null || options === void 0 ? void 0 : options.getIndexOf) ? options.getIndexOf(state.value, targetList) : targetList.indexOf(state.value);
      if (index$1 < 0) index$1 = (_options$fallbackInde = options === null || options === void 0 ? void 0 : options.fallbackIndex) !== null && _options$fallbackInde !== void 0 ? _options$fallbackInde : 0;
      return index$1;
    },
    set(v) {
      set2(v);
    }
  });
  function set2(i) {
    const targetList = listRef.value;
    const length = targetList.length;
    const value = targetList[(i % length + length) % length];
    state.value = value;
    return value;
  }
  function shift(delta = 1) {
    return set2(index.value + delta);
  }
  function next(n = 1) {
    return shift(n);
  }
  function prev(n = 1) {
    return shift(-n);
  }
  function getInitialValue() {
    var _toValue, _options$initialValue;
    return (_toValue = toValue((_options$initialValue = options === null || options === void 0 ? void 0 : options.initialValue) !== null && _options$initialValue !== void 0 ? _options$initialValue : toValue(list)[0])) !== null && _toValue !== void 0 ? _toValue : void 0;
  }
  watch(listRef, () => set2(index.value));
  return {
    state,
    index,
    next,
    prev,
    go: set2
  };
}
function useDark(options = {}) {
  const { valueDark = "dark", valueLight = "" } = options;
  const mode = useColorMode({
    ...options,
    onChanged: (mode$1, defaultHandler) => {
      var _options$onChanged;
      if (options.onChanged) (_options$onChanged = options.onChanged) === null || _options$onChanged === void 0 || _options$onChanged.call(options, mode$1 === "dark", defaultHandler, mode$1);
      else defaultHandler(mode$1);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  });
  const system = computed(() => mode.system.value);
  return computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      const modeVal = v ? "dark" : "light";
      if (system.value === modeVal) mode.value = "auto";
      else mode.value = modeVal;
    }
  });
}
function fnBypass(v) {
  return v;
}
function fnSetSource(source, value) {
  return source.value = value;
}
function defaultDump(clone) {
  return clone ? typeof clone === "function" ? clone : cloneFnJSON : fnBypass;
}
function defaultParse(clone) {
  return clone ? typeof clone === "function" ? clone : cloneFnJSON : fnBypass;
}
function useManualRefHistory(source, options = {}) {
  const { clone = false, dump = defaultDump(clone), parse = defaultParse(clone), setSource = fnSetSource } = options;
  function _createHistoryRecord() {
    return markRaw({
      snapshot: dump(source.value),
      timestamp: timestamp()
    });
  }
  const last = ref(_createHistoryRecord());
  const undoStack = ref([]);
  const redoStack = ref([]);
  const _setSource = (record) => {
    setSource(source, parse(record.snapshot));
    last.value = record;
  };
  const commit = () => {
    undoStack.value.unshift(last.value);
    last.value = _createHistoryRecord();
    if (options.capacity && undoStack.value.length > options.capacity) undoStack.value.splice(options.capacity, Number.POSITIVE_INFINITY);
    if (redoStack.value.length) redoStack.value.splice(0, redoStack.value.length);
  };
  const clear = () => {
    undoStack.value.splice(0, undoStack.value.length);
    redoStack.value.splice(0, redoStack.value.length);
  };
  const undo = () => {
    const state = undoStack.value.shift();
    if (state) {
      redoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const redo = () => {
    const state = redoStack.value.shift();
    if (state) {
      undoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const reset = () => {
    _setSource(last.value);
  };
  return {
    source,
    undoStack,
    redoStack,
    last,
    history: computed(() => [last.value, ...undoStack.value]),
    canUndo: computed(() => undoStack.value.length > 0),
    canRedo: computed(() => redoStack.value.length > 0),
    clear,
    commit,
    reset,
    undo,
    redo
  };
}
function useRefHistory(source, options = {}) {
  const { deep = false, flush = "pre", eventFilter, shouldCommit = () => true } = options;
  const { eventFilter: composedFilter, pause, resume: resumeTracking, isActive: isTracking } = pausableFilter(eventFilter);
  let lastRawValue = source.value;
  const { ignoreUpdates, ignorePrevAsyncUpdates, stop } = watchIgnorable(source, commit, {
    deep,
    flush,
    eventFilter: composedFilter
  });
  function setSource(source$1, value) {
    ignorePrevAsyncUpdates();
    ignoreUpdates(() => {
      source$1.value = value;
      lastRawValue = value;
    });
  }
  const manualHistory = useManualRefHistory(source, {
    ...options,
    clone: options.clone || deep,
    setSource
  });
  const { clear, commit: manualCommit } = manualHistory;
  function commit() {
    ignorePrevAsyncUpdates();
    if (!shouldCommit(lastRawValue, source.value)) return;
    lastRawValue = source.value;
    manualCommit();
  }
  function resume(commitNow) {
    resumeTracking();
    if (commitNow) commit();
  }
  function batch(fn) {
    let canceled = false;
    const cancel = () => canceled = true;
    ignoreUpdates(() => {
      fn(cancel);
    });
    if (!canceled) commit();
  }
  function dispose() {
    stop();
    clear();
  }
  return {
    ...manualHistory,
    isTracking,
    pause,
    resume,
    commit,
    batch,
    dispose
  };
}
function useDebouncedRefHistory(source, options = {}) {
  const filter = options.debounce ? debounceFilter(options.debounce) : void 0;
  return { ...useRefHistory(source, {
    ...options,
    eventFilter: filter
  }) };
}
function useDeviceMotion(options = {}) {
  const { window: window$1 = defaultWindow, requestPermissions = false, eventFilter = bypassFilter } = options;
  const isSupported = useSupported(() => typeof DeviceMotionEvent !== "undefined");
  const requirePermissions = useSupported(() => isSupported.value && "requestPermission" in DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === "function");
  const permissionGranted = shallowRef(false);
  const acceleration = ref({
    x: null,
    y: null,
    z: null
  });
  const rotationRate = ref({
    alpha: null,
    beta: null,
    gamma: null
  });
  const interval = shallowRef(0);
  const accelerationIncludingGravity = ref({
    x: null,
    y: null,
    z: null
  });
  function init() {
    if (window$1) useEventListener(window$1, "devicemotion", createFilterWrapper(eventFilter, (event) => {
      var _event$acceleration, _event$acceleration2, _event$acceleration3, _event$accelerationIn, _event$accelerationIn2, _event$accelerationIn3, _event$rotationRate, _event$rotationRate2, _event$rotationRate3;
      acceleration.value = {
        x: ((_event$acceleration = event.acceleration) === null || _event$acceleration === void 0 ? void 0 : _event$acceleration.x) || null,
        y: ((_event$acceleration2 = event.acceleration) === null || _event$acceleration2 === void 0 ? void 0 : _event$acceleration2.y) || null,
        z: ((_event$acceleration3 = event.acceleration) === null || _event$acceleration3 === void 0 ? void 0 : _event$acceleration3.z) || null
      };
      accelerationIncludingGravity.value = {
        x: ((_event$accelerationIn = event.accelerationIncludingGravity) === null || _event$accelerationIn === void 0 ? void 0 : _event$accelerationIn.x) || null,
        y: ((_event$accelerationIn2 = event.accelerationIncludingGravity) === null || _event$accelerationIn2 === void 0 ? void 0 : _event$accelerationIn2.y) || null,
        z: ((_event$accelerationIn3 = event.accelerationIncludingGravity) === null || _event$accelerationIn3 === void 0 ? void 0 : _event$accelerationIn3.z) || null
      };
      rotationRate.value = {
        alpha: ((_event$rotationRate = event.rotationRate) === null || _event$rotationRate === void 0 ? void 0 : _event$rotationRate.alpha) || null,
        beta: ((_event$rotationRate2 = event.rotationRate) === null || _event$rotationRate2 === void 0 ? void 0 : _event$rotationRate2.beta) || null,
        gamma: ((_event$rotationRate3 = event.rotationRate) === null || _event$rotationRate3 === void 0 ? void 0 : _event$rotationRate3.gamma) || null
      };
      interval.value = event.interval;
    }), { passive: true });
  }
  const ensurePermissions = async () => {
    if (!requirePermissions.value) permissionGranted.value = true;
    if (permissionGranted.value) return;
    if (requirePermissions.value) {
      const requestPermission = DeviceMotionEvent.requestPermission;
      try {
        if (await requestPermission() === "granted") {
          permissionGranted.value = true;
          init();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  if (isSupported.value) if (requestPermissions && requirePermissions.value) ensurePermissions().then(() => init());
  else init();
  return {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval,
    isSupported,
    requirePermissions,
    ensurePermissions,
    permissionGranted
  };
}
function useDeviceOrientation(options = {}) {
  const { window: window$1 = defaultWindow } = options;
  const isSupported = useSupported(() => window$1 && "DeviceOrientationEvent" in window$1);
  const isAbsolute = shallowRef(false);
  const alpha = shallowRef(null);
  const beta = shallowRef(null);
  const gamma = shallowRef(null);
  if (window$1 && isSupported.value) useEventListener(window$1, "deviceorientation", (event) => {
    isAbsolute.value = event.absolute;
    alpha.value = event.alpha;
    beta.value = event.beta;
    gamma.value = event.gamma;
  }, { passive: true });
  return {
    isSupported,
    isAbsolute,
    alpha,
    beta,
    gamma
  };
}
function useDevicePixelRatio(options = {}) {
  const { window: window$1 = defaultWindow } = options;
  const pixelRatio = shallowRef(1);
  const query = useMediaQuery(() => `(resolution: ${pixelRatio.value}dppx)`, options);
  let stop = noop;
  if (window$1) stop = watchImmediate(query, () => pixelRatio.value = window$1.devicePixelRatio);
  return {
    pixelRatio: readonly(pixelRatio),
    stop
  };
}
function useDevicesList(options = {}) {
  const { navigator: navigator$1 = defaultNavigator, requestPermissions = false, constraints = {
    audio: true,
    video: true
  }, onUpdated: onUpdated$1 } = options;
  const devices = ref([]);
  const videoInputs = computed(() => devices.value.filter((i) => i.kind === "videoinput"));
  const audioInputs = computed(() => devices.value.filter((i) => i.kind === "audioinput"));
  const audioOutputs = computed(() => devices.value.filter((i) => i.kind === "audiooutput"));
  const isSupported = useSupported(() => navigator$1 && navigator$1.mediaDevices && navigator$1.mediaDevices.enumerateDevices);
  const permissionGranted = shallowRef(false);
  let stream;
  async function update() {
    if (!isSupported.value) return;
    devices.value = await navigator$1.mediaDevices.enumerateDevices();
    onUpdated$1 === null || onUpdated$1 === void 0 || onUpdated$1(devices.value);
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
      stream = null;
    }
  }
  async function ensurePermissions() {
    const deviceName = constraints.video ? "camera" : "microphone";
    if (!isSupported.value) return false;
    if (permissionGranted.value) return true;
    const { state, query } = usePermission(deviceName, { controls: true });
    await query();
    if (state.value !== "granted") {
      let granted = true;
      try {
        const allDevices = await navigator$1.mediaDevices.enumerateDevices();
        const hasCamera = allDevices.some((device) => device.kind === "videoinput");
        const hasMicrophone = allDevices.some((device) => device.kind === "audioinput" || device.kind === "audiooutput");
        constraints.video = hasCamera ? constraints.video : false;
        constraints.audio = hasMicrophone ? constraints.audio : false;
        stream = await navigator$1.mediaDevices.getUserMedia(constraints);
      } catch (_unused) {
        stream = null;
        granted = false;
      }
      update();
      permissionGranted.value = granted;
    } else permissionGranted.value = true;
    return permissionGranted.value;
  }
  if (isSupported.value) {
    if (requestPermissions) ensurePermissions();
    useEventListener(navigator$1.mediaDevices, "devicechange", update, { passive: true });
    update();
  }
  return {
    devices,
    ensurePermissions,
    permissionGranted,
    videoInputs,
    audioInputs,
    audioOutputs,
    isSupported
  };
}
function useDisplayMedia(options = {}) {
  var _options$enabled;
  const enabled = shallowRef((_options$enabled = options.enabled) !== null && _options$enabled !== void 0 ? _options$enabled : false);
  const video = options.video;
  const audio = options.audio;
  const { navigator: navigator$1 = defaultNavigator } = options;
  const isSupported = useSupported(() => {
    var _navigator$mediaDevic;
    return navigator$1 === null || navigator$1 === void 0 || (_navigator$mediaDevic = navigator$1.mediaDevices) === null || _navigator$mediaDevic === void 0 ? void 0 : _navigator$mediaDevic.getDisplayMedia;
  });
  const constraint = {
    audio,
    video
  };
  const stream = shallowRef();
  async function _start() {
    var _stream$value;
    if (!isSupported.value || stream.value) return;
    stream.value = await navigator$1.mediaDevices.getDisplayMedia(constraint);
    (_stream$value = stream.value) === null || _stream$value === void 0 || _stream$value.getTracks().forEach((t) => useEventListener(t, "ended", stop, { passive: true }));
    return stream.value;
  }
  async function _stop() {
    var _stream$value2;
    (_stream$value2 = stream.value) === null || _stream$value2 === void 0 || _stream$value2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value) enabled.value = true;
    return stream.value;
  }
  watch(enabled, (v) => {
    if (v) _start();
    else _stop();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    enabled
  };
}
function useDocumentVisibility(options = {}) {
  const { document: document$1 = defaultDocument } = options;
  if (!document$1) return shallowRef("visible");
  const visibility = shallowRef(document$1.visibilityState);
  useEventListener(document$1, "visibilitychange", () => {
    visibility.value = document$1.visibilityState;
  }, { passive: true });
  return visibility;
}
function useDraggable(target, options = {}) {
  var _toValue;
  const { pointerTypes, preventDefault: preventDefault$1, stopPropagation, exact, onMove, onEnd, onStart, initialValue, axis = "both", draggingElement = defaultWindow, containerElement, handle: draggingHandle = target, buttons = [0] } = options;
  const position = ref((_toValue = toValue(initialValue)) !== null && _toValue !== void 0 ? _toValue : {
    x: 0,
    y: 0
  });
  const pressedDelta = ref();
  const filterEvent = (e) => {
    if (pointerTypes) return pointerTypes.includes(e.pointerType);
    return true;
  };
  const handleEvent = (e) => {
    if (toValue(preventDefault$1)) e.preventDefault();
    if (toValue(stopPropagation)) e.stopPropagation();
  };
  const start = (e) => {
    var _container$getBoundin;
    if (!toValue(buttons).includes(e.button)) return;
    if (toValue(options.disabled) || !filterEvent(e)) return;
    if (toValue(exact) && e.target !== toValue(target)) return;
    const container = toValue(containerElement);
    const containerRect = container === null || container === void 0 || (_container$getBoundin = container.getBoundingClientRect) === null || _container$getBoundin === void 0 ? void 0 : _container$getBoundin.call(container);
    const targetRect = toValue(target).getBoundingClientRect();
    const pos = {
      x: e.clientX - (container ? targetRect.left - containerRect.left + container.scrollLeft : targetRect.left),
      y: e.clientY - (container ? targetRect.top - containerRect.top + container.scrollTop : targetRect.top)
    };
    if ((onStart === null || onStart === void 0 ? void 0 : onStart(pos, e)) === false) return;
    pressedDelta.value = pos;
    handleEvent(e);
  };
  const move = (e) => {
    if (toValue(options.disabled) || !filterEvent(e)) return;
    if (!pressedDelta.value) return;
    const container = toValue(containerElement);
    const targetRect = toValue(target).getBoundingClientRect();
    let { x, y } = position.value;
    if (axis === "x" || axis === "both") {
      x = e.clientX - pressedDelta.value.x;
      if (container) x = Math.min(Math.max(0, x), container.scrollWidth - targetRect.width);
    }
    if (axis === "y" || axis === "both") {
      y = e.clientY - pressedDelta.value.y;
      if (container) y = Math.min(Math.max(0, y), container.scrollHeight - targetRect.height);
    }
    position.value = {
      x,
      y
    };
    onMove === null || onMove === void 0 || onMove(position.value, e);
    handleEvent(e);
  };
  const end = (e) => {
    if (toValue(options.disabled) || !filterEvent(e)) return;
    if (!pressedDelta.value) return;
    pressedDelta.value = void 0;
    onEnd === null || onEnd === void 0 || onEnd(position.value, e);
    handleEvent(e);
  };
  if (isClient) {
    const config = () => {
      var _options$capture;
      return {
        capture: (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : true,
        passive: !toValue(preventDefault$1)
      };
    };
    useEventListener(draggingHandle, "pointerdown", start, config);
    useEventListener(draggingElement, "pointermove", move, config);
    useEventListener(draggingElement, "pointerup", end, config);
  }
  return {
    ...toRefs2(position),
    position,
    isDragging: computed(() => !!pressedDelta.value),
    style: computed(() => `left:${position.value.x}px;top:${position.value.y}px;`)
  };
}
function useDropZone(target, options = {}) {
  const isOverDropZone = shallowRef(false);
  const files = shallowRef(null);
  let counter = 0;
  let isValid = true;
  if (isClient) {
    var _options$multiple, _options$preventDefau;
    const _options = typeof options === "function" ? { onDrop: options } : options;
    const multiple = (_options$multiple = _options.multiple) !== null && _options$multiple !== void 0 ? _options$multiple : true;
    const preventDefaultForUnhandled = (_options$preventDefau = _options.preventDefaultForUnhandled) !== null && _options$preventDefau !== void 0 ? _options$preventDefau : false;
    const getFiles = (event) => {
      var _event$dataTransfer$f, _event$dataTransfer;
      const list = Array.from((_event$dataTransfer$f = (_event$dataTransfer = event.dataTransfer) === null || _event$dataTransfer === void 0 ? void 0 : _event$dataTransfer.files) !== null && _event$dataTransfer$f !== void 0 ? _event$dataTransfer$f : []);
      return list.length === 0 ? null : multiple ? list : [list[0]];
    };
    const checkDataTypes = (types) => {
      const dataTypes = unref(_options.dataTypes);
      if (typeof dataTypes === "function") return dataTypes(types);
      if (!(dataTypes === null || dataTypes === void 0 ? void 0 : dataTypes.length)) return true;
      if (types.length === 0) return false;
      return types.every((type) => dataTypes.some((allowedType) => type.includes(allowedType)));
    };
    const checkValidity = (items) => {
      const dataTypesValid = checkDataTypes(Array.from(items !== null && items !== void 0 ? items : []).map((item) => item.type));
      const multipleFilesValid = multiple || items.length <= 1;
      return dataTypesValid && multipleFilesValid;
    };
    const isSafari = () => /^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent) && !("chrome" in window);
    const handleDragEvent = (event, eventType) => {
      var _event$dataTransfer2, _ref;
      const dataTransferItemList = (_event$dataTransfer2 = event.dataTransfer) === null || _event$dataTransfer2 === void 0 ? void 0 : _event$dataTransfer2.items;
      isValid = (_ref = dataTransferItemList && checkValidity(dataTransferItemList)) !== null && _ref !== void 0 ? _ref : false;
      if (preventDefaultForUnhandled) event.preventDefault();
      if (!isSafari() && !isValid) {
        if (event.dataTransfer) event.dataTransfer.dropEffect = "none";
        return;
      }
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
      const currentFiles = getFiles(event);
      switch (eventType) {
        case "enter":
          var _options$onEnter;
          counter += 1;
          isOverDropZone.value = true;
          (_options$onEnter = _options.onEnter) === null || _options$onEnter === void 0 || _options$onEnter.call(_options, null, event);
          break;
        case "over":
          var _options$onOver;
          (_options$onOver = _options.onOver) === null || _options$onOver === void 0 || _options$onOver.call(_options, null, event);
          break;
        case "leave":
          var _options$onLeave;
          counter -= 1;
          if (counter === 0) isOverDropZone.value = false;
          (_options$onLeave = _options.onLeave) === null || _options$onLeave === void 0 || _options$onLeave.call(_options, null, event);
          break;
        case "drop":
          counter = 0;
          isOverDropZone.value = false;
          if (isValid) {
            var _options$onDrop;
            files.value = currentFiles;
            (_options$onDrop = _options.onDrop) === null || _options$onDrop === void 0 || _options$onDrop.call(_options, currentFiles, event);
          }
          break;
      }
    };
    useEventListener(target, "dragenter", (event) => handleDragEvent(event, "enter"));
    useEventListener(target, "dragover", (event) => handleDragEvent(event, "over"));
    useEventListener(target, "dragleave", (event) => handleDragEvent(event, "leave"));
    useEventListener(target, "drop", (event) => handleDragEvent(event, "drop"));
  }
  return {
    files,
    isOverDropZone
  };
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window$1 = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = useSupported(() => window$1 && "ResizeObserver" in window$1);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(computed(() => {
    const _targets = toValue(target);
    return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
  }), (els) => {
    cleanup();
    if (isSupported.value && window$1) {
      observer = new ResizeObserver(callback);
      for (const _el of els) if (_el) observer.observe(_el, observerOptions);
    }
  }, {
    immediate: true,
    flush: "post"
  });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useElementBounding(target, options = {}) {
  const { reset = true, windowResize = true, windowScroll = true, immediate = true, updateTiming = "sync" } = options;
  const height = shallowRef(0);
  const bottom = shallowRef(0);
  const left = shallowRef(0);
  const right = shallowRef(0);
  const top = shallowRef(0);
  const width = shallowRef(0);
  const x = shallowRef(0);
  const y = shallowRef(0);
  function recalculate() {
    const el = unrefElement(target);
    if (!el) {
      if (reset) {
        height.value = 0;
        bottom.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        width.value = 0;
        x.value = 0;
        y.value = 0;
      }
      return;
    }
    const rect = el.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }
  function update() {
    if (updateTiming === "sync") recalculate();
    else if (updateTiming === "next-frame") requestAnimationFrame(() => recalculate());
  }
  useResizeObserver(target, update);
  watch(() => unrefElement(target), (ele) => !ele && update());
  useMutationObserver(target, update, { attributeFilter: ["style", "class"] });
  if (windowScroll) useEventListener("scroll", update, {
    capture: true,
    passive: true
  });
  if (windowResize) useEventListener("resize", update, { passive: true });
  tryOnMounted(() => {
    if (immediate) update();
  });
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}
function useElementByPoint(options) {
  const { x, y, document: document$1 = defaultDocument, multiple, interval = "requestAnimationFrame", immediate = true } = options;
  const isSupported = useSupported(() => {
    if (toValue(multiple)) return document$1 && "elementsFromPoint" in document$1;
    return document$1 && "elementFromPoint" in document$1;
  });
  const element = shallowRef(null);
  const cb = () => {
    var _document$elementsFro, _document$elementFrom;
    element.value = toValue(multiple) ? (_document$elementsFro = document$1 === null || document$1 === void 0 ? void 0 : document$1.elementsFromPoint(toValue(x), toValue(y))) !== null && _document$elementsFro !== void 0 ? _document$elementsFro : [] : (_document$elementFrom = document$1 === null || document$1 === void 0 ? void 0 : document$1.elementFromPoint(toValue(x), toValue(y))) !== null && _document$elementFrom !== void 0 ? _document$elementFrom : null;
  };
  return {
    isSupported,
    element,
    ...interval === "requestAnimationFrame" ? useRafFn(cb, { immediate }) : useIntervalFn(cb, interval, { immediate })
  };
}
function useElementHover(el, options = {}) {
  const { delayEnter = 0, delayLeave = 0, triggerOnRemoval = false, window: window$1 = defaultWindow } = options;
  const isHovered = shallowRef(false);
  let timer;
  const toggle = (entering) => {
    const delay = entering ? delayEnter : delayLeave;
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
    if (delay) timer = setTimeout(() => isHovered.value = entering, delay);
    else isHovered.value = entering;
  };
  if (!window$1) return isHovered;
  useEventListener(el, "mouseenter", () => toggle(true), { passive: true });
  useEventListener(el, "mouseleave", () => toggle(false), { passive: true });
  if (triggerOnRemoval) onElementRemoval(computed(() => unrefElement(el)), () => toggle(false));
  return isHovered;
}
function useElementSize(target, initialSize = {
  width: 0,
  height: 0
}, options = {}) {
  const { window: window$1 = defaultWindow, box = "content-box" } = options;
  const isSVG = computed(() => {
    var _unrefElement;
    return (_unrefElement = unrefElement(target)) === null || _unrefElement === void 0 || (_unrefElement = _unrefElement.namespaceURI) === null || _unrefElement === void 0 ? void 0 : _unrefElement.includes("svg");
  });
  const width = shallowRef(initialSize.width);
  const height = shallowRef(initialSize.height);
  const { stop: stop1 } = useResizeObserver(target, ([entry]) => {
    const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
    if (window$1 && isSVG.value) {
      const $elem = unrefElement(target);
      if ($elem) {
        const rect = $elem.getBoundingClientRect();
        width.value = rect.width;
        height.value = rect.height;
      }
    } else if (boxSize) {
      const formatBoxSize = toArray(boxSize);
      width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
      height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
    } else {
      width.value = entry.contentRect.width;
      height.value = entry.contentRect.height;
    }
  }, options);
  tryOnMounted(() => {
    const ele = unrefElement(target);
    if (ele) {
      width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
      height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
    }
  });
  const stop2 = watch(() => unrefElement(target), (ele) => {
    width.value = ele ? initialSize.width : 0;
    height.value = ele ? initialSize.height : 0;
  });
  function stop() {
    stop1();
    stop2();
  }
  return {
    width,
    height,
    stop
  };
}
function useIntersectionObserver(target, callback, options = {}) {
  const { root, rootMargin = "0px", threshold = 0, window: window$1 = defaultWindow, immediate = true } = options;
  const isSupported = useSupported(() => window$1 && "IntersectionObserver" in window$1);
  const targets = computed(() => {
    return toArray(toValue(target)).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop;
  const isActive = shallowRef(immediate);
  const stopWatch = isSupported.value ? watch(() => [
    targets.value,
    unrefElement(root),
    isActive.value
  ], ([targets$1, root$1]) => {
    cleanup();
    if (!isActive.value) return;
    if (!targets$1.length) return;
    const observer = new IntersectionObserver(callback, {
      root: unrefElement(root$1),
      rootMargin,
      threshold
    });
    targets$1.forEach((el) => el && observer.observe(el));
    cleanup = () => {
      observer.disconnect();
      cleanup = noop;
    };
  }, {
    immediate,
    flush: "post"
  }) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}
function useElementVisibility(element, options = {}) {
  const { window: window$1 = defaultWindow, scrollTarget, threshold = 0, rootMargin, once = false } = options;
  const elementIsVisible = shallowRef(false);
  const { stop } = useIntersectionObserver(element, (intersectionObserverEntries) => {
    let isIntersecting = elementIsVisible.value;
    let latestTime = 0;
    for (const entry of intersectionObserverEntries) if (entry.time >= latestTime) {
      latestTime = entry.time;
      isIntersecting = entry.isIntersecting;
    }
    elementIsVisible.value = isIntersecting;
    if (once) watchOnce(elementIsVisible, () => {
      stop();
    });
  }, {
    root: scrollTarget,
    window: window$1,
    threshold,
    rootMargin: toValue(rootMargin)
  });
  return elementIsVisible;
}
var events = /* @__PURE__ */ new Map();
function useEventBus(key) {
  const scope = getCurrentScope();
  function on(listener) {
    var _scope$cleanups;
    const listeners = events.get(key) || /* @__PURE__ */ new Set();
    listeners.add(listener);
    events.set(key, listeners);
    const _off = () => off(listener);
    scope === null || scope === void 0 || (_scope$cleanups = scope.cleanups) === null || _scope$cleanups === void 0 || _scope$cleanups.push(_off);
    return _off;
  }
  function once(listener) {
    function _listener(...args) {
      off(_listener);
      listener(...args);
    }
    return on(_listener);
  }
  function off(listener) {
    const listeners = events.get(key);
    if (!listeners) return;
    listeners.delete(listener);
    if (!listeners.size) reset();
  }
  function reset() {
    events.delete(key);
  }
  function emit(event, payload) {
    var _events$get;
    (_events$get = events.get(key)) === null || _events$get === void 0 || _events$get.forEach((v) => v(event, payload));
  }
  return {
    on,
    once,
    off,
    emit,
    reset
  };
}
function resolveNestedOptions$1(options) {
  if (options === true) return {};
  return options;
}
function useEventSource(url, events$1 = [], options = {}) {
  const event = shallowRef(null);
  const data = shallowRef(null);
  const status = shallowRef("CONNECTING");
  const eventSource = ref(null);
  const error = shallowRef(null);
  const urlRef = toRef2(url);
  const lastEventId = shallowRef(null);
  let explicitlyClosed = false;
  let retried = 0;
  const { withCredentials = false, immediate = true, autoConnect = true, autoReconnect, serializer = { read: (v) => v } } = options;
  const close = () => {
    if (isClient && eventSource.value) {
      eventSource.value.close();
      eventSource.value = null;
      status.value = "CLOSED";
      explicitlyClosed = true;
    }
  };
  const _init = () => {
    if (explicitlyClosed || typeof urlRef.value === "undefined") return;
    const es = new EventSource(urlRef.value, { withCredentials });
    status.value = "CONNECTING";
    eventSource.value = es;
    es.onopen = () => {
      status.value = "OPEN";
      error.value = null;
    };
    es.onerror = (e) => {
      status.value = "CLOSED";
      error.value = e;
      if (es.readyState === 2 && !explicitlyClosed && autoReconnect) {
        es.close();
        const { retries = -1, delay = 1e3, onFailed } = resolveNestedOptions$1(autoReconnect);
        retried += 1;
        if (typeof retries === "number" && (retries < 0 || retried < retries)) setTimeout(_init, delay);
        else if (typeof retries === "function" && retries()) setTimeout(_init, delay);
        else onFailed === null || onFailed === void 0 || onFailed();
      }
    };
    es.onmessage = (e) => {
      var _serializer$read;
      event.value = null;
      data.value = (_serializer$read = serializer.read(e.data)) !== null && _serializer$read !== void 0 ? _serializer$read : null;
      lastEventId.value = e.lastEventId;
    };
    for (const event_name of events$1) useEventListener(es, event_name, (e) => {
      var _serializer$read2, _e$lastEventId;
      event.value = event_name;
      data.value = (_serializer$read2 = serializer.read(e.data)) !== null && _serializer$read2 !== void 0 ? _serializer$read2 : null;
      lastEventId.value = (_e$lastEventId = e.lastEventId) !== null && _e$lastEventId !== void 0 ? _e$lastEventId : null;
    }, { passive: true });
  };
  const open = () => {
    if (!isClient) return;
    close();
    explicitlyClosed = false;
    retried = 0;
    _init();
  };
  if (immediate) open();
  if (autoConnect) watch(urlRef, open);
  tryOnScopeDispose(close);
  return {
    eventSource,
    event,
    data,
    status,
    error,
    open,
    close,
    lastEventId
  };
}
function useEyeDropper(options = {}) {
  const { initialValue = "" } = options;
  const isSupported = useSupported(() => typeof window !== "undefined" && "EyeDropper" in window);
  const sRGBHex = shallowRef(initialValue);
  async function open(openOptions) {
    if (!isSupported.value) return;
    const result = await new window.EyeDropper().open(openOptions);
    sRGBHex.value = result.sRGBHex;
    return result;
  }
  return {
    isSupported,
    sRGBHex,
    open
  };
}
function useFavicon(newIcon = null, options = {}) {
  const { baseUrl = "", rel = "icon", document: document$1 = defaultDocument } = options;
  const favicon = toRef2(newIcon);
  const applyIcon = (icon) => {
    const elements = document$1 === null || document$1 === void 0 ? void 0 : document$1.head.querySelectorAll(`link[rel*="${rel}"]`);
    if (!elements || elements.length === 0) {
      const link = document$1 === null || document$1 === void 0 ? void 0 : document$1.createElement("link");
      if (link) {
        link.rel = rel;
        link.href = `${baseUrl}${icon}`;
        link.type = `image/${icon.split(".").pop()}`;
        document$1 === null || document$1 === void 0 || document$1.head.append(link);
      }
      return;
    }
    elements === null || elements === void 0 || elements.forEach((el) => el.href = `${baseUrl}${icon}`);
  };
  watch(favicon, (i, o) => {
    if (typeof i === "string" && i !== o) applyIcon(i);
  }, { immediate: true });
  return favicon;
}
var payloadMapping = {
  json: "application/json",
  text: "text/plain"
};
function isFetchOptions(obj) {
  return obj && containsProp(obj, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch", "updateDataOnError");
}
var reAbsolute = /^(?:[a-z][a-z\d+\-.]*:)?\/\//i;
function isAbsoluteURL(url) {
  return reAbsolute.test(url);
}
function headersToObject(headers) {
  if (typeof Headers !== "undefined" && headers instanceof Headers) return Object.fromEntries(headers.entries());
  return headers;
}
function combineCallbacks(combination, ...callbacks) {
  if (combination === "overwrite") return async (ctx) => {
    let callback;
    for (let i = callbacks.length - 1; i >= 0; i--) if (callbacks[i] != null) {
      callback = callbacks[i];
      break;
    }
    if (callback) return {
      ...ctx,
      ...await callback(ctx)
    };
    return ctx;
  };
  else return async (ctx) => {
    for (const callback of callbacks) if (callback) ctx = {
      ...ctx,
      ...await callback(ctx)
    };
    return ctx;
  };
}
function createFetch(config = {}) {
  const _combination = config.combination || "chain";
  const _options = config.options || {};
  const _fetchOptions = config.fetchOptions || {};
  function useFactoryFetch(url, ...args) {
    const computedUrl = computed(() => {
      const baseUrl = toValue(config.baseUrl);
      const targetUrl = toValue(url);
      return baseUrl && !isAbsoluteURL(targetUrl) ? joinPaths(baseUrl, targetUrl) : targetUrl;
    });
    let options = _options;
    let fetchOptions = _fetchOptions;
    if (args.length > 0) if (isFetchOptions(args[0])) options = {
      ...options,
      ...args[0],
      beforeFetch: combineCallbacks(_combination, _options.beforeFetch, args[0].beforeFetch),
      afterFetch: combineCallbacks(_combination, _options.afterFetch, args[0].afterFetch),
      onFetchError: combineCallbacks(_combination, _options.onFetchError, args[0].onFetchError)
    };
    else fetchOptions = {
      ...fetchOptions,
      ...args[0],
      headers: {
        ...headersToObject(fetchOptions.headers) || {},
        ...headersToObject(args[0].headers) || {}
      }
    };
    if (args.length > 1 && isFetchOptions(args[1])) options = {
      ...options,
      ...args[1],
      beforeFetch: combineCallbacks(_combination, _options.beforeFetch, args[1].beforeFetch),
      afterFetch: combineCallbacks(_combination, _options.afterFetch, args[1].afterFetch),
      onFetchError: combineCallbacks(_combination, _options.onFetchError, args[1].onFetchError)
    };
    return useFetch(computedUrl, fetchOptions, options);
  }
  return useFactoryFetch;
}
function useFetch(url, ...args) {
  var _defaultWindow$fetch, _globalThis;
  const supportsAbort = typeof AbortController === "function";
  let fetchOptions = {};
  let options = {
    immediate: true,
    refetch: false,
    timeout: 0,
    updateDataOnError: false
  };
  const config = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  if (args.length > 0) if (isFetchOptions(args[0])) options = {
    ...options,
    ...args[0]
  };
  else fetchOptions = args[0];
  if (args.length > 1) {
    if (isFetchOptions(args[1])) options = {
      ...options,
      ...args[1]
    };
  }
  const { fetch = (_defaultWindow$fetch = defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.fetch) !== null && _defaultWindow$fetch !== void 0 ? _defaultWindow$fetch : (_globalThis = globalThis) === null || _globalThis === void 0 ? void 0 : _globalThis.fetch, initialData, timeout } = options;
  const responseEvent = createEventHook();
  const errorEvent = createEventHook();
  const finallyEvent = createEventHook();
  const isFinished = shallowRef(false);
  const isFetching = shallowRef(false);
  const aborted = shallowRef(false);
  const statusCode = shallowRef(null);
  const response = shallowRef(null);
  const error = shallowRef(null);
  const data = shallowRef(initialData || null);
  const canAbort = computed(() => supportsAbort && isFetching.value);
  let controller;
  let timer;
  const abort = (reason) => {
    if (supportsAbort) {
      controller === null || controller === void 0 || controller.abort(reason);
      controller = new AbortController();
      controller.signal.onabort = () => aborted.value = true;
      fetchOptions = {
        ...fetchOptions,
        signal: controller.signal
      };
    }
  };
  const loading = (isLoading) => {
    isFetching.value = isLoading;
    isFinished.value = !isLoading;
  };
  if (timeout) timer = useTimeoutFn(abort, timeout, { immediate: false });
  let executeCounter = 0;
  const execute = async (throwOnFailed = false) => {
    var _context$options;
    abort();
    loading(true);
    error.value = null;
    statusCode.value = null;
    aborted.value = false;
    executeCounter += 1;
    const currentExecuteCounter = executeCounter;
    const defaultFetchOptions = {
      method: config.method,
      headers: {}
    };
    const payload = toValue(config.payload);
    if (payload) {
      var _payloadMapping$confi;
      const headers = headersToObject(defaultFetchOptions.headers);
      const proto = Object.getPrototypeOf(payload);
      if (!config.payloadType && payload && (proto === Object.prototype || Array.isArray(proto)) && !(payload instanceof FormData)) config.payloadType = "json";
      if (config.payloadType) headers["Content-Type"] = (_payloadMapping$confi = payloadMapping[config.payloadType]) !== null && _payloadMapping$confi !== void 0 ? _payloadMapping$confi : config.payloadType;
      defaultFetchOptions.body = config.payloadType === "json" ? JSON.stringify(payload) : payload;
    }
    let isCanceled = false;
    const context = {
      url: toValue(url),
      options: {
        ...defaultFetchOptions,
        ...fetchOptions
      },
      cancel: () => {
        isCanceled = true;
      }
    };
    if (options.beforeFetch) Object.assign(context, await options.beforeFetch(context));
    if (isCanceled || !fetch) {
      loading(false);
      return Promise.resolve(null);
    }
    let responseData = null;
    if (timer) timer.start();
    return fetch(context.url, {
      ...defaultFetchOptions,
      ...context.options,
      headers: {
        ...headersToObject(defaultFetchOptions.headers),
        ...headersToObject((_context$options = context.options) === null || _context$options === void 0 ? void 0 : _context$options.headers)
      }
    }).then(async (fetchResponse) => {
      response.value = fetchResponse;
      statusCode.value = fetchResponse.status;
      responseData = await fetchResponse.clone()[config.type]();
      if (!fetchResponse.ok) {
        data.value = initialData || null;
        throw new Error(fetchResponse.statusText);
      }
      if (options.afterFetch) ({ data: responseData } = await options.afterFetch({
        data: responseData,
        response: fetchResponse,
        context,
        execute
      }));
      data.value = responseData;
      responseEvent.trigger(fetchResponse);
      return fetchResponse;
    }).catch(async (fetchError) => {
      let errorData = fetchError.message || fetchError.name;
      if (options.onFetchError) ({ error: errorData, data: responseData } = await options.onFetchError({
        data: responseData,
        error: fetchError,
        response: response.value,
        context,
        execute
      }));
      error.value = errorData;
      if (options.updateDataOnError) data.value = responseData;
      errorEvent.trigger(fetchError);
      if (throwOnFailed) throw fetchError;
      return null;
    }).finally(() => {
      if (currentExecuteCounter === executeCounter) loading(false);
      if (timer) timer.stop();
      finallyEvent.trigger(null);
    });
  };
  const refetch = toRef2(options.refetch);
  watch([refetch, toRef2(url)], ([refetch$1]) => refetch$1 && execute(), { deep: true });
  const shell = {
    isFinished: readonly(isFinished),
    isFetching: readonly(isFetching),
    statusCode,
    response,
    error,
    data,
    canAbort,
    aborted,
    abort,
    execute,
    onFetchResponse: responseEvent.on,
    onFetchError: errorEvent.on,
    onFetchFinally: finallyEvent.on,
    get: setMethod("GET"),
    put: setMethod("PUT"),
    post: setMethod("POST"),
    delete: setMethod("DELETE"),
    patch: setMethod("PATCH"),
    head: setMethod("HEAD"),
    options: setMethod("OPTIONS"),
    json: setType("json"),
    text: setType("text"),
    blob: setType("blob"),
    arrayBuffer: setType("arrayBuffer"),
    formData: setType("formData")
  };
  function setMethod(method) {
    return (payload, payloadType) => {
      if (!isFetching.value) {
        config.method = method;
        config.payload = payload;
        config.payloadType = payloadType;
        if (isRef(config.payload)) watch([refetch, toRef2(config.payload)], ([refetch$1]) => refetch$1 && execute(), { deep: true });
        return {
          ...shell,
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        };
      }
    };
  }
  function waitUntilFinished() {
    return new Promise((resolve, reject) => {
      until(isFinished).toBe(true).then(() => resolve(shell)).catch(reject);
    });
  }
  function setType(type) {
    return () => {
      if (!isFetching.value) {
        config.type = type;
        return {
          ...shell,
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        };
      }
    };
  }
  if (options.immediate) Promise.resolve().then(() => execute());
  return {
    ...shell,
    then(onFulfilled, onRejected) {
      return waitUntilFinished().then(onFulfilled, onRejected);
    }
  };
}
function joinPaths(start, end) {
  if (!start.endsWith("/") && !end.startsWith("/")) return `${start}/${end}`;
  if (start.endsWith("/") && end.startsWith("/")) return `${start.slice(0, -1)}${end}`;
  return `${start}${end}`;
}
var DEFAULT_OPTIONS = {
  multiple: true,
  accept: "*",
  reset: false,
  directory: false
};
function prepareInitialFiles(files) {
  if (!files) return null;
  if (files instanceof FileList) return files;
  const dt = new DataTransfer();
  for (const file of files) dt.items.add(file);
  return dt.files;
}
function useFileDialog(options = {}) {
  const { document: document$1 = defaultDocument } = options;
  const files = ref(prepareInitialFiles(options.initialFiles));
  const { on: onChange, trigger: changeTrigger } = createEventHook();
  const { on: onCancel, trigger: cancelTrigger } = createEventHook();
  const inputRef = computed(() => {
    var _unrefElement;
    const input = (_unrefElement = unrefElement(options.input)) !== null && _unrefElement !== void 0 ? _unrefElement : document$1 ? document$1.createElement("input") : void 0;
    if (input) {
      input.type = "file";
      input.onchange = (event) => {
        files.value = event.target.files;
        changeTrigger(files.value);
      };
      input.oncancel = () => {
        cancelTrigger();
      };
    }
    return input;
  });
  const reset = () => {
    files.value = null;
    if (inputRef.value && inputRef.value.value) {
      inputRef.value.value = "";
      changeTrigger(null);
    }
  };
  const applyOptions = (options$1) => {
    const el = inputRef.value;
    if (!el) return;
    el.multiple = toValue(options$1.multiple);
    el.accept = toValue(options$1.accept);
    el.webkitdirectory = toValue(options$1.directory);
    if (hasOwn(options$1, "capture")) el.capture = toValue(options$1.capture);
  };
  const open = (localOptions) => {
    const el = inputRef.value;
    if (!el) return;
    const mergedOptions = {
      ...DEFAULT_OPTIONS,
      ...options,
      ...localOptions
    };
    applyOptions(mergedOptions);
    if (toValue(mergedOptions.reset)) reset();
    el.click();
  };
  watchEffect(() => {
    applyOptions(options);
  });
  return {
    files: readonly(files),
    open,
    reset,
    onCancel,
    onChange
  };
}
function useFileSystemAccess(options = {}) {
  const { window: _window = defaultWindow, dataType = "Text" } = options;
  const window$1 = _window;
  const isSupported = useSupported(() => window$1 && "showSaveFilePicker" in window$1 && "showOpenFilePicker" in window$1);
  const fileHandle = shallowRef();
  const data = shallowRef();
  const file = shallowRef();
  const fileName = computed(() => {
    var _file$value$name, _file$value;
    return (_file$value$name = (_file$value = file.value) === null || _file$value === void 0 ? void 0 : _file$value.name) !== null && _file$value$name !== void 0 ? _file$value$name : "";
  });
  const fileMIME = computed(() => {
    var _file$value$type, _file$value2;
    return (_file$value$type = (_file$value2 = file.value) === null || _file$value2 === void 0 ? void 0 : _file$value2.type) !== null && _file$value$type !== void 0 ? _file$value$type : "";
  });
  const fileSize = computed(() => {
    var _file$value$size, _file$value3;
    return (_file$value$size = (_file$value3 = file.value) === null || _file$value3 === void 0 ? void 0 : _file$value3.size) !== null && _file$value$size !== void 0 ? _file$value$size : 0;
  });
  const fileLastModified = computed(() => {
    var _file$value$lastModif, _file$value4;
    return (_file$value$lastModif = (_file$value4 = file.value) === null || _file$value4 === void 0 ? void 0 : _file$value4.lastModified) !== null && _file$value$lastModif !== void 0 ? _file$value$lastModif : 0;
  });
  async function open(_options = {}) {
    if (!isSupported.value) return;
    const [handle] = await window$1.showOpenFilePicker({
      ...toValue(options),
      ..._options
    });
    fileHandle.value = handle;
    await updateData();
  }
  async function create(_options = {}) {
    if (!isSupported.value) return;
    fileHandle.value = await window$1.showSaveFilePicker({
      ...options,
      ..._options
    });
    data.value = void 0;
    await updateData();
  }
  async function save(_options = {}) {
    if (!isSupported.value) return;
    if (!fileHandle.value) return saveAs(_options);
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function saveAs(_options = {}) {
    if (!isSupported.value) return;
    fileHandle.value = await window$1.showSaveFilePicker({
      ...options,
      ..._options
    });
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function updateFile() {
    var _fileHandle$value;
    file.value = await ((_fileHandle$value = fileHandle.value) === null || _fileHandle$value === void 0 ? void 0 : _fileHandle$value.getFile());
  }
  async function updateData() {
    var _file$value5, _file$value6;
    await updateFile();
    const type = toValue(dataType);
    if (type === "Text") data.value = await ((_file$value5 = file.value) === null || _file$value5 === void 0 ? void 0 : _file$value5.text());
    else if (type === "ArrayBuffer") data.value = await ((_file$value6 = file.value) === null || _file$value6 === void 0 ? void 0 : _file$value6.arrayBuffer());
    else if (type === "Blob") data.value = file.value;
  }
  watch(() => toValue(dataType), updateData);
  return {
    isSupported,
    data,
    file,
    fileName,
    fileMIME,
    fileSize,
    fileLastModified,
    open,
    create,
    save,
    saveAs,
    updateData
  };
}
function useFocus(target, options = {}) {
  const { initialValue = false, focusVisible = false, preventScroll = false } = options;
  const innerFocused = shallowRef(false);
  const targetElement = computed(() => unrefElement(target));
  const listenerOptions = { passive: true };
  useEventListener(targetElement, "focus", (event) => {
    var _matches, _ref;
    if (!focusVisible || ((_matches = (_ref = event.target).matches) === null || _matches === void 0 ? void 0 : _matches.call(_ref, ":focus-visible"))) innerFocused.value = true;
  }, listenerOptions);
  useEventListener(targetElement, "blur", () => innerFocused.value = false, listenerOptions);
  const focused = computed({
    get: () => innerFocused.value,
    set(value) {
      var _targetElement$value, _targetElement$value2;
      if (!value && innerFocused.value) (_targetElement$value = targetElement.value) === null || _targetElement$value === void 0 || _targetElement$value.blur();
      else if (value && !innerFocused.value) (_targetElement$value2 = targetElement.value) === null || _targetElement$value2 === void 0 || _targetElement$value2.focus({ preventScroll });
    }
  });
  watch(targetElement, () => {
    focused.value = initialValue;
  }, {
    immediate: true,
    flush: "post"
  });
  return { focused };
}
var EVENT_FOCUS_IN = "focusin";
var EVENT_FOCUS_OUT = "focusout";
var PSEUDO_CLASS_FOCUS_WITHIN = ":focus-within";
function useFocusWithin(target, options = {}) {
  const { window: window$1 = defaultWindow } = options;
  const targetElement = computed(() => unrefElement(target));
  const _focused = shallowRef(false);
  const focused = computed(() => _focused.value);
  const activeElement = useActiveElement(options);
  if (!window$1 || !activeElement.value) return { focused };
  const listenerOptions = { passive: true };
  useEventListener(targetElement, EVENT_FOCUS_IN, () => _focused.value = true, listenerOptions);
  useEventListener(targetElement, EVENT_FOCUS_OUT, () => {
    var _targetElement$value$, _targetElement$value, _targetElement$value$2;
    return _focused.value = (_targetElement$value$ = (_targetElement$value = targetElement.value) === null || _targetElement$value === void 0 || (_targetElement$value$2 = _targetElement$value.matches) === null || _targetElement$value$2 === void 0 ? void 0 : _targetElement$value$2.call(_targetElement$value, PSEUDO_CLASS_FOCUS_WITHIN)) !== null && _targetElement$value$ !== void 0 ? _targetElement$value$ : false;
  }, listenerOptions);
  return { focused };
}
function useFps(options) {
  var _options$every;
  const fps = shallowRef(0);
  if (typeof performance === "undefined") return fps;
  const every = (_options$every = options === null || options === void 0 ? void 0 : options.every) !== null && _options$every !== void 0 ? _options$every : 10;
  let last = performance.now();
  let ticks = 0;
  useRafFn(() => {
    ticks += 1;
    if (ticks >= every) {
      const now2 = performance.now();
      const diff = now2 - last;
      fps.value = Math.round(1e3 / (diff / ticks));
      last = now2;
      ticks = 0;
    }
  });
  return fps;
}
var eventHandlers = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function useFullscreen(target, options = {}) {
  const { document: document$1 = defaultDocument, autoExit = false } = options;
  const targetRef = computed(() => {
    var _unrefElement;
    return (_unrefElement = unrefElement(target)) !== null && _unrefElement !== void 0 ? _unrefElement : document$1 === null || document$1 === void 0 ? void 0 : document$1.documentElement;
  });
  const isFullscreen = shallowRef(false);
  const requestMethod = computed(() => {
    return [
      "requestFullscreen",
      "webkitRequestFullscreen",
      "webkitEnterFullscreen",
      "webkitEnterFullScreen",
      "webkitRequestFullScreen",
      "mozRequestFullScreen",
      "msRequestFullscreen"
    ].find((m) => document$1 && m in document$1 || targetRef.value && m in targetRef.value);
  });
  const exitMethod = computed(() => {
    return [
      "exitFullscreen",
      "webkitExitFullscreen",
      "webkitExitFullScreen",
      "webkitCancelFullScreen",
      "mozCancelFullScreen",
      "msExitFullscreen"
    ].find((m) => document$1 && m in document$1 || targetRef.value && m in targetRef.value);
  });
  const fullscreenEnabled = computed(() => {
    return [
      "fullScreen",
      "webkitIsFullScreen",
      "webkitDisplayingFullscreen",
      "mozFullScreen",
      "msFullscreenElement"
    ].find((m) => document$1 && m in document$1 || targetRef.value && m in targetRef.value);
  });
  const fullscreenElementMethod = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((m) => document$1 && m in document$1);
  const isSupported = useSupported(() => targetRef.value && document$1 && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0);
  const isCurrentElementFullScreen = () => {
    if (fullscreenElementMethod) return (document$1 === null || document$1 === void 0 ? void 0 : document$1[fullscreenElementMethod]) === targetRef.value;
    return false;
  };
  const isElementFullScreen = () => {
    if (fullscreenEnabled.value) if (document$1 && document$1[fullscreenEnabled.value] != null) return document$1[fullscreenEnabled.value];
    else {
      const target$1 = targetRef.value;
      if ((target$1 === null || target$1 === void 0 ? void 0 : target$1[fullscreenEnabled.value]) != null) return Boolean(target$1[fullscreenEnabled.value]);
    }
    return false;
  };
  async function exit() {
    if (!isSupported.value || !isFullscreen.value) return;
    if (exitMethod.value) if ((document$1 === null || document$1 === void 0 ? void 0 : document$1[exitMethod.value]) != null) await document$1[exitMethod.value]();
    else {
      const target$1 = targetRef.value;
      if ((target$1 === null || target$1 === void 0 ? void 0 : target$1[exitMethod.value]) != null) await target$1[exitMethod.value]();
    }
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported.value || isFullscreen.value) return;
    if (isElementFullScreen()) await exit();
    const target$1 = targetRef.value;
    if (requestMethod.value && (target$1 === null || target$1 === void 0 ? void 0 : target$1[requestMethod.value]) != null) {
      await target$1[requestMethod.value]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    await (isFullscreen.value ? exit() : enter());
  }
  const handlerCallback = () => {
    const isElementFullScreenValue = isElementFullScreen();
    if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen()) isFullscreen.value = isElementFullScreenValue;
  };
  const listenerOptions = {
    capture: false,
    passive: true
  };
  useEventListener(document$1, eventHandlers, handlerCallback, listenerOptions);
  useEventListener(() => unrefElement(targetRef), eventHandlers, handlerCallback, listenerOptions);
  tryOnMounted(handlerCallback, false);
  if (autoExit) tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}
function mapGamepadToXbox360Controller(gamepad) {
  return computed(() => {
    if (gamepad.value) return {
      buttons: {
        a: gamepad.value.buttons[0],
        b: gamepad.value.buttons[1],
        x: gamepad.value.buttons[2],
        y: gamepad.value.buttons[3]
      },
      bumper: {
        left: gamepad.value.buttons[4],
        right: gamepad.value.buttons[5]
      },
      triggers: {
        left: gamepad.value.buttons[6],
        right: gamepad.value.buttons[7]
      },
      stick: {
        left: {
          horizontal: gamepad.value.axes[0],
          vertical: gamepad.value.axes[1],
          button: gamepad.value.buttons[10]
        },
        right: {
          horizontal: gamepad.value.axes[2],
          vertical: gamepad.value.axes[3],
          button: gamepad.value.buttons[11]
        }
      },
      dpad: {
        up: gamepad.value.buttons[12],
        down: gamepad.value.buttons[13],
        left: gamepad.value.buttons[14],
        right: gamepad.value.buttons[15]
      },
      back: gamepad.value.buttons[8],
      start: gamepad.value.buttons[9]
    };
    return null;
  });
}
function useGamepad(options = {}) {
  const { navigator: navigator$1 = defaultNavigator } = options;
  const isSupported = useSupported(() => navigator$1 && "getGamepads" in navigator$1);
  const gamepads = ref([]);
  const onConnectedHook = createEventHook();
  const onDisconnectedHook = createEventHook();
  const stateFromGamepad = (gamepad) => {
    const hapticActuators = [];
    const vibrationActuator = "vibrationActuator" in gamepad ? gamepad.vibrationActuator : null;
    if (vibrationActuator) hapticActuators.push(vibrationActuator);
    if (gamepad.hapticActuators) hapticActuators.push(...gamepad.hapticActuators);
    return {
      id: gamepad.id,
      index: gamepad.index,
      connected: gamepad.connected,
      mapping: gamepad.mapping,
      timestamp: gamepad.timestamp,
      vibrationActuator: gamepad.vibrationActuator,
      hapticActuators,
      axes: gamepad.axes.map((axes) => axes),
      buttons: gamepad.buttons.map((button) => ({
        pressed: button.pressed,
        touched: button.touched,
        value: button.value
      }))
    };
  };
  const updateGamepadState = () => {
    const _gamepads = (navigator$1 === null || navigator$1 === void 0 ? void 0 : navigator$1.getGamepads()) || [];
    for (const gamepad of _gamepads) if (gamepad && gamepads.value[gamepad.index]) gamepads.value[gamepad.index] = stateFromGamepad(gamepad);
  };
  const { isActive, pause, resume } = useRafFn(updateGamepadState);
  const onGamepadConnected = (gamepad) => {
    if (!gamepads.value.some(({ index }) => index === gamepad.index)) {
      gamepads.value.push(stateFromGamepad(gamepad));
      onConnectedHook.trigger(gamepad.index);
    }
    resume();
  };
  const onGamepadDisconnected = (gamepad) => {
    gamepads.value = gamepads.value.filter((x) => x.index !== gamepad.index);
    onDisconnectedHook.trigger(gamepad.index);
  };
  const listenerOptions = { passive: true };
  useEventListener("gamepadconnected", (e) => onGamepadConnected(e.gamepad), listenerOptions);
  useEventListener("gamepaddisconnected", (e) => onGamepadDisconnected(e.gamepad), listenerOptions);
  tryOnMounted(() => {
    const _gamepads = (navigator$1 === null || navigator$1 === void 0 ? void 0 : navigator$1.getGamepads()) || [];
    for (const gamepad of _gamepads) if (gamepad && gamepads.value[gamepad.index]) onGamepadConnected(gamepad);
  });
  pause();
  return {
    isSupported,
    onConnected: onConnectedHook.on,
    onDisconnected: onDisconnectedHook.on,
    gamepads,
    pause,
    resume,
    isActive
  };
}
function useGeolocation(options = {}) {
  const { enableHighAccuracy = true, maximumAge = 3e4, timeout = 27e3, navigator: navigator$1 = defaultNavigator, immediate = true } = options;
  const isSupported = useSupported(() => navigator$1 && "geolocation" in navigator$1);
  const locatedAt = shallowRef(null);
  const error = shallowRef(null);
  const coords = ref({
    accuracy: 0,
    latitude: Number.POSITIVE_INFINITY,
    longitude: Number.POSITIVE_INFINITY,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  });
  function updatePosition(position) {
    locatedAt.value = position.timestamp;
    coords.value = position.coords;
    error.value = null;
  }
  let watcher;
  function resume() {
    if (isSupported.value) watcher = navigator$1.geolocation.watchPosition(updatePosition, (err) => error.value = err, {
      enableHighAccuracy,
      maximumAge,
      timeout
    });
  }
  if (immediate) resume();
  function pause() {
    if (watcher && navigator$1) navigator$1.geolocation.clearWatch(watcher);
  }
  tryOnScopeDispose(() => {
    pause();
  });
  return {
    isSupported,
    coords,
    locatedAt,
    error,
    resume,
    pause
  };
}
var defaultEvents$1 = [
  "mousemove",
  "mousedown",
  "resize",
  "keydown",
  "touchstart",
  "wheel"
];
var oneMinute = 6e4;
function useIdle(timeout = oneMinute, options = {}) {
  const { initialState = false, listenForVisibilityChange = true, events: events$1 = defaultEvents$1, window: window$1 = defaultWindow, eventFilter = throttleFilter(50) } = options;
  const idle = shallowRef(initialState);
  const lastActive = shallowRef(timestamp());
  const isPending = shallowRef(false);
  let timer;
  const reset = () => {
    idle.value = false;
    clearTimeout(timer);
    timer = setTimeout(() => idle.value = true, timeout);
  };
  const onEvent = createFilterWrapper(eventFilter, () => {
    lastActive.value = timestamp();
    reset();
  });
  if (window$1) {
    const document$1 = window$1.document;
    const listenerOptions = { passive: true };
    for (const event of events$1) useEventListener(window$1, event, () => {
      if (!isPending.value) return;
      onEvent();
    }, listenerOptions);
    if (listenForVisibilityChange) useEventListener(document$1, "visibilitychange", () => {
      if (document$1.hidden || !isPending.value) return;
      onEvent();
    }, listenerOptions);
    start();
  }
  function start() {
    if (isPending.value) return;
    isPending.value = true;
    if (!initialState) reset();
  }
  function stop() {
    idle.value = initialState;
    clearTimeout(timer);
    isPending.value = false;
  }
  return {
    idle,
    lastActive,
    reset,
    stop,
    start,
    isPending: shallowReadonly(isPending)
  };
}
async function loadImage(options) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const { src, srcset, sizes, class: clazz, loading, crossorigin, referrerPolicy, width, height, decoding, fetchPriority, ismap, usemap } = options;
    img.src = src;
    if (srcset != null) img.srcset = srcset;
    if (sizes != null) img.sizes = sizes;
    if (clazz != null) img.className = clazz;
    if (loading != null) img.loading = loading;
    if (crossorigin != null) img.crossOrigin = crossorigin;
    if (referrerPolicy != null) img.referrerPolicy = referrerPolicy;
    if (width != null) img.width = width;
    if (height != null) img.height = height;
    if (decoding != null) img.decoding = decoding;
    if (fetchPriority != null) img.fetchPriority = fetchPriority;
    if (ismap != null) img.isMap = ismap;
    if (usemap != null) img.useMap = usemap;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}
function useImage(options, asyncStateOptions = {}) {
  const state = useAsyncState(() => loadImage(toValue(options)), void 0, {
    resetOnExecute: true,
    ...asyncStateOptions
  });
  watch(() => toValue(options), () => state.execute(asyncStateOptions.delay), { deep: true });
  return state;
}
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window) return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document) return el.documentElement;
  return el;
}
var ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
  const { throttle = 0, idle = 200, onStop = noop, onScroll = noop, offset = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }, observe: _observe = { mutation: false }, eventListenerOptions = {
    capture: false,
    passive: true
  }, behavior = "auto", window: window$1 = defaultWindow, onError = (e) => {
    console.error(e);
  } } = options;
  const observe = typeof _observe === "boolean" ? { mutation: _observe } : _observe;
  const internalX = shallowRef(0);
  const internalY = shallowRef(0);
  const x = computed({
    get() {
      return internalX.value;
    },
    set(x$1) {
      scrollTo(x$1, void 0);
    }
  });
  const y = computed({
    get() {
      return internalY.value;
    },
    set(y$1) {
      scrollTo(void 0, y$1);
    }
  });
  function scrollTo(_x, _y) {
    var _ref, _toValue, _toValue2, _document;
    if (!window$1) return;
    const _element = toValue(element);
    if (!_element) return;
    (_ref = _element instanceof Document ? window$1.document.body : _element) === null || _ref === void 0 || _ref.scrollTo({
      top: (_toValue = toValue(_y)) !== null && _toValue !== void 0 ? _toValue : y.value,
      left: (_toValue2 = toValue(_x)) !== null && _toValue2 !== void 0 ? _toValue2 : x.value,
      behavior: toValue(behavior)
    });
    const scrollContainer = (_element === null || _element === void 0 || (_document = _element.document) === null || _document === void 0 ? void 0 : _document.documentElement) || (_element === null || _element === void 0 ? void 0 : _element.documentElement) || _element;
    if (x != null) internalX.value = scrollContainer.scrollLeft;
    if (y != null) internalY.value = scrollContainer.scrollTop;
  }
  const isScrolling = shallowRef(false);
  const arrivedState = reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = reactive({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const onScrollEnd = (e) => {
    if (!isScrolling.value) return;
    isScrolling.value = false;
    directions.left = false;
    directions.right = false;
    directions.top = false;
    directions.bottom = false;
    onStop(e);
  };
  const onScrollEndDebounced = useDebounceFn(onScrollEnd, throttle + idle);
  const setArrivedState = (target) => {
    var _document2;
    if (!window$1) return;
    const el = (target === null || target === void 0 || (_document2 = target.document) === null || _document2 === void 0 ? void 0 : _document2.documentElement) || (target === null || target === void 0 ? void 0 : target.documentElement) || unrefElement(target);
    const { display, flexDirection, direction } = getComputedStyle(el);
    const directionMultipler = direction === "rtl" ? -1 : 1;
    const scrollLeft = el.scrollLeft;
    directions.left = scrollLeft < internalX.value;
    directions.right = scrollLeft > internalX.value;
    const left = Math.abs(scrollLeft * directionMultipler) <= (offset.left || 0);
    const right = Math.abs(scrollLeft * directionMultipler) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "row-reverse") {
      arrivedState.left = right;
      arrivedState.right = left;
    } else {
      arrivedState.left = left;
      arrivedState.right = right;
    }
    internalX.value = scrollLeft;
    let scrollTop = el.scrollTop;
    if (target === window$1.document && !scrollTop) scrollTop = window$1.document.body.scrollTop;
    directions.top = scrollTop < internalY.value;
    directions.bottom = scrollTop > internalY.value;
    const top = Math.abs(scrollTop) <= (offset.top || 0);
    const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "column-reverse") {
      arrivedState.top = bottom;
      arrivedState.bottom = top;
    } else {
      arrivedState.top = top;
      arrivedState.bottom = bottom;
    }
    internalY.value = scrollTop;
  };
  const onScrollHandler = (e) => {
    var _documentElement;
    if (!window$1) return;
    setArrivedState((_documentElement = e.target.documentElement) !== null && _documentElement !== void 0 ? _documentElement : e.target);
    isScrolling.value = true;
    onScrollEndDebounced(e);
    onScroll(e);
  };
  useEventListener(element, "scroll", throttle ? useThrottleFn(onScrollHandler, throttle, true, false) : onScrollHandler, eventListenerOptions);
  tryOnMounted(() => {
    try {
      const _element = toValue(element);
      if (!_element) return;
      setArrivedState(_element);
    } catch (e) {
      onError(e);
    }
  });
  if ((observe === null || observe === void 0 ? void 0 : observe.mutation) && element != null && element !== window$1 && element !== document) useMutationObserver(element, () => {
    const _element = toValue(element);
    if (!_element) return;
    setArrivedState(_element);
  }, {
    attributes: true,
    childList: true,
    subtree: true
  });
  useEventListener(element, "scrollend", onScrollEnd, eventListenerOptions);
  return {
    x,
    y,
    isScrolling,
    arrivedState,
    directions,
    measure() {
      const _element = toValue(element);
      if (window$1 && _element) setArrivedState(_element);
    }
  };
}
function useInfiniteScroll(element, onLoadMore, options = {}) {
  var _options$distance;
  const { direction = "bottom", interval = 100, canLoadMore = () => true } = options;
  const state = reactive(useScroll(element, {
    ...options,
    offset: {
      [direction]: (_options$distance = options.distance) !== null && _options$distance !== void 0 ? _options$distance : 0,
      ...options.offset
    }
  }));
  const promise = ref();
  const isLoading = computed(() => !!promise.value);
  const observedElement = computed(() => {
    return resolveElement(toValue(element));
  });
  const isElementVisible = useElementVisibility(observedElement);
  function checkAndLoad() {
    state.measure();
    if (!observedElement.value || !isElementVisible.value || !canLoadMore(observedElement.value)) return;
    const { scrollHeight, clientHeight, scrollWidth, clientWidth } = observedElement.value;
    const isNarrower = direction === "bottom" || direction === "top" ? scrollHeight <= clientHeight : scrollWidth <= clientWidth;
    if (state.arrivedState[direction] || isNarrower) {
      if (!promise.value) promise.value = Promise.all([onLoadMore(state), new Promise((resolve) => setTimeout(resolve, interval))]).finally(() => {
        promise.value = null;
        nextTick(() => checkAndLoad());
      });
    }
  }
  tryOnUnmounted(watch(() => [state.arrivedState[direction], isElementVisible.value], checkAndLoad, { immediate: true }));
  return {
    isLoading,
    reset() {
      nextTick(() => checkAndLoad());
    }
  };
}
var defaultEvents = [
  "mousedown",
  "mouseup",
  "keydown",
  "keyup"
];
function useKeyModifier(modifier, options = {}) {
  const { events: events$1 = defaultEvents, document: document$1 = defaultDocument, initial = null } = options;
  const state = shallowRef(initial);
  if (document$1) events$1.forEach((listenerEvent) => {
    useEventListener(document$1, listenerEvent, (evt) => {
      if (typeof evt.getModifierState === "function") state.value = evt.getModifierState(modifier);
    }, { passive: true });
  });
  return state;
}
function useLocalStorage(key, initialValue, options = {}) {
  const { window: window$1 = defaultWindow } = options;
  return useStorage(key, initialValue, window$1 === null || window$1 === void 0 ? void 0 : window$1.localStorage, options);
}
var DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function useMagicKeys(options = {}) {
  const { reactive: useReactive = false, target = defaultWindow, aliasMap = DefaultMagicKeysAliasMap, passive = true, onEventFired = noop } = options;
  const current = reactive(/* @__PURE__ */ new Set());
  const obj = {
    toJSON() {
      return {};
    },
    current
  };
  const refs = useReactive ? reactive(obj) : obj;
  const metaDeps = /* @__PURE__ */ new Set();
  const depsMap = /* @__PURE__ */ new Map([
    ["Meta", metaDeps],
    ["Shift", /* @__PURE__ */ new Set()],
    ["Alt", /* @__PURE__ */ new Set()]
  ]);
  const usedKeys = /* @__PURE__ */ new Set();
  function setRefs(key, value) {
    if (key in refs) if (useReactive) refs[key] = value;
    else refs[key].value = value;
  }
  function reset() {
    current.clear();
    for (const key of usedKeys) setRefs(key, false);
  }
  function updateDeps(value, e, keys$1) {
    if (!value || typeof e.getModifierState !== "function") return;
    for (const [modifier, depsSet] of depsMap) if (e.getModifierState(modifier)) {
      keys$1.forEach((key) => depsSet.add(key));
      break;
    }
  }
  function clearDeps(value, key) {
    if (value) return;
    const depsMapKey = `${key[0].toUpperCase()}${key.slice(1)}`;
    const deps = depsMap.get(depsMapKey);
    if (!["shift", "alt"].includes(key) || !deps) return;
    const depsArray = Array.from(deps);
    const depsIndex = depsArray.indexOf(key);
    depsArray.forEach((key$1, index) => {
      if (index >= depsIndex) {
        current.delete(key$1);
        setRefs(key$1, false);
      }
    });
    deps.clear();
  }
  function updateRefs(e, value) {
    var _e$key, _e$code;
    const key = (_e$key = e.key) === null || _e$key === void 0 ? void 0 : _e$key.toLowerCase();
    const values = [(_e$code = e.code) === null || _e$code === void 0 ? void 0 : _e$code.toLowerCase(), key].filter(Boolean);
    if (key) if (value) current.add(key);
    else current.delete(key);
    for (const key$1 of values) {
      usedKeys.add(key$1);
      setRefs(key$1, value);
    }
    updateDeps(value, e, [...current, ...values]);
    clearDeps(value, key);
    if (key === "meta" && !value) {
      metaDeps.forEach((key$1) => {
        current.delete(key$1);
        setRefs(key$1, false);
      });
      metaDeps.clear();
    }
  }
  useEventListener(target, "keydown", (e) => {
    updateRefs(e, true);
    return onEventFired(e);
  }, { passive });
  useEventListener(target, "keyup", (e) => {
    updateRefs(e, false);
    return onEventFired(e);
  }, { passive });
  useEventListener("blur", reset, { passive });
  useEventListener("focus", reset, { passive });
  const proxy = new Proxy(refs, { get(target$1, prop, rec) {
    if (typeof prop !== "string") return Reflect.get(target$1, prop, rec);
    prop = prop.toLowerCase();
    if (prop in aliasMap) prop = aliasMap[prop];
    if (!(prop in refs)) if (/[+_-]/.test(prop)) {
      const keys$1 = prop.split(/[+_-]/g).map((i) => i.trim());
      refs[prop] = computed(() => keys$1.map((key) => toValue(proxy[key])).every(Boolean));
    } else refs[prop] = shallowRef(false);
    const r = Reflect.get(target$1, prop, rec);
    return useReactive ? toValue(r) : r;
  } });
  return proxy;
}
function usingElRef(source, cb) {
  if (toValue(source)) cb(toValue(source));
}
function timeRangeToArray(timeRanges) {
  let ranges = [];
  for (let i = 0; i < timeRanges.length; ++i) ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]];
  return ranges;
}
function tracksToArray(tracks) {
  return Array.from(tracks).map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id) => ({
    id,
    label,
    kind,
    language,
    mode,
    activeCues,
    cues,
    inBandMetadataTrackDispatchType
  }));
}
var defaultOptions = {
  src: "",
  tracks: []
};
function useMediaControls(target, options = {}) {
  target = toRef2(target);
  options = {
    ...defaultOptions,
    ...options
  };
  const { document: document$1 = defaultDocument } = options;
  const listenerOptions = { passive: true };
  const currentTime = shallowRef(0);
  const duration = shallowRef(0);
  const seeking = shallowRef(false);
  const volume = shallowRef(1);
  const waiting = shallowRef(false);
  const ended = shallowRef(false);
  const playing = shallowRef(false);
  const rate = shallowRef(1);
  const stalled = shallowRef(false);
  const buffered = ref([]);
  const tracks = ref([]);
  const selectedTrack = shallowRef(-1);
  const isPictureInPicture = shallowRef(false);
  const muted = shallowRef(false);
  const supportsPictureInPicture = document$1 && "pictureInPictureEnabled" in document$1;
  const sourceErrorEvent = createEventHook();
  const playbackErrorEvent = createEventHook();
  const disableTrack = (track) => {
    usingElRef(target, (el) => {
      if (track) {
        const id = typeof track === "number" ? track : track.id;
        el.textTracks[id].mode = "disabled";
      } else for (let i = 0; i < el.textTracks.length; ++i) el.textTracks[i].mode = "disabled";
      selectedTrack.value = -1;
    });
  };
  const enableTrack = (track, disableTracks = true) => {
    usingElRef(target, (el) => {
      const id = typeof track === "number" ? track : track.id;
      if (disableTracks) disableTrack();
      el.textTracks[id].mode = "showing";
      selectedTrack.value = id;
    });
  };
  const togglePictureInPicture = () => {
    return new Promise((resolve, reject) => {
      usingElRef(target, async (el) => {
        if (supportsPictureInPicture) if (!isPictureInPicture.value) el.requestPictureInPicture().then(resolve).catch(reject);
        else document$1.exitPictureInPicture().then(resolve).catch(reject);
      });
    });
  };
  watchEffect(() => {
    if (!document$1) return;
    const el = toValue(target);
    if (!el) return;
    const src = toValue(options.src);
    let sources = [];
    if (!src) return;
    if (typeof src === "string") sources = [{ src }];
    else if (Array.isArray(src)) sources = src;
    else if (isObject(src)) sources = [src];
    el.querySelectorAll("source").forEach((e) => {
      e.remove();
    });
    sources.forEach(({ src: src$1, type, media }) => {
      const source = document$1.createElement("source");
      source.setAttribute("src", src$1);
      source.setAttribute("type", type || "");
      source.setAttribute("media", media || "");
      useEventListener(source, "error", sourceErrorEvent.trigger, listenerOptions);
      el.appendChild(source);
    });
    el.load();
  });
  watch([target, volume], () => {
    const el = toValue(target);
    if (!el) return;
    el.volume = volume.value;
  });
  watch([target, muted], () => {
    const el = toValue(target);
    if (!el) return;
    el.muted = muted.value;
  });
  watch([target, rate], () => {
    const el = toValue(target);
    if (!el) return;
    el.playbackRate = rate.value;
  });
  watchEffect(() => {
    if (!document$1) return;
    const textTracks = toValue(options.tracks);
    const el = toValue(target);
    if (!textTracks || !textTracks.length || !el) return;
    el.querySelectorAll("track").forEach((e) => e.remove());
    textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i) => {
      const track = document$1.createElement("track");
      track.default = isDefault || false;
      track.kind = kind;
      track.label = label;
      track.src = src;
      track.srclang = srcLang;
      if (track.default) selectedTrack.value = i;
      el.appendChild(track);
    });
  });
  const { ignoreUpdates: ignoreCurrentTimeUpdates } = watchIgnorable(currentTime, (time) => {
    const el = toValue(target);
    if (!el) return;
    el.currentTime = time;
  });
  const { ignoreUpdates: ignorePlayingUpdates } = watchIgnorable(playing, (isPlaying) => {
    const el = toValue(target);
    if (!el) return;
    if (isPlaying) el.play().catch((e) => {
      playbackErrorEvent.trigger(e);
      throw e;
    });
    else el.pause();
  });
  useEventListener(target, "timeupdate", () => ignoreCurrentTimeUpdates(() => currentTime.value = toValue(target).currentTime), listenerOptions);
  useEventListener(target, "durationchange", () => duration.value = toValue(target).duration, listenerOptions);
  useEventListener(target, "progress", () => buffered.value = timeRangeToArray(toValue(target).buffered), listenerOptions);
  useEventListener(target, "seeking", () => seeking.value = true, listenerOptions);
  useEventListener(target, "seeked", () => seeking.value = false, listenerOptions);
  useEventListener(target, ["waiting", "loadstart"], () => {
    waiting.value = true;
    ignorePlayingUpdates(() => playing.value = false);
  }, listenerOptions);
  useEventListener(target, "loadeddata", () => waiting.value = false, listenerOptions);
  useEventListener(target, "playing", () => {
    waiting.value = false;
    ended.value = false;
    ignorePlayingUpdates(() => playing.value = true);
  }, listenerOptions);
  useEventListener(target, "ratechange", () => rate.value = toValue(target).playbackRate, listenerOptions);
  useEventListener(target, "stalled", () => stalled.value = true, listenerOptions);
  useEventListener(target, "ended", () => ended.value = true, listenerOptions);
  useEventListener(target, "pause", () => ignorePlayingUpdates(() => playing.value = false), listenerOptions);
  useEventListener(target, "play", () => ignorePlayingUpdates(() => playing.value = true), listenerOptions);
  useEventListener(target, "enterpictureinpicture", () => isPictureInPicture.value = true, listenerOptions);
  useEventListener(target, "leavepictureinpicture", () => isPictureInPicture.value = false, listenerOptions);
  useEventListener(target, "volumechange", () => {
    const el = toValue(target);
    if (!el) return;
    volume.value = el.volume;
    muted.value = el.muted;
  }, listenerOptions);
  const listeners = [];
  const stop = watch([target], () => {
    const el = toValue(target);
    if (!el) return;
    stop();
    listeners[0] = useEventListener(el.textTracks, "addtrack", () => tracks.value = tracksToArray(el.textTracks), listenerOptions);
    listeners[1] = useEventListener(el.textTracks, "removetrack", () => tracks.value = tracksToArray(el.textTracks), listenerOptions);
    listeners[2] = useEventListener(el.textTracks, "change", () => tracks.value = tracksToArray(el.textTracks), listenerOptions);
  });
  tryOnScopeDispose(() => listeners.forEach((listener) => listener()));
  return {
    currentTime,
    duration,
    waiting,
    seeking,
    ended,
    stalled,
    buffered,
    playing,
    rate,
    volume,
    muted,
    tracks,
    selectedTrack,
    enableTrack,
    disableTrack,
    supportsPictureInPicture,
    togglePictureInPicture,
    isPictureInPicture,
    onSourceError: sourceErrorEvent.on,
    onPlaybackError: playbackErrorEvent.on
  };
}
function useMemoize(resolver, options) {
  const initCache = () => {
    if (options === null || options === void 0 ? void 0 : options.cache) return shallowReactive(options.cache);
    return shallowReactive(/* @__PURE__ */ new Map());
  };
  const cache = initCache();
  const generateKey = (...args) => (options === null || options === void 0 ? void 0 : options.getKey) ? options.getKey(...args) : JSON.stringify(args);
  const _loadData = (key, ...args) => {
    cache.set(key, resolver(...args));
    return cache.get(key);
  };
  const loadData = (...args) => _loadData(generateKey(...args), ...args);
  const deleteData = (...args) => {
    cache.delete(generateKey(...args));
  };
  const clearData = () => {
    cache.clear();
  };
  const memoized = (...args) => {
    const key = generateKey(...args);
    if (cache.has(key)) return cache.get(key);
    return _loadData(key, ...args);
  };
  memoized.load = loadData;
  memoized.delete = deleteData;
  memoized.clear = clearData;
  memoized.generateKey = generateKey;
  memoized.cache = cache;
  return memoized;
}
function useMemory(options = {}) {
  const memory = ref();
  const isSupported = useSupported(() => typeof performance !== "undefined" && "memory" in performance);
  if (isSupported.value) {
    const { interval = 1e3 } = options;
    useIntervalFn(() => {
      memory.value = performance.memory;
    }, interval, {
      immediate: options.immediate,
      immediateCallback: options.immediateCallback
    });
  }
  return {
    isSupported,
    memory
  };
}
var UseMouseBuiltinExtractors = {
  page: (event) => [event.pageX, event.pageY],
  client: (event) => [event.clientX, event.clientY],
  screen: (event) => [event.screenX, event.screenY],
  movement: (event) => event instanceof MouseEvent ? [event.movementX, event.movementY] : null
};
function useMouse(options = {}) {
  const { type = "page", touch = true, resetOnTouchEnds = false, initialValue = {
    x: 0,
    y: 0
  }, window: window$1 = defaultWindow, target = window$1, scroll = true, eventFilter } = options;
  let _prevMouseEvent = null;
  let _prevScrollX = 0;
  let _prevScrollY = 0;
  const x = shallowRef(initialValue.x);
  const y = shallowRef(initialValue.y);
  const sourceType = shallowRef(null);
  const extractor = typeof type === "function" ? type : UseMouseBuiltinExtractors[type];
  const mouseHandler = (event) => {
    const result = extractor(event);
    _prevMouseEvent = event;
    if (result) {
      [x.value, y.value] = result;
      sourceType.value = "mouse";
    }
    if (window$1) {
      _prevScrollX = window$1.scrollX;
      _prevScrollY = window$1.scrollY;
    }
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      const result = extractor(event.touches[0]);
      if (result) {
        [x.value, y.value] = result;
        sourceType.value = "touch";
      }
    }
  };
  const scrollHandler = () => {
    if (!_prevMouseEvent || !window$1) return;
    const pos = extractor(_prevMouseEvent);
    if (_prevMouseEvent instanceof MouseEvent && pos) {
      x.value = pos[0] + window$1.scrollX - _prevScrollX;
      y.value = pos[1] + window$1.scrollY - _prevScrollY;
    }
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const mouseHandlerWrapper = eventFilter ? (event) => eventFilter(() => mouseHandler(event), {}) : (event) => mouseHandler(event);
  const touchHandlerWrapper = eventFilter ? (event) => eventFilter(() => touchHandler(event), {}) : (event) => touchHandler(event);
  const scrollHandlerWrapper = eventFilter ? () => eventFilter(() => scrollHandler(), {}) : () => scrollHandler();
  if (target) {
    const listenerOptions = { passive: true };
    useEventListener(target, ["mousemove", "dragover"], mouseHandlerWrapper, listenerOptions);
    if (touch && type !== "movement") {
      useEventListener(target, ["touchstart", "touchmove"], touchHandlerWrapper, listenerOptions);
      if (resetOnTouchEnds) useEventListener(target, "touchend", reset, listenerOptions);
    }
    if (scroll && type === "page") useEventListener(window$1, "scroll", scrollHandlerWrapper, listenerOptions);
  }
  return {
    x,
    y,
    sourceType
  };
}
function useMouseInElement(target, options = {}) {
  const { windowResize = true, windowScroll = true, handleOutside = true, window: window$1 = defaultWindow } = options;
  const type = options.type || "page";
  const { x, y, sourceType } = useMouse(options);
  const targetRef = shallowRef(target !== null && target !== void 0 ? target : window$1 === null || window$1 === void 0 ? void 0 : window$1.document.body);
  const elementX = shallowRef(0);
  const elementY = shallowRef(0);
  const elementPositionX = shallowRef(0);
  const elementPositionY = shallowRef(0);
  const elementHeight = shallowRef(0);
  const elementWidth = shallowRef(0);
  const isOutside = shallowRef(true);
  function update() {
    if (!window$1) return;
    const el = unrefElement(targetRef);
    if (!el || !(el instanceof Element)) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    elementPositionX.value = left + (type === "page" ? window$1.pageXOffset : 0);
    elementPositionY.value = top + (type === "page" ? window$1.pageYOffset : 0);
    elementHeight.value = height;
    elementWidth.value = width;
    const elX = x.value - elementPositionX.value;
    const elY = y.value - elementPositionY.value;
    isOutside.value = width === 0 || height === 0 || elX < 0 || elY < 0 || elX > width || elY > height;
    if (handleOutside || !isOutside.value) {
      elementX.value = elX;
      elementY.value = elY;
    }
  }
  const stopFnList = [];
  function stop() {
    stopFnList.forEach((fn) => fn());
    stopFnList.length = 0;
  }
  tryOnMounted(() => {
    update();
  });
  if (window$1) {
    const { stop: stopResizeObserver } = useResizeObserver(targetRef, update);
    const { stop: stopMutationObserver } = useMutationObserver(targetRef, update, { attributeFilter: ["style", "class"] });
    const stopWatch = watch([
      targetRef,
      x,
      y
    ], update);
    stopFnList.push(stopResizeObserver, stopMutationObserver, stopWatch);
    useEventListener(document, "mouseleave", () => isOutside.value = true, { passive: true });
    if (windowScroll) stopFnList.push(useEventListener("scroll", update, {
      capture: true,
      passive: true
    }));
    if (windowResize) stopFnList.push(useEventListener("resize", update, { passive: true }));
  }
  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop
  };
}
function useMousePressed(options = {}) {
  const { touch = true, drag = true, capture = false, initialValue = false, window: window$1 = defaultWindow } = options;
  const pressed = shallowRef(initialValue);
  const sourceType = shallowRef(null);
  if (!window$1) return {
    pressed,
    sourceType
  };
  const onPressed = (srcType) => (event) => {
    var _options$onPressed;
    pressed.value = true;
    sourceType.value = srcType;
    (_options$onPressed = options.onPressed) === null || _options$onPressed === void 0 || _options$onPressed.call(options, event);
  };
  const onReleased = (event) => {
    var _options$onReleased;
    pressed.value = false;
    sourceType.value = null;
    (_options$onReleased = options.onReleased) === null || _options$onReleased === void 0 || _options$onReleased.call(options, event);
  };
  const target = computed(() => unrefElement(options.target) || window$1);
  const listenerOptions = {
    passive: true,
    capture
  };
  useEventListener(target, "mousedown", onPressed("mouse"), listenerOptions);
  useEventListener(window$1, "mouseleave", onReleased, listenerOptions);
  useEventListener(window$1, "mouseup", onReleased, listenerOptions);
  if (drag) {
    useEventListener(target, "dragstart", onPressed("mouse"), listenerOptions);
    useEventListener(window$1, "drop", onReleased, listenerOptions);
    useEventListener(window$1, "dragend", onReleased, listenerOptions);
  }
  if (touch) {
    useEventListener(target, "touchstart", onPressed("touch"), listenerOptions);
    useEventListener(window$1, "touchend", onReleased, listenerOptions);
    useEventListener(window$1, "touchcancel", onReleased, listenerOptions);
  }
  return {
    pressed,
    sourceType
  };
}
function useNavigatorLanguage(options = {}) {
  const { window: window$1 = defaultWindow } = options;
  const navigator$1 = window$1 === null || window$1 === void 0 ? void 0 : window$1.navigator;
  const isSupported = useSupported(() => navigator$1 && "language" in navigator$1);
  const language = shallowRef(navigator$1 === null || navigator$1 === void 0 ? void 0 : navigator$1.language);
  useEventListener(window$1, "languagechange", () => {
    if (navigator$1) language.value = navigator$1.language;
  }, { passive: true });
  return {
    isSupported,
    language
  };
}
function useNetwork(options = {}) {
  const { window: window$1 = defaultWindow } = options;
  const navigator$1 = window$1 === null || window$1 === void 0 ? void 0 : window$1.navigator;
  const isSupported = useSupported(() => navigator$1 && "connection" in navigator$1);
  const isOnline = shallowRef(true);
  const saveData = shallowRef(false);
  const offlineAt = shallowRef(void 0);
  const onlineAt = shallowRef(void 0);
  const downlink = shallowRef(void 0);
  const downlinkMax = shallowRef(void 0);
  const rtt = shallowRef(void 0);
  const effectiveType = shallowRef(void 0);
  const type = shallowRef("unknown");
  const connection = isSupported.value && navigator$1.connection;
  function updateNetworkInformation() {
    if (!navigator$1) return;
    isOnline.value = navigator$1.onLine;
    offlineAt.value = isOnline.value ? void 0 : Date.now();
    onlineAt.value = isOnline.value ? Date.now() : void 0;
    if (connection) {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    }
  }
  const listenerOptions = { passive: true };
  if (window$1) {
    useEventListener(window$1, "offline", () => {
      isOnline.value = false;
      offlineAt.value = Date.now();
    }, listenerOptions);
    useEventListener(window$1, "online", () => {
      isOnline.value = true;
      onlineAt.value = Date.now();
    }, listenerOptions);
  }
  if (connection) useEventListener(connection, "change", updateNetworkInformation, listenerOptions);
  updateNetworkInformation();
  return {
    isSupported,
    isOnline: readonly(isOnline),
    saveData: readonly(saveData),
    offlineAt: readonly(offlineAt),
    onlineAt: readonly(onlineAt),
    downlink: readonly(downlink),
    downlinkMax: readonly(downlinkMax),
    effectiveType: readonly(effectiveType),
    rtt: readonly(rtt),
    type: readonly(type)
  };
}
function useNow(options = {}) {
  const { controls: exposeControls = false, interval = "requestAnimationFrame", immediate = true } = options;
  const now2 = ref(/* @__PURE__ */ new Date());
  const update = () => now2.value = /* @__PURE__ */ new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate }) : useIntervalFn(update, interval, { immediate });
  if (exposeControls) return {
    now: now2,
    ...controls
  };
  else return now2;
}
function useObjectUrl(object) {
  const url = shallowRef();
  const release = () => {
    if (url.value) URL.revokeObjectURL(url.value);
    url.value = void 0;
  };
  watch(() => toValue(object), (newObject) => {
    release();
    if (newObject) url.value = URL.createObjectURL(newObject);
  }, { immediate: true });
  tryOnScopeDispose(release);
  return readonly(url);
}
function useClamp(value, min, max) {
  if (typeof value === "function" || isReadonly(value)) return computed(() => clamp(toValue(value), toValue(min), toValue(max)));
  const _value = ref(value);
  return computed({
    get() {
      return _value.value = clamp(_value.value, toValue(min), toValue(max));
    },
    set(value$1) {
      _value.value = clamp(value$1, toValue(min), toValue(max));
    }
  });
}
function useOffsetPagination(options) {
  const { total = Number.POSITIVE_INFINITY, pageSize = 10, page = 1, onPageChange = noop, onPageSizeChange = noop, onPageCountChange = noop } = options;
  const currentPageSize = useClamp(pageSize, 1, Number.POSITIVE_INFINITY);
  const pageCount = computed(() => Math.max(1, Math.ceil(toValue(total) / toValue(currentPageSize))));
  const currentPage = useClamp(page, 1, pageCount);
  const isFirstPage = computed(() => currentPage.value === 1);
  const isLastPage = computed(() => currentPage.value === pageCount.value);
  if (isRef(page)) syncRef(page, currentPage, { direction: isReadonly(page) ? "ltr" : "both" });
  if (isRef(pageSize)) syncRef(pageSize, currentPageSize, { direction: isReadonly(pageSize) ? "ltr" : "both" });
  function prev() {
    currentPage.value--;
  }
  function next() {
    currentPage.value++;
  }
  const returnValue = {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next
  };
  watch(currentPage, () => {
    onPageChange(reactive(returnValue));
  });
  watch(currentPageSize, () => {
    onPageSizeChange(reactive(returnValue));
  });
  watch(pageCount, () => {
    onPageCountChange(reactive(returnValue));
  });
  return returnValue;
}
function useOnline(options = {}) {
  const { isOnline } = useNetwork(options);
  return isOnline;
}
function usePageLeave(options = {}) {
  const { window: window$1 = defaultWindow } = options;
  const isLeft = shallowRef(false);
  const handler = (event) => {
    if (!window$1) return;
    event = event || window$1.event;
    isLeft.value = !(event.relatedTarget || event.toElement);
  };
  if (window$1) {
    const listenerOptions = { passive: true };
    useEventListener(window$1, "mouseout", handler, listenerOptions);
    useEventListener(window$1.document, "mouseleave", handler, listenerOptions);
    useEventListener(window$1.document, "mouseenter", handler, listenerOptions);
  }
  return isLeft;
}
function useScreenOrientation(options = {}) {
  const { window: window$1 = defaultWindow } = options;
  const isSupported = useSupported(() => window$1 && "screen" in window$1 && "orientation" in window$1.screen);
  const screenOrientation = isSupported.value ? window$1.screen.orientation : {};
  const orientation = ref(screenOrientation.type);
  const angle = shallowRef(screenOrientation.angle || 0);
  if (isSupported.value) useEventListener(window$1, "orientationchange", () => {
    orientation.value = screenOrientation.type;
    angle.value = screenOrientation.angle;
  }, { passive: true });
  const lockOrientation = (type) => {
    if (isSupported.value && typeof screenOrientation.lock === "function") return screenOrientation.lock(type);
    return Promise.reject(new Error("Not supported"));
  };
  const unlockOrientation = () => {
    if (isSupported.value && typeof screenOrientation.unlock === "function") screenOrientation.unlock();
  };
  return {
    isSupported,
    orientation,
    angle,
    lockOrientation,
    unlockOrientation
  };
}
function useParallax(target, options = {}) {
  const { deviceOrientationTiltAdjust = (i) => i, deviceOrientationRollAdjust = (i) => i, mouseTiltAdjust = (i) => i, mouseRollAdjust = (i) => i, window: window$1 = defaultWindow } = options;
  const orientation = reactive(useDeviceOrientation({ window: window$1 }));
  const screenOrientation = reactive(useScreenOrientation({ window: window$1 }));
  const { elementX: x, elementY: y, elementWidth: width, elementHeight: height } = useMouseInElement(target, {
    handleOutside: false,
    window: window$1
  });
  const source = computed(() => {
    if (orientation.isSupported && (orientation.alpha != null && orientation.alpha !== 0 || orientation.gamma != null && orientation.gamma !== 0)) return "deviceOrientation";
    return "mouse";
  });
  return {
    roll: computed(() => {
      if (source.value === "deviceOrientation") {
        let value;
        switch (screenOrientation.orientation) {
          case "landscape-primary":
            value = orientation.gamma / 90;
            break;
          case "landscape-secondary":
            value = -orientation.gamma / 90;
            break;
          case "portrait-primary":
            value = -orientation.beta / 90;
            break;
          case "portrait-secondary":
            value = orientation.beta / 90;
            break;
          default:
            value = -orientation.beta / 90;
        }
        return deviceOrientationRollAdjust(value);
      } else return mouseRollAdjust(-(y.value - height.value / 2) / height.value);
    }),
    tilt: computed(() => {
      if (source.value === "deviceOrientation") {
        let value;
        switch (screenOrientation.orientation) {
          case "landscape-primary":
            value = orientation.beta / 90;
            break;
          case "landscape-secondary":
            value = -orientation.beta / 90;
            break;
          case "portrait-primary":
            value = orientation.gamma / 90;
            break;
          case "portrait-secondary":
            value = -orientation.gamma / 90;
            break;
          default:
            value = orientation.gamma / 90;
        }
        return deviceOrientationTiltAdjust(value);
      } else return mouseTiltAdjust((x.value - width.value / 2) / width.value);
    }),
    source
  };
}
function useParentElement(element = useCurrentElement()) {
  const parentElement = shallowRef();
  const update = () => {
    const el = unrefElement(element);
    if (el) parentElement.value = el.parentElement;
  };
  tryOnMounted(update);
  watch(() => toValue(element), update);
  return parentElement;
}
function usePerformanceObserver(options, callback) {
  const { window: window$1 = defaultWindow, immediate = true, ...performanceOptions } = options;
  const isSupported = useSupported(() => window$1 && "PerformanceObserver" in window$1);
  let observer;
  const stop = () => {
    observer === null || observer === void 0 || observer.disconnect();
  };
  const start = () => {
    if (isSupported.value) {
      stop();
      observer = new PerformanceObserver(callback);
      observer.observe(performanceOptions);
    }
  };
  tryOnScopeDispose(stop);
  if (immediate) start();
  return {
    isSupported,
    start,
    stop
  };
}
var defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
var keys = Object.keys(defaultState);
function usePointer(options = {}) {
  const { target = defaultWindow } = options;
  const isInside = shallowRef(false);
  const state = shallowRef(options.initialValue || {});
  Object.assign(state.value, defaultState, state.value);
  const handler = (event) => {
    isInside.value = true;
    if (options.pointerTypes && !options.pointerTypes.includes(event.pointerType)) return;
    state.value = objectPick(event, keys, false);
  };
  if (target) {
    const listenerOptions = { passive: true };
    useEventListener(target, [
      "pointerdown",
      "pointermove",
      "pointerup"
    ], handler, listenerOptions);
    useEventListener(target, "pointerleave", () => isInside.value = false, listenerOptions);
  }
  return {
    ...toRefs2(state),
    isInside
  };
}
function usePointerLock(target, options = {}) {
  const { document: document$1 = defaultDocument } = options;
  const isSupported = useSupported(() => document$1 && "pointerLockElement" in document$1);
  const element = shallowRef();
  const triggerElement = shallowRef();
  let targetElement;
  if (isSupported.value) {
    const listenerOptions = { passive: true };
    useEventListener(document$1, "pointerlockchange", () => {
      var _pointerLockElement;
      const currentElement = (_pointerLockElement = document$1.pointerLockElement) !== null && _pointerLockElement !== void 0 ? _pointerLockElement : element.value;
      if (targetElement && currentElement === targetElement) {
        element.value = document$1.pointerLockElement;
        if (!element.value) targetElement = triggerElement.value = null;
      }
    }, listenerOptions);
    useEventListener(document$1, "pointerlockerror", () => {
      var _pointerLockElement2;
      const currentElement = (_pointerLockElement2 = document$1.pointerLockElement) !== null && _pointerLockElement2 !== void 0 ? _pointerLockElement2 : element.value;
      if (targetElement && currentElement === targetElement) {
        const action = document$1.pointerLockElement ? "release" : "acquire";
        throw new Error(`Failed to ${action} pointer lock.`);
      }
    }, listenerOptions);
  }
  async function lock(e) {
    var _unrefElement;
    if (!isSupported.value) throw new Error("Pointer Lock API is not supported by your browser.");
    triggerElement.value = e instanceof Event ? e.currentTarget : null;
    targetElement = e instanceof Event ? (_unrefElement = unrefElement(target)) !== null && _unrefElement !== void 0 ? _unrefElement : triggerElement.value : unrefElement(e);
    if (!targetElement) throw new Error("Target element undefined.");
    targetElement.requestPointerLock();
    return await until(element).toBe(targetElement);
  }
  async function unlock() {
    if (!element.value) return false;
    document$1.exitPointerLock();
    await until(element).toBeNull();
    return true;
  }
  return {
    isSupported,
    element,
    triggerElement,
    lock,
    unlock
  };
}
function usePointerSwipe(target, options = {}) {
  const targetRef = toRef2(target);
  const { threshold = 50, onSwipe, onSwipeEnd, onSwipeStart, disableTextSelect = false } = options;
  const posStart = reactive({
    x: 0,
    y: 0
  });
  const updatePosStart = (x, y) => {
    posStart.x = x;
    posStart.y = y;
  };
  const posEnd = reactive({
    x: 0,
    y: 0
  });
  const updatePosEnd = (x, y) => {
    posEnd.x = x;
    posEnd.y = y;
  };
  const distanceX = computed(() => posStart.x - posEnd.x);
  const distanceY = computed(() => posStart.y - posEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = computed(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
  const isSwiping = shallowRef(false);
  const isPointerDown = shallowRef(false);
  const direction = computed(() => {
    if (!isThresholdExceeded.value) return "none";
    if (abs(distanceX.value) > abs(distanceY.value)) return distanceX.value > 0 ? "left" : "right";
    else return distanceY.value > 0 ? "up" : "down";
  });
  const eventIsAllowed = (e) => {
    var _ref, _options$pointerTypes, _options$pointerTypes2;
    const isReleasingButton = e.buttons === 0;
    const isPrimaryButton = e.buttons === 1;
    return (_ref = (_options$pointerTypes = (_options$pointerTypes2 = options.pointerTypes) === null || _options$pointerTypes2 === void 0 ? void 0 : _options$pointerTypes2.includes(e.pointerType)) !== null && _options$pointerTypes !== void 0 ? _options$pointerTypes : isReleasingButton || isPrimaryButton) !== null && _ref !== void 0 ? _ref : true;
  };
  const listenerOptions = { passive: true };
  const stops = [
    useEventListener(target, "pointerdown", (e) => {
      if (!eventIsAllowed(e)) return;
      isPointerDown.value = true;
      const eventTarget = e.target;
      eventTarget === null || eventTarget === void 0 || eventTarget.setPointerCapture(e.pointerId);
      const { clientX: x, clientY: y } = e;
      updatePosStart(x, y);
      updatePosEnd(x, y);
      onSwipeStart === null || onSwipeStart === void 0 || onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "pointermove", (e) => {
      if (!eventIsAllowed(e)) return;
      if (!isPointerDown.value) return;
      const { clientX: x, clientY: y } = e;
      updatePosEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value) isSwiping.value = true;
      if (isSwiping.value) onSwipe === null || onSwipe === void 0 || onSwipe(e);
    }, listenerOptions),
    useEventListener(target, "pointerup", (e) => {
      if (!eventIsAllowed(e)) return;
      if (isSwiping.value) onSwipeEnd === null || onSwipeEnd === void 0 || onSwipeEnd(e, direction.value);
      isPointerDown.value = false;
      isSwiping.value = false;
    }, listenerOptions)
  ];
  tryOnMounted(() => {
    var _targetRef$value;
    (_targetRef$value = targetRef.value) === null || _targetRef$value === void 0 || (_targetRef$value = _targetRef$value.style) === null || _targetRef$value === void 0 || _targetRef$value.setProperty("touch-action", "pan-y");
    if (disableTextSelect) {
      var _targetRef$value2, _targetRef$value3, _targetRef$value4;
      (_targetRef$value2 = targetRef.value) === null || _targetRef$value2 === void 0 || (_targetRef$value2 = _targetRef$value2.style) === null || _targetRef$value2 === void 0 || _targetRef$value2.setProperty("-webkit-user-select", "none");
      (_targetRef$value3 = targetRef.value) === null || _targetRef$value3 === void 0 || (_targetRef$value3 = _targetRef$value3.style) === null || _targetRef$value3 === void 0 || _targetRef$value3.setProperty("-ms-user-select", "none");
      (_targetRef$value4 = targetRef.value) === null || _targetRef$value4 === void 0 || (_targetRef$value4 = _targetRef$value4.style) === null || _targetRef$value4 === void 0 || _targetRef$value4.setProperty("user-select", "none");
    }
  });
  const stop = () => stops.forEach((s) => s());
  return {
    isSwiping: readonly(isSwiping),
    direction: readonly(direction),
    posStart: readonly(posStart),
    posEnd: readonly(posEnd),
    distanceX,
    distanceY,
    stop
  };
}
function usePreferredColorScheme(options) {
  const isLight = useMediaQuery("(prefers-color-scheme: light)", options);
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", options);
  return computed(() => {
    if (isDark.value) return "dark";
    if (isLight.value) return "light";
    return "no-preference";
  });
}
function usePreferredContrast(options) {
  const isMore = useMediaQuery("(prefers-contrast: more)", options);
  const isLess = useMediaQuery("(prefers-contrast: less)", options);
  const isCustom = useMediaQuery("(prefers-contrast: custom)", options);
  return computed(() => {
    if (isMore.value) return "more";
    if (isLess.value) return "less";
    if (isCustom.value) return "custom";
    return "no-preference";
  });
}
function usePreferredLanguages(options = {}) {
  const { window: window$1 = defaultWindow } = options;
  if (!window$1) return shallowRef(["en"]);
  const navigator$1 = window$1.navigator;
  const value = shallowRef(navigator$1.languages);
  useEventListener(window$1, "languagechange", () => {
    value.value = navigator$1.languages;
  }, { passive: true });
  return value;
}
function usePreferredReducedMotion(options) {
  const isReduced = useMediaQuery("(prefers-reduced-motion: reduce)", options);
  return computed(() => {
    if (isReduced.value) return "reduce";
    return "no-preference";
  });
}
function usePreferredReducedTransparency(options) {
  const isReduced = useMediaQuery("(prefers-reduced-transparency: reduce)", options);
  return computed(() => {
    if (isReduced.value) return "reduce";
    return "no-preference";
  });
}
function usePrevious(value, initialValue) {
  const previous = shallowRef(initialValue);
  watch(toRef2(value), (_, oldValue) => {
    previous.value = oldValue;
  }, { flush: "sync" });
  return readonly(previous);
}
var topVarName = "--vueuse-safe-area-top";
var rightVarName = "--vueuse-safe-area-right";
var bottomVarName = "--vueuse-safe-area-bottom";
var leftVarName = "--vueuse-safe-area-left";
function useScreenSafeArea() {
  const top = shallowRef("");
  const right = shallowRef("");
  const bottom = shallowRef("");
  const left = shallowRef("");
  if (isClient) {
    const topCssVar = useCssVar(topVarName);
    const rightCssVar = useCssVar(rightVarName);
    const bottomCssVar = useCssVar(bottomVarName);
    const leftCssVar = useCssVar(leftVarName);
    topCssVar.value = "env(safe-area-inset-top, 0px)";
    rightCssVar.value = "env(safe-area-inset-right, 0px)";
    bottomCssVar.value = "env(safe-area-inset-bottom, 0px)";
    leftCssVar.value = "env(safe-area-inset-left, 0px)";
    tryOnMounted(update);
    useEventListener("resize", useDebounceFn(update), { passive: true });
  }
  function update() {
    top.value = getValue(topVarName);
    right.value = getValue(rightVarName);
    bottom.value = getValue(bottomVarName);
    left.value = getValue(leftVarName);
  }
  return {
    top,
    right,
    bottom,
    left,
    update
  };
}
function getValue(position) {
  return getComputedStyle(document.documentElement).getPropertyValue(position);
}
function useScriptTag(src, onLoaded = noop, options = {}) {
  const { immediate = true, manual = false, type = "text/javascript", async = true, crossOrigin, referrerPolicy, noModule, defer, document: document$1 = defaultDocument, attrs = {}, nonce = void 0 } = options;
  const scriptTag = shallowRef(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el$1) => {
      scriptTag.value = el$1;
      resolve(el$1);
      return el$1;
    };
    if (!document$1) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document$1.querySelector(`script[src="${toValue(src)}"]`);
    if (!el) {
      el = document$1.createElement("script");
      el.type = type;
      el.async = async;
      el.src = toValue(src);
      if (defer) el.defer = defer;
      if (crossOrigin) el.crossOrigin = crossOrigin;
      if (noModule) el.noModule = noModule;
      if (referrerPolicy) el.referrerPolicy = referrerPolicy;
      if (nonce) el.nonce = nonce;
      Object.entries(attrs).forEach(([name, value]) => el === null || el === void 0 ? void 0 : el.setAttribute(name, value));
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) resolveWithElement(el);
    const listenerOptions = { passive: true };
    useEventListener(el, "error", (event) => reject(event), listenerOptions);
    useEventListener(el, "abort", (event) => reject(event), listenerOptions);
    useEventListener(el, "load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    }, listenerOptions);
    if (shouldAppend) el = document$1.head.appendChild(el);
    if (!waitForScriptLoad) resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise) _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document$1) return;
    _promise = null;
    if (scriptTag.value) scriptTag.value = null;
    const el = document$1.querySelector(`script[src="${toValue(src)}"]`);
    if (el) document$1.head.removeChild(el);
  };
  if (immediate && !manual) tryOnMounted(load);
  if (!manual) tryOnUnmounted(unload);
  return {
    scriptTag,
    load,
    unload
  };
}
function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
  else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY") return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  const _target = e.target;
  if (checkOverflowScroll(_target)) return false;
  if (e.touches.length > 1) return true;
  if (e.preventDefault) e.preventDefault();
  return false;
}
var elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = shallowRef(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow = "";
  watch(toRef2(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele)) elInitialOverflow.set(ele, ele.style.overflow);
      if (ele.style.overflow !== "hidden") initialOverflow = ele.style.overflow;
      if (ele.style.overflow === "hidden") return isLocked.value = true;
      if (isLocked.value) return ele.style.overflow = "hidden";
    }
  }, { immediate: true });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value) return;
    if (isIOS) stopTouchMoveListener = useEventListener(el, "touchmove", (e) => {
      preventDefault(e);
    }, { passive: false });
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value) return;
    if (isIOS) stopTouchMoveListener === null || stopTouchMoveListener === void 0 || stopTouchMoveListener();
    el.style.overflow = initialOverflow;
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v) lock();
      else unlock();
    }
  });
}
function useSessionStorage(key, initialValue, options = {}) {
  const { window: window$1 = defaultWindow } = options;
  return useStorage(key, initialValue, window$1 === null || window$1 === void 0 ? void 0 : window$1.sessionStorage, options);
}
function useShare(shareOptions = {}, options = {}) {
  const { navigator: navigator$1 = defaultNavigator } = options;
  const _navigator = navigator$1;
  const isSupported = useSupported(() => _navigator && "canShare" in _navigator);
  const share = async (overrideOptions = {}) => {
    if (isSupported.value) {
      const data = {
        ...toValue(shareOptions),
        ...toValue(overrideOptions)
      };
      let granted = false;
      if (_navigator.canShare) granted = _navigator.canShare(data);
      if (granted) return _navigator.share(data);
    }
  };
  return {
    isSupported,
    share
  };
}
var defaultSortFn = (source, compareFn) => source.sort(compareFn);
var defaultCompare = (a, b) => a - b;
function useSorted(...args) {
  const [source] = args;
  let compareFn = defaultCompare;
  let options = {};
  if (args.length === 2) if (typeof args[1] === "object") {
    var _options$compareFn;
    options = args[1];
    compareFn = (_options$compareFn = options.compareFn) !== null && _options$compareFn !== void 0 ? _options$compareFn : defaultCompare;
  } else {
    var _args$;
    compareFn = (_args$ = args[1]) !== null && _args$ !== void 0 ? _args$ : defaultCompare;
  }
  else if (args.length > 2) {
    var _args$2, _args$3;
    compareFn = (_args$2 = args[1]) !== null && _args$2 !== void 0 ? _args$2 : defaultCompare;
    options = (_args$3 = args[2]) !== null && _args$3 !== void 0 ? _args$3 : {};
  }
  const { dirty = false, sortFn = defaultSortFn } = options;
  if (!dirty) return computed(() => sortFn([...toValue(source)], compareFn));
  watchEffect(() => {
    const result = sortFn(toValue(source), compareFn);
    if (isRef(source)) source.value = result;
    else source.splice(0, source.length, ...result);
  });
  return source;
}
function useSpeechRecognition(options = {}) {
  const { interimResults = true, continuous = true, maxAlternatives = 1, window: window$1 = defaultWindow } = options;
  const lang = toRef2(options.lang || "en-US");
  const isListening = shallowRef(false);
  const isFinal = shallowRef(false);
  const result = shallowRef("");
  const error = shallowRef(void 0);
  let recognition;
  const start = () => {
    isListening.value = true;
  };
  const stop = () => {
    isListening.value = false;
  };
  const toggle = (value = !isListening.value) => {
    if (value) start();
    else stop();
  };
  const SpeechRecognition = window$1 && (window$1.SpeechRecognition || window$1.webkitSpeechRecognition);
  const isSupported = useSupported(() => SpeechRecognition);
  if (isSupported.value) {
    recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = toValue(lang);
    recognition.maxAlternatives = maxAlternatives;
    recognition.onstart = () => {
      isListening.value = true;
      isFinal.value = false;
    };
    watch(lang, (lang$1) => {
      if (recognition && !isListening.value) recognition.lang = lang$1;
    });
    recognition.onresult = (event) => {
      const currentResult = event.results[event.resultIndex];
      const { transcript } = currentResult[0];
      isFinal.value = currentResult.isFinal;
      result.value = transcript;
      error.value = void 0;
    };
    recognition.onerror = (event) => {
      error.value = event;
    };
    recognition.onend = () => {
      isListening.value = false;
      recognition.lang = toValue(lang);
    };
    watch(isListening, (newValue, oldValue) => {
      if (newValue === oldValue) return;
      if (newValue) recognition.start();
      else recognition.stop();
    });
  }
  tryOnScopeDispose(() => {
    stop();
  });
  return {
    isSupported,
    isListening,
    isFinal,
    recognition,
    result,
    error,
    toggle,
    start,
    stop
  };
}
function useSpeechSynthesis(text, options = {}) {
  const { pitch = 1, rate = 1, volume = 1, window: window$1 = defaultWindow, onBoundary } = options;
  const synth = window$1 && window$1.speechSynthesis;
  const isSupported = useSupported(() => synth);
  const isPlaying = shallowRef(false);
  const status = shallowRef("init");
  const spokenText = toRef2(text || "");
  const lang = toRef2(options.lang || "en-US");
  const error = shallowRef(void 0);
  const toggle = (value = !isPlaying.value) => {
    isPlaying.value = value;
  };
  const bindEventsForUtterance = (utterance$1) => {
    utterance$1.lang = toValue(lang);
    utterance$1.voice = toValue(options.voice) || null;
    utterance$1.pitch = toValue(pitch);
    utterance$1.rate = toValue(rate);
    utterance$1.volume = toValue(volume);
    utterance$1.onstart = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance$1.onpause = () => {
      isPlaying.value = false;
      status.value = "pause";
    };
    utterance$1.onresume = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance$1.onend = () => {
      isPlaying.value = false;
      status.value = "end";
    };
    utterance$1.onerror = (event) => {
      error.value = event;
    };
    utterance$1.onboundary = (event) => {
      onBoundary === null || onBoundary === void 0 || onBoundary(event);
    };
  };
  const utterance = computed(() => {
    isPlaying.value = false;
    status.value = "init";
    const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
    bindEventsForUtterance(newUtterance);
    return newUtterance;
  });
  const speak = () => {
    synth.cancel();
    if (utterance) synth.speak(utterance.value);
  };
  const stop = () => {
    synth.cancel();
    isPlaying.value = false;
  };
  if (isSupported.value) {
    bindEventsForUtterance(utterance.value);
    watch(lang, (lang$1) => {
      if (utterance.value && !isPlaying.value) utterance.value.lang = lang$1;
    });
    if (options.voice) watch(options.voice, () => {
      synth.cancel();
    });
    watch(isPlaying, () => {
      if (isPlaying.value) synth.resume();
      else synth.pause();
    });
  }
  tryOnScopeDispose(() => {
    isPlaying.value = false;
  });
  return {
    isSupported,
    isPlaying,
    status,
    utterance,
    error,
    stop,
    toggle,
    speak
  };
}
function useStepper(steps, initialStep) {
  const stepsRef = ref(steps);
  const stepNames = computed(() => Array.isArray(stepsRef.value) ? stepsRef.value : Object.keys(stepsRef.value));
  const index = ref(stepNames.value.indexOf(initialStep !== null && initialStep !== void 0 ? initialStep : stepNames.value[0]));
  const current = computed(() => at(index.value));
  const isFirst = computed(() => index.value === 0);
  const isLast = computed(() => index.value === stepNames.value.length - 1);
  const next = computed(() => stepNames.value[index.value + 1]);
  const previous = computed(() => stepNames.value[index.value - 1]);
  function at(index$1) {
    if (Array.isArray(stepsRef.value)) return stepsRef.value[index$1];
    return stepsRef.value[stepNames.value[index$1]];
  }
  function get2(step) {
    if (!stepNames.value.includes(step)) return;
    return at(stepNames.value.indexOf(step));
  }
  function goTo(step) {
    if (stepNames.value.includes(step)) index.value = stepNames.value.indexOf(step);
  }
  function goToNext() {
    if (isLast.value) return;
    index.value++;
  }
  function goToPrevious() {
    if (isFirst.value) return;
    index.value--;
  }
  function goBackTo(step) {
    if (isAfter(step)) goTo(step);
  }
  function isNext(step) {
    return stepNames.value.indexOf(step) === index.value + 1;
  }
  function isPrevious(step) {
    return stepNames.value.indexOf(step) === index.value - 1;
  }
  function isCurrent(step) {
    return stepNames.value.indexOf(step) === index.value;
  }
  function isBefore(step) {
    return index.value < stepNames.value.indexOf(step);
  }
  function isAfter(step) {
    return index.value > stepNames.value.indexOf(step);
  }
  return {
    steps: stepsRef,
    stepNames,
    index,
    current,
    next,
    previous,
    isFirst,
    isLast,
    at,
    get: get2,
    goTo,
    goToNext,
    goToPrevious,
    goBackTo,
    isNext,
    isPrevious,
    isCurrent,
    isBefore,
    isAfter
  };
}
function useStorageAsync(key, initialValue, storage, options = {}) {
  var _options$serializer;
  const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window: window$1 = defaultWindow, eventFilter, onError = (e) => {
    console.error(e);
  }, onReady } = options;
  const rawInit = toValue(initialValue);
  const type = guessSerializerType(rawInit);
  const data = (shallow ? shallowRef : ref)(toValue(initialValue));
  const serializer = (_options$serializer = options.serializer) !== null && _options$serializer !== void 0 ? _options$serializer : StorageSerializers[type];
  if (!storage) try {
    storage = getSSRHandler("getDefaultStorageAsync", () => defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.localStorage)();
  } catch (e) {
    onError(e);
  }
  async function read(event) {
    if (!storage || event && event.key !== key) return;
    try {
      const rawValue = event ? event.newValue : await storage.getItem(key);
      if (rawValue == null) {
        data.value = rawInit;
        if (writeDefaults && rawInit !== null) await storage.setItem(key, await serializer.write(rawInit));
      } else if (mergeDefaults) {
        const value = await serializer.read(rawValue);
        if (typeof mergeDefaults === "function") data.value = mergeDefaults(value, rawInit);
        else if (type === "object" && !Array.isArray(value)) data.value = {
          ...rawInit,
          ...value
        };
        else data.value = value;
      } else data.value = await serializer.read(rawValue);
    } catch (e) {
      onError(e);
    }
  }
  const promise = new Promise((resolve) => {
    read().then(() => {
      onReady === null || onReady === void 0 || onReady(data.value);
      resolve(data);
    });
  });
  if (window$1 && listenToStorageChanges) useEventListener(window$1, "storage", (e) => Promise.resolve().then(() => read(e)), { passive: true });
  if (storage) watchWithFilter(data, async () => {
    try {
      if (data.value == null) await storage.removeItem(key);
      else await storage.setItem(key, await serializer.write(data.value));
    } catch (e) {
      onError(e);
    }
  }, {
    flush,
    deep,
    eventFilter
  });
  Object.assign(data, {
    then: promise.then.bind(promise),
    catch: promise.catch.bind(promise)
  });
  return data;
}
var _id = 0;
function useStyleTag(css, options = {}) {
  const isLoaded = shallowRef(false);
  const { document: document$1 = defaultDocument, immediate = true, manual = false, id = `vueuse_styletag_${++_id}` } = options;
  const cssRef = shallowRef(css);
  let stop = () => {
  };
  const load = () => {
    if (!document$1) return;
    const el = document$1.getElementById(id) || document$1.createElement("style");
    if (!el.isConnected) {
      el.id = id;
      if (options.nonce) el.nonce = options.nonce;
      if (options.media) el.media = options.media;
      document$1.head.appendChild(el);
    }
    if (isLoaded.value) return;
    stop = watch(cssRef, (value) => {
      el.textContent = value;
    }, { immediate: true });
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document$1 || !isLoaded.value) return;
    stop();
    document$1.head.removeChild(document$1.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual) tryOnMounted(load);
  if (!manual) tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded)
  };
}
function useSwipe(target, options = {}) {
  const { threshold = 50, onSwipe, onSwipeEnd, onSwipeStart, passive = true } = options;
  const coordsStart = reactive({
    x: 0,
    y: 0
  });
  const coordsEnd = reactive({
    x: 0,
    y: 0
  });
  const diffX = computed(() => coordsStart.x - coordsEnd.x);
  const diffY = computed(() => coordsStart.y - coordsEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = computed(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = shallowRef(false);
  const direction = computed(() => {
    if (!isThresholdExceeded.value) return "none";
    if (abs(diffX.value) > abs(diffY.value)) return diffX.value > 0 ? "left" : "right";
    else return diffY.value > 0 ? "up" : "down";
  });
  const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x;
    coordsStart.y = y;
  };
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x;
    coordsEnd.y = y;
  };
  const listenerOptions = {
    passive,
    capture: !passive
  };
  const onTouchEnd = (e) => {
    if (isSwiping.value) onSwipeEnd === null || onSwipeEnd === void 0 || onSwipeEnd(e, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener(target, "touchstart", (e) => {
      if (e.touches.length !== 1) return;
      const [x, y] = getTouchEventCoords(e);
      updateCoordsStart(x, y);
      updateCoordsEnd(x, y);
      onSwipeStart === null || onSwipeStart === void 0 || onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "touchmove", (e) => {
      if (e.touches.length !== 1) return;
      const [x, y] = getTouchEventCoords(e);
      updateCoordsEnd(x, y);
      if (listenerOptions.capture && !listenerOptions.passive && Math.abs(diffX.value) > Math.abs(diffY.value)) e.preventDefault();
      if (!isSwiping.value && isThresholdExceeded.value) isSwiping.value = true;
      if (isSwiping.value) onSwipe === null || onSwipe === void 0 || onSwipe(e);
    }, listenerOptions),
    useEventListener(target, ["touchend", "touchcancel"], onTouchEnd, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop
  };
}
function useTemplateRefsList() {
  const refs = ref([]);
  refs.value.set = (el) => {
    if (el) refs.value.push(el);
  };
  onBeforeUpdate(() => {
    refs.value.length = 0;
  });
  return refs;
}
function useTextDirection(options = {}) {
  const { document: document$1 = defaultDocument, selector = "html", observe = false, initialValue = "ltr" } = options;
  function getValue$1() {
    var _ref, _document$querySelect;
    return (_ref = document$1 === null || document$1 === void 0 || (_document$querySelect = document$1.querySelector(selector)) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getAttribute("dir")) !== null && _ref !== void 0 ? _ref : initialValue;
  }
  const dir = ref(getValue$1());
  tryOnMounted(() => dir.value = getValue$1());
  if (observe && document$1) useMutationObserver(document$1.querySelector(selector), () => dir.value = getValue$1(), { attributes: true });
  return computed({
    get() {
      return dir.value;
    },
    set(v) {
      var _document$querySelect2, _document$querySelect3;
      dir.value = v;
      if (!document$1) return;
      if (dir.value) (_document$querySelect2 = document$1.querySelector(selector)) === null || _document$querySelect2 === void 0 || _document$querySelect2.setAttribute("dir", dir.value);
      else (_document$querySelect3 = document$1.querySelector(selector)) === null || _document$querySelect3 === void 0 || _document$querySelect3.removeAttribute("dir");
    }
  });
}
function getRangesFromSelection(selection) {
  var _selection$rangeCount;
  const rangeCount = (_selection$rangeCount = selection.rangeCount) !== null && _selection$rangeCount !== void 0 ? _selection$rangeCount : 0;
  return Array.from({ length: rangeCount }, (_, i) => selection.getRangeAt(i));
}
function useTextSelection(options = {}) {
  var _window$getSelection;
  const { window: window$1 = defaultWindow } = options;
  const selection = shallowRef((_window$getSelection = window$1 === null || window$1 === void 0 ? void 0 : window$1.getSelection()) !== null && _window$getSelection !== void 0 ? _window$getSelection : null);
  const text = computed(() => {
    var _selection$value$toSt, _selection$value;
    return (_selection$value$toSt = (_selection$value = selection.value) === null || _selection$value === void 0 ? void 0 : _selection$value.toString()) !== null && _selection$value$toSt !== void 0 ? _selection$value$toSt : "";
  });
  const ranges = computed(() => selection.value ? getRangesFromSelection(selection.value) : []);
  const rects = computed(() => ranges.value.map((range) => range.getBoundingClientRect()));
  function onSelectionChange() {
    selection.value = null;
    if (window$1) selection.value = window$1.getSelection();
  }
  if (window$1) useEventListener(window$1.document, "selectionchange", onSelectionChange, { passive: true });
  return {
    text,
    rects,
    ranges,
    selection
  };
}
function tryRequestAnimationFrame(window$1 = defaultWindow, fn) {
  if (window$1 && typeof window$1.requestAnimationFrame === "function") window$1.requestAnimationFrame(fn);
  else fn();
}
function useTextareaAutosize(options = {}) {
  var _options$input, _options$styleProp;
  const { window: window$1 = defaultWindow } = options;
  const textarea = toRef2(options === null || options === void 0 ? void 0 : options.element);
  const input = toRef2((_options$input = options === null || options === void 0 ? void 0 : options.input) !== null && _options$input !== void 0 ? _options$input : "");
  const styleProp = (_options$styleProp = options === null || options === void 0 ? void 0 : options.styleProp) !== null && _options$styleProp !== void 0 ? _options$styleProp : "height";
  const textareaScrollHeight = shallowRef(1);
  const textareaOldWidth = shallowRef(0);
  function triggerResize() {
    var _textarea$value;
    if (!textarea.value) return;
    let height = "";
    textarea.value.style[styleProp] = "1px";
    textareaScrollHeight.value = (_textarea$value = textarea.value) === null || _textarea$value === void 0 ? void 0 : _textarea$value.scrollHeight;
    const _styleTarget = toValue(options === null || options === void 0 ? void 0 : options.styleTarget);
    if (_styleTarget) _styleTarget.style[styleProp] = `${textareaScrollHeight.value}px`;
    else height = `${textareaScrollHeight.value}px`;
    textarea.value.style[styleProp] = height;
  }
  watch([input, textarea], () => nextTick(triggerResize), { immediate: true });
  watch(textareaScrollHeight, () => {
    var _options$onResize;
    return options === null || options === void 0 || (_options$onResize = options.onResize) === null || _options$onResize === void 0 ? void 0 : _options$onResize.call(options);
  });
  useResizeObserver(textarea, ([{ contentRect }]) => {
    if (textareaOldWidth.value === contentRect.width) return;
    tryRequestAnimationFrame(window$1, () => {
      textareaOldWidth.value = contentRect.width;
      triggerResize();
    });
  });
  if (options === null || options === void 0 ? void 0 : options.watch) watch(options.watch, triggerResize, {
    immediate: true,
    deep: true
  });
  return {
    textarea,
    input,
    triggerResize
  };
}
function useThrottledRefHistory(source, options = {}) {
  const { throttle = 200, trailing = true } = options;
  const filter = throttleFilter(throttle, trailing);
  return { ...useRefHistory(source, {
    ...options,
    eventFilter: filter
  }) };
}
var DEFAULT_UNITS = [
  {
    max: 6e4,
    value: 1e3,
    name: "second"
  },
  {
    max: 276e4,
    value: 6e4,
    name: "minute"
  },
  {
    max: 72e6,
    value: 36e5,
    name: "hour"
  },
  {
    max: 5184e5,
    value: 864e5,
    name: "day"
  },
  {
    max: 24192e5,
    value: 6048e5,
    name: "week"
  },
  {
    max: 28512e6,
    value: 2592e6,
    name: "month"
  },
  {
    max: Number.POSITIVE_INFINITY,
    value: 31536e6,
    name: "year"
  }
];
var DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`,
  invalid: ""
};
function DEFAULT_FORMATTER(date) {
  return date.toISOString().slice(0, 10);
}
function useTimeAgo(time, options = {}) {
  const { controls: exposeControls = false, updateInterval = 3e4 } = options;
  const { now: now2, ...controls } = useNow({
    interval: updateInterval,
    controls: true
  });
  const timeAgo = computed(() => formatTimeAgo(new Date(toValue(time)), options, toValue(now2)));
  if (exposeControls) return {
    timeAgo,
    ...controls
  };
  else return timeAgo;
}
function formatTimeAgo(from, options = {}, now2 = Date.now()) {
  const { max, messages = DEFAULT_MESSAGES, fullDateFormatter = DEFAULT_FORMATTER, units = DEFAULT_UNITS, showSecond = false, rounding = "round" } = options;
  const roundFn = typeof rounding === "number" ? (n) => +n.toFixed(rounding) : Math[rounding];
  const diff = +now2 - +from;
  const absDiff = Math.abs(diff);
  function getValue$1(diff$1, unit) {
    return roundFn(Math.abs(diff$1) / unit.value);
  }
  function format(diff$1, unit) {
    const val = getValue$1(diff$1, unit);
    const past = diff$1 > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function") return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  if (absDiff < 6e4 && !showSecond) return messages.justNow;
  if (typeof max === "number" && absDiff > max) return fullDateFormatter(new Date(from));
  if (typeof max === "string") {
    var _units$find;
    const unitMax = (_units$find = units.find((i) => i.name === max)) === null || _units$find === void 0 ? void 0 : _units$find.max;
    if (unitMax && absDiff > unitMax) return fullDateFormatter(new Date(from));
  }
  for (const [idx, unit] of units.entries()) {
    if (getValue$1(diff, unit) <= 0 && units[idx - 1]) return format(diff, units[idx - 1]);
    if (absDiff < unit.max) return format(diff, unit);
  }
  return messages.invalid;
}
var UNITS = [
  {
    name: "year",
    ms: 31536e6
  },
  {
    name: "month",
    ms: 2592e6
  },
  {
    name: "week",
    ms: 6048e5
  },
  {
    name: "day",
    ms: 864e5
  },
  {
    name: "hour",
    ms: 36e5
  },
  {
    name: "minute",
    ms: 6e4
  },
  {
    name: "second",
    ms: 1e3
  }
];
function useTimeAgoIntl(time, options = {}) {
  const { controls: exposeControls = false, updateInterval = 3e4 } = options;
  const { now: now2, ...controls } = useNow({
    interval: updateInterval,
    controls: true
  });
  const result = computed(() => getTimeAgoIntlResult(new Date(toValue(time)), options, toValue(now2)));
  const parts = computed(() => result.value.parts);
  const timeAgoIntl = computed(() => formatTimeAgoIntlParts(parts.value, {
    ...options,
    locale: result.value.resolvedLocale
  }));
  return exposeControls ? {
    timeAgoIntl,
    parts,
    ...controls
  } : timeAgoIntl;
}
function formatTimeAgoIntl(from, options = {}, now2 = Date.now()) {
  const { parts, resolvedLocale } = getTimeAgoIntlResult(from, options, now2);
  return formatTimeAgoIntlParts(parts, {
    ...options,
    locale: resolvedLocale
  });
}
function getTimeAgoIntlResult(from, options = {}, now2 = Date.now()) {
  const { locale, relativeTimeFormatOptions = { numeric: "auto" } } = options;
  const rtf = new Intl.RelativeTimeFormat(locale, relativeTimeFormatOptions);
  const { locale: resolvedLocale } = rtf.resolvedOptions();
  const diff = +from - +now2;
  const absDiff = Math.abs(diff);
  for (const { name, ms } of UNITS) if (absDiff >= ms) return {
    resolvedLocale,
    parts: rtf.formatToParts(Math.round(diff / ms), name)
  };
  return {
    resolvedLocale,
    parts: rtf.formatToParts(0, "second")
  };
}
function formatTimeAgoIntlParts(parts, options = {}) {
  const { insertSpace = true, joinParts, locale } = options;
  if (typeof joinParts === "function") return joinParts(parts, locale);
  if (!insertSpace) return parts.map((part) => part.value).join("");
  return parts.map((part) => part.value.trim()).join(" ");
}
function useTimeoutPoll(fn, interval, options = {}) {
  const { immediate = true, immediateCallback = false } = options;
  const { start } = useTimeoutFn(loop, interval, { immediate });
  const isActive = shallowRef(false);
  async function loop() {
    if (!isActive.value) return;
    await fn();
    start();
  }
  function resume() {
    if (!isActive.value) {
      isActive.value = true;
      if (immediateCallback) fn();
      start();
    }
  }
  function pause() {
    isActive.value = false;
  }
  if (immediate && isClient) resume();
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}
function useTimestamp(options = {}) {
  const { controls: exposeControls = false, offset = 0, immediate = true, interval = "requestAnimationFrame", callback } = options;
  const ts = shallowRef(timestamp() + offset);
  const update = () => ts.value = timestamp() + offset;
  const cb = callback ? () => {
    update();
    callback(ts.value);
  } : update;
  const controls = interval === "requestAnimationFrame" ? useRafFn(cb, { immediate }) : useIntervalFn(cb, interval, { immediate });
  if (exposeControls) return {
    timestamp: ts,
    ...controls
  };
  else return ts;
}
function useTitle(newTitle = null, options = {}) {
  var _document$title, _ref;
  const { document: document$1 = defaultDocument, restoreOnUnmount = (t) => t } = options;
  const originalTitle = (_document$title = document$1 === null || document$1 === void 0 ? void 0 : document$1.title) !== null && _document$title !== void 0 ? _document$title : "";
  const title = toRef2((_ref = newTitle !== null && newTitle !== void 0 ? newTitle : document$1 === null || document$1 === void 0 ? void 0 : document$1.title) !== null && _ref !== void 0 ? _ref : null);
  const isReadonly$1 = !!(newTitle && typeof newTitle === "function");
  function format(t) {
    if (!("titleTemplate" in options)) return t;
    const template = options.titleTemplate || "%s";
    return typeof template === "function" ? template(t) : toValue(template).replace(/%s/g, t);
  }
  watch(title, (newValue, oldValue) => {
    if (newValue !== oldValue && document$1) document$1.title = format(newValue !== null && newValue !== void 0 ? newValue : "");
  }, { immediate: true });
  if (options.observe && !options.titleTemplate && document$1 && !isReadonly$1) {
    var _document$head;
    useMutationObserver((_document$head = document$1.head) === null || _document$head === void 0 ? void 0 : _document$head.querySelector("title"), () => {
      if (document$1 && document$1.title !== title.value) title.value = format(document$1.title);
    }, { childList: true });
  }
  tryOnScopeDispose(() => {
    if (restoreOnUnmount) {
      const restoredTitle = restoreOnUnmount(originalTitle, title.value || "");
      if (restoredTitle != null && document$1) document$1.title = restoredTitle;
    }
  });
  return title;
}
var _TransitionPresets = {
  easeInSine: [
    0.12,
    0,
    0.39,
    0
  ],
  easeOutSine: [
    0.61,
    1,
    0.88,
    1
  ],
  easeInOutSine: [
    0.37,
    0,
    0.63,
    1
  ],
  easeInQuad: [
    0.11,
    0,
    0.5,
    0
  ],
  easeOutQuad: [
    0.5,
    1,
    0.89,
    1
  ],
  easeInOutQuad: [
    0.45,
    0,
    0.55,
    1
  ],
  easeInCubic: [
    0.32,
    0,
    0.67,
    0
  ],
  easeOutCubic: [
    0.33,
    1,
    0.68,
    1
  ],
  easeInOutCubic: [
    0.65,
    0,
    0.35,
    1
  ],
  easeInQuart: [
    0.5,
    0,
    0.75,
    0
  ],
  easeOutQuart: [
    0.25,
    1,
    0.5,
    1
  ],
  easeInOutQuart: [
    0.76,
    0,
    0.24,
    1
  ],
  easeInQuint: [
    0.64,
    0,
    0.78,
    0
  ],
  easeOutQuint: [
    0.22,
    1,
    0.36,
    1
  ],
  easeInOutQuint: [
    0.83,
    0,
    0.17,
    1
  ],
  easeInExpo: [
    0.7,
    0,
    0.84,
    0
  ],
  easeOutExpo: [
    0.16,
    1,
    0.3,
    1
  ],
  easeInOutExpo: [
    0.87,
    0,
    0.13,
    1
  ],
  easeInCirc: [
    0.55,
    0,
    1,
    0.45
  ],
  easeOutCirc: [
    0,
    0.55,
    0.45,
    1
  ],
  easeInOutCirc: [
    0.85,
    0,
    0.15,
    1
  ],
  easeInBack: [
    0.36,
    0,
    0.66,
    -0.56
  ],
  easeOutBack: [
    0.34,
    1.56,
    0.64,
    1
  ],
  easeInOutBack: [
    0.68,
    -0.6,
    0.32,
    1.6
  ]
};
var TransitionPresets = Object.assign({}, { linear: identity }, _TransitionPresets);
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0) return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function lerp(a, b, alpha) {
  return a + alpha * (b - a);
}
function defaultInterpolation(a, b, t) {
  const aVal = toValue(a);
  const bVal = toValue(b);
  if (typeof aVal === "number" && typeof bVal === "number") return lerp(aVal, bVal, t);
  if (Array.isArray(aVal) && Array.isArray(bVal)) return aVal.map((v, i) => lerp(v, toValue(bVal[i]), t));
  throw new TypeError("Unknown transition type, specify an interpolation function.");
}
function normalizeEasing(easing) {
  var _toValue;
  return typeof easing === "function" ? easing : (_toValue = toValue(easing)) !== null && _toValue !== void 0 ? _toValue : identity;
}
function transition(source, from, to, options = {}) {
  var _toValue2;
  const { window: window$1 = defaultWindow } = options;
  const fromVal = toValue(from);
  const toVal = toValue(to);
  const duration = (_toValue2 = toValue(options.duration)) !== null && _toValue2 !== void 0 ? _toValue2 : 1e3;
  const startedAt = Date.now();
  const endAt = Date.now() + duration;
  const interpolation = typeof options.interpolation === "function" ? options.interpolation : defaultInterpolation;
  const trans = typeof options.easing !== "undefined" ? normalizeEasing(options.easing) : normalizeEasing(options.transition);
  const ease = typeof trans === "function" ? trans : createEasingFunction(trans);
  return new Promise((resolve) => {
    source.value = fromVal;
    const tick = () => {
      var _options$abort;
      if ((_options$abort = options.abort) === null || _options$abort === void 0 ? void 0 : _options$abort.call(options)) {
        resolve();
        return;
      }
      const now2 = Date.now();
      source.value = interpolation(fromVal, toVal, ease((now2 - startedAt) / duration));
      if (now2 < endAt) window$1 === null || window$1 === void 0 || window$1.requestAnimationFrame(tick);
      else {
        source.value = toVal;
        resolve();
      }
    };
    tick();
  });
}
function executeTransition(source, from, to, options = {}) {
  return transition(source, from, to, options);
}
function useTransition(source, options = {}) {
  let currentId = 0;
  const sourceVal = () => {
    const v = toValue(source);
    return typeof options.interpolation === "undefined" && Array.isArray(v) ? v.map(toValue) : v;
  };
  const outputRef = shallowRef(sourceVal());
  watch(sourceVal, async (to) => {
    var _options$onStarted, _options$onFinished;
    if (toValue(options.disabled)) return;
    const id = ++currentId;
    if (options.delay) await promiseTimeout(toValue(options.delay));
    if (id !== currentId) return;
    (_options$onStarted = options.onStarted) === null || _options$onStarted === void 0 || _options$onStarted.call(options);
    await transition(outputRef, outputRef.value, to, {
      ...options,
      abort: () => {
        var _options$abort2;
        return id !== currentId || ((_options$abort2 = options.abort) === null || _options$abort2 === void 0 ? void 0 : _options$abort2.call(options));
      }
    });
    (_options$onFinished = options.onFinished) === null || _options$onFinished === void 0 || _options$onFinished.call(options);
  }, { deep: true });
  watch(() => toValue(options.disabled), (disabled) => {
    if (disabled) {
      currentId++;
      outputRef.value = sourceVal();
    }
  });
  tryOnScopeDispose(() => {
    currentId++;
  });
  return computed(() => toValue(options.disabled) ? sourceVal() : outputRef.value);
}
function useUrlSearchParams(mode = "history", options = {}) {
  const { initialValue = {}, removeNullishValues = true, removeFalsyValues = false, write: enableWrite = true, writeMode = "replace", window: window$1 = defaultWindow, stringify = (params) => params.toString() } = options;
  if (!window$1) return reactive(initialValue);
  const state = reactive({});
  function getRawParams() {
    if (mode === "history") return window$1.location.search || "";
    else if (mode === "hash") {
      const hash = window$1.location.hash || "";
      const index = hash.indexOf("?");
      return index > 0 ? hash.slice(index) : "";
    } else return (window$1.location.hash || "").replace(/^#/, "");
  }
  function constructQuery(params) {
    const stringified = stringify(params);
    if (mode === "history") return `${stringified ? `?${stringified}` : ""}${window$1.location.hash || ""}`;
    if (mode === "hash-params") return `${window$1.location.search || ""}${stringified ? `#${stringified}` : ""}`;
    const hash = window$1.location.hash || "#";
    const index = hash.indexOf("?");
    if (index > 0) return `${window$1.location.search || ""}${hash.slice(0, index)}${stringified ? `?${stringified}` : ""}`;
    return `${window$1.location.search || ""}${hash}${stringified ? `?${stringified}` : ""}`;
  }
  function read() {
    return new URLSearchParams(getRawParams());
  }
  function updateState(params) {
    const unusedKeys = new Set(Object.keys(state));
    for (const key of params.keys()) {
      const paramsForKey = params.getAll(key);
      state[key] = paramsForKey.length > 1 ? paramsForKey : params.get(key) || "";
      unusedKeys.delete(key);
    }
    Array.from(unusedKeys).forEach((key) => delete state[key]);
  }
  const { pause, resume } = pausableWatch(state, () => {
    const params = new URLSearchParams("");
    Object.keys(state).forEach((key) => {
      const mapEntry = state[key];
      if (Array.isArray(mapEntry)) mapEntry.forEach((value) => params.append(key, value));
      else if (removeNullishValues && mapEntry == null) params.delete(key);
      else if (removeFalsyValues && !mapEntry) params.delete(key);
      else params.set(key, mapEntry);
    });
    write(params, false);
  }, { deep: true });
  function write(params, shouldUpdate, shouldWriteHistory = true) {
    pause();
    if (shouldUpdate) updateState(params);
    if (writeMode === "replace") window$1.history.replaceState(window$1.history.state, window$1.document.title, window$1.location.pathname + constructQuery(params));
    else if (shouldWriteHistory) window$1.history.pushState(window$1.history.state, window$1.document.title, window$1.location.pathname + constructQuery(params));
    nextTick(() => resume());
  }
  function onChanged() {
    if (!enableWrite) return;
    write(read(), true, false);
  }
  const listenerOptions = { passive: true };
  useEventListener(window$1, "popstate", onChanged, listenerOptions);
  if (mode !== "history") useEventListener(window$1, "hashchange", onChanged, listenerOptions);
  const initial = read();
  if (initial.keys().next().value) updateState(initial);
  else Object.assign(state, initialValue);
  return state;
}
function useUserMedia(options = {}) {
  var _options$enabled, _options$autoSwitch;
  const enabled = shallowRef((_options$enabled = options.enabled) !== null && _options$enabled !== void 0 ? _options$enabled : false);
  const autoSwitch = shallowRef((_options$autoSwitch = options.autoSwitch) !== null && _options$autoSwitch !== void 0 ? _options$autoSwitch : true);
  const constraints = ref(options.constraints);
  const { navigator: navigator$1 = defaultNavigator } = options;
  const isSupported = useSupported(() => {
    var _navigator$mediaDevic;
    return navigator$1 === null || navigator$1 === void 0 || (_navigator$mediaDevic = navigator$1.mediaDevices) === null || _navigator$mediaDevic === void 0 ? void 0 : _navigator$mediaDevic.getUserMedia;
  });
  const stream = shallowRef();
  function getDeviceOptions(type) {
    switch (type) {
      case "video":
        if (constraints.value) return constraints.value.video || false;
        break;
      case "audio":
        if (constraints.value) return constraints.value.audio || false;
        break;
    }
  }
  async function _start() {
    if (!isSupported.value || stream.value) return;
    stream.value = await navigator$1.mediaDevices.getUserMedia({
      video: getDeviceOptions("video"),
      audio: getDeviceOptions("audio")
    });
    return stream.value;
  }
  function _stop() {
    var _stream$value;
    (_stream$value = stream.value) === null || _stream$value === void 0 || _stream$value.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value) enabled.value = true;
    return stream.value;
  }
  async function restart() {
    _stop();
    return await start();
  }
  watch(enabled, (v) => {
    if (v) _start();
    else _stop();
  }, { immediate: true });
  watch(constraints, () => {
    if (autoSwitch.value && stream.value) restart();
  }, {
    immediate: true,
    deep: true
  });
  tryOnScopeDispose(() => {
    stop();
  });
  return {
    isSupported,
    stream,
    start,
    stop,
    restart,
    constraints,
    enabled,
    autoSwitch
  };
}
function useVModel(props, key, emit, options = {}) {
  var _vm$$emit, _vm$proxy;
  const { clone = false, passive = false, eventName, deep = false, defaultValue, shouldEmit } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm === null || vm === void 0 ? void 0 : vm.emit) || (vm === null || vm === void 0 || (_vm$$emit = vm.$emit) === null || _vm$$emit === void 0 ? void 0 : _vm$$emit.bind(vm)) || (vm === null || vm === void 0 || (_vm$proxy = vm.proxy) === null || _vm$proxy === void 0 || (_vm$proxy = _vm$proxy.$emit) === null || _vm$proxy === void 0 ? void 0 : _vm$proxy.bind(vm === null || vm === void 0 ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) key = "modelValue";
  event = event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue$1 = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value)) _emit(event, value);
    } else _emit(event, value);
  };
  if (passive) {
    const proxy = ref(getValue$1());
    let isUpdating = false;
    watch(() => props[key], (v) => {
      if (!isUpdating) {
        isUpdating = true;
        proxy.value = cloneFn(v);
        nextTick(() => isUpdating = false);
      }
    });
    watch(proxy, (v) => {
      if (!isUpdating && (v !== props[key] || deep)) triggerEmit(v);
    }, { deep });
    return proxy;
  } else return computed({
    get() {
      return getValue$1();
    },
    set(value) {
      triggerEmit(value);
    }
  });
}
function useVModels(props, emit, options = {}) {
  const ret = {};
  for (const key in props) ret[key] = useVModel(props, key, emit, options);
  return ret;
}
function useVibrate(options) {
  const { pattern = [], interval = 0, navigator: navigator$1 = defaultNavigator } = options || {};
  const isSupported = useSupported(() => typeof navigator$1 !== "undefined" && "vibrate" in navigator$1);
  const patternRef = toRef2(pattern);
  let intervalControls;
  const vibrate = (pattern$1 = patternRef.value) => {
    if (isSupported.value) navigator$1.vibrate(pattern$1);
  };
  const stop = () => {
    if (isSupported.value) navigator$1.vibrate(0);
    intervalControls === null || intervalControls === void 0 || intervalControls.pause();
  };
  if (interval > 0) intervalControls = useIntervalFn(vibrate, interval, {
    immediate: false,
    immediateCallback: false
  });
  return {
    isSupported,
    pattern,
    intervalControls,
    vibrate,
    stop
  };
}
function useVirtualList(list, options) {
  const { containerStyle, wrapperProps, scrollTo, calculateRange, currentList, containerRef } = "itemHeight" in options ? useVerticalVirtualList(options, list) : useHorizontalVirtualList(options, list);
  return {
    list: currentList,
    scrollTo,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps
  };
}
function useVirtualListResources(list) {
  const containerRef = shallowRef(null);
  const size = useElementSize(containerRef);
  const currentList = ref([]);
  const source = shallowRef(list);
  return {
    state: ref({
      start: 0,
      end: 10
    }),
    source,
    currentList,
    size,
    containerRef
  };
}
function createGetViewCapacity(state, source, itemSize) {
  return (containerSize) => {
    if (typeof itemSize === "number") return Math.ceil(containerSize / itemSize);
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const size = itemSize(i);
      sum += size;
      capacity = i;
      if (sum > containerSize) break;
    }
    return capacity - start;
  };
}
function createGetOffset(source, itemSize) {
  return (scrollDirection) => {
    if (typeof itemSize === "number") return Math.floor(scrollDirection / itemSize) + 1;
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const size = itemSize(i);
      sum += size;
      if (sum >= scrollDirection) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
}
function createCalculateRange(type, overscan, getOffset, getViewCapacity, { containerRef, state, currentList, source }) {
  return () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(type === "vertical" ? element.scrollTop : element.scrollLeft);
      const viewCapacity = getViewCapacity(type === "vertical" ? element.clientHeight : element.clientWidth);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
        data: ele,
        index: index + state.value.start
      }));
    }
  };
}
function createGetDistance(itemSize, source) {
  return (index) => {
    if (typeof itemSize === "number") return index * itemSize;
    return source.value.slice(0, index).reduce((sum, _, i) => sum + itemSize(i), 0);
  };
}
function useWatchForSizes(size, list, containerRef, calculateRange) {
  watch([
    size.width,
    size.height,
    () => toValue(list),
    containerRef
  ], () => {
    calculateRange();
  });
}
function createComputedTotalSize(itemSize, source) {
  return computed(() => {
    if (typeof itemSize === "number") return source.value.length * itemSize;
    return source.value.reduce((sum, _, index) => sum + itemSize(index), 0);
  });
}
var scrollToDictionaryForElementScrollKey = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function createScrollTo(type, calculateRange, getDistance, containerRef) {
  return (index) => {
    if (containerRef.value) {
      containerRef.value[scrollToDictionaryForElementScrollKey[type]] = getDistance(index);
      calculateRange();
    }
  };
}
function useHorizontalVirtualList(options, list) {
  const resources = useVirtualListResources(list);
  const { state, source, currentList, size, containerRef } = resources;
  const containerStyle = { overflowX: "auto" };
  const { itemWidth, overscan = 5 } = options;
  const getViewCapacity = createGetViewCapacity(state, source, itemWidth);
  const calculateRange = createCalculateRange("horizontal", overscan, createGetOffset(source, itemWidth), getViewCapacity, resources);
  const getDistanceLeft = createGetDistance(itemWidth, source);
  const offsetLeft = computed(() => getDistanceLeft(state.value.start));
  const totalWidth = createComputedTotalSize(itemWidth, source);
  useWatchForSizes(size, list, containerRef, calculateRange);
  return {
    scrollTo: createScrollTo("horizontal", calculateRange, getDistanceLeft, containerRef),
    calculateRange,
    wrapperProps: computed(() => {
      return { style: {
        height: "100%",
        width: `${totalWidth.value - offsetLeft.value}px`,
        marginLeft: `${offsetLeft.value}px`,
        display: "flex"
      } };
    }),
    containerStyle,
    currentList,
    containerRef
  };
}
function useVerticalVirtualList(options, list) {
  const resources = useVirtualListResources(list);
  const { state, source, currentList, size, containerRef } = resources;
  const containerStyle = { overflowY: "auto" };
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = createGetViewCapacity(state, source, itemHeight);
  const calculateRange = createCalculateRange("vertical", overscan, createGetOffset(source, itemHeight), getViewCapacity, resources);
  const getDistanceTop = createGetDistance(itemHeight, source);
  const offsetTop = computed(() => getDistanceTop(state.value.start));
  const totalHeight = createComputedTotalSize(itemHeight, source);
  useWatchForSizes(size, list, containerRef, calculateRange);
  return {
    calculateRange,
    scrollTo: createScrollTo("vertical", calculateRange, getDistanceTop, containerRef),
    containerStyle,
    wrapperProps: computed(() => {
      return { style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      } };
    }),
    currentList,
    containerRef
  };
}
function useWakeLock(options = {}) {
  const { navigator: navigator$1 = defaultNavigator, document: document$1 = defaultDocument } = options;
  const requestedType = shallowRef(false);
  const sentinel = shallowRef(null);
  const documentVisibility = useDocumentVisibility({ document: document$1 });
  const isSupported = useSupported(() => navigator$1 && "wakeLock" in navigator$1);
  const isActive = computed(() => !!sentinel.value && documentVisibility.value === "visible");
  if (isSupported.value) {
    useEventListener(sentinel, "release", () => {
      var _sentinel$value$type, _sentinel$value;
      requestedType.value = (_sentinel$value$type = (_sentinel$value = sentinel.value) === null || _sentinel$value === void 0 ? void 0 : _sentinel$value.type) !== null && _sentinel$value$type !== void 0 ? _sentinel$value$type : false;
    }, { passive: true });
    whenever(() => documentVisibility.value === "visible" && (document$1 === null || document$1 === void 0 ? void 0 : document$1.visibilityState) === "visible" && requestedType.value, (type) => {
      requestedType.value = false;
      forceRequest(type);
    });
  }
  async function forceRequest(type) {
    var _sentinel$value2;
    await ((_sentinel$value2 = sentinel.value) === null || _sentinel$value2 === void 0 ? void 0 : _sentinel$value2.release());
    sentinel.value = isSupported.value ? await navigator$1.wakeLock.request(type) : null;
  }
  async function request(type) {
    if (documentVisibility.value === "visible") await forceRequest(type);
    else requestedType.value = type;
  }
  async function release() {
    requestedType.value = false;
    const s = sentinel.value;
    sentinel.value = null;
    await (s === null || s === void 0 ? void 0 : s.release());
  }
  return {
    sentinel,
    isSupported,
    isActive,
    request,
    forceRequest,
    release
  };
}
function useWebNotification(options = {}) {
  const { window: window$1 = defaultWindow, requestPermissions: _requestForPermissions = true } = options;
  const defaultWebNotificationOptions = options;
  const isSupported = useSupported(() => {
    if (!window$1 || !("Notification" in window$1)) return false;
    if (Notification.permission === "granted") return true;
    try {
      const notification$1 = new Notification("");
      notification$1.onshow = () => {
        notification$1.close();
      };
    } catch (e) {
      if (e.name === "TypeError") return false;
    }
    return true;
  });
  const permissionGranted = shallowRef(isSupported.value && "permission" in Notification && Notification.permission === "granted");
  const notification = ref(null);
  const ensurePermissions = async () => {
    if (!isSupported.value) return;
    if (!permissionGranted.value && Notification.permission !== "denied") {
      if (await Notification.requestPermission() === "granted") permissionGranted.value = true;
    }
    return permissionGranted.value;
  };
  const { on: onClick, trigger: clickTrigger } = createEventHook();
  const { on: onShow, trigger: showTrigger } = createEventHook();
  const { on: onError, trigger: errorTrigger } = createEventHook();
  const { on: onClose, trigger: closeTrigger } = createEventHook();
  const show = async (overrides) => {
    if (!isSupported.value || !permissionGranted.value) return;
    const options$1 = Object.assign({}, defaultWebNotificationOptions, overrides);
    notification.value = new Notification(options$1.title || "", options$1);
    notification.value.onclick = clickTrigger;
    notification.value.onshow = showTrigger;
    notification.value.onerror = errorTrigger;
    notification.value.onclose = closeTrigger;
    return notification.value;
  };
  const close = () => {
    if (notification.value) notification.value.close();
    notification.value = null;
  };
  if (_requestForPermissions) tryOnMounted(ensurePermissions);
  tryOnScopeDispose(close);
  if (isSupported.value && window$1) {
    const document$1 = window$1.document;
    useEventListener(document$1, "visibilitychange", (e) => {
      e.preventDefault();
      if (document$1.visibilityState === "visible") close();
    });
  }
  return {
    isSupported,
    notification,
    ensurePermissions,
    permissionGranted,
    show,
    close,
    onClick,
    onShow,
    onError,
    onClose
  };
}
var DEFAULT_PING_MESSAGE = "ping";
function resolveNestedOptions(options) {
  if (options === true) return {};
  return options;
}
function useWebSocket(url, options = {}) {
  const { onConnected, onDisconnected, onError, onMessage, immediate = true, autoConnect = true, autoClose = true, protocols = [] } = options;
  const data = ref(null);
  const status = shallowRef("CLOSED");
  const wsRef = ref();
  const urlRef = toRef2(url);
  let heartbeatPause;
  let heartbeatResume;
  let explicitlyClosed = false;
  let retried = 0;
  let bufferedData = [];
  let retryTimeout;
  let pongTimeoutWait;
  const _sendBuffer = () => {
    if (bufferedData.length && wsRef.value && status.value === "OPEN") {
      for (const buffer of bufferedData) wsRef.value.send(buffer);
      bufferedData = [];
    }
  };
  const resetRetry = () => {
    if (retryTimeout != null) {
      clearTimeout(retryTimeout);
      retryTimeout = void 0;
    }
  };
  const resetHeartbeat = () => {
    clearTimeout(pongTimeoutWait);
    pongTimeoutWait = void 0;
  };
  const close = (code = 1e3, reason) => {
    resetRetry();
    if (!isClient && !isWorker || !wsRef.value) return;
    explicitlyClosed = true;
    resetHeartbeat();
    heartbeatPause === null || heartbeatPause === void 0 || heartbeatPause();
    wsRef.value.close(code, reason);
    wsRef.value = void 0;
  };
  const send = (data$1, useBuffer = true) => {
    if (!wsRef.value || status.value !== "OPEN") {
      if (useBuffer) bufferedData.push(data$1);
      return false;
    }
    _sendBuffer();
    wsRef.value.send(data$1);
    return true;
  };
  const _init = () => {
    if (explicitlyClosed || typeof urlRef.value === "undefined") return;
    const ws = new WebSocket(urlRef.value, protocols);
    wsRef.value = ws;
    status.value = "CONNECTING";
    ws.onopen = () => {
      status.value = "OPEN";
      retried = 0;
      onConnected === null || onConnected === void 0 || onConnected(ws);
      heartbeatResume === null || heartbeatResume === void 0 || heartbeatResume();
      _sendBuffer();
    };
    ws.onclose = (ev) => {
      status.value = "CLOSED";
      resetHeartbeat();
      heartbeatPause === null || heartbeatPause === void 0 || heartbeatPause();
      onDisconnected === null || onDisconnected === void 0 || onDisconnected(ws, ev);
      if (!explicitlyClosed && options.autoReconnect && (wsRef.value == null || ws === wsRef.value)) {
        const { retries = -1, delay = 1e3, onFailed } = resolveNestedOptions(options.autoReconnect);
        if ((typeof retries === "function" ? retries : () => typeof retries === "number" && (retries < 0 || retried < retries))(retried)) {
          retried += 1;
          retryTimeout = setTimeout(_init, delay);
        } else onFailed === null || onFailed === void 0 || onFailed();
      }
    };
    ws.onerror = (e) => {
      onError === null || onError === void 0 || onError(ws, e);
    };
    ws.onmessage = (e) => {
      if (options.heartbeat) {
        resetHeartbeat();
        const { message = DEFAULT_PING_MESSAGE, responseMessage = message } = resolveNestedOptions(options.heartbeat);
        if (e.data === toValue(responseMessage)) return;
      }
      data.value = e.data;
      onMessage === null || onMessage === void 0 || onMessage(ws, e);
    };
  };
  if (options.heartbeat) {
    const { message = DEFAULT_PING_MESSAGE, interval = 1e3, pongTimeout = 1e3 } = resolveNestedOptions(options.heartbeat);
    const { pause, resume } = useIntervalFn(() => {
      send(toValue(message), false);
      if (pongTimeoutWait != null) return;
      pongTimeoutWait = setTimeout(() => {
        close();
        explicitlyClosed = false;
      }, pongTimeout);
    }, interval, { immediate: false });
    heartbeatPause = pause;
    heartbeatResume = resume;
  }
  if (autoClose) {
    if (isClient) useEventListener("beforeunload", () => close(), { passive: true });
    tryOnScopeDispose(close);
  }
  const open = () => {
    if (!isClient && !isWorker) return;
    close();
    explicitlyClosed = false;
    retried = 0;
    _init();
  };
  if (immediate) open();
  if (autoConnect) watch(urlRef, open);
  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef
  };
}
function useWebWorker(arg0, workerOptions, options) {
  const { window: window$1 = defaultWindow } = options !== null && options !== void 0 ? options : {};
  const data = ref(null);
  const worker = shallowRef();
  const post = (...args) => {
    if (!worker.value) return;
    worker.value.postMessage(...args);
  };
  const terminate = function terminate$1() {
    if (!worker.value) return;
    worker.value.terminate();
  };
  if (window$1) {
    if (typeof arg0 === "string") worker.value = new Worker(arg0, workerOptions);
    else if (typeof arg0 === "function") worker.value = arg0();
    else worker.value = arg0;
    worker.value.onmessage = (e) => {
      data.value = e.data;
    };
    tryOnScopeDispose(() => {
      if (worker.value) worker.value.terminate();
    });
  }
  return {
    data,
    post,
    terminate,
    worker
  };
}
function depsParser(deps, localDeps) {
  if (deps.length === 0 && localDeps.length === 0) return "";
  const depsString = deps.map((dep) => `'${dep}'`).toString();
  const depsFunctionString = localDeps.filter((dep) => typeof dep === "function").map((fn) => {
    const str = fn.toString();
    if (str.trim().startsWith("function")) return str;
    else return `const ${fn.name} = ${str}`;
  }).join(";");
  const importString = `importScripts(${depsString});`;
  return `${depsString.trim() === "" ? "" : importString} ${depsFunctionString}`;
}
var depsParser_default = depsParser;
function jobRunner(userFunc) {
  return (e) => {
    const userFuncArgs = e.data[0];
    return Promise.resolve(userFunc.apply(void 0, userFuncArgs)).then((result) => {
      postMessage(["SUCCESS", result]);
    }).catch((error) => {
      postMessage(["ERROR", error]);
    });
  };
}
var jobRunner_default = jobRunner;
function createWorkerBlobUrl(fn, deps, localDeps) {
  const blobCode = `${depsParser_default(deps, localDeps)}; onmessage=(${jobRunner_default})(${fn})`;
  const blob = new Blob([blobCode], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
var createWorkerBlobUrl_default = createWorkerBlobUrl;
function useWebWorkerFn(fn, options = {}) {
  const { dependencies = [], localDependencies = [], timeout, window: window$1 = defaultWindow } = options;
  const worker = ref();
  const workerStatus = shallowRef("PENDING");
  const promise = ref({});
  const timeoutId = shallowRef();
  const workerTerminate = (status = "PENDING") => {
    if (worker.value && worker.value._url && window$1) {
      worker.value.terminate();
      URL.revokeObjectURL(worker.value._url);
      promise.value = {};
      worker.value = void 0;
      window$1.clearTimeout(timeoutId.value);
      workerStatus.value = status;
    }
  };
  workerTerminate();
  tryOnScopeDispose(workerTerminate);
  const generateWorker = () => {
    const blobUrl = createWorkerBlobUrl_default(fn, dependencies, localDependencies);
    const newWorker = new Worker(blobUrl);
    newWorker._url = blobUrl;
    newWorker.onmessage = (e) => {
      const { resolve = () => {
      }, reject = () => {
      } } = promise.value;
      const [status, result] = e.data;
      switch (status) {
        case "SUCCESS":
          resolve(result);
          workerTerminate(status);
          break;
        default:
          reject(result);
          workerTerminate("ERROR");
          break;
      }
    };
    newWorker.onerror = (e) => {
      const { reject = () => {
      } } = promise.value;
      e.preventDefault();
      reject(e);
      workerTerminate("ERROR");
    };
    if (timeout) timeoutId.value = setTimeout(() => workerTerminate("TIMEOUT_EXPIRED"), timeout);
    return newWorker;
  };
  const callWorker = (...fnArgs) => new Promise((resolve, reject) => {
    var _worker$value;
    promise.value = {
      resolve,
      reject
    };
    (_worker$value = worker.value) === null || _worker$value === void 0 || _worker$value.postMessage([[...fnArgs]]);
    workerStatus.value = "RUNNING";
  });
  const workerFn = (...fnArgs) => {
    if (workerStatus.value === "RUNNING") {
      console.error("[useWebWorkerFn] You can only run one instance of the worker at a time.");
      return Promise.reject();
    }
    worker.value = generateWorker();
    return callWorker(...fnArgs);
  };
  return {
    workerFn,
    workerStatus,
    workerTerminate
  };
}
function useWindowFocus(options = {}) {
  const { window: window$1 = defaultWindow } = options;
  if (!window$1) return shallowRef(false);
  const focused = shallowRef(window$1.document.hasFocus());
  const listenerOptions = { passive: true };
  useEventListener(window$1, "blur", () => {
    focused.value = false;
  }, listenerOptions);
  useEventListener(window$1, "focus", () => {
    focused.value = true;
  }, listenerOptions);
  return focused;
}
function useWindowScroll(options = {}) {
  const { window: window$1 = defaultWindow, ...rest } = options;
  return useScroll(window$1, rest);
}
function useWindowSize(options = {}) {
  const { window: window$1 = defaultWindow, initialWidth = Number.POSITIVE_INFINITY, initialHeight = Number.POSITIVE_INFINITY, listenOrientation = true, includeScrollbar = true, type = "inner" } = options;
  const width = shallowRef(initialWidth);
  const height = shallowRef(initialHeight);
  const update = () => {
    if (window$1) if (type === "outer") {
      width.value = window$1.outerWidth;
      height.value = window$1.outerHeight;
    } else if (type === "visual" && window$1.visualViewport) {
      const { width: visualViewportWidth, height: visualViewportHeight, scale } = window$1.visualViewport;
      width.value = Math.round(visualViewportWidth * scale);
      height.value = Math.round(visualViewportHeight * scale);
    } else if (includeScrollbar) {
      width.value = window$1.innerWidth;
      height.value = window$1.innerHeight;
    } else {
      width.value = window$1.document.documentElement.clientWidth;
      height.value = window$1.document.documentElement.clientHeight;
    }
  };
  update();
  tryOnMounted(update);
  const listenerOptions = { passive: true };
  useEventListener("resize", update, listenerOptions);
  if (window$1 && type === "visual" && window$1.visualViewport) useEventListener(window$1.visualViewport, "resize", update, listenerOptions);
  if (listenOrientation) watch(useMediaQuery("(orientation: portrait)"), () => update());
  return {
    width,
    height
  };
}
export {
  DefaultMagicKeysAliasMap,
  StorageSerializers,
  TransitionPresets,
  assert,
  asyncComputed,
  autoResetRef,
  breakpointsAntDesign,
  breakpointsBootstrapV5,
  breakpointsElement,
  breakpointsMasterCss,
  breakpointsPrimeFlex,
  breakpointsQuasar,
  breakpointsSematic,
  breakpointsTailwind,
  breakpointsVuetify,
  breakpointsVuetifyV2,
  breakpointsVuetifyV3,
  bypassFilter,
  camelize,
  clamp,
  cloneFnJSON,
  computedAsync,
  computedEager,
  computedInject,
  computedWithControl,
  containsProp,
  controlledComputed,
  controlledRef,
  createEventHook,
  createFetch,
  createFilterWrapper,
  createGlobalState,
  createInjectionState,
  createReactiveFn,
  createRef,
  createReusableTemplate,
  createSharedComposable,
  createSingletonPromise,
  createTemplatePromise,
  createUnrefFn,
  customStorageEventName,
  debounceFilter,
  debouncedRef,
  debouncedWatch,
  defaultDocument,
  defaultLocation,
  defaultNavigator,
  defaultWindow,
  eagerComputed,
  executeTransition,
  extendRef,
  formatDate,
  formatTimeAgo,
  formatTimeAgoIntl,
  formatTimeAgoIntlParts,
  get,
  getLifeCycleTarget,
  getSSRHandler,
  hasOwn,
  hyphenate,
  identity,
  ignorableWatch,
  increaseWithUnit,
  injectLocal,
  invoke,
  isClient,
  isDef,
  isDefined,
  isIOS,
  isObject,
  isWorker,
  makeDestructurable,
  mapGamepadToXbox360Controller,
  noop,
  normalizeDate,
  notNullish,
  now,
  objectEntries,
  objectOmit,
  objectPick,
  onClickOutside,
  onElementRemoval,
  onKeyDown,
  onKeyPressed,
  onKeyStroke,
  onKeyUp,
  onLongPress,
  onStartTyping,
  pausableFilter,
  pausableWatch,
  promiseTimeout,
  provideLocal,
  provideSSRWidth,
  pxValue,
  rand,
  reactify,
  reactifyObject,
  reactiveComputed,
  reactiveOmit,
  reactivePick,
  refAutoReset,
  refDebounced,
  refDefault,
  refManualReset,
  refThrottled,
  refWithControl,
  set,
  setSSRHandler,
  syncRef,
  syncRefs,
  templateRef,
  throttleFilter,
  throttledRef,
  throttledWatch,
  timestamp,
  toArray,
  toReactive,
  toRef2 as toRef,
  toRefs2 as toRefs,
  transition,
  tryOnBeforeMount,
  tryOnBeforeUnmount,
  tryOnMounted,
  tryOnScopeDispose,
  tryOnUnmounted,
  unrefElement,
  until,
  useActiveElement,
  useAnimate,
  useArrayDifference,
  useArrayEvery,
  useArrayFilter,
  useArrayFind,
  useArrayFindIndex,
  useArrayFindLast,
  useArrayIncludes,
  useArrayJoin,
  useArrayMap,
  useArrayReduce,
  useArraySome,
  useArrayUnique,
  useAsyncQueue,
  useAsyncState,
  useBase64,
  useBattery,
  useBluetooth,
  useBreakpoints,
  useBroadcastChannel,
  useBrowserLocation,
  useCached,
  useClipboard,
  useClipboardItems,
  useCloned,
  useColorMode,
  useConfirmDialog,
  useCountdown,
  useCounter,
  useCssVar,
  useCurrentElement,
  useCycleList,
  useDark,
  useDateFormat,
  useDebounce,
  useDebounceFn,
  useDebouncedRefHistory,
  useDeviceMotion,
  useDeviceOrientation,
  useDevicePixelRatio,
  useDevicesList,
  useDisplayMedia,
  useDocumentVisibility,
  useDraggable,
  useDropZone,
  useElementBounding,
  useElementByPoint,
  useElementHover,
  useElementSize,
  useElementVisibility,
  useEventBus,
  useEventListener,
  useEventSource,
  useEyeDropper,
  useFavicon,
  useFetch,
  useFileDialog,
  useFileSystemAccess,
  useFocus,
  useFocusWithin,
  useFps,
  useFullscreen,
  useGamepad,
  useGeolocation,
  useIdle,
  useImage,
  useInfiniteScroll,
  useIntersectionObserver,
  useInterval,
  useIntervalFn,
  useKeyModifier,
  useLastChanged,
  useLocalStorage,
  useMagicKeys,
  useManualRefHistory,
  useMediaControls,
  useMediaQuery,
  useMemoize,
  useMemory,
  useMounted,
  useMouse,
  useMouseInElement,
  useMousePressed,
  useMutationObserver,
  useNavigatorLanguage,
  useNetwork,
  useNow,
  useObjectUrl,
  useOffsetPagination,
  useOnline,
  usePageLeave,
  useParallax,
  useParentElement,
  usePerformanceObserver,
  usePermission,
  usePointer,
  usePointerLock,
  usePointerSwipe,
  usePreferredColorScheme,
  usePreferredContrast,
  usePreferredDark,
  usePreferredLanguages,
  usePreferredReducedMotion,
  usePreferredReducedTransparency,
  usePrevious,
  useRafFn,
  useRefHistory,
  useResizeObserver,
  useSSRWidth,
  useScreenOrientation,
  useScreenSafeArea,
  useScriptTag,
  useScroll,
  useScrollLock,
  useSessionStorage,
  useShare,
  useSorted,
  useSpeechRecognition,
  useSpeechSynthesis,
  useStepper,
  useStorage,
  useStorageAsync,
  useStyleTag,
  useSupported,
  useSwipe,
  useTemplateRefsList,
  useTextDirection,
  useTextSelection,
  useTextareaAutosize,
  useThrottle,
  useThrottleFn,
  useThrottledRefHistory,
  useTimeAgo,
  useTimeAgoIntl,
  useTimeout,
  useTimeoutFn,
  useTimeoutPoll,
  useTimestamp,
  useTitle,
  useToNumber,
  useToString,
  useToggle,
  useTransition,
  useUrlSearchParams,
  useUserMedia,
  useVModel,
  useVModels,
  useVibrate,
  useVirtualList,
  useWakeLock,
  useWebNotification,
  useWebSocket,
  useWebWorker,
  useWebWorkerFn,
  useWindowFocus,
  useWindowScroll,
  useWindowSize,
  watchArray,
  watchAtMost,
  watchDebounced,
  watchDeep,
  watchIgnorable,
  watchImmediate,
  watchOnce,
  watchPausable,
  watchThrottled,
  watchTriggerable,
  watchWithFilter,
  whenever
};
//# sourceMappingURL=@vueuse_core.js.map
