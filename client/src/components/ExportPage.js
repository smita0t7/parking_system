// import React, { useState, useEffect } from 'react';
// import { Container, Paper, Typography, Button, Box, CircularProgress } from '@mui/material';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import TableViewIcon from '@mui/icons-material/TableView';
// import DownloadIcon from '@mui/icons-material/Download';
// import DescriptionIcon from '@mui/icons-material/Description';
// import axios from 'axios';
// import { saveAs } from 'file-saver';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import * as XLSX from 'xlsx';

// const ExportPage = () => {
//   const [slots, setSlots] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/parking-slots') // Update with your API endpoint
//       .then((res) => {
//         setSlots(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error in fetching parking slots at ExportPage:', err);
//         setLoading(false);
//       });
//   }, []);

//   const exportToPDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text('Parking Slots List', 14, 15);
//     doc.setFontSize(10);
//     doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);

//     const tableColumn = ['Slot Number', 'Customer Name', 'Vehicle Number', 'Vehicle Type', 'Duration', 'Total Rent'];
//     const tableRows = slots.map((slot) => [
//       slot.slotNumber,
//       slot.customerName,
//       slot.vehicleNumber,
//       slot.vehicleType,
//       slot.duration,
//       slot.totalRent,
//     ]);

//     doc.autoTable({
//       startY: 30,
//       head: [tableColumn],
//       body: tableRows,
//       theme: 'grid',
//       styles: { fontSize: 8 },
//       headStyles: { fillColor: [41, 128, 185], textColor: 255 },
//     });

//     doc.save('parking-slots-list.pdf');
//   };

//   const exportToExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(
//       slots.map((slot) => ({
//         Slot_Number: slot.slotNumber,
//         Customer_Name: slot.customerName,
//         Vehicle_Number: slot.vehicleNumber,
//         Vehicle_Type: slot.vehicleType,
//         Duration: slot.duration,
//         Total_Rent: slot.totalRent,
//       }))
//     );

//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Parking Slots');
//     const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
//     const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//     saveAs(data, 'parking-slots-list.xlsx');
//   };

//   const exportToCSV = () => {
//     const worksheet = XLSX.utils.json_to_sheet(
//       slots.map((slot) => ({
//         Slot_Number: slot.slotNumber,
//         Customer_Name: slot.customerName,
//         Vehicle_Number: slot.vehicleNumber,
//         Vehicle_Type: slot.vehicleType,
//         Duration: slot.duration,
//         Total_Rent: slot.totalRent,
//       }))
//     );

//     const csv = XLSX.utils.sheet_to_csv(worksheet);
//     const data = new Blob([csv], { type: 'text/csv;charset=utf-8' });
//     saveAs(data, 'parking-slots-list.csv');
//   };

//   const exportToText = () => {
//     let content = 'Parking Slots List\n\n';
//     content += `Generated on: ${new Date().toLocaleDateString()}\n\n`;

//     slots.forEach((slot, index) => {
//       content += `${index + 1}. SLOT DETAILS\n`;
//       content += `Slot Number: ${slot.slotNumber}\n`;
//       content += `Customer Name: ${slot.customerName}\n`;
//       content += `Vehicle Number: ${slot.vehicleNumber}\n`;
//       content += `Vehicle Type: ${slot.vehicleType}\n`;
//       content += `Duration: ${slot.duration}\n`;
//       content += `Total Rent: ${slot.totalRent}\n`;
//       content += '\n----------------------------\n\n';
//     });

//     const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
//     saveAs(blob, 'parking-slots-list.txt');
//   };

