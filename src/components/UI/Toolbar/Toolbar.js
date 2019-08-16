import React, { Component } from 'react'

export default class Toolbar extends Component {
    render() {
        return (
            <div className="contaıner-fluid" style={{ backgroundColor:'#242F39', }}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">MY DOTABUFF<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Heroes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Items</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Players</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Matches</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}