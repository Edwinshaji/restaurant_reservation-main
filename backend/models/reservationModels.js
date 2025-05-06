import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    date: {type: Date, required: true}, 
    time: {type: String, required: true},
    guests: {type: Number, required: true},
})

const reservationModel = mongoose.models.Reservation || mongoose.model("Reservation", reservationSchema)
export default reservationModel;
