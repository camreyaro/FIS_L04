import React from 'react';
import Contact from './Contact';
import NewContact from './NewContact';
import Alert from './Alert';

class Contacts extends React.Component {
    state = {
        contact: false,
        show: false,
        contacts: this.props.contacts,
        message: '',
        showEdit: false
    };

    constructor(props) {
        super(props);
        this.editContact = this.editContact.bind(this); // por qué se hace esto?
        this.addContact = this.addContact.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    editContact(contactToEdit) { //contact almacena el último contacto para el que se pulsó editar, y contactToEdit el que se ha pulsado ahora
        if (!this.state.contact) { //si aún no se ha editado ningún contacto, primero lo guardamos y mostramos el input
            this.showAlert(contactToEdit)
            this.setState({
                showEdit: true
            })
        } else { //si existe, primero controlamos si hay que ocultar el input o no (para evitar que si hay un input abierto, se cierre al pulsar Edit en otro contacto)
            if (contactToEdit.name == this.state.contact.name) {
                this.setState({
                    showEdit: !this.state.showEdit
                })
                this.showAlert(contactToEdit) // el orden del showAlert es importante, primero la comprobación y luego se machaca el contact del estado
            }
        }
    };

    saveContact(contactName, newPhone) {
        var contacts = this.state.contacts;
        for (var index in contacts){
            var contact = contacts[index]
            if (contact.name == contactName){
                var editedContact = contact;
                editedContact['phone'] = newPhone;
                contacts[index] = editedContact
            }
        }
        this.setState({
            contacts: contacts,
            show: true,
            message: 'Contact edited successfully',
            showEdit: false
        });
    };

    deleteContact(contactName) {
        var contacts = this.state.contacts;
        for (var index in contacts){
            var contact = contacts[index]
            if (contact.name == contactName){
                contacts.splice(index, 1)
            }
        }
        this.setState({
            contacts: contacts,
            show: true,
            message: 'Contact removed successfully',
            showEdit: false
        });
    };

    showAlert(contact) {
        this.setState({
            contact: contact,
            show: true
        });
    };

    onClose = () => {   //Porque esto funciona y onClose() no?
        this.setState({
            show: false
        });
    };

    addContact(newContact) {
        for (var index in this.state.contacts) {
            var contact = this.state.contacts[index]
            if (newContact.name == contact.name) {
                this.setState({
                    message: `Contact with name ${contact.name} already exists`,
                    show: true
                })
                return;
            }
        }
        this.setState({
            contacts: [...this.state.contacts, newContact]
        })
    };

    render() {
        const listItems = this.state.contacts.map((contact) =>
            <Contact key={contact.name} value={contact} deleteContact={this.deleteContact} saveContact={this.saveContact} contactToEdit={this.state.contact} editContact={this.editContact} showEdit={this.state.showEdit} />);
        return (<div><table className="table table-bordered">
            <thead className="thead-light">
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
            <NewContact addContact={this.addContact} />
        </table> <Alert onClose={this.onClose} message={this.state.message} show={this.state.show} contact={this.state.contact} /></div>)
    }
}

export default Contacts;