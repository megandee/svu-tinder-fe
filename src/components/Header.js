import React from 'react'

const Header = ({ isHomePage }) => {
   if (isHomePage) {
      return null;
   }
   
   return (
    <div>Header</div>
   )
}

export default Header 