import React, { useState, useEffect, useCallback } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Box,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';

const QRCodePage = () => {
  const [parkingLots, setParkingLots] = useState([]);
  const [loading, setLoading] = useState(true);
  const frontendBaseUrl = `${window.location.origin}/parking-lots`;

  // Fetch parking lot data with optimization (memoization to prevent unnecessary requests)
  const fetchParkingLots = useCallback(async () => {
    try {
      const res = await axios.get('https://your-backend-api-url/parking-lots');
      setParkingLots(res.data);
    } catch (err) {
      console.error('Error fetching parking lots:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchParkingLots();
  }, [fetchParkingLots]);

  const downloadQR = useCallback((parkingLotId, customerName) => {
    const canvas = document.createElement('canvas');
    const svg = document.getElementById(`qr-${parkingLotId}`);
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);

    const img = new Image();
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const a = document.createElement('a');
      a.download = `QR-${customerName.replace(/\s+/g, '-')}.png`;
      a.href = canvas.toDataURL('image/png');
      a.click();
    };
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
        Parking Lot QR Codes
      </Typography>
      <Typography variant="body1" gutterBottom align="center" sx={{ mb: 4 }}>
        Scan QR codes to quickly access parking lot details
      </Typography>

      <Grid container spacing={3}>
        {parkingLots.map((parkingLot) => (
          <Grid item xs={12} sm={6} md={4} key={parkingLot._id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
              }}
              role="region" // For accessibility (better for screen readers)
              aria-labelledby={`parking-lot-${parkingLot._id}`}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <QRCodeSVG
                  id={`qr-${parkingLot._id}`}
                  value={`${frontendBaseUrl}/${parkingLot._id}`} // Points to the frontend route
                  size={200}
                  level="H"
                  includeMargin
                  aria-label={`QR code for Parking Lot ${parkingLot.vehicleNumber}`} // For accessibility
                />
                <Typography
                  variant="h6"
                  component="div"
                  align="center"
                  sx={{ mt: 2, mb: 1 }}
                  id={`parking-lot-${parkingLot._id}`}
                >
                  Vehicle: {parkingLot.vehicleNumber}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  aria-label={`Customer: ${parkingLot.customerName}`}
                >
                  Customer: {parkingLot.customerName}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  sx={{ mb: 2 }}
                  aria-label={`Duration: ${parkingLot.duration} hours`}
                >
                  Duration: {parkingLot.duration} hours
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  onClick={() => downloadQR(parkingLot._id, parkingLot.customerName)}
                  size="small"
                  aria-label={`Download QR for Vehicle ${parkingLot.vehicleNumber}`}
                >
                  Download QR
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default QRCodePage;
