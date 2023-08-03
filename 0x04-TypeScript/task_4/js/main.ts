interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    [key: string]: any;
}
interface Directors extends Teacher {
    numberOfReports: number;
}
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentInterface {
    firstName: string;
    lastName: string;
}
class StudentClass implements StudentInterface {
    constructor(public firstName: string, public lastName: string) { }
    workOnHomework(): string {
        return 'Currently working'
    }
    displayName(): string {
        return this.firstName
    }
}
