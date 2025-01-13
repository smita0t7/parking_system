import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  CircularProgress,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SlotCard from './SlotCard'; // You'll need to create this component for slot details
import axios from 'axios';

const SearchSlot = () => {
  const [slots, setSlots] = useState([]);
  const [filteredSlots, setFilteredSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    searchTerm: '',
    searchField: 'slotNumber', // Slot Number (e.g., slot_id, or name)
    sortBy: 'slotNumber', // Sorting by Slot Number
    sortOrder: 'asc',
  });

  useEffect(() => {
    axios
      .get('https://yourapi.com/api/slots') // Change this URL to match your parking system's API
      .then((res) => {
        setSlots(res.data);
        setFilteredSlots(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching parking slots:', err);
        setLoading(false);
      });
  }, []);

  const applyFilters = useCallback(() => {
    let result = [...slots];

    // Search filter
    if (filters.searchTerm) {
      result = result.filter((slot) => {
        const searchValue = slot[filters.searchField]?.toString().toLowerCase();
        return searchValue?.includes(filters.searchTerm.toLowerCase());
      });
    }

    // Sorting
    result.sort((a, b) => {
      let valueA = a[filters.sortBy]?.toString().toLowerCase();
      let valueB = b[filters.sortBy]?.toString().toLowerCase();

      if (valueA < valueB) return filters.sortOrder === 'asc' ? -1 : 1;
      if (valueA > valueB) return filters.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredSlots(result);
  }, [filters, slots]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const resetFilters = () => {
    setFilters({
      searchTerm: '',
      searchField: 'slotNumber',
      sortBy: 'slotNumber',
      sortOrder: 'asc',
    });
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3, mt: 5, bgcolor: '#f9f9f9', borderRadius: 2 }}>
      <Typography variant="h4" align="center" color="#00e5ff" gutterBottom>
        Search Parking Slots
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
        Find available parking slots from the system
      </Typography>

      {/* Search and Filter Section */}
      <Card sx={{ p: 3, mt: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            {/* Search Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Search"
                value={filters.searchTerm}
                onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                pattern={{
                  startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
              />
            </Grid>

            {/* Search By Dropdown */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Search By</InputLabel>
                <Select
                  value={filters.searchField}
                  label="Search By"
                  onChange={(e) => setFilters({ ...filters, searchField: e.target.value })}
                >
                  <MenuItem value="slotNumber">Slot Number</MenuItem>
                  <MenuItem value="status">Status (Available/Occupied)</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Sort By Dropdown */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={filters.sortBy}
                  label="Sort By"
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                >
                  <MenuItem value="slotNumber">Slot Number</MenuItem>
                  <MenuItem value="status">Status</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Sort Order */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Order</InputLabel>
                <Select
                  value={filters.sortOrder}
                  label="Order"
                  onChange={(e) => setFilters({ ...filters, sortOrder: e.target.value })}
                >
                  <MenuItem value="asc">Ascending</MenuItem>
                  <MenuItem value="desc">Descending</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Reset Filters Button */}
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="outlined"
                  startIcon={<RestartAltIcon />}
                  onClick={resetFilters}
                >
                  Reset Filters
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Typography variant="body2" color="textSecondary" sx={{ mt: 3 }}>
        Found {filteredSlots.length} parking slots
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {filteredSlots.map((slot) => (
          <Grid item xs={12} sm={6} md={4} key={slot.slotNumber}>
            <SlotCard slot={slot} /> {/* You can create a SlotCard component for displaying slot info */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchSlot;