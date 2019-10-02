import * as React from "react"
import { Props } from "./types"

const Delay: React.FC<Props> = props => {
  React.useEffect(() => {
    return () => {
      setTimeout(() => {}, props.delayTime)
    }
  })

  return <>{props.children}</>
}

export default Delay
