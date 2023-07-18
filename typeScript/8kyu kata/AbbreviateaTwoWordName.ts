// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

export function abbrevName(name: string): string {
    // code away
    const newStr = name.split(' ')
    const firstName = newStr[0].toUpperCase()
    const secondName= newStr[1].toUpperCase()
    return `${firstName[0]}.${secondName[0]}` 

}
