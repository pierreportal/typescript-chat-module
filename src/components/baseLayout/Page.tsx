import React from "react"
import RouteMapper from './RouteMapper';
import Navigation from "./Navigation"


interface PageProps {
    template: any[],
    subRoutes: any[] | null,
    path:string
}


const Page: React.FC<PageProps> = (props) => {

    const {template, subRoutes, path} = props
    return <div className={`base-layout page col`}>
        {subRoutes &&<RouteMapper routes={subRoutes} prefix={path}/>}
        {subRoutes &&<Navigation routes={subRoutes} prefix={path}/>}
        


        {template}
    </div>
} 

export default Page