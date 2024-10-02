const text = 'Hello my name name name is narayan'

function countWordOccurrences(text) {
    const lower = text.toLowerCase()

    const wordMap = {}

    const words = lower.split(' ')
    console.log(words)

    for (const word of words) {

        if (word in wordMap) {
            wordMap[word]++
        } else {
            wordMap[word] = 1
        }
    }

    return wordMap
}

countWordOccurrences(text)
console.log(countWordOccurrences(text))