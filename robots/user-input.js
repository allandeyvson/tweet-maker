const readline = require('readline-sync')

function robot(content){

    askAndReturnSearchTerm(content)
    askAndReturnPrefix(content)


    function askAndReturnSearchTerm(content){
        content.searchTerm = readline.question('Busque um assunto: ')
    }

    function askAndReturnPrefix(content){
        const prefixes = ['Quem é', 'O que é', 'Qual a história']
        const selectedPrefixeIndex = readline.keyInSelect(prefixes, 'Escolha uma das opções para refinar a busca: ')
        const selectedPrefixeText = prefixes[selectedPrefixeIndex]

        content.prefix = selectedPrefixeText
    }
}
module.exports = robot