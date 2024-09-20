import Hotel from '../Models/Hotel.js'
const hotelController = {}

hotelController.createHotel = async (req, res) => {
    const hotel = new Hotel(req.body)
    hotel.save()
        .then((result) => {
            res.status(201).send({ id: result._id })
        })
        .catch((error) => {
            res.status(400).send({ error: error.message })
        })
}
hotelController.getHotels = async (req, res) => {

    try {
        const hotels = await Hotel.find()
        res.send(hotels)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }

}
hotelController.getHotel = async (req, res) => {
    try {
        const id = req.params.id
        const hotel = await Hotel.findById(id)
        if (!hotel) {
            res.status(404).send({ message: 'Hotel not found' })
            return
        }

        res.send(hotel)

    } catch (error) {
        res.status(500).send({ error: error.message })
    }

}

hotelController.updateHotel = async (req, res) => {
    try {
        const id = req.params.id
        const hotel = await Hotel.findByIdAndUpdate(id, req.body)
        if (!hotel) {
            res.status(404).send({ message: 'Hotel not found' })
            return
        }
        res.status(200).send({ message: 'Hotel updated successfully' })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
hotelController.deleteHotel = async (req, res) => {
    try {
        const id = req.params.id
        const hotel = await Hotel.findByIdAndDelete(id)
        if (!hotel) {
            res.status(404).send({ message: 'Hotel not found' })
            return
        }
        res.send({ message: 'Hotel deleted successfully' })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

export default hotelController