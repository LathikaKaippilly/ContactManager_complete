import React from 'react';
import CMActions from './../actions/CMActions'

class ContactRow extends React.Component {

  constructor(props) {
    super(props);
    this.openEditModal = this.openEditModal.bind(this);
  }

  openEditModal() {
    var contact = this.props.contact;
    CMActions.Edit(contact);
  };

  render() {
    var contact = this.props.contact;
    return (
      <li className="collection-item avatar">
          <img src={contact.avatar} className="circle" />
          <span className="title">{contact.name}</span>
          <p>Phone Number: {contact.phone} <br />
          Email: {contact.email}
          </p>
          <a href="#" onClick={this.openEditModal} className="secondary-content"><i className="mdi-editor-mode-edit"></i></a>
      </li>
    );
  }
}

export default ContactRow;
