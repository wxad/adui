import Dialog, { IDialogProps } from "./Dialog"
import confirm from "./confirm"

const INTENTS = [
  "info" as "info",
  "success" as "success",
  "warning" as "warning",
  "danger" as "danger",
]

Dialog.confirm = (props: IDialogProps) => {
  const config = {
    ...props,
    type: "confirm" as "confirm",
  }
  return confirm(config)
}

Dialog.inform = (props: IDialogProps) => {
  const config = {
    ...props,
    type: "inform" as "inform",
  }
  return confirm(config)
}

INTENTS.forEach((intent) => {
  Dialog[intent] = (props: IDialogProps) => {
    const { style, ...otherProps } = props

    const config = {
      ...otherProps,
      intent,
      style: {
        maxWidth: "560px",
        ...style,
      },
    }
    return confirm(config)
  }
})

export default Dialog
