// Cursor Park (anyone not typing put your cursor here)

// Make an Academy object with several users
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
    const usersWithAge = {};

    for (userName in existingUsers) { //this is the key of the entry
        console.log(`Updating user: ${userName}`)
        const originalUser = existingUsers[userName] // reference to existing user
        const copiedUser = { ...originalUser } //shallow copy of existing user
        copiedUser.age = 21
        usersWithAge[userName] = copiedUser // put copy into new holder
    }

    console.log('academyUpdater: usersWithAge=', usersWithAge)
    return usersWithAge;
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
