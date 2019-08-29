import React, { Component } from 'react'
import Profile from './Profile'
import logo from '../bbcLogo.png'

class DashBoard extends Component {

    state = {
        queriedData: [],
    }

    componentDidMount = async() => {
        const response = await fetch('/api/feeds'); /* Requests feeds from Back End */
        const body = await response.json();
        this.setState({
            queriedData: body.items
        });
        console.log(this.state.queriedData);
    }

    render() {
        var feeds =[];
        this.state.queriedData.forEach(i => feeds.push(
            <div className="card myCard" key={i.title}>
                <div className="card-body">
                    <h3 className="card-title" style={{fontFamily: 'Righteous ,cursive'}}><a href={i.link}>{i.title}</a></h3>
                    <p className="card-text" style={{fontFamily: 'Signika sans-serif'}}>{i.content}</p>
                </div>
            </div>
        ));
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 d-none d-lg-block">
                            <Profile/>
                        </div>
                        <div className="col-lg-8">
                        <div><img src={logo} className="logo" alt="logo"/></div>
                            {feeds}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashBoard;