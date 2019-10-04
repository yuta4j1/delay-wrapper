import * as React from "react"

export type Props = {
  delayTime: number
}

const Delay: React.FC<Props> = props => {
  React.useEffect(() => {
    return () => {
      setTimeout(() => {}, props.delayTime)
    }
  })

  return <>{props.children}</>
}

export default Delay
