// Object Destructuring
const person = {
  firstName: 'Gavin',
  age: 20,
  location: {
    city: 'Salt Lake',
    temp: 90
  }
};

const { firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
console.log(`It's ${temperature} in ${city}!`);
};

const book = {
  tite: 'Books are fun to read!',
  author: 'Gavin S',
  publisher: {
    pName: 'Picture Perfect'
  }
};

const { pName = 'Self-Published'} = book.publisher;
console.log(`${book.tite} was published by ${pName}.`);

//Array Destructuring

const address = ['106 E Delgada Ln', 'Tooele', 'Utah', '84074'];

const [ , town, state = 'Cali'] = address;

console.log(`You are in ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, small, mediumPrice, large] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);