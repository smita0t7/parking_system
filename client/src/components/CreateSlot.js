// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   TextField,
//   Typography,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from '@mui/material';

// const CreateSlot = () => {
//   const navigate = useNavigate();

//   const [slot, setSlot] = useState({
//     slotNumber: Math.floor(Math.random() * 1000) + 1, // Generate random slot number
//     type: '',
//     duration: '', // Add duration field
//     rentPerHour: 50, // Fixed rate per hour
//     totalRent: 0, // Calculated total rent
//     status: 'Available',
//     customerName: '',
//     phoneNumber: '',
//     vehicleNumber: '',
//     vehicleType: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [warning, setWarning] = useState('');

//   // Validate fields
//   const validateField = (name, value) => {
//     let error = '';
//     if (name === 'customerName' && !/^[A-Za-z ]*$/.test(value)) {
//       error = 'Only alphabets and spaces are allowed';
//     } else if (name === 'phoneNumber') {
//       if (!/^[0-9]*$/.test(value)) {
//         error = 'Only numeric values are allowed';
//       } else if (value.length > 10) {
//         error = 'You cannot enter more than 10 digits';
//       }
//     } 
    
    
    
    
//     return error;
//   };

//   // Handle input change and validate
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const error = validateField(name, value);

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: error,
//     }));

//     if (!error) {
//       let updatedSlot = { ...slot, [name]: value };

//       // Calculate total rent dynamically when duration is updated
//       if (name === 'duration') {
//         const hours = parseInt(value, 10) || 0;
//         updatedSlot.totalRent = hours * updatedSlot.rentPerHour;
//       }

//       setSlot(updatedSlot);
//     }
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if all fields are filled before submitting
//     if (
//       !slot.customerName ||
//       !slot.phoneNumber ||
//       !slot.vehicleNumber ||
//       !slot.vehicleType ||
//       !slot.duration
//     ) {
//       setWarning('Every area should be filled before booking the slot');
//       return;
//     }

//     // Clear warning if all fields are valid
//     setWarning('');
    
//     // Save data in state and redirect to the confirmation page
//     navigate('/confirmedSlot', { state: { slot } });
//   };

//   // Handle cancel button click
//   const handleCancel = () => {
//     navigate('/');
//   };

//   return (
//     <Box
//   sx={{
//     maxWidth: 700,
//     margin: 'auto',
//     padding: 4,
//     borderRadius: 2,
//     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//     backgroundColor: 'white',
//     mt: 3,  // Space between Navbar and Create Form section
//     mb: 3,  // Space between Footer and Create Form section
//   }}
// >
//   <Typography
//     variant="h4"
//     component="h1"
//     textAlign="center"
//     mb={3}
//     color="primary"
//   >
//     Create Parking Slot
//   </Typography>

//   {/* Customer Name */}
//   <TextField
//     fullWidth
//     label="Customer Name"
//     name="customerName"
//     variant="outlined"
//     type="text"
//     value={slot.customerName}
//     onChange={handleChange}
//     error={Boolean(errors.customerName)}
//     helperText={errors.customerName}
//     sx={{ mb: 2 }}
//   />

//   {/* Phone Number */}
//   <TextField
//     fullWidth
//     label="Phone Number"
//     name="phoneNumber"
//     variant="outlined"
//     type="tel"
//     value={slot.phoneNumber}
//     onChange={handleChange}
//     error={Boolean(errors.phoneNumber)}
//     helperText={errors.phoneNumber}
//     sx={{ mb: 2 }}
//   />

//   {/* Vehicle Number */}
//   <TextField
//     fullWidth
//     label="Vehicle Number"
//     name="vehicleNumber"
//     variant="outlined"
//     value={slot.vehicleNumber}
//     onChange={handleChange}
//     sx={{ mb: 2 }}
//   />

//   {/* Warning Message */}
//   {warning && (
//     <Typography variant="body2" color="error" sx={{ mb: 2 }}>
//       {warning}
//     </Typography>
//   )}

