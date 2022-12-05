// Cursor Park (anyone not typing put your cursor here)

// An Academy object with several users
const academyUsers = {
    shaw: {
        surname: "Malcolm"
    },
    valentine: {
        surname: "Bott"
    }
}

// Create a function that adds and 'age' property to each user
// without mutating the original users
// and without mutating the original user objects either

const academyUpdater = (existingUsers) => {
    console.log('academyUpdater: existingUsers=', existingUsers)

    // Make a deep copy of the whole object graph using "the json trick"
    // .. it can be very memory + cpu intensive!
    const stringData = JSON.stringify(existingUsers)
    console.log(`stringData: ${stringData}`)

    const usersDeepCopy = JSON.parse(stringData)
    console.log("usersDeepCopy:" ,usersDeepCopy)

    for (userName in usersDeepCopy) { // the key of the entry
        usersDeepCopy[userName].age = 21
    }

    console.log('academyUpdater: usersDeepCopy=', usersDeepCopy)
    return usersDeepCopy;
}

// Call the Age Updater function
const updatedUsers = academyUpdater(academyUsers)

// Log the original Academy Users object
// ... we want this to be { shaw: { surname: 'Malcolm' }, valentine: { surname: 'Bott' } }
//console.log(`Original Academy: ${academyUsers}`) just prints "[object Object]"
console.log('Original Academy:', academyUsers)

// Log the extended Academy object with ages
// ...we want this to be { shaw: { surname: 'Malcolm', age: 21 }, valentine: { surname: 'Bott', age: 21 } }
//console.log(`Updated Academy: ${updatedUsers}`) just prints "[object Object]"
console.log('Updated Academy:', updatedUsers)

// EOF
