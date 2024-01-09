let persons = [
    { name: "John", age: 25, city: "NewYork" },
    { name: "Alice", age: 30, city: "London" },
    { name: "Bob", age: 22, city: "Paris" },
    { name: "Alex", age: 19, city: "London" },
    { name: "Tyler", age: 24, city: "NewYork" },
    { name: "Constantine", age: 31, city: "Paris" },
    { name: "Cole", age: 21, city: "London" },
  ];

  
  function addNewPerson() {
    let name = prompt("Введите имя:");
    let age = parseInt(prompt("Введите возраст:"));
    let city = prompt("Введите город:");
     
    let newPerson = { name: name, age: age, city: city };
    persons.push(newPerson);
    }
     
    addNewPerson();
    console.log(persons);