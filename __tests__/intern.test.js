const Intern = require("../lib/Intern");

describe("Intern class", () =>{
    describe("Initialization", () => {
        it("should create an object with a name, title, email, id, and school if provided valid arguments", () =>{
            //Act
            const intern = new Intern("Harry Potter", "Intern", "hp@Hogwarts.edu", 4, "Hogwarts");
            //Assert
            expect(intern.name).toEqual("Harry Potter");
            expect(intern.title).toEqual("Intern");
            expect(intern.email).toEqual("hp@hogwarts.edu");
            expect(intern.id).toEqual(4);
            expect(intern.school).toEqual("Hogwarts");
        });
        it("should throw an error if there are no paramaters entered", () => {
            //Act
            const cb = () => new Intern();
            const err = new Error("Expected to have input parameters");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'name' is not a string", () => {
            //Act
            const cb = () => new Intern(9, "Intern", "hp@Hogwarts.edu", 4, "Hogwarts");
            const err = new Error("Expected 'name' to be a non-empty string");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'title' is not a string", () => {
            //Act
            const cb = () => new Intern("Harry Potter", 8, "hp@Hogwarts.edu", 4, "Hogwarts");
            const err = new Error("Expected 'title' to be a non-empty string");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'email' is not a string", () => {
            //Act
            const cb = () => new Intern("Harry Potter", "Intern", 6, 4, "Hogwarts");
            const err = new Error("Expected 'email' to be a non-empty string");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'id' less than 0", () => {
            //Act
            const cb = () => new Intern("Harry Potter", "Intern", "hp@Hogwarts.edu", -4, "Hogwarts");
            const err = new Error("Expected 'id' to be a non-negative number");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'school' is not a string", () => {
            //Act
            const cb = () => new Intern("Harry Potter", "Intern", "hp@Hogwarts.edu", 4, 7);
            const err = new Error("Expected 'school' to be a non-empty string");
            //Assert
            expect(cb).toThrowError(err);
        });
    });
});