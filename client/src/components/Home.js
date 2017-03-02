import React, { Component } from 'react' 
import { Link } from 'react-router'

export default class Home extends Component {

    render() {

        return (
            <div>
                <h1>Welcome to Kai's Surfboard Shop</h1>
                <p>Checkout our surfboards at <Link to="/surfboards">Surfboards</Link></p>
            </div>
        )
    }
}