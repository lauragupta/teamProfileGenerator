const Engineer = require("../lib/Engineer");

describe("Engineer class", () =>{
    describe("Initialization", () => {
        it("should create an object with a name, title, email, id, and githubUsername if provided valid arguments", () =>{
            //Act
            const engineer = new Engineer("Severus Snape", "Engineer", "ss@Hogwarts.edu", 3, "severussnape");
            //Assert
            expect(engineer.name).toEqual("Severus Snape");
            expect(engineer.title).toEqual("Engineer");
            expect(engineer.email).toEqual("ss@hogwarts.edu");
            expect(engineer.id).toEqual(3);
            expect(engineer.githubUsername).toEqual("severussnape");
        });
        it("should throw an error if there are no paramaters entered", () => {
            //Act
            const cb = () => new Engineer();
            const err = new Error("Expected to have input parameters");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'name' is not a string", () => {
            //Act
            const cb = () => new Engineer(5, "Engineer", "ss@Hogwarts.edu", 3, "severussnape");
            const err = new Error("Expected 'name' to be a non-empty string");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'title' is not a string", () => {
            //Act
            const cb = () => new Engineer("Severus Snape", 66, "ss@Hogwarts.edu", 3, "severussnape");
            const err = new Error("Expected 'title' to be a non-empty string");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'email' is not a string", () => {
            //Act
            const cb = () => new Engineer("Severus Snape", "Engineer", 77, 3, "severussnape");
            const err = new Error("Expected 'email' to be a non-empty string");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'id' less than 0", () => {
            //Act
            const cb = () => new Engineer("Severus Snape", "Engineer", "ss@Hogwarts.edu", -3, "severussnape");
            const err = new Error("Expected 'id' to be a non-negative number");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'officeNumber' less than 0", () => {
            //Act
            const cb = () => new Engineer("Severus Snape", "Engineer", "ss@Hogwarts.edu", 3, 88);
            const err = new Error("Expected 'githubUsername' to be a non-empty string");
            //Assert
            expect(cb).toThrowError(err);
        });
    });
});