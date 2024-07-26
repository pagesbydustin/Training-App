import PDf from "react-pdf";

import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from 'react-bootstrap';

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfRef = useRef();


  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (offset) => {
    setPageNumber(pageNumber + offset);
  };

  return (
    <div>
      <Document file="" onLoadSuccess={onDocumentLoadSuccess} ref={pdfRef}>
        <Page pageNumber={pageNumber} width={600} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
      <Button>nav</Button>
      {/* Add buttons for page navigation */}
    </div>
  );
};

export default PDFViewer;
