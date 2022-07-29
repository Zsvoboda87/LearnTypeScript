const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    // const person = {
    name: 'Zachary',
    age: 34,
    hobbies: ['cooking', 'coding'],
    role: [1, 'developer']
};

enum Role { ADMIN, READ_ONLY, AUTHOR }

let favActivities: any[];
favActivities = ['string', 1]

console.log(person.role)

for (const hobby of person.hobbies) {
    console.log(hobby)
}