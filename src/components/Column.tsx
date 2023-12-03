import { IPerson } from '../types'

interface IColumnProps extends IPerson {
  tdStyle: any
}

const styles = {
  text: {
    margin: '5px',
    fontSize: '18px',
  },
}

/**
 * Column component to display individual columns of data.
 * @param {Object} props - Component props.
 * @param {string} props.name - The name of the person.
 * @param {number} props.age - The age of the person.
 * @param {string} props.city - The city of the person.
 * @param {string} props.pinCode - The pin code of the person.
 * @param {Object} props.tdStyle - The inline style for the table cell.
 */
const Column = ({ name, age, city, pinCode, tdStyle }: IColumnProps) => {
  return (
    <td style={tdStyle}>
      {/* Display if available */}
      <div style={styles.text}>{name ? name : null}</div>
      <div style={styles.text}>{age ? age : null}</div>
      <div style={styles.text}>{age ? city : null}</div>
      <div style={styles.text}>{pinCode ? pinCode : null}</div>
    </td>
  )
}

export default Column
