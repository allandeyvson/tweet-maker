
const sentenceBoundaryDetection = require('sbd')
const dataBase = require('./wikipedia.js')

async function robot(content){
    await dataBase(content)
    breakContentIntoSentences(content)

    function breakContentIntoSentences(content){
        content.sentences = []

        const sentences = sentenceBoundaryDetection.sentences(content.sourceContentClean)
        sentences.forEach((sentence) =>{
            content.sentences.push({
                text: sentence,
                keywords: [],
                images: []
            })
        })
    }

}
module.exports = robot