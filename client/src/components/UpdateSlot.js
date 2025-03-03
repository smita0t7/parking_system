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
//       .get(`https://parking-system-j82e.onrender.com/api/lots/${id}`)
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
//       .put(`https://parking-system-j82e.onrender.com/api/lots/${id}`, slot)
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

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
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

//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     axios
//       .get(`https://parking-system-j82e.onrender.com/api/lots/${id}`)
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
//         totalRent: (parseInt(value, 10) || 0) * prev.rentPerHour,
//       }),
//     }));
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`https://parking-system-j82e.onrender.com/api/lots/${id}`, slot);
//       enqueueSnackbar("Slot updated successfully!", { variant: "success" });
//       navigate(`/slot-detail/${id}`);
//     } catch (err) {
//       console.error("Error updating slot details:", err);
//       enqueueSnackbar("Failed to update slot details. Please try again.", { variant: "error" });
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{ my: 5 }}>
//       <Typography variant="h4" align="center" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
//         Update Parking Slot
//       </Typography>
//       <Paper elevation={5} sx={{ padding: 4, borderRadius: 3, backgroundColor: "#f8f9fa" }}>
//         <form onSubmit={onSubmit}>
//           <Grid container spacing={2}>
//             {/* Slot Number */}
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Slot Number"
//                 name="slotNumber"
//                 value={slot.slotNumber}
//                 disabled
//                 variant="outlined"
//                 margin="normal"
//               />
//             </Grid>

//             {/* Customer Name */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Customer Name"
//                 name="customerName"
//                 value={slot.customerName}
//                 onChange={onChange}
//                 variant="outlined"
//                 margin="normal"
//                 required
//               />
//             </Grid>

//             {/* Phone Number */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Phone Number"
//                 name="phoneNumber"
//                 type="tel"
//                 value={slot.phoneNumber}
//                 onChange={onChange}
//                 variant="outlined"
//                 margin="normal"
//                 required
//               />
//             </Grid>

//             {/* Vehicle Number */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Vehicle Number"
//                 name="vehicleNumber"
//                 value={slot.vehicleNumber}
//                 onChange={onChange}
//                 variant="outlined"
//                 margin="normal"
//                 required
//               />
//             </Grid>

//             {/* Vehicle Type */}
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth margin="normal">
//                 <InputLabel>Vehicle Type</InputLabel>
//                 <Select
//                   name="vehicleType"
//                   value={slot.vehicleType}
//                   onChange={onChange}
//                   variant="outlined"
//                   required
//                 >
//                   <MenuItem value="Car">Car</MenuItem>
//                   <MenuItem value="Bike">Bike</MenuItem>
//                   <MenuItem value="Truck">Truck</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>

//             {/* Duration */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Duration (in hours)"
//                 name="duration"
//                 type="number"
//                 value={slot.duration}
//                 onChange={onChange}
//                 variant="outlined"
//                 margin="normal"
//                 required
//               />
//             </Grid>

//             {/* Rent Display */}
//             <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
//               <Typography variant="body1" sx={{ fontWeight: "bold", color: "#1976d2" }}>
//                 Total Rent: {slot.totalRent || 0} Rupees
//               </Typography>
//             </Grid>

//             {/* Arrival Time */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Arrival Time"
//                 name="arrivalTime"
//                 type="time"
//                 value={slot.arrivalTime}
//                 onChange={onChange}
//                 InputLabelProps={{ shrink: true }}
//                 variant="outlined"
//                 margin="normal"
//               />
//             </Grid>

//             {/* Booking Date */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Booking Date"
//                 name="bookingDate"
//                 type="date"
//                 value={slot.bookingDate}
//                 onChange={onChange}
//                 InputLabelProps={{ shrink: true }}
//                 variant="outlined"
//                 margin="normal"
//               />
//             </Grid>
//           </Grid>

//           {/* Buttons */}
//           <Grid container spacing={2} sx={{ mt: 3 }}>
//             <Grid item xs={6}>
//               <Button type="submit" variant="contained" color="primary" fullWidth>
//                 Update Slot
//               </Button>
//             </Grid>
//             <Grid item xs={6}>
//               <Button variant="outlined" color="secondary" fullWidth onClick={() => navigate(`/slot-detail/${id}`)}>
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


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  MenuItem,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";

