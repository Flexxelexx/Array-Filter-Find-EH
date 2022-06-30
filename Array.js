const students = ['Henk', 'Piet', 'Klaas', 'Fred'];

// for (let i = 0; i < students.length; i++) {
//     students[i] = students[i] + 'je';
// }

// console.log(students);

const outcome = students.map((student) => {
    return student + 'je';
});

console.log(outcome);

// De Map Methode
// * Itereert automatisch over de gehele lengte van de array
// * Voor iedere entry wordt de anonieme functie uitgevoerd
// * Maakt een nieuwe array op basis van wat je in de return statement zet
// * De parameter die je de callback meegeeft bevat altijd de volledige entry van die loop
// * Let op: de originele array wordt niet aangepast!



const studentDetails = [
    {
        name: 'Henk jansen',
        email: 'henk@novi-education.nl',
        course: 'FSD Bootcamp',
    },
    {
        name: 'Piet Pieters',
        email: 'pieters@novi-education.nl',
        course: 'HBO Software Development',
    },
    {
        name: 'Marieke Smit',
        email: 'm.smit@novi-education',
        course: 'FSD Bootcamp',
    }
];

 // ^^ for methode oplossing :
// let emails = [];
//
// for (let i = 0; i < studentDetails.length; i++) {
//     emails.push(studentDetails[i].email);
// }

// ^^ map methode oplossing :
const emailadresses = studentDetails.map((studentDetail) => {
    return studentDetail.email;
});

console.log(emailadresses)