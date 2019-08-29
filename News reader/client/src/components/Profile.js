import React, { Component } from 'react'
import me from '../me.jpg'

class Profile extends Component {
    render() {
        return (
        <div className=" sidenav">
            <h2 style={{fontFamily: 'Lobster ,cursive'}}>
                Made By
            </h2>
            <div>
                <img src={me} className="rounded-circle profile" width="190" height="190" alt="my pic"/> 
                <h4 style={{fontFamily: 'Lobster ,cursive'}}>
                    <a href="https://www.linkedin.com/in/rishabh-jain-a7a896125/">Rishabh Jain</a>
                </h4>
            </div>
            <div className="tech-stack" style={{fontFamily: 'Lobster ,cursive'}}>
                <h4>
                    Tech Stack
                </h4>
                <div>
                <ul className="list-group">
                    <li className="list-group-item">(Front End) React Js</li>
                    <li className="list-group-item">(Back End) Node Js</li>
                    <li className="list-group-item">(NPM Library) Express</li>
                    <li className="list-group-item">(NPM Library) rss-parser</li>
                </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default Profile;