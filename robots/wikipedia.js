const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../credentials/algorithmia.json').apiKey

async function robot(content){
    await fetchContentFromDataBase(content)
    toCleanContent(content)

    async function fetchContentFromDataBase(content){
        content.sourceContentOriginal = ''
        const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey)
        const wikipediaAlgorithm = algorithmiaAuthenticated.algo("web/WikipediaParser/0.1.2")
        try{
          const wikipediaResponse = await wikipediaAlgorithm.pipe(content.searchTerm)
          const wikipediaContent = wikipediaResponse.get()
          content.sourceContentOriginal = wikipediaContent.content
        } catch (e){
          console.log("Por favor, refine seus termos de busca: ")
          console.log(e)
        }
    }

    function toCleanContent(content) {
        const withoutBlankLinesAndMarkdown = removeBlankLinesAndMarkdown(content.sourceContentOriginal)
        const withoutDatesInParentheses = removeDatesInParentheses(withoutBlankLinesAndMarkdown)
    
        content.sourceContentClean = withoutDatesInParentheses
    
        function removeBlankLinesAndMarkdown(text) {
          const allLines = text.split('\n')
    
          const withoutBlankLinesAndMarkdown = allLines.filter((line) => {
            if (line.trim().length === 0 || line.trim().startsWith('=')) {
              return false
            }
    
            return true
          })
    
          return withoutBlankLinesAndMarkdown.join(' ')
        }
      }
    
    function removeDatesInParentheses(text) {
        return text.replace(/\((?:\([^()]*\)|[^()])*\)/gm, '').replace(/  /g,' ')
    }
}
module.exports = robot