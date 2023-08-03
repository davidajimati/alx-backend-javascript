interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Doris',
    lastName: 'Wilson',
    age: 23,
    location: 'San Francisco',
}

const student2: Student = {
    firstName: 'Valley',
    lastName: 'Jackson',
    age: 20,
    location: 'San Diego',
}
const studentsList = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const trHead = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');

th1.textContent = 'First Name';
th2.textContent = 'Location';

trHead.appendChild(th1);
trHead.appendChild(th2);
thead.appendChild(trHead);
table.appendChild(thead);

studentsList.forEach((student: Student) => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table)
