import React, { Component } from 'react'

class MenuGroup extends Component{
    render () {
        return (
            <div class="g-head">
                <ul>
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/Home">Home</Link></li>
                </ul>
            </div>
        )
    }
}

export default MenuGroup
