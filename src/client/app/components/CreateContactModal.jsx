import React from 'react';
import CMActions from './../actions/CMActions'

class CreateContactModal extends React.Component
{
  constructor(props) {
      super(props);
      this._clearContactForm = this._clearContactForm.bind(this);
      this._saveContact = this._saveContact.bind(this);
    }
  render()
  {
    return (
      <div id="contact_modal" className="modal">
        <form id="contact_form" >
          <div className="modal-content">
            <h4>Add New Contact</h4>
            <div className="input-field">
              <i className="mdi-action-account-circle prefix"></i>
              <input id="contact_name" type="text" className="validate" />
              <label for="icon_prefix">Name</label>
            </div>
            <div className="input-field">
              <i className="mdi-communication-phone prefix"></i>
              <input id="contact_phone" type="tel" className="validate"/>
              <label for="icon_telephone">Phone</label>
            </div>
            <div className="input-field">
              <i className="mdi-communication-email prefix"></i>
              <input id="contact_email" type="email" className="validate"/>
              <label for="icon_email">Email</label>
            </div>
          </div>
          <input type="submit" className="hidden-btn"/>
        </form>

        <div className="modal-footer">
          <a onClick={this._saveContact} className="modal-action modal-close waves-effect waves-green btn-flat">Press enter or click here</a>
        </div>
      </div>
    );
  }

  _clearContactForm() {
		var form = $('#contact_form');

		form.find('#contact_name').val('');
		form.find('#contact_phone').val('');
		form.find('#contact_email').val('');
		$('#contact_modal').closeModal();
	}

	_saveContact(e) {
		e.preventDefault();
		var newContact = {};
		var form = $('#contact_form');

		newContact.name = form.find('#contact_name').val();
		newContact.phone = form.find('#contact_phone').val();
		newContact.email = form.find('#contact_email').val();

    CMActions.Create(newContact);

	  this._clearContactForm();
	}


}

export default CreateContactModal;
