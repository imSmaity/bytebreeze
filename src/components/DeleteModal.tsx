import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from './Button'

const styles = {
  box: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px',
  },
  input: {
    width: '15rem',
    padding: '10px',
    margin: '8px',
  },
}

interface IDeleteModalProps {
  open: boolean
  handleClose: (b: boolean) => void
  handleDelete: Function
  rowNumber: number
}

/**
 * DeleteModal component to confirm and handle row deletion.
 * @param {Object} props - Component props.
 * @param {boolean} props.open - Controls the visibility of the modal.
 * @param {(b: boolean) => void} props.handleClose - Function to handle modal close.
 * @param {Function} props.handleDelete - Function to handle row deletion.
 * @param {number} props.rowNumber - The row number to be deleted.
 */
const DeleteModal = ({
  open,
  handleClose,
  handleDelete,
  rowNumber,
}: IDeleteModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.box}>
        <h4 style={{ paddingLeft: '70px' }}>Delete Row{rowNumber + 1}</h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: '10px', paddingTop: '20px' }}>
            <Button
              handleClick={() => {
                handleClose(false)
              }}
              style={{ backgroundColor: '#e7e4e4', color: '#000000' }}
            >
              Cancel
            </Button>
            <Button
              handleClick={() => handleDelete(rowNumber)}
              style={{ backgroundColor: '#f28d27' }}
            >
              Delete
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export default DeleteModal
