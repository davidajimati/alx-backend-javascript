class Teacher {
    private _firstName: string;
    private _lastName: string;
    private _fullTimeEmployee: boolean;
    private _yearsOfExperience?: number;
    private _location: string;
    private additionalAttributes: { [key: string]: any } = {};

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullTimeEmployee = fullTimeEmployee;
        this._location = location;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get fullTimeEmployee(): boolean {
        return this._fullTimeEmployee;
    }

    set fullTimeEmployee(value: boolean) {
        this._fullTimeEmployee = value;
    }

    get yearsOfExperience(): number | undefined {
        return this._yearsOfExperience;
    }

    set yearsOfExperience(value: number | undefined) {
        this._yearsOfExperience = value;
    }

    get location(): string {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
    }

    // Indexer to add any additional attribute
    setAttribute(key: string, value: any): void {
        this.additionalAttributes[key] = value;
    }

    getAttribute(key: string): any {
        return this.additionalAttributes[key];
    }
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    return (`${firstName.slice(0, 1)}. ${lastName}`)
}
