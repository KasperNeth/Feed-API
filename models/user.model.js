const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const shortid = require('shortid')


const UserSchema = new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    email: { unique: true, type: String },
    password: String,
    username: { unique: true, type: String },
})

// run this function before creating the document
UserSchema.pre(
    'save',
    async function (next) {
        const user = this;
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    }
);

UserSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
}


const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;