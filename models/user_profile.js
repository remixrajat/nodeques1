
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_profileSchema = new Schema({
    dob: String,
    Mobile_no: String,
    users: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

const User_profile = mongoose.model ('test_score', user_profileSchema);

module.exports = User_profile;