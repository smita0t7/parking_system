
//EportParkingSlot.js
import React, { Suspense, useState, useEffect } from 'react';
import { Container, Paper, Typography, Button, Box, CircularProgress } from '@mui/material';
import axios from 'axios'; // Added axios import
import { saveAs } from 'file-saver';

const PictureAsPdfIcon = React.lazy(() => import('@mui/icons-material/PictureAsPdf'));
const TableViewIcon = React.lazy(() => import('@mui/icons-material/TableView'));
const DownloadIcon = React.lazy(() => import('@mui/icons-material/Download'));
const DescriptionIcon = React.lazy(() => import('@mui/icons-material/Description'));

const jsPDF = React.lazy(() => import('jspdf'));
const XLSX = React.lazy(() => import('xlsx'));

const ExportParkingSlots = () => {
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://parking-system-j82e.onrender.com/api/lots') // Assuming you have a similar endpoint for parking slots
            .then(res => {
                setSlots(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching parking slots:', err);
                setLoading(false);
            });
    }, []);

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text('Parking Slots List', 14, 15);
        doc.setFontSize(12);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);

        const tableColumn = ["Slot Number", "Location", "Availability", "Price"];
        const tableRows = slots.map(slot => [
            slot.slot_number,
            slot.location,
            slot.availability ? 'Available' : 'Occupied',
            slot.price
        ]);

        doc.autoTable({
            startY: 30,
            head: [tableColumn],
            body: tableRows,
            theme: 'grid',
            styles: { fontSize: 8 },
            headStyles: { fillColor: [41, 128, 185], textColor: 255 }
        });

        doc.save('parking-slots-list.pdf');
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(slots.map(slot => ({
            "Slot Number": slot.slot_number,
            "Location": slot.location,
            "Availability": slot.availability ? 'Available' : 'Occupied',
            "Price": slot.price
        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Parking Slots");
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(data, 'parking-slots-list.xlsx');
    };

    const exportToCSV = () => {
        const worksheet = XLSX.utils.json_to_sheet(slots.map(slot => ({
            "Slot Number": slot.slot_number,
            "Location": slot.location,
            "Availability": slot.availability ? 'Available' : 'Occupied',
            "Price": slot.price
        })));

        const csv = XLSX.utils.sheet_to_csv(worksheet);
        const data = new Blob([csv], { type: 'text/csv;charset=utf-8' });
        saveAs(data, 'parking-slots-list.csv');
    };

    const exportToText = () => {
        let content = 'Parking Slots List\n\n';
        content += `Generated on: ${new Date().toLocaleDateString()}\n\n`;

        slots.forEach((slot, index) => {
            content += `${index + 1}. SLOT DETAILS\n`;
            content += `Slot Number: ${slot.slot_number}\n`;
            content += `Location: ${slot.location}\n`;
            content += `Availability: ${slot.availability ? 'Available' : 'Occupied'}\n`;
            content += `Price: ${slot.price}\n`;
            content += '\n----------------------------\n\n';
        });

        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'parking-slots-list.txt');
    };

    if (loading) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Suspense fallback={<CircularProgress />}>
            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                <Paper sx={{ p: 4 }}>
                    <Typography variant='h4' gutterBottom align='center' color='primary'>
                        Export Parking Slots
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 4 }} align="center" color="text.secondary">
                        Export your parking slots collection in different formats
                    </Typography>

                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                        gap: 3, 
                        mt: 4 
                    }}>
                        <Button
                            aria-label="Export as PDF"
                            variant="contained"
                            size="large"
                            startIcon={<PictureAsPdfIcon />}
                            onClick={exportToPDF}
                            sx={{ p: 2 }}
                        >
                            Export as PDF
                        </Button>
                        <Button
                            aria-label="Export as CSV"
                            variant="contained"
                            size="large"
                            startIcon={<TableViewIcon />}
                            onClick={exportToCSV}
                            sx={{ p: 2 }}
                        >
                            Export as CSV
                        </Button>
                        <Button
                            aria-label="Export as Excel"
                            variant="contained"
                            size="large"
                            startIcon={<DownloadIcon />}
                            onClick={exportToExcel}
                            sx={{ p: 2 }}
                        >
                            Export as Excel
                        </Button>
                        <Button
                            aria-label="Export as Text"
                            variant="contained"
                            size="large"
                            startIcon={<DescriptionIcon />}
                            onClick={exportToText}
                            sx={{ p: 2 }}
                        >
                            Export as Text
                        </Button>
                    </Box>
                    <Typography variant="body2" sx={{ mt: 4 }} align="center" color="text.secondary">
                        Total Slots: {slots.length}
                    </Typography>
                </Paper>
            </Container>
        </Suspense>
    );
};

export default ExportParkingSlots;
