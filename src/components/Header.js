import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import "./Header.scss"

const Header = () => {
   return (
     <Nav className="header-bar">
       <NavItem>
         <NavLink to="/" className="nav-link">
           Home
         </NavLink>
       </NavItem>
       <NavItem>
         <NavLink to="/detectiveindex" className="nav-link">
         Detectives
         </NavLink>
       </NavItem>
       <NavItem>
         <NavLink to="/detectivenew" className="nav-link">
         Add Profile
         </NavLink>
       </NavItem>
     </Nav>
   
   )
 }
 
 export default Header