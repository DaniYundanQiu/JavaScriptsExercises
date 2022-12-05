/*
Each function will be passed an array of objects that looks like:
    [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
        { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ]
See instructions above each function to find out what it should return.
*/

const developerList = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
]

// countFromEurope should return the number of developers who are from Europe.
// For the list above it would return 1.
function countFromEurope (developers) {
    const devFromEur = developers.filter((dev) => dev.continent === 'Europe')
    return devFromEur.length
}

console.log(countFromEurope(developerList))

// getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
// Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
// For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Lukas, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']
function getGreetings (developers) {
    const greetingName = developers.map((devGreeting) => 'Hello ' + devGreeting.firstName + ', what do you like the most about ' + devGreeting.language + '?')

    return JSON.stringify(greetingName)
}

console.log(getGreetings(developerList))

// isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
function isJSComing (developers) {
    const jsDev = developers.filter((jsLanguage) => jsLanguage.language === 'Javascript')
    if (jsDev.length === 0) {
        return false
    }

    else return true
}

console.log(isJSComing(developerList))

// getFirstPythonDeveloper should return the first developer in the array whose language is Python
// You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
// For the list above, it would return 'Lukas, Croatia'
function getFirstPythonDeveloper (developers) {
    const pythonDev = developers.filter((pyLanguage) => pyLanguage.language === 'Python')
    if (pythonDev.length === 0) {
        return 'none'
    }

    else return pythonDev[0].firstName + ', ' + pythonDev[0].country
}

console.log(getFirstPythonDeveloper (developerList))

// getAverageAge should return the average age of the developers (rounded down).
// If there are no developers, return -1
// For the list above, it would return 30.
function getAverageAge(developers) {
    if (developers.length === 0) return -1
    
    else {
        const ageSum = developers.reduce((total, dev) => total + dev.age, 0)
        const averageAge = ageSum/developers.length
        // console.log(ageSum)
        return averageAge
    }
}

console.log(getAverageAge(developerList))

// getLanguageCounts should return an object representing how many developers of each language there are.
// For the list above, it would return { Javascript: 1, Python: 2 }
// NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
function getLanguageCounts (developers) {
    const jsDev = developers.filter((jsLanguage) => jsLanguage.language === 'Javascript')
    const pythonDev = developers.filter((pyLanguage) => pyLanguage.language === 'Python')
    return 'Javascript: ' + jsDev.length + ', Python: ' + pythonDev.length
}

console.log(getLanguageCounts(developerList))

// getOldest should return an array which includes the name of the developer who is the oldest.
// In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
// For the list above, it would return ['Lukas']
function getOldest (developers) {
    const sortByAges = (dev1, dev2) => dev2.age - dev1.age
    developers.sort(sortByAges)
    const oldestDevList = developers[0]
    for (let i=0; i<=developers.length; i++) {
        if (developers[i+1].age === developers[i].age) {
            oldestDevList.push(developers[i+1])
        }
        else break
    }

    return oldestDevList.firstName
}

console.log(getOldest(developerList))

// isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
// For the list above, it would return false
function isGlobalGroup (developers) {
    let globalGroup = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    developers.forEach((dev) => {
        if (globalGroup.includes(dev.continent)) {
            globalGroup = globalGroup.filter((c) => c != dev.continent)
        }
    })
    if (globalGroup.length === 0) return true
    else return false
}

console.log(isGlobalGroup(developerList))

// askForMissingDetails should return a list of questions that need answering to fill in missing details from the developers (fields whose values are null)
// For example, if you receive:
const missing = [
     { firstName: 'Sofia', lastName: 'I.', country: null, continent: 'Americas', age: 34, language: 'Javascript' },
     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
];
// You would return
// [
//      'Hi Sofia. What is your country?',
//      'Hi Lukas. What is your language?'
// ]
// First name will always be present on the developers. There will be at most one field missing.
// Hint: Look up Object.keys, Object.values and Object.entries
function askForMissingDetails (developers) {
    let missingDetail = []
    
    developers.forEach((dev)=>{
        let missingKey = Object.keys(dev).filter(key => dev[key] == null)
        
        if(Object.values(dev).includes(null)){
            let result = 'Hi ' + dev.firstName + '. What is your ' + missingKey + '?'
            missingDetail.push(result)
        }

    })
    //return missingDetail
    return JSON.stringify(missingDetail)
}
 console.log(askForMissingDetails(missing))


module.exports = {
    countFromEurope,
    getGreetings,
    isJSComing,
    getFirstPythonDeveloper,
    getAverageAge,
    getLanguageCounts,
    getOldest,
    isGlobalGroup,
    askForMissingDetails,
}