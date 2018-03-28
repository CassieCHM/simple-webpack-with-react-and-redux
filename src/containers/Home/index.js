import React from 'react'
import {Link} from 'react-router-dom'
import MenuGroup from 'SRC/containers/Menu/index'

import 'SRC/styles/index.scss'

export const Index = React.createClass({
    render: function () {
        return (
            <div>
                <MenuGroup />
                <div className="g-body">
                    <div className="g-content">
                        This is something difference!
                    </div>
                </div>
            </div>
        )
    }
})