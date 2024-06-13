interface IPerson {
  name: string,
  age: number,
  address: string
}

const person: IPerson = {
  name: "Marcus",
  age: 29,
  address: "123 Main St"
}

function updatePersonName(pessoa: IPerson, newName: string): IPerson {
  return { 
    ...person,
    name: newName
  }
}

const upDatePerson = updatePersonName(person, 'Marcus')
console.log(upDatePerson)