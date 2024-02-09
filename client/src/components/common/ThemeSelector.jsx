import { Button } from '@mui/material';
import Modal from 'react-modal';
const ThemeSelector = ({isOpen,onRequestClose,onThemeSelect}) => {
  return (
 <Modal
  isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Mode Modal"
      overlayClassName="bg-gray-900 fixed inset-0 bg-opacity-0.5 z-50"
      className="absolute w-[310px] sm:fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  p-8 rounded-md "
      shouldCloseOnOverlayClick={true}>
        <div>
          <h1>Please Select Theme</h1>
          <div className='flex gap-x-4 mt-3'>
                <Button color="primary" variant="contained" onClick={()=>onThemeSelect('light')}>Light</Button>
                <Button color="primary" variant="contained" onClick={()=>onThemeSelect('dark')}>dark</Button>
                <Button color="primary" variant="contained" onClick={()=>onThemeSelect('blue')}>blue</Button>

          </div>

        </div>
  </Modal>
  )
}

export default ThemeSelector