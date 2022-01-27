const Manager = require("../lib/Manager");

describe("Manager class", () =>{
    describe("Initialization", () => {
        it("should create an object with a name, title, email, id, and office number if provided valid arguments", () =>{
            //Act
            const manager = new Manager("Albus Dumbledore", "Manager", "ab@Hogwarts.edu", 2, 300);
            //Assert
            expect(manager.name).toEqual("Albus Dumbledore");
            expect(manager.title).toEqual("Manager");
            expect(manager.email).toEqual("ab@hogwarts.edu");
            expect(manager.id).toEqual(2);
            expect(manager.officeNumber).toEqual(300);
        });
        it("should throw an error if there are no paramaters entered", () => {
            //Act
            const cb = () => new Manager();
            const err = new Error("Expected to have input parameters");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'name' is not a string", () => {
            //Act
            const cb = () => new Manager(12, "Manager", "ab@Hogwarts.edu", 2, 300);
            const err = new Error("Expected 'name' to be a non-empty string")
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'title' is not a string", () => {
            //Act
            const cb = () => new Manager("Albus Dumbledore", 44, "ab@Hogwarts.edu", 2, 300);
            const err = new Error("Expected 'title' to be a non-empty string")
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'email' is not a string", () => {
            //Act
            const cb = () => new Manager("Albus Dumbledore", "Manager", 33, 2, 300);
            const err = new Error("Expected 'email' to be a non-empty string")
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'id' less than 0", () => {
            //Act
            const cb = () => new Manager("Albus Dumbledore", "Manager", "ab@Hogwarts.edu", -2, 300);
            const err = new Error("Expected 'id' to be a non-negative number")
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'officeNumber' less than 0", () => {
            //Act
            const cb = () => new Manager("Albus Dumbledore", "Manager", "ab@Hogwarts.edu", 2, -300);
            const err = new Error("Expected 'officeNumber' to be a non-negative number")
            //Assert
            expect(cb).toThrowError(err);
        });
    });
});