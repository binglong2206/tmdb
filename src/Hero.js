import React from "react";
import './styles/Hero.css'

class Hero extends React.Component {
    
    render(){
        return (
            <header className='hero' style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/Yrpb32j3eMpMVX7ND3TnOkHnbl.jpg)`
            }}> 
               <div className='contents'>
                    <h1 className='title'>HEADER</h1>
               </div>
            </header>
        )
    }
}


export default Hero