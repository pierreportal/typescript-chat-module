import React from "react"

interface SideBarProps {
    routes: any[],
    user:object,
    mainTitle:string,
    devMode:boolean
}


const SideBar: React.FC<SideBarProps> = (props) => {


    const spreadStyle = "start"

    return <div className={`base-layout sidebar col ${spreadStyle}`}>
        sidebar
    </div>
} 

export default SideBar