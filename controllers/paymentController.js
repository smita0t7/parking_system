import Payment from '../models/Payment.js';
import Reservation from '../models/Reservation.js';

const paymentController = {
  createPayment: async (req, res) => {
    try {
      const { reservationId, paymentAmount, paymentMethod } = req.body;

      const reservation = await Reservation.findById(reservationId);
      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }

      const newPayment = new Payment({
        reservation: reservationId,
        paymentAmount,
        paymentMethod,
        paymentStatus: 'completed', // Assume the payment is successful
      });

      await newPayment.save();

      res.status(201).json({ message: 'Payment completed successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  getPaymentsByReservation: async (req, res) => {
    try {
      const { reservationId } = req.params;
      const payments = await Payment.find({ reservation: reservationId });
      res.status(200).json(payments);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  },
};

export default paymentController;