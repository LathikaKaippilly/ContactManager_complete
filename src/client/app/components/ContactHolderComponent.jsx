import React from 'react';
import ContactRow from './ContactRow.jsx';

class ContactHolderComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render()
  {
  	var Contacts = JSON.parse(localStorage.contacts);
  	var rows =[];
  	Contacts.forEach(function(contact) {
        		rows.push(<ContactRow contact={contact} />);
      		}.bind(this));

    return (
	     <ul>{rows}</ul>
    );
  }
}

export default ContactHolderComponent;
