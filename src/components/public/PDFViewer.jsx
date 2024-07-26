import { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


export default function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const pdfRef = useRef();


  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const handleError = (error) => {
    console.error('Error loading PDF:', error);
    setIsLoading(false);
  };

  const handlePageChange = (offset) => {
    const newPageNumber = pageNumber + offset;
    if (newPageNumber >= 1 && newPageNumber <= numPages) {
      setPageNumber(newPageNumber);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading PDF...</div>
      ) : (
        <>
          <Document file="../../assets/pdf/install.pdf" onLoadStart={console.info('Started Load')} onLoadSuccess={onDocumentLoadSuccess} onError={handleError} ref={pdfRef}>
            <Page pageNumber={pageNumber} width={300} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
          <Row>
            <Col>
              <FiChevronLeft size={40} disabled={pageNumber === 1} onClick={() => handlePageChange(-1)} />
            </Col>
            <Col>
              <FiChevronRight size={40} disabled={pageNumber === numPages} onClick={() => handlePageChange(1)} />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}


