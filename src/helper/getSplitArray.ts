const getSplitArray = (array: any[], chunkSize: number) => {
  const chunk = []
  for (let i = 0; i < array.length; i += chunkSize) {
    const newArr = array.slice(i, i + chunkSize)
    chunk.push(newArr)
  }
  return chunk
}

export default getSplitArray
