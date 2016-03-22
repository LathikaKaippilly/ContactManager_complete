import React from 'react';
import {render} from 'react-dom';
import CreateContactModal from './CreateContactModal.jsx'

class Editbar extends React.Component {
   _openAddModal()
   {
  	$('#contact_modal').openModal();
  	$('#contact_modal').find('#contact_name').focus();
   }

   render ()
   {
    return (
      <li className="collection-header">
				<span className="title flow-text">Contact Manager</span>
				<a onClick={this._openAddModal} className="teal darken-1 waves-effect waves-circle waves-light btn-floating secondary-content">
					<i className="mdi-content-add"></i>
				</a>
			</li>
	  );
  }

}

export default Editbar;