const UpdateSlot = () => {
  const [slot, setSlot] = useState({
    slotNumber: "",
    vehicleType: "",
    customerName: "",
    phoneNumber: "",
    vehicleNumber: "",
    duration: "",
    rentPerHour: 50,
    totalRent: 0,
    arrivalTime: "",
    bookingDate: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get(`https://parking-system-j82e.onrender.com/api/lots/${id}`)
      .then((res) => {
        setSlot(res.data);
      })
      .catch((err) => {
        console.error("Error fetching slot details:", err);
        enqueueSnackbar("Failed to fetch slot details.", { variant: "error" });
      });
  }, [id, enqueueSnackbar]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setSlot((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "duration" && {
        totalRent: (parseInt(value, 10) || 0) * prev.rentPerHour,
      }),
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://parking-system-j82e.onrender.com/api/lots/${id}`, slot);
      enqueueSnackbar("Slot updated successfully!", { variant: "success" });
      navigate(`/slot-detail/${id}`);
    } catch (err) {
      console.error("Error updating slot details:", err);
      enqueueSnackbar("Failed to update slot details. Please try again.", { variant: "error" });
    }
  };

  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "black !important", fontWeight: "bold" }}
      >
        Update Parking Slot
      </Typography>
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          borderRadius: 3,
          backgroundColor: "#e9ecef",
        }}
      >
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            {/* Slot Number */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Slot Number"
                name="slotNumber"
                value={slot.slotNumber}
                disabled
                variant="outlined"
                margin="normal"
                sx={{ color: "black !important" }}
                InputProps={{ style: { color: "black" } }} // Force text color
              />
            </Grid>

            {/* Customer Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Customer Name"
                name="customerName"
                value={slot.customerName}
                onChange={onChange}
                variant="outlined"
                margin="normal"
                required
                sx={{ color: "black !important" }}
                InputProps={{ style: { color: "black" } }}
              />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                value={slot.phoneNumber}
                onChange={onChange}
                variant="outlined"
                margin="normal"
                required
                sx={{ color: "black !important" }}
                InputProps={{ style: { color: "black" } }}
              />
            </Grid>

            {/* Vehicle Number */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Vehicle Number"
                name="vehicleNumber"
                value={slot.vehicleNumber}
                onChange={onChange}
                variant="outlined"
                margin="normal"
                required
                sx={{ color: "black !important" }}
                InputProps={{ style: { color: "black" } }}
              />
            </Grid>

            {/* Vehicle Type */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel sx={{ color: "black !important" }}>Vehicle Type</InputLabel>
                <Select
                  name="vehicleType"
                  value={slot.vehicleType}
                  onChange={onChange}
                  variant="outlined"
                  required
                  sx={{ color: "black !important" }}
                >
                  <MenuItem value="Car">Car</MenuItem>
                  <MenuItem value="Bike">Bike</MenuItem>
                  <MenuItem value="Truck">Truck</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Duration */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Duration (in hours)"
                name="duration"
                type="number"
                value={slot.duration}
                onChange={onChange}
                variant="outlined"
                margin="normal"
                required
                sx={{ color: "black !important" }}
                InputProps={{ style: { color: "black" } }}
              />
            </Grid>

            {/* Rent Display */}
            <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "black !important" }}>
                Total Rent: {slot.totalRent || 0} Rupees
              </Typography>
            </Grid>

            {/* Arrival Time */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Arrival Time"
                name="arrivalTime"
                type="time"
                value={slot.arrivalTime}
                onChange={onChange}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                margin="normal"
                sx={{ color: "black !important" }}
                InputProps={{ style: { color: "black" } }}
              />
            </Grid>

            {/* Booking Date */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Booking Date"
                name="bookingDate"
                type="date"
                value={slot.bookingDate}
                onChange={onChange}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                margin="normal"
                sx={{ color: "black !important" }}
                InputProps={{ style: { color: "black" } }}
              />
            </Grid>
          </Grid>

          {/* Buttons */}
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={6}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Update Slot
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" color="secondary" fullWidth onClick={() => navigate(`/slot-detail/${id}`)}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default UpdateSlot;
