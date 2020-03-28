import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container">
                    <div className="navbar-brand" to="/">
                       <i className="material-icons">
                            Jor H </i> || Covid-19 App
                    </div>
                   
                </div>
            </nav>
        )
    }
}