/*
 * This file contains mongoDB model for storing name, credit card info.
 */

// Imports.
const mongoose = require('mongoose');

// Create simple schema. In real world this would likely
// use the 'ref' to create one-to-many relationship.
const ProfileSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  cards: [{
    cardCompany: String,
    cardHolder: String,
    cardNumber: String,
    expDate: String,
    cvv: Number
  }]
})

// Export.
module.exports = mongoose.model('Profile', ProfileSchema)