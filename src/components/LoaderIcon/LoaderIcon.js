import React from 'react'
import "./LoaderIcon.scss";
export function LoaderIcon(props){
    return (

        <div className="loader-icon-container" style={{'display': props.isVisible ? 'block' : 'none'}}>

            <div className="loader-icon animated slow"/>
            <div className="loader-icon animated fast"/>
            <div className="loader-icon static"></div>




        </div>
    )
}
