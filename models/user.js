const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: String,
    email: String,
    lastname: String,
    password: String,
    test_scores: [{
        type: Schema.Types.ObjectId,
        ref: 'test_score'
    }]
});

const User = mongoose.model ('user', userSchema);

module.exports = User;