const cron = require('node-cron')

function robot(content){
     tweetPost(content)

    function tweetPost(content){
        content.tweets = []
        cron.schedule("*/1 * * * *", function() {
            const tweetPosted = tweetPreProcessing(content)
            console.log(tweetPosted)
            content.tweets.push({
                text : tweetPosted
            })
            console.log(content.tweets)
          })
    }

    function tweetPreProcessing(content){
        const tweet = content.sentences.shift()
        if (tweet.text.length > 280)
            return tweetPreProcessing(content)
        else 
            return tweet.text
    }
    
}
module.exports = robot