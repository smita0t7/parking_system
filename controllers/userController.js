const User = require("../models/user");

const userController = {
    //register a new user
    register: async (req, res) => {
        try{
            const {name, email, password, role} = req.body;

            //check if the email is already exist
             const existingUser = await User.findOne ({email})
             if (existingUser) {
                return res.status(400).json({ message: "user already exists"});
             }

             //create new user
             const newUser = new User ({name, email, password, role});
             await newUser.save();

             res.status(201).json({message: "user created successfully"})
            }
            catch (err) {
                res.status(500).json({message:"server error"});
        }
    },

    //login user
    login: async (req, res) => {
        try{
            const {email, password} = req.body;

            //find the user by email
            const user = await User.findOne({email});
            if (!user) {
                return res.status(400).json({ message: "invalid email or password" });

                res.status(200).json({message: "login successfull", user})
            }
        }
        catch(err){
            res.status(500).json({message: "server error"});
        }
    },

    //get user information by user ID
    getUser: async (req, res) => {
        try{
            const user = await User.findById(req.params.userId);

            if (!user){
                return res.status(404).son({message: "user not found"});
            }
            res.status(500).json(user);
        }
        catch(err){
            res.status(500).json({message: "server error"});
        }
    }
}

module.exports = userController;