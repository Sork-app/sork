const mongoose = require('../../utils/db.js');
const { Schema }= mongoose;

const userSchema = new Schema({
    organizations: [String],
    name: String,
    userID: String,
    createDate: Date,
    birthday: Date,
    permissionScope: {
      canRead: Boolean,
      canWrite: Boolean,
      canVC: Boolean
    },
    email: String,
    phoneNumber: String,
    pronouns: String,
    nickname: String,
    location: String,
    bio: String,
    status: String,
    isActive: Boolean,
    isBillingAdmin: Boolean,
    profilePictureURL: String,
    social: [String], // Assuming array of strings for social media links
    doNotDisturbPeriods: [{ start: Date, end: Date }],
    inActivity: Boolean,
    inVoice: Boolean
});

const User = mongoose.model('User', userSchema);
module.exports = User;