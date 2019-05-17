import React from 'react'
import '../css/ErrorBar.css'
import '../css/common.css'

export default class ErrorBar extends React.Component {
    render() {
        return (
            this.show.props && <div className="errorContainer top">{this.props.message}</div>
        )
    }
}