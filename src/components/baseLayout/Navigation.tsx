import React from "react"
import {NavLink} from "react-router-dom"

interface NavigationProps {
    routes: any[],
    prefix:string
}


const Navigation: React.FC<NavigationProps> = (props) => {

    const {routes, prefix} = props

    const links = routes.map(route => {
    return <NavLink key={route.path} exact={true} to={`${prefix}${route.path}`}>{route.label}</NavLink>
    })

    return <div>
        {links}
    </div>
} 

export default Navigation