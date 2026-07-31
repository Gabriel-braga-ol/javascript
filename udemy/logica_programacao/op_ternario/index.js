// ?;

const pontucaoUsuario = 1500;
const nivelUsuario = pontucaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
const corUsuario = null;
const corPadrão = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrão)



// if (pontucaoUsuario >= 1000) {
//     console.log('Usuário VIP')
// } else {
//     console.log('Usuário normal')
// }