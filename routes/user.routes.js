const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const auth = require("../middleware/auth");

dotenv.config();


const User = require("../schema/user.schema");


router.post("/register", async (req, res) => {

    const {name, email, mobile, password, continueToggle} = req.body;

    const isEmailRegistered = await User.findOne({email});
    const isMobileResgistered = await User.findOne({mobile});

    if (isEmailRegistered) {
        return res.status(400).json({message: "User already exists !!"});
    } else if (isMobileResgistered && !continueToggle) {
        return res.status(208).json({message: "Mobile already registered"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await  bcrypt.hash(password, salt);

        try{
            const user = await User.create({
                name,
                email,
                mobile,
                password: hashedPassword
            })
    
            await user.save();
    
            return res.status(200).json({message: "User created successfully !!"});
    
        } catch (err) {
            console.log(err)
            return res.status(500).json({message: "Error in creating User !!", err});
        }

});




router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    try{
        if (!user){
            return res.status(404).json({message: "Invalid Credentials"});
        }
        const isvalidpassword = await bcrypt.compare(password,user.password);
        if (!isvalidpassword){
            return res.status(404).json({message: "Invalid Credentials"});
            console.log(res);
        };

        const payload = {
            id: user._id
        };


        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '24h'
        });


        return res.status(200).json({message: "Token created Successfully", token: token});


    } catch (err){
        return res.status(500).json({message: "Error in finding user !!", err});
    }

}
);


router.put('/modify', auth, async (req, res) => {

    const id = req.user.id;

    const { name, mobile, email, password } = req.body;

    if (!name || !mobile || !email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
    }


    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.findByIdAndUpdate(id, {
            name,
            mobile,
            email,
            password: hashedPassword
        });

        return res.status(200).json({ message: "User details updated successfully" });
    } catch (err) {
        return res.status(400).json({ message: "Error in updating user details", err });
    }
});




module.exports = router;