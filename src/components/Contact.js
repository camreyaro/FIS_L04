import React from 'react';

class Contact extends React.Component {
    state = {
        phone: this.props.value.phone
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            phone: e.target.value
        });
    }

    render() {
        if ((this.props.value.name != this.props.contactToEdit.name) || !this.props.showEdit) {
            var phoneField = this.props.value.phone
            var btn = (<div>
                <button className="btn btn-info" onClick={() => this.props.editContact(this.props.value)}>Edit</button> &nbsp;
                <button className="btn btn-danger" onClick={() => this.props.deleteContact(this.props.value.name)}>Delete</button>
                </div>)
        } else {
            var phoneField = <input className="form-control" name="phone" onChange={this.handleChange} value={this.state.phone} />
            var btn = (<div>
                <button className="btn btn-warning" onClick={() => this.props.saveContact(this.props.value.name, this.state.phone)}>Save</button> &nbsp;
            <button className="btn btn-danger" onClick={() => this.props.editContact(this.props.value)}>Cancel</button>
            </div>)
        }
        return (<tr>
            <td>{this.props.value.name}</td>
            <td>{phoneField}</td>
            <td>{btn}</td>
        </tr>);
    }
}

export default Contact;