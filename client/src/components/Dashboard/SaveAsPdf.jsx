import { Button } from "@mui/material"
import useDashboardController from "../../view-controllers/DashBoardController";

const SaveAsPdf = ({onDownloadPDF}) => {
  const {handleSaveAsPDF}=  useDashboardController()
   
  return (
    <Button color="primary" variant="contained" onClick={()=>handleSaveAsPDF(onDownloadPDF)}>save as pdf</Button>
  )
}

export default SaveAsPdf