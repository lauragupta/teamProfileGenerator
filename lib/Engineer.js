const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, email, id, githubUsername) {
        super(name, email, id,);
        this.githubUsername = githubUsername;
    }
}
module.exports = Engineer;