//   <form onSubmit={handleSubmit}>
//     {/* Slot Number Display (Generated Automatically) */}
//     <Typography
//       variant="body1"
//       sx={{ mb: 2, fontWeight: 'bold', color: 'gray' }}
//     >
//       Slot Number: {slot.slotNumber}
//     </Typography>

//     {/* Vehicle Type */}
//     <FormControl fullWidth sx={{ mb: 2 }}>
//       <InputLabel>Vehicle Type</InputLabel>
//       <Select
//         name="vehicleType"
//         value={slot.vehicleType}
//         onChange={handleChange}
//         required
//         sx={{ textAlign: 'left' }}
//       >
//         <MenuItem value="Car">Car</MenuItem>
//         <MenuItem value="Bike">Bike</MenuItem>
//         <MenuItem value="Truck">Truck</MenuItem>
//         <MenuItem value="EV Charging">EV Charging</MenuItem>
//       </Select>
//     </FormControl>

//     {/* Duration */}
//     <TextField
//       fullWidth
//       label="Duration (in hours)"
//       name="duration"
//       variant="outlined"
//       type="number"
//       value={slot.duration}
//       onChange={handleChange}
//       required
//       sx={{ mb: 2 }}
//     />

//     {/* Display total rent dynamically */}
//     <Typography variant="body1" sx={{ mb: 2 }}>
//       Total Rent: {slot.totalRent} Rupees
//     </Typography>

//     {/* Buttons */}
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         mt: 3,
//       }}
//     >
//       <Button
//         variant="contained"
//         color="primary"
//         type="submit"
//         sx={{ width: '48%' }}
//       >
//         Book Slot
//       </Button>
//       <Button
//         variant="outlined"
//         color="secondary"
//         onClick={handleCancel}
//         sx={{ width: '48%' }}
//       >
//         Cancel
//       </Button>
//     </Box>
//   </form>
// </Box>

//   );
// };

// export default CreateSlot;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   TextField,
//   Typography,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from '@mui/material';
// import axios from 'axios'; // Importing Axios

// const CreateSlot = () => {
//   const navigate = useNavigate();

//   const [slot, setSlot] = useState({
//     slotNumber: Math.floor(Math.random() * 1000) + 1, // Generate random slot number
//     type: '',
//     duration: '', // Add duration field
//     rentPerHour: 50, // Fixed rate per hour
//     totalRent: 0, // Calculated total rent
//     status: 'Available',
//     customerName: '',
//     phoneNumber: '',
//     vehicleNumber: '',
//     vehicleType: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [warning, setWarning] = useState('');

//   // Validate fields
//   const validateField = (name, value) => {
//     let error = '';
//     if (name === 'customerName' && !/^[A-Za-z ]*$/.test(value)) {
//       error = 'Only alphabets and spaces are allowed';
//     } else if (name === 'phoneNumber') {
//       if (!/^[0-9]*$/.test(value)) {
//         error = 'Only numeric values are allowed';
//       } else if (value.length > 10) {
//         error = 'You cannot enter more than 10 digits';
//       }
//     }
//     return error;
//   };

//   // Handle input change and validate
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const error = validateField(name, value);

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: error,
//     }));

//     if (!error) {
//       let updatedSlot = { ...slot, [name]: value };

//       // Calculate total rent dynamically when duration is updated
//       if (name === 'duration') {
//         const hours = parseInt(value, 10) || 0;
//         updatedSlot.totalRent = hours * updatedSlot.rentPerHour;
//       }

//       setSlot(updatedSlot);
//     }
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if all fields are filled before submitting
//     if (
//       !slot.customerName ||
//       !slot.phoneNumber ||
//       !slot.vehicleNumber ||
//       !slot.vehicleType ||
//       !slot.duration
//     ) {
//       setWarning('Every area should be filled before booking the slot');
//       return;
//     }

//     // Clear warning if all fields are valid
//     setWarning('');

