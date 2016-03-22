import React from 'react';
import {render} from 'react-dom';
import ContactHolderComponent from './ContactHolderComponent.jsx'
import Editbar from './Editbar.jsx'
import CreateContactModal from './CreateContactModal.jsx'
import EditContactModal from './EditContactModal.jsx'
import CMStore from './../stores/CMStore'

class App extends React.Component {

_onChange(){
  let Contacts = JSON.parse(localStorage.contacts);
  this.setState({contacts : Contacts,editContact : CMStore.getEditContact()});
}

componentDidMount(){
  CMStore.addChangeListener(this._onChange);
}

componentWillUnmount(){
  CMStore.removeChangeListener(this._onChange);
}

 constructor(props) {
    super(props);
    let Contacts = JSON.parse(localStorage.contacts);
    this.state = {contacts : Contacts, editContact : CMStore.getEditContact()};
    this._onChange = this._onChange.bind(this);
  }

  render () {
    var editId = this.state.editContact.id;
    var editContact = this.state.editContact;
    if (editId !== undefined) {
      $('#edit_contact_modal').openModal();

      $('#edit_contact_form').find('#contact_id').val(this.state.editContact.id);
      $('#edit_contact_form').find('#contact_name').val(this.state.editContact.name);
      $('#edit_contact_form').find('#contact_phone').val(this.state.editContact.phone);
      $('#edit_contact_form').find('#contact_email').val(this.state.editContact.email);
      $('#edit_contact_form').find('#contact_avatar').val(this.state.editContact.avatar);

      setTimeout(function() {
        $('#edit_contact_form').find('#contact_name').focus();
      },50);

      this.state.editContact.id = undefined;
      }
      return (
      <ul className="collection">
        <Editbar/>
        <ContactHolderComponent/>
        <CreateContactModal />
        <EditContactModal />
      </ul>
    );
  }
}

render(<App/>, document.getElementById('cm-holder'));
