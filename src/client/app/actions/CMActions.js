import AppDispatcher from './../dispatcher/AppDispatcher';

export default class CMActions {
  static Create(newContact)
  {
      var avatar = 'Images/1.jpg';
    	newContact.avatar = avatar;

      AppDispatcher.dispatch({
       actionType: 'create',
       name: newContact.name,
       phone: newContact.phone,
       email: newContact.email,
       avatar: newContact.avatar
     });
  }

  static Edit(Contact)
  {
      AppDispatcher.dispatch({
       actionType: 'edit',
       id:Contact.id,
       name: Contact.name,
       phone: Contact.phone,
       email: Contact.email,
       avatar: Contact.avatar
     });
  }

  static Save(Contact)
  {
      AppDispatcher.dispatch({
       actionType: 'save',
       id:Contact.id,
       name: Contact.name,
       phone: Contact.phone,
       email: Contact.email,
       avatar: Contact.avatar
     });
  }
  static Remove(Contact)
  {
      AppDispatcher.dispatch({
       actionType: 'delete',
       id:Contact
     });
  }
};
