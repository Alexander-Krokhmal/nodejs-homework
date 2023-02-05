const { Schema, model } = require("mongoose");
// const bcrypt = require("bcryptjs");

const userSchema = Schema({
    password: {
        type: String,
        minLength: [6, "password should be at least 6 characters long"],
        required: [true, "Set password for user"],
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
      },
      subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
      },
      token: {
        type: String,
        default: null,
      },
}, { versionKey: false, timestamps: true });

// --------another version of hash password (with method)-------//

// userSchema.methods.setPassword = function(password){
//     this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// }

// userSchema.methods.comparePassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// }

const User = model("user", userSchema);

module.exports = {
    User
};