//   if (loading) {
//     return (
//       <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//         <CircularProgress />
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//       <Paper sx={{ p: 4 }}>
//         <Typography variant="h4" gutterBottom align="center" color="primary">
//           Export Parking Slots
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 4 }} align="center" color="text.secondary">
//           Export your parking slots data in different formats
//         </Typography>
//         <Box
//           sx={{
//             display: 'grid',
//             gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
//             gap: 3,
//             mt: 4,
//           }}
//         >
//           <Button
//             variant="contained"
//             size="large"
//             startIcon={<PictureAsPdfIcon />}
//             onClick={exportToPDF}
//             sx={{ p: 2 }}
//           >
//             Export as PDF
//           </Button>
//           <Button
//             variant="contained"
//             size="large"
//             startIcon={<TableViewIcon />}
//             onClick={exportToCSV}
//             sx={{ p: 2 }}
//           >
//             Export as CSV
//           </Button>
//           <Button
//             variant="contained"
//             size="large"
//             startIcon={<DownloadIcon />}
//             onClick={exportToExcel}
//             sx={{ p: 2 }}
//           >
//             Export as Excel
//           </Button>
//           <Button
//             variant="contained"
//             size="large"
//             startIcon={<DescriptionIcon />}
//             onClick={exportToText}
//             sx={{ p: 2 }}
//           >
//             Export as Text
//           </Button>
//         </Box>
//         <Typography variant="body2" sx={{ mt: 4 }} align="center" color="text.secondary">
//           Total Parking Slots: {slots.length}
//         </Typography>
//       </Paper>
//     </Container>
//   );
// };

// export default ExportPage;

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

const ExportPage = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://parkingsystem-8xdu.onrender.com/api/lots')
            .then(res => {
                setRooms(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching rooms:', err);
                setLoading(false);
            });
    }, []);

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text('Rooms List', 14, 15);
        doc.setFontSize(12);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);

        const tableColumn = ["Room Number", "Floor Number", "Building Name", "Room Type", "Rent", "Availability"];
        const tableRows = rooms.map(room => [
            room.room_number,
            room.floor_number,
            room.building_name,
            room.room_type,
            room.rent,
            room.availability ? 'Available' : 'Occupied'
        ]);

        doc.autoTable({
            startY: 30,
            head: [tableColumn],
            body: tableRows,
            theme: 'grid',
            styles: { fontSize: 8 },
            headStyles: { fillColor: [41, 128, 185], textColor: 255 }
        });

        doc.save('rooms-list.pdf');
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(rooms.map(room => ({
            "Room Number": room.room_number,
            "Floor Number": room.floor_number,
            "Building Name": room.building_name,
            "Room Type": room.room_type,
            "Rent": room.rent,
            "Availability": room.availability ? 'Available' : 'Occupied'
        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Rooms");
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(data, 'rooms-list.xlsx');
    };

    const exportToCSV = () => {
        const worksheet = XLSX.utils.json_to_sheet(rooms.map(room => ({
            "Room Number": room.room_number,
            "Floor Number": room.floor_number,
            "Building Name": room.building_name,
            "Room Type": room.room_type,
            "Rent": room.rent,
            "Availability": room.availability ? 'Available' : 'Occupied'
        })));

        const csv = XLSX.utils.sheet_to_csv(worksheet);
        const data = new Blob([csv], { type: 'text/csv;charset=utf-8' });
        saveAs(data, 'rooms-list.csv');
    };

    const exportToText = () => {
        let content = 'Rooms List\n\n';
        content += `Generated on: ${new Date().toLocaleDateString()}\n\n`;

        rooms.forEach((room, index) => {
            content += `${index + 1}. ROOM DETAILS\n`;
            content += `Room Number: ${room.room_number}\n`;
            content += `Floor Number: ${room.floor_number}\n`;
            content += `Building Name: ${room.building_name}\n`;
            content += `Room Type: ${room.room_type}\n`;
            content += `Rent: ${room.rent}\n`;
            content += `Availability: ${room.availability ? 'Available' : 'Occupied'}\n`;
            content += '\n----------------------------\n\n';
        });

        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'rooms-list.txt');
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
                        Export Rooms
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 4 }} align="center" color="text.secondary">
                        Export your room collection in different formats
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
                        Total Rooms: {rooms.length}
                    </Typography>
                </Paper>
            </Container>
        </Suspense>
    );
};

export default ExportPage;