const Employee = require('../model/employee')

// given sample
// sample: const e1 = new Employee(<name:string>, <id:int>, <manager:Employee>)
const e1 = new Employee('CEO', 0)
const e2 = new Employee('e2', 1, e1)
const e3 = new Employee('e3', 2, e1)
const e4 = new Employee('e4', 3, e2)
const e5 = new Employee('e5', 4, e2)
const e6 = new Employee('e6', 5, e3)

// to test more extensively
const e7 = new Employee('e7', 6, e4)
const e8 = new Employee('e8', 7, e5)
const e9 = new Employee('e9', 8, e8)

const EmployeeDatabase = [e1, e2, e3, e4, e5, e6, e7, e8, e9]

module.exports = EmployeeDatabase
