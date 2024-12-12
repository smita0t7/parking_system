import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Routes, Route, useParams } from 'react-router-dom';

const ParkingDetailsContent = () => {
  const [details, setDetails] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { parkingId = 'default' } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`/parkingDetails/${parkingId}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load details for parking ID: ${parkingId}`);
        }
        return response.json();
      })
      .then((data) => {
        setDetails(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading parking details:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [parkingId]);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Parking Details
      </Typography>
      {details.description ? (
        <>
          <Typography variant="body1" paragraph>
            {details.description}
          </Typography>
          <SyntaxHighlighter style={solarizedlight} language="json" PreTag="div">
            {JSON.stringify(details, null, 2)}
          </SyntaxHighlighter>
        </>
      ) : (
        <Typography variant="body1">No details available for this parking slot.</Typography>
      )}
    </Box>
  );
  
};

const DetailPage = () => {
  return (
    <Container maxWidth="lg">
      <Box py={3}>
        <Routes>
          <Route path="/" element={<ParkingDetailsContent />} />
          <Route path=":parkingId" element={<ParkingDetailsContent />} />
        </Routes>
      </Box>
    </Container>
  );
};

export default DetailPage;