//     // Axios POST request to create the slot
//     axios
//       .post('http://localhost:5000/parkinglots/create', slot) // Replace with your backend URL
//       .then((response) => {
//         // Reset the form after successful submission
//         setSlot({
//           slotNumber: Math.floor(Math.random() * 1000) + 1,
//           type: '',
//           duration: '',
//           rentPerHour: 50,
//           totalRent: 0,
//           status: 'Available',
//           customerName: '',
//           phoneNumber: '',
//           vehicleNumber: '',
//           vehicleType: '',
//         });

//         // Redirect to the confirmed slot page with the slot data
//         navigate('/ConfirmedSlot', { state: { slot } });
//       })
//       .catch((error) => {
//         console.error('Error while creating slot:', error);
//       });
//   };

//   // Handle cancel button click
//   const handleCancel = () => {
//     navigate('/');
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: 700,
//         margin: 'auto',
//         padding: 4,
//         borderRadius: 2,
//         boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//         backgroundColor: 'white',
//         mt: 3,  // Space between Navbar and Create Form section
//         mb: 3,  // Space between Footer and Create Form section
//       }}
//     >
//       <Typography
//         variant="h4"
//         component="h1"
//         textAlign="center"
//         mb={3}
//         color="primary"
//       >
//         Create Parking Slot
//       </Typography>

//       {/* Customer Name */}
//       <TextField
//         fullWidth
//         label="Customer Name"
//         name="customerName"
//         variant="outlined"
//         type="text"
//         value={slot.customerName}
//         onChange={handleChange}
//         error={Boolean(errors.customerName)}
//         helperText={errors.customerName}
//         sx={{ mb: 2 }}
//       />

//       {/* Phone Number */}
//       <TextField
//         fullWidth
//         label="Phone Number"
//         name="phoneNumber"
//         variant="outlined"
//         type="tel"
//         value={slot.phoneNumber}
//         onChange={handleChange}
//         error={Boolean(errors.phoneNumber)}
//         helperText={errors.phoneNumber}
//         sx={{ mb: 2 }}
//       />

//       {/* Vehicle Number */}
//       <TextField
//         fullWidth
//         label="Vehicle Number"
//         name="vehicleNumber"
//         variant="outlined"
//         value={slot.vehicleNumber}
//         onChange={handleChange}
//         sx={{ mb: 2 }}
//       />

//       {/* Warning Message */}
//       {warning && (
//         <Typography variant="body2" color="error" sx={{ mb: 2 }}>
//           {warning}
//         </Typography>
//       )}

//       <form onSubmit={handleSubmit}>
//         {/* Slot Number Display (Generated Automatically) */}
//         <Typography
//           variant="body1"
//           sx={{ mb: 2, fontWeight: 'bold', color: 'gray' }}
//         >
//           Slot Number: {slot.slotNumber}
//         </Typography>

//         {/* Vehicle Type */}
//         <FormControl fullWidth sx={{ mb: 2 }}>
//           <InputLabel>Vehicle Type</InputLabel>
//           <Select
//             name="vehicleType"
//             value={slot.vehicleType}
//             onChange={handleChange}
//             required
//             sx={{ textAlign: 'left' }}
//           >
//             <MenuItem value="Car">Car</MenuItem>
//             <MenuItem value="Bike">Bike</MenuItem>
//             <MenuItem value="Truck">Truck</MenuItem>
//             <MenuItem value="EV Charging">EV Charging</MenuItem>
//           </Select>
//         </FormControl>

//         {/* Duration */}
//         <TextField
//           fullWidth
//           label="Duration (in hours)"
//           name="duration"
//           variant="outlined"
//           type="number"
//           value={slot.duration}
//           onChange={handleChange}
//           required
//           sx={{ mb: 2 }}
//         />

//         {/* Display total rent dynamically */}
//         <Typography variant="body1" sx={{ mb: 2 }}>
//           Total Rent: {slot.totalRent} Rupees
//         </Typography>

//         {/* Buttons */}
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             mt: 3,
//           }}
//         >
//           <Button
//             variant="contained"
//             color="primary"
//             type="submit"
//             sx={{ width: '48%' }}
//           >
//             Book Slot
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancel}
//             sx={{ width: '48%' }}
//           >
//             Cancel
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default CreateSlot;


