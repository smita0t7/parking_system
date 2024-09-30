const mongoose =require ("mongoose");
const {Schema} = mongoose;

const paymentSchema = new Schema({
    reservation:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation',
        required: true
    },
    paymentAmount:{
        type: Number,
        required: true
    },
    paymentMethod:{
        type:String,
        enu:["credit_card", "paypal", "cash"],
        required:true
    },
    paymentStatus:{
        type:String,
        enum:["pending", "paid", "failed"],
        default:"pending"
    },
    paymentDate:{
        type:Date,
        default:Date.now
    },
});

module.exports = mongoose.model("payment", paymentSchema);