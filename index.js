const robots = {
    userInput : require('./robots/user-input.js'),
    text : require('./robots/text.js'),
    twitter : require('./robots/twitter.js')
}

async function start(){
    const sourceContent = {}

    robots.userInput(sourceContent)
    console.log('inciiando consulta de dados...')
    await robots.text(sourceContent)
    console.log('iniciando post no twitter...')
    robots.twitter(sourceContent)

    //console.log(sourceContent)
}

start()