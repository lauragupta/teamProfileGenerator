const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, title, email, id, officeNumber) {
        super(name, title, email, id,);
        this.officeNumber = officeNumber;
    }
}