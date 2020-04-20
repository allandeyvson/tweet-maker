const readline = require('readline-sync')

function robot(content){

    askAndReturnSearchTerm(content)

    function askAndReturnSearchTerm(content){
        content.searchTerm = readline.question('Busque um assunto: ')
    }
}
module.exports = robot