import Reservation from '../models/Reservation';
import ParkingLot from '../models/parkingLot';


const reservationController = {
  createReservation: async (req, res) => {
    try {
      const { userId, parkingLotId, startTime, endTime } = req.body;

      // Fetch the parking lot and check available slots
      const parkingLot = await ParkingLot.findById(parkingLotId);
      if (parkingLot.availableSlots < 1) {
        return res.status(400).json({ message: 'No available slots' });
      }

      const duration = (new Date(endTime) - new Date(startTime)) / (1000 * 60 * 60); // Calculate duration in hours
      const totalCost = duration * parkingLot.pricePerHour;

      const newReservation = new Reservation({
        user: userId,
        parkingLot: parkingLotId,
        startTime,
        endTime,
        totalCost,
        status: 'reserved',
      });

      // Decrement available slots
      parkingLot.availableSlots -= 1;
      await parkingLot.save();

      await newReservation.save();

      res.status(201).json({ message: 'Reservation created', totalCost });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  getReservationsByUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const reservations = await Reservation.find({ user: userId }).populate('parkingLot');
      res.status(200).json(reservations);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  updateReservationStatus: async (req, res) => {
    try {
      const { reservationId, status } = req.body;
      
      const reservation = await Reservation.findById(reservationId);
      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }

      reservation.status = status;
      await reservation.save();

      res.status(200).json({ message: 'Reservation status updated' });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  },
};

export default reservationController;
