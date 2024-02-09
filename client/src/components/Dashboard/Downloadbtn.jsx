import CustomModal from './CustomModal';
import { Button } from '@mui/material';
import useDashboardController from '../../view-controllers/DashBoardController';


const Downloadbtn = () => {
 const {openModal,isModalOpen,closeModal,handleDownloadPDF,handleDownloadCSV} = useDashboardController()
   
  return (
    <div>
     
      <Button color="primary" variant="contained" onClick={()=>openModal()}>download</Button>

      <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} onDownloadPDF={handleDownloadPDF} onDownloadCSV={handleDownloadCSV} />
    </div>
  );
};

export default Downloadbtn;
