const EmployeeDatabase = require('./sample/employees')
const inputEmployeeName = process.argv[2]

const inputEmployee = selectEmployeeWhereNameEquals(inputEmployeeName)
if (!inputEmployee) throw new Error(`Employee with name ${inputEmployeedName} not found`)

let reportees = getReportees(inputEmployee)
reportees = reportees.concat(getAllReportees(reportees))

const names = reportees.map((r) => r.name)
// simple output
console.log(names)

function selectEmployeeWhereNameEquals(name) {
  // simply mimic if data are like in sql table
  for (let i=0 ; i<EmployeeDatabase.length ; i++) {
    const iter = EmployeeDatabase[i]
    if (iter.name === name) return iter
  }
}

/**
 * @description equivalent to depth first search
 * @params {Array<Employee>} employee
 */
function getAllReportees(employees) {

  const reportees = []
  for (let i=0 ; i<employees.length ; i++) {
    // iterate input/superiors
    const inputIter = employees[i]
    for (let j=0 ; j<EmployeeDatabase.length ; j++) {
      // iterate all
      const iter = EmployeeDatabase[j]
      // if reportee found
      if (iter.manager != null && iter.manager.isEqual(inputIter)) {
        reportees.push(iter)
      }
    }
  }
  return reportees.length === 0 
    ? reportees
    // recursive part, auto repeat 
    : reportees.concat(getAllReportees(reportees))
}

function getReportees(employee) {
  const reportees = []
  for (let j=0 ; j<EmployeeDatabase.length ; j++) {
    const iter = EmployeeDatabase[j]
    if (iter.manager != null && iter.manager.isEqual(employee)) reportees.push(iter)
  }
  return reportees
}
