const mongoose = require('../utils/db.js');
const { Schema } = mongoose;

const organizationSchema = new Schema({
  organizationID: String,
  name: String,
  billingPlan: String,
  orgPicture: String,
  memberCount: Number,
  members: [String], // Array of User IDs
  trialStatus: Boolean
});

const Organization = mongoose.model('Organization', organizationSchema);
module.exports = Organization;