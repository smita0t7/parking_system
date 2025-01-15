// import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   MenuItem,
//   Grid,
//   Paper,
//   FormControl,
//   InputLabel,
//   Select,
// } from "@mui/material";
// import axios from "axios";
// import { useSnackbar } from "notistack";

// const UpdateSlot = () => {
//   const [slot, setSlot] = useState({
//     slotNumber: "",
//     vehicleType: "",
//     customerName: "",
//     phoneNumber: "",
//     vehicleNumber: "",
//     duration: "",
//     rentPerHour: 50,
//     totalRent: 0,
//     arrivalTime: "",
//     bookingDate: "",
//   });

//   const { id } = useParams(); // Assuming `id` is the unique identifier
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     axios
//       .get(`https://parkingsystem-8xdu.onrender.com/api/lots/${id}`)
//       .then((res) => {
//         setSlot(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching slot details:", err);
//         enqueueSnackbar("Failed to fetch slot details.", { variant: "error" });
//       });
//   }, [id, enqueueSnackbar]);

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setSlot((prev) => ({
//       ...prev,
//       [name]: value,
//       ...(name === "duration" && {
//         totalRent: (parseInt(value, 10) || 0) * parseInt(prev.rentPerHour || 0, 10),
//       }),
//     }));
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put(`https://parkingsystem-8xdu.onrender.com/api/lots/${id}`, slot)
//       .then(() => {
//         enqueueSnackbar("Slot updated successfully!", { variant: "success" });
//         navigate(`/slot-detail/${id}`);
//       })
//       .catch((err) => {
//         console.error("Error updating slot details:", err);
//         enqueueSnackbar("Failed to update slot details. Please try again.", { variant: "error" });
//       });
//   };

//   return (
//     <Container maxWidth="sm" sx={{ my: 5 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Update Parking Slot
//       </Typography>
//       <Paper sx={{ padding: 3 }}>
//         <form onSubmit={onSubmit}>
//           <TextField
//             fullWidth
//             label="Slot Number"
//             name="slotNumber"
//             value={slot.slotNumber}
//             onChange={onChange}
//             variant="outlined"
//             margin="normal"
//             disabled
//           />
//           <TextField
//             fullWidth
//             label="Customer Name"
//             name="customerName"
//             value={slot.customerName}
//             onChange={onChange}
//             variant="outlined"
//             margin="normal"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Phone Number"
//             name="phoneNumber"
//             value={slot.phoneNumber}
//             onChange={onChange}
//             variant="outlined"
//             margin="normal"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Vehicle Number"
//             name="vehicleNumber"
//             value={slot.vehicleNumber}
//             onChange={onChange}
//             variant="outlined"
//             margin="normal"
//             required
//           />
//           <FormControl fullWidth margin="normal">
//             <InputLabel>Vehicle Type</InputLabel>
//             <Select
//               name="vehicleType"
//               value={slot.vehicleType}
//               onChange={onChange}
//               variant="outlined"
//             >
//               <MenuItem value="Car">Car</MenuItem>
//               <MenuItem value="Bike">Bike</MenuItem>
//               <MenuItem value="Truck">Truck</MenuItem>
//             </Select>
//           </FormControl>
//           <TextField
//             fullWidth
//             label="Duration (in hours)"
//             name="duration"
//             type="number"
//             value={slot.duration}
//             onChange={onChange}
//             variant="outlined"
//             margin="normal"
//             required
//           />
//           <Typography variant="body1" sx={{ mt: 2 }}>
//             Total Rent: {slot.totalRent || 0} Rupees
//           </Typography>
//           <TextField
//             fullWidth
//             label="Arrival Time"
//             name="arrivalTime"
//             type="time"
//             value={slot.arrivalTime}
//             onChange={onChange}
//             InputLabelProps={{ shrink: true }}
//             variant="outlined"
//             margin="normal"
//           />
//           <TextField
//             fullWidth
//             label="Booking Date"
//             name="bookingDate"
//             type="date"
//             value={slot.bookingDate}
//             onChange={onChange}
//             InputLabelProps={{ shrink: true }}
//             variant="outlined"
//             margin="normal"
//           />
//           <Grid container spacing={2} sx={{ mt: 3 }}>
//             <Grid item xs={6}>
//               <Button type="submit" variant="contained" color="primary" fullWidth>
//                 Update Slot
//               </Button>
//             </Grid>
//             <Grid item xs={6}>
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 fullWidth
//                 onClick={() => navigate(`/slot-detail/${id}`)}
//               >
//                 Cancel
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default UpdateSlot;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, MenuItem, Button, FormControlLabel, Checkbox, Container, Typography, Grid, Paper } from '@mui/material';

const UpdateSlot = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [room, setRoom] = useState({
        room_number: '',
        floor_number: '',
        building_name: '',
        room_type: 'Single',
        rent: '',
        availability: true,
        tenant_name: '',
        tenant_email: '',
        tenant_phone: '',
        lease_start_date: '',
        lease_end_date: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://parkingsystem-8xdu.onrender.com/api/lots/:id${id}`)
            .then((res) => {
                setRoom(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to fetch room details. Please try again.');
                setLoading(false);
                console.error('Error fetching room details:', err);
            });
    }, [id]);

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setRoom({
            ...room,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (room.rent <= 0) {
            setError('Rent must be a positive number.');
            setLoading(false);
            return;
        }

        if (room.lease_start_date && room.lease_end_date && new Date(room.lease_start_date) > new Date(room.lease_end_date)) {
            setError('Lease start date cannot be later than the lease end date.');
            setLoading(false);
            return;
        }

        axios
            .put(`https://parkingsystem-8xdu.onrender.com/api/lots/${id}`, room)
            .then(() => {
                alert('Room updated successfully!');
                navigate(`/rooms/${id}`);
            })
            .catch((err) => {
                const errorMessage = err.response?.data || 'Failed to update room. Please try again.';
                setError(errorMessage);
            })
            .finally(() => setLoading(false));
    };

    return (
        <Container maxWidth="sm" sx={{ my: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Update Room
            </Typography>
            <Paper sx={{ padding: 3 }}>
                <form onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        {/* Room Number */}
                        <Grid item xs={12}>
                            <TextField
                                label="Room Number *"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="room_number"
                                value={room.room_number}
                                onChange={onChange}
                                required
                                aria-label="Room Number"
                            />
                        </Grid>

                        {/* Floor Number */}
                        <Grid item xs={12}>
                            <TextField
                                label="Floor Number *"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="floor_number"
                                type="number"
                                value={room.floor_number}
                                onChange={onChange}
                                required
                                aria-label="Floor Number"
                            />
                        </Grid>

                        {/* Building Name */}
                        <Grid item xs={12}>
                            <TextField
                                label="Building Name *"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="building_name"
                                value={room.building_name}
                                onChange={onChange}
                                required
                                aria-label="Building Name"
                            />
                        </Grid>

                        {/* Room Type */}
                        <Grid item xs={12}>
                            <TextField
                                select
                                label="Room Type *"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="room_type"
                                value={room.room_type}
                                onChange={onChange}
                                required
                                aria-label="Room Type"
                            >
                                <MenuItem value="Single">Single</MenuItem>
                                <MenuItem value="Double">Double</MenuItem>
                                <MenuItem value="Shared">Shared</MenuItem>
                            </TextField>
                        </Grid>

                        {/* Rent */}
                        <Grid item xs={12}>
                            <TextField
                                label="Rent (₹ per month) *"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="rent"
                                type="number"
                                value={room.rent}
                                onChange={onChange}
                                required
                                aria-label="Rent"
                            />
                        </Grid>

                        {/* Availability */}
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="availability"
                                        checked={room.availability}
                                        onChange={onChange}
                                        aria-label="Availability"
                                    />
                                }
                                label="Available"
                            />
                        </Grid>

                        {/* Tenant Details */}
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Tenant Details (Optional)
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Tenant Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="tenant_name"
                                value={room.tenant_name}
                                onChange={onChange}
                                aria-label="Tenant Name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Tenant Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="tenant_email"
                                type="email"
                                value={room.tenant_email}
                                onChange={onChange}
                                aria-label="Tenant Email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Tenant Phone"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="tenant_phone"
                                type="tel"
                                value={room.tenant_phone}
                                onChange={onChange}
                                aria-label="Tenant Phone"
                            />
                        </Grid>

                        {/* Lease Dates */}
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Lease Dates
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Lease Start Date"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="lease_start_date"
                                type="date"
                                value={room.lease_start_date}
                                onChange={onChange}
                                InputLabelProps={{ shrink: true }}
                                aria-label="Lease Start Date"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Lease End Date"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="lease_end_date"
                                type="date"
                                value={room.lease_end_date}
                                onChange={onChange}
                                InputLabelProps={{ shrink: true }}
                                aria-label="Lease End Date"
                            />
                        </Grid>

                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                                {loading ? 'Updating...' : 'Update Room'}
                            </Button>
                        </Grid>

                        {/* Cancel Button */}
                        <Grid item xs={12}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                sx={{ mt: 2 }}
                                onClick={() => navigate('/rooms')}
                                aria-label="Cancel"
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                {/* Error Message */}
                {error && <Typography color="error" variant="body2" sx={{ mt: 2 }}>{error}</Typography>}
            </Paper>
        </Container>
    );
};

export default UpdateSlot;