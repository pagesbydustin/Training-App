import { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function PDFViewer() {
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
      <Document file="your-pdf-file.pdf" onLoadSuccess={onDocumentLoadSuccess} ref={pdfRef}>
        <Page pageNumber={pageNumber} width={600} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
      {/* Add buttons for page navigation */}
      <Row>
        <Col><FiChevronLeft size={40} onClick={handlePageChange(-1)}/></Col>
        <Col><FiChevronRight size={40} onClick={handlePageChange(1)} /></Col>
      </Row>
    </div>
  );
}

