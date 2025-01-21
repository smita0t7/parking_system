import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  Divider,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Styled Paper component for the main content area
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const ShowParkingSlotDetails = () => {
  const [parkingSlot, setParkingSlot] = useState(null);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // Use useCallback to memoize the fetch function and prevent re-renders
  const fetchParkingSlotDetails = useCallback(() => {
    if (id) {
      axios
        .get(`https://your-api-url.com/api/parking-lots/${id}`)
        .then((res) => setParkingSlot(res.data))
        .catch((err) => setError('Failed to load parking slot details.'));
    }
  }, [id]);

  useEffect(() => {
    fetchParkingSlotDetails();
  }, [fetchParkingSlotDetails]);

  const handleDelete = () => {
    axios
      .delete(`https://your-api-url.com/api/parking-lots/${id}`)
      .then(() => navigate('/parking-lots'))
      .catch(() => setError('Failed to delete the parking slot.'));
    setOpenDialog(false);
  };

  const formatDate = (date) => (date ? new Date(date).toLocaleDateString() : 'N/A');

  if (error) {
    return (
      <Container maxWidth="md">
        <StyledPaper>
          <Typography color="error" variant="h5" align="center">
            {error}
          </Typography>
        </StyledPaper>
      </Container>
    );
  }

  if (!parkingSlot) {
    return (
      <Container maxWidth="md">
        <StyledPaper>
          <Typography variant="h5" align="center">
            Loading parking slot details...
          </Typography>
        </StyledPaper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://roohtravel.com/wp-content/uploads/2023/07/thailand_hotels_with_pool.jpeg"
                alt={parkingSlot.vehicleNumber || 'Parking Slot Image'}
                loading="lazy" // Lazy load the image for performance optimization
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              Parking Slot for Vehicle {parkingSlot.vehicleNumber}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {parkingSlot.vehicleType} - {parkingSlot.customerName}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box>
              <Typography variant="body1">Customer Name: {parkingSlot.customerName}</Typography>
              <Typography variant="body1">Phone Number: {parkingSlot.phoneNumber}</Typography>
              <Typography variant="body1">Vehicle Number: {parkingSlot.vehicleNumber}</Typography>
              <Typography variant="body1">Vehicle Type: {parkingSlot.vehicleType}</Typography>
              <Typography variant="body1">Booking Date: {formatDate(parkingSlot.bookingDate)}</Typography>
              <Typography variant="body1">Duration: {parkingSlot.duration} hours</Typography>
              <Typography variant="body1">Rent Per Hour: ${parkingSlot.rentPerHour}</Typography>
              <Typography variant="body1">Total Rent: ${parkingSlot.totalRent}</Typography>
              <Typography variant="body1">
                Arrival Time: {formatDate(parkingSlot.arrivalTime)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/parking-lots"
            variant="outlined"
            aria-label="Back to parking lot list"
          >
            Back to Parking Lot List
          </Button>
          <Box>
            <Button
              startIcon={<EditIcon />}
              component={RouterLink}
              to={`/edit-parking-slot/${parkingSlot._id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
              aria-label="Edit parking slot details"
            >
              Edit Slot
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              variant="outlined"
              color="error"
              onClick={() => setOpenDialog(true)}
              aria-label="Delete parking slot"
            >
              Delete Slot
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this parking slot? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary" aria-label="Cancel deletion">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" autoFocus aria-label="Confirm deletion">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ShowParkingSlotDetails;
