import React from 'react'
import "./header.css"

function Header() {
    return (
        <div>
            <div className="navbar">
                
            <img src="chargebee-logo-300x93.png" alt="" width="80"/>
            <div className="nav1">
            <nav>
                <ul>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Solutions</li>
                    <li>Customer</li>
                    <li>Resources</li>
                </ul>
            </nav>
            </div>
            <div className="nav2">
            <nav>
               <ul>
                   <li>Log in</li>
                   <li id="sch">Schedule a Demo</li>
               </ul>
            </nav>
            </div>
            </div>
        </div>
    )
}

export default Header
