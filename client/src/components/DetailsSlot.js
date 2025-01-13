import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Button,
  Card,
  CardMedia,
  Divider,
  Box,
  Grid,
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
import { useSnackbar } from 'notistack';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const DetailsSlot = () => {
  const [slot, setSlot] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get(`https://parkingsystem-8xdu.onrender.com/api/lots/${id}`)
      .then((res) => {
        setSlot(res.data);
      })
      .catch((err) => {
        console.error('Error fetching slot details:', err);
        enqueueSnackbar('Error fetching slot details!', { variant: 'error' });
      });
  }, [id, enqueueSnackbar]);

  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`https://parkingsystem-8xdu.onrender.com/api/lots/${id}`)
      .then(() => {
        enqueueSnackbar('Parking slot deleted successfully!', { variant: 'success' });
        navigate('/slots');
      })
      .catch((err) => {
        console.error('Error deleting parking slot:', err);
        enqueueSnackbar('Failed to delete the parking slot. Please try again.', { variant: 'error' });
      });
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={
                  slot.imageUrl ||
                  'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg'
                }
                alt={slot.customerName || 'Default Slot Image'}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              Slot #{slot.slotNumber || 'N/A'}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">Vehicle Type: {slot.vehicleType || 'N/A'}</Typography>
              <Typography variant="body1">Customer Name: {slot.customerName || 'N/A'}</Typography>
              <Typography variant="body1">Phone Number: {slot.phoneNumber || 'N/A'}</Typography>
              <Typography variant="body1">Vehicle Number: {slot.vehicleNumber || 'N/A'}</Typography>
              <Typography variant="body1">Duration: {slot.duration || 'N/A'} hours</Typography>
              <Typography variant="body1">Total Rent: {slot.totalRent || 0} Rupees</Typography>
              <Typography variant="body1">Arrival Time: {slot.arrivalTime || 'N/A'}</Typography>
              <Typography variant="body1">Booking Date: {slot.bookingDate || 'N/A'}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/slots"
            variant="outlined"
          >
            Back to Parking Slots
          </Button>
          <Box>
            <Button
              startIcon={<EditIcon />}
              component={RouterLink}
              to={`/editSlot/${slot._id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
            >
              Edit Slot
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete Slot
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
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
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DetailsSlot;