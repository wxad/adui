export declare class FocusManager {
    container: Element;
    className: string;
    private isRunning;
    constructor(container: Element, className: string);
    isActive(): boolean;
    start(): void;
    stop(): void;
    private reset;
    private handleKeyDown;
    private handleMouseDown;
}
