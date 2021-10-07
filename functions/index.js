/* eslint-disable */
const functions = require('firebase-functions');

const app = require('express')();

const Auth = require('./util/auth');

// const cors = require('cors');
// app.use(cors());

// const { db, admin } = require('./util/admin');

const { 
  getAllEvents,
  getEventsByContact,
  addNewEvent,
  deleteEvent,
  updateEvent
} = require('./handlers/events');

// Event routes
app.get('/events', Auth, getAllEvents);
app.get('/events/:contactId', Auth, getEventsByContact);
app.post('/event', Auth, addNewEvent);
app.delete('/event/:eventId', Auth, deleteEvent);
app.put('/event/:eventId', Auth, updateEvent);

const { 
  getAllContacts,
  addNewContact,
  deleteContact,
  updateContact,
  orderByName,
  // searchForName,
  orderByLocation,
  orderByCompany,
  uploadImage
} = require('./handlers/contacts');

// Contact routes
app.get('/contacts', getAllContacts);
app.post('/contact', addNewContact);
app.delete('/contact/:contactId', deleteContact);
app.put('/contact/:contactId', updateContact);
app.get('/contacts/sort/name',orderByName);
app.get('/contacts/sort/location',orderByLocation);
app.get('/contacts/sort/company',orderByCompany);
app.post('/contacts/:contactId/image',uploadImage);
// app.get('/contacts/search/name',searchForName);

// Signup route
exports.api = functions.region('australia-southeast1').https.onRequest(app);
