import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const MyComponent = () => {
  const generatePDF = async () => {
    const doc = new jsPDF();

    const columns = ['ID', 'Name', 'Age', 'Image'];
    const rows = [
      [1, 'Alice', 30, './src/images/apple.jpg'],
      [2, 'Bob', 25, './src/images/intel.jpg'],
      [3, 'Charlie', 35, './src/images/apple.jpg'],
      [4, 'Charlie', 40, './src/images/apple.jpg'],
    ];

    // Create an array to hold image promises
    const imagePromises = rows.map(async (row) => {
      const imgUrl = row[3];
      return new Promise((resolve) => {
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => resolve({ img, row });
      });
    });

    // Wait for all images to load
    const images = await Promise.all(imagePromises);

    // Generate the table
    doc.autoTable({
      head: [columns],
      body: rows,
      didDrawCell: (data) => {
        const { cell, column } = data;

        // Check if the current cell is in the Image column
        if (column.index === 3) {
          const { img } = images.find(image => image.row[3] === cell.raw) || {};
          
          if (img) {
            const x = cell.x + (cell.width / 2) - 10; // Center the image
            const y = cell.y + (cell.height / 2) - 10; // Center the image
            doc.addImage(img, 'JPEG', x, y + 7, 5, 5); // Adjust size as needed
          }
        }
      },
    });

    // Save the PDF
    doc.save('table-with-multiple-images.pdf');
  };

  return (
    <div>
      <h1>Create PDF with Multiple Images Example</h1>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default MyComponent;
