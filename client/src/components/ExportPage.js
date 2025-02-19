import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Button, Box, CircularProgress } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TableViewIcon from '@mui/icons-material/TableView';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import axios from 'axios';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

const ExportPage = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch parking slots
  useEffect(() => {
    axios.get('https://parking-system-j82e.onrender.com/api/lots')
      .then((res) => {
        console.log('Fetched slots:', res.data); // Debugging
        if (Array.isArray(res.data)) {
          setSlots(res.data);
        } else {
          console.error('Unexpected API response format:', res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching parking slots at ExportPage:', err);
        setLoading(false);
      });
  }, []);

  // Check if slots exist before exporting
  const checkAndProceed = (exportFunc) => {
    if (slots.length === 0) {
      alert('No parking slot data available to export.');
      return;
    }
    exportFunc();
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Parking Slots List', 14, 15);
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);

    const tableColumn = ['Slot Number', 'Customer Name', 'Vehicle Number', 'Vehicle Type', 'Duration', 'Total Rent'];
    const tableRows = slots.map((slot) => [
      slot.slotNumber,
      slot.customerName,
      slot.vehicleNumber,
      slot.vehicleType,
      slot.duration,
      slot.totalRent,
    ]);

    doc.autoTable({
      startY: 30,
      head: [tableColumn],
      body: tableRows,
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    });

    doc.save('parking-slots-list.pdf');
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      slots.map((slot) => ({
        Slot_Number: slot.slotNumber,
        Customer_Name: slot.customerName,
        Vehicle_Number: slot.vehicleNumber,
        Vehicle_Type: slot.vehicleType,
        Duration: slot.duration,
        Total_Rent: slot.totalRent,
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Parking Slots');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'parking-slots-list.xlsx');
  };

  // Export to CSV
  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      slots.map((slot) => ({
        Slot_Number: slot.slotNumber,
        Customer_Name: slot.customerName,
        Vehicle_Number: slot.vehicleNumber,
        Vehicle_Type: slot.vehicleType,
        Duration: slot.duration,
        Total_Rent: slot.totalRent,
      }))
    );

    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const data = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(data, 'parking-slots-list.csv');
  };

  // Export to Text
  const exportToText = () => {
    let content = 'Parking Slots List\n\n';
    content += `Generated on: ${new Date().toLocaleDateString()}\n\n`;

    slots.forEach((slot, index) => {
      content += `${index + 1}. SLOT DETAILS\n`;
      content += `Slot Number: ${slot.slotNumber}\n`;
      content += `Customer Name: ${slot.customerName}\n`;
      content += `Vehicle Number: ${slot.vehicleNumber}\n`;
      content += `Vehicle Type: ${slot.vehicleType}\n`;
      content += `Duration: ${slot.duration}\n`;
      content += `Total Rent: ${slot.totalRent}\n`;
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
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Export Parking Slots
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }} align="center" color="text.secondary">
          Export your parking slots data in different formats
        </Typography>

        <Button variant="outlined" onClick={() => console.log(slots)} sx={{ mb: 2 }}>
          Check Data in Console
        </Button>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 3,
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<PictureAsPdfIcon />}
            onClick={() => checkAndProceed(exportToPDF)}
            sx={{ p: 2 }}
          >
            Export as PDF
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<TableViewIcon />}
            onClick={() => checkAndProceed(exportToCSV)}
            sx={{ p: 2 }}
          >
            Export as CSV
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            onClick={() => checkAndProceed(exportToExcel)}
            sx={{ p: 2 }}
          >
            Export as Excel
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<DescriptionIcon />}
            onClick={() => checkAndProceed(exportToText)}
            sx={{ p: 2 }}
          >
            Export as Text
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 4 }} align="center" color="text.secondary">
          Total Parking Slots: {slots.length}
        </Typography>
      </Paper>
    </Container>
  );
};

export default ExportPage;
