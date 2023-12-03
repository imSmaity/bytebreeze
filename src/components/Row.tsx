import { useState } from 'react'
import { IPerson } from '../types'
import Button from './Button'
import Column from './Column'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
import { toast } from 'react-toastify'

const styles = {
  container: {},
  td: {
    padding: '20px',
    border: '1px solid #ccccc8',
    borderRadius: '10px',
  },
}

interface IRowProps {
  i: number //Index of the column
  row: IPerson[]
  chunkSize: number
  data: IPerson[][]
  setData: Function
}

/**
 * Row component to display a single row of data with edit and delete functionalities.
 * @param {Object} props - Component props.
 * @param {number} props.i - Index of the column.
 * @param {IPerson[]} props.row - Data of the row.
 * @param {number} props.chunkSize - Size of each chunk.
 * @param {IPerson[][]} props.data - Complete data array.
 * @param {Function} props.setData - Function to update the data in the parent component.
 */
const Row = ({ i, row, chunkSize, data, setData }: IRowProps) => {
  // State to manage modal visibility.
  const [openEdit, setOpenEdit] = useState<boolean>(false)
  const [openDelete, setOpenDelete] = useState<boolean>(false)

  /**
   * Handles the submission of the edit modal.
   * @param {IPerson} value - The updated value.
   */
  const handleSubmit = (value: IPerson) => {
    // Update the data for the specific column.
    data[i][0] = value

    // Update the state with the modified data.
    setData([...data])

    // Close the edit modal.
    setOpenEdit(false)

    // Display a success toast.
    toast.success(`Column ${i + 1} updated successfully!`, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    })
  }

  /**
   * Handles the deletion of a row.
   * @param {number} rowIndex - The index of the row to be deleted.
   */
  const handleDelete = (rowIndex: number) => {
    // Remove the row from the data array.
    data.splice(rowIndex, 1)
    setData([...data])
    setOpenDelete(false)
    toast.success(`Row ${rowIndex + 1} deleted successfully!`, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    })
  }

  // Calculate the number of empty columns.
  const totalEmptyColumn = data.flat(chunkSize).length % chunkSize
  return (
    <>
      {row.map((person, j) => (
        <Column
          key={j}
          name={person?.name}
          age={person?.age}
          city={person?.city}
          pinCode={person?.pinCode}
          tdStyle={styles.td}
        />
      ))}
      {data.length === i + 1
        ? [...Array(totalEmptyColumn)]
            .map((_, index) => index + 1)
            .map((item) => (
              <Column
                key={item}
                name={null}
                age={null}
                city={null}
                pinCode={null}
                tdStyle={styles.td}
              />
            ))
        : null}
      <td style={{ ...styles.td }}>
        <Button handleClick={() => setOpenEdit(true)}>Edit</Button>
        <Button
          handleClick={() => setOpenDelete(true)}
          style={{
            marginLeft: 10,
            backgroundColor: '#f28d27',
          }}
        >
          Delete
        </Button>
      </td>
      <EditModal
        open={openEdit}
        handleClose={setOpenEdit}
        value={data[i][0]}
        handleSubmit={handleSubmit}
        colNumber={i + chunkSize}
      />
      <DeleteModal
        open={openDelete}
        handleClose={setOpenDelete}
        handleDelete={handleDelete}
        rowNumber={i}
      />
    </>
  )
}

export default Row
