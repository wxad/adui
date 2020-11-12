const TAB_KEY_CODE = 9

export class FocusManager {
  public container: Element

  public className: string

  private isRunning = false

  constructor(container: Element, className: string) {
    this.container = container
    this.className = className
  }

  public isActive() {
    return this.isRunning
  }

  public start() {
    this.container.addEventListener("mousedown", this.handleMouseDown)
    this.isRunning = true
  }

  public stop() {
    this.reset()
    this.isRunning = false
  }

  private reset() {
    this.container.classList.remove(this.className)
    this.container.removeEventListener("keydown", this.handleKeyDown)
    this.container.removeEventListener("mousedown", this.handleMouseDown)
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.which === TAB_KEY_CODE) {
      this.reset()
      this.container.addEventListener("mousedown", this.handleMouseDown)
    }
  }

  private handleMouseDown = () => {
    this.reset()
    this.container.classList.add(this.className)
    this.container.addEventListener("keydown", this.handleKeyDown)
  }
}
