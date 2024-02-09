
import { Button } from '@mui/material';

import useDashboardController from '../../view-controllers/DashBoardController';

const SaveAsCsv = ({onDownloadCSV}) => {
const {handleSaveAsCSV}=  useDashboardController()
  return (
    <div>
      <Button color="primary" variant="contained" onClick={()=>handleSaveAsCSV(onDownloadCSV)}>save as csv</Button>
    </div>
  );
};

export default SaveAsCsv;
