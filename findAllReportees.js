const EmployeeDatabase = require('./sample/employees')
const inputEmployeeName = process.argv[2]

// find and validate user's input employee name
const inputEmployee = selectEmployeeWhereNameEquals(inputEmployeeName)
if (!inputEmployee) throw new Error(`Employee with name ${inputEmployeedName} not found`)

// get direct reportees
let reportees = getReportees(inputEmployee)

// get all multiple layers of indirect reportees
reportees = reportees.concat(getAllReportees(reportees))

const names = reportees.map((r) => r.name)
// simple output names to ease illustration
console.log(names)


// ALGORITHM PART
function selectEmployeeWhereNameEquals(name) {
  // simply mimic if data are like in sql table
  for (let i=0 ; i<EmployeeDatabase.length ; i++) {
    const iter = EmployeeDatabase[i]
    if (iter.name === name) return iter
  }
}

/**
 * @description equivalent to DEPTH FIRST SEARCH
 * @params {Array<Employee>} employee
 */
function getAllReportees(employees) {

  const reportees = []
  for (let i=0 ; i<employees.length ; i++) {
    // iterate input/superiors
    const inputIter = employees[i]
    for (let j=0 ; j<EmployeeDatabase.length ; j++) {
      const iter = EmployeeDatabase[j]
      // if reportee found
      if (iter.manager != null && iter.manager.isEqual(inputIter)) {
        reportees.push(iter)
      }
    }
  }
  // only trigger recursive search logic if current layer output is not empty
  return reportees.length === 0 
    ? reportees
    // recursive part, auto repeat and concat current layer output 
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
