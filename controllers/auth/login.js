const { User } = require("../../db/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const passCompare = bcrypt.compareSync(password, user.password);   // check password
    
    if (!user || !user.verify || !passCompare) { 
        return res.status(401).json({
            message: "Email is wrong or not verify, or password is wrong"
        })
    }

    const payload = {
        id: user._id
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    await User.findByIdAndUpdate(user._id, { token });
    res.status(200).json({
        status: "Ok",
        token,
        user: {
          email,
          user: user.subscription,
        },
    })

}

module.exports = {
    login
};



// ------------------------ //
    // if(!user || !user.comparePassword(password)){
    //     throw new Unauthorized("Email or password is wrong");
    // }


    // if (!user) {
    //     return res.status(401).json({
    //         message: `Email ${email} not found`,
    //     });
    // }
    // if (!passCompare) {
    //     return res.status(401).json({
    //         message: "Password wrong",
    //     });
    // }