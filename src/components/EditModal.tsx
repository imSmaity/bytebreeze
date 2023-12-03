import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { ChangeEvent, useState } from 'react'
import { IPerson } from '../types'
import Button from './Button'

const styles = {
  box: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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

interface IEditModalProps {
  open: boolean
  handleClose: (b: boolean) => void
  value: IPerson
  handleSubmit: Function
  colNumber: number
}

/**
 * EditModal component to allow users to edit column values.
 * @param {Object} props - Component props.
 * @param {boolean} props.open - Controls the visibility of the modal.
 * @param {(b: boolean) => void} props.handleClose - Function to handle modal close.
 * @param {IPerson} props.value - Current values of the column.
 * @param {Function} props.handleSubmit - Function to handle form submission.
 * @param {number} props.colNumber - The column number to be edited.
 */
const EditModal = ({
  open,
  handleClose,
  value,
  handleSubmit,
  colNumber,
}: IEditModalProps) => {
  const [data, setData] = useState<IPerson>({
    name: value.name,
    age: value.age,
    city: value.city,
    pinCode: value.pinCode,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.box}>
        <h4 style={{ paddingLeft: '70px' }}>Edit Column{colNumber}</h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <input
            style={styles.input}
            placeholder="Name"
            name="name"
            value={data?.name || ''}
            onChange={handleChange}
          />
          <input
            style={styles.input}
            placeholder="Age"
            name="age"
            value={data?.age || ''}
            onChange={handleChange}
          />
          <input
            style={styles.input}
            placeholder="City"
            name="city"
            value={data?.city || ''}
            onChange={handleChange}
          />
          <input
            style={styles.input}
            placeholder="Pin Code"
            name={'pinCode'}
            value={data?.pinCode || ''}
            onChange={handleChange}
          />
          <div style={{ display: 'flex', gap: '10px', paddingTop: '20px' }}>
            <Button
              handleClick={() => {
                handleClose(false)
                setData(value)
              }}
              style={{ backgroundColor: '#e7e4e4', color: '#000000' }}
            >
              Cancel
            </Button>
            <Button handleClick={() => handleSubmit(data)}>Submit</Button>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export default EditModal
