import React, {useState} from "react"
import Navigation from "./Navigation"

interface HeaderProps {
    routes: any[],
    user:object,
    mainTitle:string,
    devMode:boolean
}


const Header: React.FC<HeaderProps> = (props) => {

    const [mainTitle, setMainTitle] = useState<string>(props.mainTitle)
    const {routes} = props

    const updateTextContent: any = (e:any) => {
        const {innerText} = e.target
        setMainTitle(innerText)
    }

    const spreadStyle = "space-between"

    return <div className={`base-layout header row ${spreadStyle}`}>
        <h1 contentEditable={props.devMode} suppressContentEditableWarning={true} onBlur={updateTextContent}>{mainTitle}</h1>
        <Navigation routes={routes} prefix={""}/>
    </div>
} 

export default Header