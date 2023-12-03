/**
 * Splits an array into smaller chunks of a specified size.
 * @param {any[]} array - The array to be split.
 * @param {number} chunkSize - The size of each chunk.
 * @returns {any[][]} An array of chunks, where each chunk is an array of elements from the original array.
 */
const getSplitArray = (array: any[], chunkSize: number) => {
  const chunk = []

  // Iterate through the original array with a step equal to the chunkSize.
  for (let i = 0; i < array.length; i += chunkSize) {
    const newArr = array.slice(i, i + chunkSize)
    chunk.push(newArr)
  }
  return chunk
}

export default getSplitArray
