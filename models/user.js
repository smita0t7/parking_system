const mongoose = require ("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    role:{
            type: String,
            enum: ["admin", "customer"],
            default: "customer"
    },
    registeredAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("user", userSchema);