class Employee {
  constructor(name, id, manager) {

    if (name === undefined || name == null || typeof name !== 'string') throw new Error(`Illegal argument for name ${name}`)
    if (id === undefined || id == null || typeof id !== 'number') throw new Error(`Illegal argument for id ${id}`)
    
    this.name = name
    this.id = id
    this.manager = manager || null
  }

  isEqual(employee) {
    return this.id === employee.id
  }
}

module.exports = Employee
