import React, { Component } from 'react' 
import { Link } from 'react-router'

import './Surfboards.css'

export default class Surfboards extends Component {

    constructor(props) {

        super(props) 

        this.state = {
            surfboards: [],
            title: '',
            name: ''
        }

        this.fetchSurfboards = this.fetchSurfboards.bind(this)
    }

    componentDidMount() {

        this.fetchSurfboards()
    }

    fetchSurfboards() {

        fetch('/api/surfboards')
            .then(response => response.json())
            .then(data => this.setState({ surfboards: data }))
    }

    render() {

        const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
            fetchSurfboards: this.fetchSurfboards
        }))

        const surfboards = this.state.surfboards.map((surfboard) => (

            <div key={surfboard.id}>
                <h1>{surfboard.name}</h1>
                <p>
                    Length: {surfboard.length} | Price: {surfboard.price} | Quantity: {surfboard.quantity}
                </p>
            </div>
        ))

        return (
            <div id="main-container">
                <div id="surfboards-container">
                    {surfboards}
                </div>
                <div id="surfboard-main-container">
                    <h1>Surfboard Inventory</h1>
                    <Link to="/surfboards/new">Add A Surfboard</Link>
                    {childrenWithProps}
                </div>
            </div>
        )
    }
}