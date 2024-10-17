import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ExportPDF = () => {
  const handleExport = () => {
    const input = document.getElementById('pdf-content');

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // Add the first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add more pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('download.pdf');
    });
  };

  return (
    <div>
      <div id="pdf-content" style={{ padding: '20px' }}>
        <img
          src="/path/to/your/logo.png"
          alt="Logo"
          style={{ width: '100px', marginBottom: '20px' }}
        />
        <h1>Your Document Title</h1>
        <p>This is the content that will be exported to PDF.</p>
      </div>
      <button onClick={handleExport}>Export to PDF</button>
    </div>
  );
};

export default ExportPDF;
