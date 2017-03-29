import React, { Component } from 'react' 
import { Link } from 'react-router'
import SurfboardDetail from './SurfboardDetail'

import './Surfboards.css'

export default class Surfboards extends Component {

    constructor(props) {

        super(props) 

        this.state = {
            surfboards: [],
            currentSurfboard: null,
            title: '',
            name: ''
        }

        // this.fetchSurfboards = this.fetchSurfboards.bind(this)
    }

    componentDidMount() {

        this.fetchSurfboards()
    }

    fetchSurfboards() {

        fetch('/api/surfboards')
            .then(response => response.json())
            .then(data => this.setState({ 
                surfboards: data,
                currentSurfboard: data[0]
            }))
    }

    setSurfboard(id) {
        const currentSurfboard = this.state.surfboards.filter(surfboard => surfboard.id === id)[0]
        this.setState({
            currentSurfboard
        })
    }

    render() {

        // const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
        //     fetchSurfboards: this.fetchSurfboards,
        //     currentSurfboard: this.state.currentSurfboard,
        // }))

        const surfboards = this.state.surfboards.map((surfboard) => (

            <div key={surfboard.id}>
                <h3 className="board-link" onClick={() => this.setSurfboard(surfboard.id)}>
                    {surfboard.name} 
                </h3>
            </div>
        ))

        return (
            <div id="main-container" className="surfboards">
                <div id="surfboards-container">
                    {/*<Link to="/surfboards/new">Add A Surfboard</Link>*/}
                    {surfboards}
                </div>
                <div id="surfboard-main-container">
                    {
                        this.state.currentSurfboard 

                        ? 

                        <SurfboardDetail surfboard={this.state.currentSurfboard} />

                        : 

                        <h4>...loading</h4>
                    }
                </div>
            </div>
        )
    }
}