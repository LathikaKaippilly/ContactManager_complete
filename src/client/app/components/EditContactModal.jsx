import React from 'react'
import CMActions from './../actions/CMActions'

class EditContactModal extends React.Component
{
  constructor(props)
  {
    super(props);
    this.saveContact = this.saveContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  render()
  {
  return(
    <div id="edit_contact_modal" className="modal">
				<form id="edit_contact_form" onSubmit={this._saveContact}>
					<div className="modal-content">
						<h4>Edit Contact</h4>
						<div className="input-field">
							<i className="mdi-action-account-circle prefix"></i>
							<input id="contact_name" type="text" className="validate" />

						</div>
						<div className="input-field">
							<i className="mdi-communication-phone prefix"></i>
							<input id="contact_phone" type="tel" className="validate"/>

						</div>
						<div className="input-field">
							<i className="mdi-communication-email prefix"></i>
							<input id="contact_email" type="email" className="validate"/>
						</div>
					</div>
					<input id="contact_id" type="hidden" />
					<input id="contact_avatar" type="hidden" />
					<input type="submit" className="hidden-btn"/>
				</form>

				<div className="modal-footer">
					<a onClick={this.saveContact} className="modal-action modal-close waves-effect waves-green btn-flat">Press enter or click here</a>
					<a onClick={this.removeContact} className="red lighten-4 modal-action modal-close waves-effect waves-red btn-flat">delete contact</a>
				</div>
		</div>
    );
    }

	saveContact(e)
  {
		e.preventDefault();

		var contact = {};
		var form = $('#edit_contact_form');

		contact.id = Number(form.find('#contact_id').val());
		contact.avatar = form.find('#contact_avatar').val();
		contact.name = form.find('#contact_name').val();
		contact.phone = form.find('#contact_phone').val();
		contact.email = form.find('#contact_email').val();

		CMActions.Save(contact);

		this.clearContactForm();
	}

	removeContact(e)
  {
		e.preventDefault();
		var removeId = Number($('#edit_contact_form').find('#contact_id').val());
		CMActions.Remove(removeId);

		this.clearContactForm();
	}

	clearContactForm()
  {
		var form = $('#edit_contact_form');

		form.find('#contact_name').val('');
		form.find('#contact_phone').val('');
		form.find('#contact_email').val('');
		$('#edit_contact_modal').closeModal();
	}
}

export default EditContactModal;
