import React from 'react';

class Alert extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }
        return (<div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{this.props.message}</strong>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => this.props.onClose()}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>);
    }
}

export default Alert;