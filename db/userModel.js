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
      avatarURL: {
        type: String,
        required: true,
      },
      verify: {
        type: Boolean,
        default: false,
      },
      verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
      },
}, { versionKey: false, timestamps: true });

const User = model("user", userSchema);

module.exports = {
    User
};