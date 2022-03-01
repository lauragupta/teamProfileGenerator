const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, email, id, githubUsername) {
        super(name, email, id);
        this.githubUsername = githubUsername;
        this.role = 'Engineer';
    }
    getGithub() {
        return this.githubUsername;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;