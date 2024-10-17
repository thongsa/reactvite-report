// import React from 'react';
// import { Viewer } from '@react-pdf-viewer/core';
// import { zoomPlugin } from '@react-pdf-viewer/zoom';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/zoom/lib/styles/index.css';

// const PdfViewer = () => {
//     const pdfUrl = './src/files/employee_report.pdf';
//     const zoomPluginInstance = zoomPlugin();

//     return (
//         <div style={{ height: '750px' }}>
//             <Viewer
//                 fileUrl={pdfUrl}
//                 plugins={[
//                     zoomPluginInstance,
//                 ]}
//             />
//         </div>
//     );
// };

// export default PdfViewer;
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = () => {
    const pdfUrl = './src/files/employee_report.pdf';

    // Initialize the default layout plugin
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ height: '750px' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer
                    fileUrl={pdfUrl}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </div>
    );
};

export default PdfViewer;
