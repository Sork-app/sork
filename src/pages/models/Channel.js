const mongoose = require('../utils/db.js'); // Adjust the path as necessary
const { Schema } = mongoose;

const messageSchema = new Schema({
  messageID: String,
  messageContents: String,
  userID: String,
  username: String,
  attachmentLinks: [String],
  reaction: [String],
  editHistory: [{ editTime: Date, editText: String }]
});

const channelSchema = new Schema({
  type: { type: String, enum: ['Application', 'Message', 'Voice'], required: true },
  permissions: [String],
  messages: [messageSchema]
});

const Channel = mongoose.model('Channel', channelSchema);
module.exports = Channel;