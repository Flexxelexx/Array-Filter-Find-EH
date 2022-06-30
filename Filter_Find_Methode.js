// De FILTER && FIND METHODE

// GEDRAG
// * Doorzoekt automatisch de gehele array
// * find() geeft één entry terug die hieraan voldoet (altijd eerste)
// * filter() geeft álle entries terug die hieraan voldoen
// * Let op: de originele array wordt niet aangepast

// * Krijgt een anonieme (callback) functie mee waarin we de zoekopdracht kunnen specificeren

const studentDetails = [
    {
        name: 'Henk Jansen',
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
//
// let henksEmail = '';
//
// for (let i = 0; i < studentDetails.length; i++) {
//     if (studentDetails[i].name === 'Henk jansen') {
//         henksEmail = studentDetails[i].email;
//     }
// }

const henksDetails = studentDetails.find((studentDetail) => {
    if (studentDetail.name === 'Henk Jansen') {
        return true;
    }
    return false;
});

const bootcampers = studentDetails.filter((studentDetail) => {
    console.log(studentDetail.course);
    if (studentDetail.course === 'FSD Bootcamp') {
        return true;
    }
    return false;
});

console.log(bootcampers)