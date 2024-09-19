import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, default: "" },
    available: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    reviews: { type: Array, default: [] },
    reservations: { type: Array, default: [] },
})

export default mongoose.model("Hotel", HotelSchema);