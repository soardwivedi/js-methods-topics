// 1. Summing an Array Using reduce()
const topSix = [
    { name: "Nigeria", position: "1st", points: 43 },
    { name: "England", position: "2nd", points: 37 },
    { name: "USA", position: "3rd", points: 35 },
    { name: "South Africa", position: "4th", points: 30 },
    { name: "Brazil", position: "5th", points: 27 },
    { name: "Korea", position: "6th", points: 23 }
]

const totalPoints = topSix.reduce((acc, currTeam) => acc + currTeam.points, 0 )
console.log(totalPoints);

// Another very similar use for JavaScript reduce() is to get the total count of items within an array collection, 
// like getting the team count:
const totalTeams = topSix.reduce((acc, currCount) => acc + 1, 0)

console.log(totalTeams);

// 2. Counting Occurrences of Items in an Array Using reduce()
const fruits = [ 'Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana']

// 3. Converting Between Types Using reduce()
const students = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
]

// 4. Getting Max and Min Values From an Array Using reduce()
const studentss = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
]

// 5. Flatten a List of Arrays Using reduce()
const arrOfArrs = [
    ['aaron', 'ake', 'anna', 'aje'],
    ['becky', 'ben', 'bright'],
    ['cara', 'chris'],
    ['david', 'daniel', 'danielle', 'djenue'],
]