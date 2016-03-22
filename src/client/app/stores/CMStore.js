import {EventEmitter} from 'events'
import AppDispatcher from './../dispatcher/AppDispatcher'

var CHANGE_EVENT = 'change';

var Contacts = [];
var editContact = {}
function create(newContact)
{
  Contacts = JSON.parse(localStorage.contacts);
  var length = "";
  length = Contacts.length;
  let nwbee = {
    id: length+1,
    name: newContact.name,
    phone: newContact.phone,
    email: newContact.email,
    avatar: newContact.avatar
  };

  Contacts.push(nwbee);
  localStorage.setItem("contacts",JSON.stringify(Contacts)) ;
}

function edit(contact)
{
  editContact = {
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    avatar: contact.avatar
  };
}

function remove(id)
{
  Contacts = JSON.parse(localStorage.contacts);
  var idx = ""
  Contacts.forEach(function(item,index){
  	if(item.id === id)
    {
      idx = index;
    }
  });
  Contacts.splice(idx,1);
  localStorage.setItem("contacts",JSON.stringify(Contacts))  ;
}

function save(contact)
{
  Contacts = JSON.parse(localStorage.contacts);
  Contacts.forEach(function(item,index){
  	if(item.id === contact.id)
    {
      item.name = contact.name;
      item.phone = contact.phone;
      item.email = contact.email;
      item.avatar = contact.avatar;
    }
  });
  localStorage.setItem("contacts",JSON.stringify(Contacts))  ;
}

class CMStoreClass extends EventEmitter{

  emitChange() {
      this.emit(CHANGE_EVENT);
    }

  getEditContact(){
    return editContact;
  }

 addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  constructor(props)
  {
    super(props);
    this.emitChange = this.emitChange.bind(this);
    this.addChangeListener = this.addChangeListener.bind(this);
    this.removeChangeListener = this.removeChangeListener.bind(this);
  }

}
const CMStore = new CMStoreClass();
AppDispatcher.register((action) => {
  var text;

  switch(action.actionType) {
    case "create":
      text = action.name.trim();
      if (text !== '') {
        create(action);
        CMStore.emitChange();
      }
      break;

      case "edit":
        edit(action);
        CMStore.emitChange();
        break;

      case "save":
        save(action);
        CMStore.emitChange();
        break;
      case "delete":
        remove(action.id);
        CMStore.emitChange();
        break;

      default:
        return true;
  }
});

export default CMStore;
