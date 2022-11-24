export function createGrid(arr: any) {
  if (arr.length === 2) return [arr]
  const sqr = Math.round(Math.sqrt(arr.length))
  const newArr = []
  for (let i=0;i<sqr+1;i++) {
      let j = i*sqr
      const row = []
      if (typeof arr[i*sqr] === "undefined") {
          return newArr
      }
      row.push(arr[j])
      j++
      while (j < (i+1)*(sqr)) {
          if (typeof arr[j] !== "undefined") {
              row.push(arr[j])
          }
          j++
      }
      newArr.push(row)
  }
  return newArr
}