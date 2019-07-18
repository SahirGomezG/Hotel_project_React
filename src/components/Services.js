import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from './Title';

export class Services extends Component {
    state={
       services:[
         {
            icon:<FaCocktail />,
            title:"Free cocktails",
            info:"Lorem ipsum rico sabroso delicionso! come enjoy",
         },
         {     
            icon:<FaHiking />,
            title:"Free Hiking",
            info:"Lorem ipsum rico sabroso delicionso! come enjoy"
        },
        {
            icon:<FaShuttleVan />,
            title:"Free shuttle",
            info:"Lorem ipsum rico sabroso delicionso! come enjoy"
        },
        {
            icon:<FaBeer />,
            title:"Strongest beer",
            info:"Lorem ipsum rico sabroso delicionso! come enjoy"
        },
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services"/> 
               <div className="services-center">
                 {this.state.services.map((item,index) => {
                     return <article key={index} className="service" >
                         <span>{item.icon}</span>
                         <h6>{item.title}</h6>
                         <p>{item.info}</p>
                     </article>
                 })}
               </div>
            </section>
        )
    }
}

export default Services
