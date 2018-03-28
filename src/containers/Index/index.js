import React from 'react'
import {Link} from 'react-router-dom'
import 'SRC/styles/index.scss'

const Index = React.createClass({
    render: function () {
        return (
            <div className="g-body">
                <ul>
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/Home">Home</Link></li>
                </ul>

                <hr />
                <div className="g-content">
                    Hello World!
                </div>
            </div>
        )
    }
})

module.exports = Index