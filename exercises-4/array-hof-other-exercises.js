// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
    { name: "Luca", age: 8 }, // ages in months!
    { name: "Oscar", age: 9 },
    { name: "Wiggins", age: 44 },
    { name: "Gatsby", age: 56 }
]

// Reduce the array to only the total age in months of all the doggie Academites
const sumFunction = (total, academite) => total + academite.age
const startingTotal = 0

const ageSumAcademites = someAcademitesWithAges.reduce(sumFunction, startingTotal)
console.log("Total Age: " + ageSumAcademites)

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it
const sortByName = (academite1, academite2) => academite1.name.toUpperCase() > academite2.name.toUpperCase() ? 0 : -1
someAcademitesWithAges.sort(sortByName)
console.log(JSON.stringify(someAcademitesWithAges))

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
const sortByAges = (academite1, academite2) => academite2.age - academite1.age
someAcademitesWithAges.sort(sortByAges)
console.log("Desc Ages: " + JSON.stringify(someAcademitesWithAges))

// EOF
