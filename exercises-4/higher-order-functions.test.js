const {
    countFromEurope,
    getGreetings,
    isJSComing,
    getFirstPythonDeveloper,
    getAverageAge,
    getLanguageCounts,
    getOldest,
    isGlobalGroup,
    askForMissingDetails,
} = require('./higher-order-functions');

describe('countFromEurope', () => {
    it('should return the number of developers from europe', () => {
        const devs = [
            { continent: 'Europe' },
            { continent: 'Americas' },
            { continent: 'Americas' },
            { continent: 'Europe' },
            { continent: 'Europe' },
        ]
        expect(countFromEurope(devs)).toEqual(3)
    });
    it('should return zero if there are no developers from europe', () => {
        const devs = [
            { continent: 'Americas' },
            { continent: 'Americas' },
        ]
        expect(countFromEurope(devs)).toEqual(0)
    })
    it('should return zero if passed an empty array', () => {
        expect(countFromEurope([])).toEqual(0)
    })
});

describe('getGreetings', () => {
    it('should return the right greetings', () => {
        const devs = [
            { firstName: 'Alice', language: 'C++' },
            { firstName: 'Bob', language: 'Fortran' },
            { firstName: 'Charlie', language: 'Forth' }
        ];
        const exp = [
            'Hi Alice, what do you like the most about C++?',
            'Hi Bob, what do you like the most about Fortran?',
            'Hi Charlie, what do you like the most about Forth?',
        ]
        expect(getGreetings(devs)).toEqual(exp)
    });
    it('should return an empty array when passed an empty array', () => {
        expect(getGreetings([])).toEqual([])
    })
});

describe('isJSComing', () => {
    it('should return false if a JS developer is not coming', () => {
        const devs = [
            { firstName: 'Alice', language: 'C++' },
            { firstName: 'Bob', language: 'Fortran' },
            { firstName: 'Charlie', language: 'Forth' }
        ];
        expect(isJSComing(devs)).toEqual(false)
    })
    it('should return true if a JS developer is coming', () => {
        const devs = [
            { firstName: 'Alice', language: 'C++' },
            { firstName: 'Bob', language: 'Fortran' },
            { firstName: 'Charlie', language: 'Javascript' }
        ];
        expect(isJSComing(devs)).toEqual(true)
    })
    it('should return false if an empty array is passed', () => {
        expect(isJSComing([])).toEqual(false)
    })
});

describe('getFirstPythonDeveloper', () => {
    it('should return the first python developer', () => {
        const devs = [
            { firstName: 'Alice', language: 'C++', country: 'Amsterdam' },
            { firstName: 'Bob', language: 'Python', country: 'Brazil' },
            { firstName: 'Charlie', language: 'Python', country: 'China' }
        ];
        expect(getFirstPythonDeveloper(devs)).toEqual('Bob, Brazil')
    })
    it('should return \'none\' if there are no python developers', () => {
        const devs = [
            { firstName: 'Alice', language: 'C++' },
            { firstName: 'Bob', language: 'Fortran' },
            { firstName: 'Charlie', language: 'Forth' }
        ];
        expect(getFirstPythonDeveloper(devs)).toEqual('none')
    })
    it('should return \'none\' if ab empty array is given', () => {
        expect(getFirstPythonDeveloper([])).toEqual('none')
    })
});

describe('getAverageAge', () => {
    it('should return the average age of the group, rounded down', () => {
        const devs = [
            { age: 32 },
            { age: 46 },
            { age: 24 },
            { age: 45 },
        ];
        expect(getAverageAge(devs)).toEqual(36)
    })
    it('should return -1 if there are no developers', () => {
        expect(getAverageAge([])).toEqual(-1)
    })
});

describe('getLanguageCounts', () => {
    it('should return the language counts', () => {
        const devs = [
            { firstName: 'Alice', language: 'C++' },
            { firstName: 'Bob', language: 'Fortran' },
            { firstName: 'Charlie', language: 'Javascript' },
            { firstName: 'Dave', language: 'Javascript' },
            { firstName: 'Emma', language: 'Javascript' },
            { firstName: 'Fran', language: 'C++' },
            { firstName: 'Geri', language: 'Perl' },
        ];
        const exp = {
            'C++': 2,
            'Fortran': 1,
            'Perl': 1,
            'Javascript': 3
        }
        expect(getLanguageCounts(devs)).toEqual(exp)
    })
    it('should return an empty object if there are no developers', () => {
        expect(getLanguageCounts([])).toEqual({})
    })
});

describe('getOldest', () => {
    it('should return the oldest developer', () => {
        const devs = [
            { firstName: 'Alice', age: 12 },
            { firstName: 'Bob', age: 25 },
            { firstName: 'Charlie', age: 3 },
        ];
        expect(getOldest(devs)).toEqual(['Bob'])
    })
    it('should return multiple developers if there is a tie', () => {
        const devs = [
            { firstName: 'Alice', age: 12 },
            { firstName: 'Bob', age: 25 },
            { firstName: 'Charlie', age: 3 },
            { firstName: 'Dave', age: 25 },
            { firstName: 'Emma', age: 25 },
        ];
        expect(getOldest(devs)).toEqual(['Bob', 'Dave', 'Emma'])
    })
    it('should return an empty array if there are no developers', () => {
        expect(getOldest([])).toEqual([])
    })
});

describe('isGlobalGroup', () => {
    it('should return false for a non-global group', () => {
        const devs = [
            { continent: 'Americas' },
            { continent: 'Americas' },
            { continent: 'Asia' },
            { continent: 'Oceania' },
            { continent: 'Oceania' },
            { continent: 'Africa' },
        ];
        expect(isGlobalGroup(devs)).toEqual(false)
    });
    it('should return true for a global group', () => {
        const devs = [
            { continent: 'Americas' },
            { continent: 'Europe' },
            { continent: 'Asia' },
            { continent: 'Oceania' },
            { continent: 'Europe' },
            { continent: 'Africa' },
        ];
        expect(isGlobalGroup(devs)).toEqual(true)
    });
    it('should return false when passed an empty array', () => {
        expect(isGlobalGroup([])).toEqual(false)
    });
});

describe('askForMissingDetails', () => {
    it('should ask for missing details', () => {
        const devs = [
            { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' },
            { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
            { firstName: 'Sofia', lastName: 'I.', country: null, continent: 'Americas', age: 34, language: 'Javascript' },
        ];
        expect(askForMissingDetails(devs)).toEqual([
            'Hi Lukas. What is your language?',
            'Hi Sofia. What is your country?',
        ])
    })
    it('should support surprise details!', () => {
        const devs = [
            { firstName: 'Chad', favouritePizzaTopping: null },
        ];
        expect(askForMissingDetails(devs)).toEqual([
            'Hi Chad. What is your favouritePizzaTopping?',
        ])
    })
    it('should return an empty an array when passed an empty array', () => {
        expect(askForMissingDetails([])).toEqual([])
    })
});

