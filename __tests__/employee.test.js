const Employee = require("../lib/Employee");

describe("Employee class", () =>{
    describe("Initialization", () => {
        it("should create an object with a name, email, and id if provided valid arguments", () =>{
            //Act
            const emplooyee = new Employee("Dolores Umbridge", "du@hogwarts.edu", 1);

            //Assert
            expect(employee.name).toEqual("Dolores Umbridge");
            expect(employee.email).toEqual("du@hogwarts.edu");
            expect(employee.id).toEqual(1);
        });
        it("should throw an error if there are no paramaters entered", () => {
            //Act
            const cb = () => new Employee();
            const err = new Error("Expected to have input parameters");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'name' is not a string", () => {
            //Act
            const cb = () => new Employee(4, "du@hogwarts.edu", 1);
            const err = new Error("Expected 'name' to be a non-empty string");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'email' is not a string", () => {
            //Act
            const cb = () => new Employee("Dolores", 14, 1);
            const err = new Error("Expected 'email' to be a non-empty string");
            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'id' less than 0", () => {
            //Act
            const cb = () => new Employee("Dolores", "du@hogwarts.edu", -1);
            const err = new Error("Expected 'id' to be a non-negative number");
            //Assert
            expect(cb).toThrowError(err);
        });
    });
    describe("getName", () => {
        it("should add 'name' to ____", () => {
         //Act

         //Assert
         expect();
        });
    });
    describe("getEmail", () => {
        it("should add 'email' to ____ ", () => {
         //Act

         //Assert
         expect();
        })
    })
    describe("getRole", () => {
        it("should add 'role' to ____"), () => {
        //Act

        //Assert
        expect();
        }
    });
    
});