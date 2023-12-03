import DataRow from './components/Row'
import { IPerson } from './types'

interface ITableProps {
  data: IPerson[][]
  chunkSize: number
  setData: Function
}

const styles = {
  container: {},
  td: {
    padding: '20px',
    border: '1px solid #ccccc8',
    margin: '5px',
  },
  header: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  text: {
    margin: '5px',
  },
}

/**
 * Table component to display data in chunks with sequential numbers.
 * @param {Object} props - Component props.
 * @param {IPerson[][]} props.data - The data to be displayed in the table.
 * @param {number} props.chunkSize - The size of each chunk.
 * @param {Function} props.setData - A function to set data in the parent component.
 */
const Table = ({ data, chunkSize, setData }: ITableProps) => {
  // Counter to keep track of sl numbers.
  let count = 0

  // Calculate the total number of elements in the flattened data.
  const dataLength = data.flat(chunkSize).length

  /**
   * Generates an array of sequential numbers based on the chunk size.
   * @returns {number[]} An array of sequential numbers for each row.
   */
  const slNumbers = () => {
    const numbers = []

    for (let i = 0; i < chunkSize; i++) {
      count += 1
      if (count <= dataLength) {
        numbers.push(count)
      }
    }

    return numbers
  }

  return (
    <table
      style={{
        borderCollapse: 'collapse',
        width: '80%',
      }}
    >
      <tbody>
        <tr style={{ position: 'sticky', top: 0, backgroundColor: '#e9e9e9' }}>
          <td style={styles.td}>
            <div style={styles.header}>Sl NO.</div>
          </td>
          <td style={styles.td}>
            <div style={styles.header}>Column1 </div>
          </td>
          <td style={styles.td}>
            <div style={styles.header}>Column2 </div>
          </td>
          <td style={styles.td}>
            <div style={styles.header}>Actions </div>
          </td>
        </tr>
        {data.map((row, i) => (
          <tr key={i}>
            <td style={styles.td}>
              <div style={styles.text}>{slNumbers().join(', ')}</div>
            </td>
            <DataRow
              i={i}
              row={row}
              chunkSize={chunkSize}
              data={data}
              setData={setData}
            />
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
