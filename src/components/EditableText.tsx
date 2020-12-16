import React from "react"
import { JsxChild } from "typescript"

const EditableText : React.FC<JsxChild> = (props) => {
    const {children} = props
    return <div>
        {children}
    </div>
}