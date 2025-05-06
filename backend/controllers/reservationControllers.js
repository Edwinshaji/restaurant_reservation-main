import reservationModel from "../models/reservationModels.js";


const createReservation = async (req, res) => {
    try {
        const { name, email, phone, date, time, guests } = req.body;
        if (!name || !email || !phone || !date || !time || !guests) {
             res.json({ success: false, message: "Please fill all the fields" });
        }

        const newreservation = new reservationModel({
            name,
            email,
            phone,
            date,
            time,
            guests
        })
        await newreservation.save();
    } catch (error) {
        console.log(error);
         res.json({ message: error.message });

    }

}

const getAllReservation = async (req, res) => {
    try {
        const reservations = await reservationModels.find();
         res.json(reservations );
    } catch (error) {
        console.log(error);
         res.json({ message: "error fetching reservations" });
        
    }

}

const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        await reservationModels.findByIdAndDelete(id);
         res.json({ message: "Reservation deleted successfully" });
    } catch (error) {
        console.log(error);
         res.json({ message: "error deleting reservation" });
    
        
    }

}

export { createReservation, getAllReservation, deleteReservation }