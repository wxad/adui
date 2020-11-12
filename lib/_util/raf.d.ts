declare function getRequestAnimationFrame(): (((callback: FrameRequestCallback) => number) & typeof globalThis.requestAnimationFrame) | (() => void);
export { getRequestAnimationFrame };
