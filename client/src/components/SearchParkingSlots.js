import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
    Container,
    TextField,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Button,
    CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SlotCard from './SlotCard'; // Adjusted to use SlotCard
import axios from 'axios';
import { debounce } from 'lodash';

const SearchParkingSlots = () => {
    const [parkingSlots, setParkingSlots] = useState([]);
    const [filteredParkingSlots, setFilteredParkingSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [slotTypes, setSlotTypes] = useState([]);
    const [filters, setFilters] = useState({
        searchTerm: '',
        searchField: 'slot_type',
        sortBy: 'slot_number',
        sortOrder: 'asc',
        slotType: 'all'
    });

    useEffect(() => {
        axios.get('https://your-api-url/parking-slots') // Adjust API URL
            .then(res => {
                setParkingSlots(res.data);
                setFilteredParkingSlots(res.data);

                const uniqueTypes = [...new Set(res.data.map(slot => slot.slot_type))];
                setSlotTypes(uniqueTypes);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching parking slots:', err);
                setLoading(false);
            });
    }, []);

    const applyFilters = useMemo(() => {
        return (filters) => {
            let result = [...parkingSlots];

            if (filters.searchTerm) {
                result = result.filter(slot => {
                    const searchValue = slot[filters.searchField]?.toString().toLowerCase();
                    return searchValue?.includes(filters.searchTerm.toLowerCase());
                });
            }

            if (filters.slotType !== 'all') {
                result = result.filter(slot => slot.slot_type === filters.slotType);
            }

            result.sort((a, b) => {
                let valueA = a[filters.sortBy]?.toString().toLowerCase();
                let valueB = b[filters.sortBy]?.toString().toLowerCase();

                if (filters.sortBy === 'start_time' || filters.sortBy === 'end_time') {
                    valueA = new Date(a[filters.sortBy]);
                    valueB = new Date(b[filters.sortBy]);
                }

                if (valueA < valueB) return filters.sortOrder === 'asc' ? -1 : 1;
                if (valueA > valueB) return filters.sortOrder === 'asc' ? 1 : -1;
                return 0;
            });

            setFilteredParkingSlots(result);
        };
    }, [parkingSlots]);

    const handleSearchTermChange = useCallback(
        debounce((value) => setFilters(prevFilters => ({ ...prevFilters, searchTerm: value })), 500),
        []
    );

    const resetFilters = () => {
        setFilters({
            searchTerm: '',
            searchField: 'slot_type',
            sortBy: 'slot_number',
            sortOrder: 'asc',
            slotType: 'all'
        });
    };

    useEffect(() => {
        applyFilters(filters);
    }, [filters, applyFilters]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant='h4' component='h1' gutterBottom align='center' color='primary'>
                Search Parking Slots
            </Typography>

            <Card sx={{ mb: 4, p: 2 }}>
                <CardContent>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="Search"
                                value={filters.searchTerm}
                                onChange={(e) => handleSearchTermChange(e.target.value)}
                                InputProps={{
                                    startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
                                }}
                                aria-label="search parking slots"
                            />
                        </Grid>

                        <Grid item sx={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Search By</InputLabel>
                                <Select
                                    value={filters.searchField}
                                    label="Search By"
                                    onChange={(e) => setFilters({ ...filters, searchField: e.target.value })}
                                    aria-label="search by"
                                >
                                    <MenuItem value="slot_type">Slot Type</MenuItem>
                                    <MenuItem value="location">Location</MenuItem>
                                    <MenuItem value="availability">Availability</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Sort By</InputLabel>
                                <Select
                                    value={filters.sortBy}
                                    label="Sort By"
                                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                                    aria-label="sort by"
                                >
                                    <MenuItem value="slot_number">Slot Number</MenuItem>
                                    <MenuItem value="location">Location</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Order</InputLabel>
                                <Select
                                    value={filters.sortOrder}
                                    label="Order"
                                    onChange={(e) => setFilters({ ...filters, sortOrder: e.target.value })}
                                    aria-label="order"
                                >
                                    <MenuItem value="asc">Ascending</MenuItem>
                                    <MenuItem value="desc">Descending</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Slot Type</InputLabel>
                                <Select
                                    value={filters.slotType}
                                    label="Slot Type"
                                    onChange={(e) => setFilters({ ...filters, slotType: e.target.value })}
                                    aria-label="slot type"
                                >
                                    <MenuItem value="all">All Types</MenuItem>
                                    {slotTypes.map((type, index) => (
                                        <MenuItem key={index} value={type}>
                                            {type}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="center">
                                <Button
                                    variant='outlined'
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

            <Box sx={{ mb: 2 }}>
                <Typography variant='body1' color='text.secondary'>
                    Found {filteredParkingSlots.length} slots
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {filteredParkingSlots.map((slot) => (
                    <Grid item sx={12} sm={6} md={4} key={slot._id}>
                        <SlotCard parkingSlot={slot} /> {/* Updated to use SlotCard */}
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchParkingSlots;