import React, { useState, useEffect } from 'react';
import {  useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const CreateSlot = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { enqueueSnackbar } = useSnackbar();

  const [slot, setSlot] = useState({
    slotNumber: Math.floor(Math.random() * 1000) + 1,
    vehicleType: '',
    duration: '',
    rentPerHour: 50,
    totalRent: 0,
    customerName: '',
    phoneNumber: '',
    vehicleNumber: '',
    arrivalTime: '',
    date: '',
  });

  useEffect(() => {
    if (state?.slot) {
      setSlot(state.slot);
    }
  }, [state]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setSlot((prevSlot) => {
      const updatedSlot = { ...prevSlot, [name]: value };

      // Calculate total rent dynamically when duration changes
      if (name === 'duration') {
        const hours = parseInt(value, 10) || 0;
        updatedSlot.totalRent = hours * prevSlot.rentPerHour;
      }
      return updatedSlot;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !slot.customerName ||
      !slot.phoneNumber ||
      !slot.vehicleNumber ||
      !slot.vehicleType ||
      !slot.duration
    ) {
      enqueueSnackbar('Please fill out all fields before submitting.', {
        variant: 'warning',
      });
      return;
    }

    const apiUrl = 'http://localhost:5000/parkinglots/create'; // Adjust API endpoint as needed


    console.log(slot);
axios
  .post(apiUrl, slot)
  .then((response) => {
    console.log(response.data); // Log response for debugging
  })
  .catch((err) => {
    console.error('Error in creating slot:', err);
  });


    axios
      .post(apiUrl, slot)
      .then((response) => {
        enqueueSnackbar('Slot created successfully!', { variant: 'success' });
        navigate('/ConfirmedSlot'); // Redirect to confirmed page after submission
      })
      .catch((err) => {
        console.error('Error in creating slot:', err);
        enqueueSnackbar('Something went wrong, try again!', { variant: 'error' });
      });
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: 3,
        mt: 5,
        bgcolor: '#f9f9f9',
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        {state?.slot ? 'Edit Parking Slot' : 'Create Parking Slot'}
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
        {state?.slot
          ? 'Update an existing parking slot'
          : 'Create a new parking slot record'}
      </Typography>
      {/* <div className="col-md-8 m-auto">
        <br />
        <Link to="/" className="btn btn-outline-warning float-left">
          Show Slot List
        </Link>
      </div> */}

      <form noValidate onSubmit={onSubmit}>
        <TextField
          fullWidth
          label="Customer Name"
          name="customerName"
          value={slot.customerName}
          onChange={onChange}
          variant="outlined"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={slot.phoneNumber}
          onChange={onChange}
          variant="outlined"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Vehicle Number"
          name="vehicleNumber"
          value={slot.vehicleNumber}
          onChange={onChange}
          variant="outlined"
          margin="normal"
        />

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Vehicle Type</InputLabel>
          <Select
            name="vehicleType"
            value={slot.vehicleType}
            onChange={onChange}
          >
            <MenuItem value="" disabled>
              Select Vehicle Type
            </MenuItem>
            <MenuItem value="Car">Car</MenuItem>
            <MenuItem value="Bike">Bike</MenuItem>
            <MenuItem value="Truck">Truck</MenuItem>
            <MenuItem value="EV Charging">EV Charging</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Duration (in hours)"
          name="duration"
          value={slot.duration}
          onChange={onChange}
          type="number"
          variant="outlined"
          margin="normal"
        />

        <Typography variant="body1" sx={{ mt: 2 }}>
          Total Rent: {slot.totalRent} Rupees
        </Typography>

        <TextField
          fullWidth
          label="Arrival Time"
          name="arrivalTime"
          value={slot.arrivalTime}
          onChange={onChange}
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Booking Date"
          name="date"
          value={slot.date}
          onChange={onChange}
          type="date"
          
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          margin="normal"
        />

        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {state?.slot ? 'Update Slot' : 'Create Slot'}
          </Button>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => navigate('/ConfirmedSlot.js')}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateSlot;