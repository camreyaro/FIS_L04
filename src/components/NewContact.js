import React from 'react';

class NewContact extends React.Component {
    state = {
        name: '',
        phone: ''
    };
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (<tr>
            <td><input className="form-control" name="name" onChange={this.handleChange}/></td>
            <td><input className="form-control" name="phone" onChange={this.handleChange}/></td>
            <td><button className="btn btn-info" onClick={() => this.props.addContact(this.state)}>Add</button></td>
        </tr>);
    }
}

export default NewContact;