import { request, response } from "express";
import User from "../Models/User.js";
import Hotel from "../Models/Hotel.js";

const userController = {}

userController.createReservation = async (req = request, res = response) => {

    const { uid, hotelId, date_start, date_end } = req.body

    try {
        const user = await User.findById(uid)
        if (!user) {
            res.status(404).send({ message: 'User not found' })
            return
        }

        const hotel = await Hotel.findById(hotelId)
        if (!hotel) {
            res.status(404).send({ message: 'Hotel not found' })
            return
        }

        const reservation = {
            id: new Date().getTime(),
            hotel: hotelId,
            hotelName: hotel.name,
            hotelImage: hotel.image,
            hotelRating: hotel.rating,
            date_start,
            date_end
        }

        user.reservations.push(reservation)
        await user.save()
        res.status(201).send({ reservation })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }

}

userController.updateReservation = async (req = request, res = response) => {

    const { id } = req.params
    const { uid, date_start, date_end } = req.body
    console.log("Editantdo reserva", uid, id, date_start, date_end, req.body)
    try {
        const user = await User.findById(uid)
        if (!user) {
            res.status(404).send({ message: 'User not found' })
            return
        }

        let reservations = user.reservations
        const reservation = reservations.findIndex(reservation => reservation.id == id)

        const newReservation = { ...reservations[reservation], date_start, date_end }
        user.reservations[reservation] = newReservation

        await user.save()

        res.send({ message: 'Reserva Actualizada' })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }

}

userController.deleteReservation = async (req = request, res = response) => {

    const { id } = req.params
    const { uid } = req.body

    try {
        const user = await User.findById(uid)
        if (!user) {
            res.status(404).send({ message: 'User not found' })
            return
        }

        let reservations = user.reservations
        const reservation = reservations.findIndex(reservation => reservation.id == id)
        user.reservations.splice(reservation, 1)
        await user.save()
        res.send({ message: 'Reserva Eliminada' })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }

}

userController.getReservations = async (req = request, res = response) => {

    const { uid } = req.body

    try {
        const user = await User.findById(uid)
        if (!user) {
            res.status(404).send({ message: 'User not found' })
            return
        }

        res.send(user.reservations)

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

export default userController;