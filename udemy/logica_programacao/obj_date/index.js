// const data = new Date(2026, 3, 20, 20, 15, 27, 500);
// const data = new Date('2026-07-31 16:30:30'); // formato mais utilizado
const data = new Date(); 
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia da semana', data.getDay())
console.log(data.toString())