const num1 = [1,2,3]
const num2 = [4,5,6]
// const num3 = num1 + num2 // concatena os valores do array e não o array em si
// const num3 = num1.concat(num2, [7,8,9], 'Gabriel')
const num3 = [...num1, 'Gabriel', ...num2, ...[7,8,9]]
console.log(num3)