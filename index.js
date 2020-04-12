const robots = {
    userInput : require('./robots/user-input.js'),
    text : require('./robots/text.js')
}

async function start(){
    const sourceContent = {}

    robots.userInput(sourceContent)
    await robots.text(sourceContent)

    console.log(sourceContent)
}

start()