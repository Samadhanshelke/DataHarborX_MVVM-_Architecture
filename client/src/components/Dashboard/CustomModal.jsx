
import Modal from 'react-modal';
import SaveAsPdf from './SaveAsPdf';
import SaveAsCsv from './SaveAsCsv';

const CustomModal = ({ isOpen, onRequestClose, onDownloadPDF, onDownloadCSV }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Download Modal"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
      className="absolute w-[310px] sm:fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md"
      shouldCloseOnOverlayClick={true} 
    >
      <h2 className="text-2xl mb-4">Download Options</h2>
      <div className="flex gap-4">
        
        <SaveAsPdf onDownloadPDF={onDownloadPDF}/>
        
        <SaveAsCsv onDownloadCSV={onDownloadCSV}/>
      </div>
    </Modal>
  );
};

export default CustomModal;
