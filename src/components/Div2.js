/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from 'react'
import "./div.css"

export class Div2 extends Component {
    render() {
        return (
            <div className="div" >
               <p >Thousands of Scaling SaaS Businesses Love Us</p> 
             
               <div className="mar"><marquee  behaviour="scroll" direction="left" scrollamount="2" width="100" align="center" >1234</marquee></div>
            </div>
        )
    }
}

export default Div2
