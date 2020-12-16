import React from "react"
import {Route, Switch} from "react-router-dom"
import Page from "./Page"


interface RouteMapperProps {
    routes:any[],
    prefix:string
}


const RouteMapper: React.FC<RouteMapperProps> = (props) => {
    const {routes, prefix} = props

    const routing = routes.map(route => {
        const {path, template, subRoutes} = route
        return <Route key={`${prefix}${path}`} exact={true} path={`${prefix}${path}`} component={() => <Page template={template} path={`${prefix}${path}`} subRoutes={subRoutes || null}/> }/>
    })

    return <div className={`base-layout page-container col`}>
            <Switch>
                {routing}
            </Switch>
    </div>
} 

export default RouteMapper