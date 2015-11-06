var characters = [
  {firstName: 'Lisa', lastName: 'Simpson', age: 10, parents: ['Homer', 'Marge'], hair: 'blond' },
  {firstName: 'Bart', lastName: 'Simpson', age: 9, parents: ['Mailman', 'Marge'], hair: 'blond' },
  {firstName: 'Maggie', lastName: 'Simpson', age: 2, parents: ['Homer', 'Marge'], hair: 'black' },

  {firstName: 'Patty', lastName: 'Bouvier', age: 37, parents: ['Jacqueline'], hair: 'blond' },
  {firstName: 'Selma', lastName: 'Bouvier', age: 38, parents: ['Jacqueline'], hair: 'blond' },

  {firstName: 'Rod', lastName: 'Flanders', age: 9, parents: ['Ned'], hair: 'blond' },
  {firstName: 'Todd', lastName: 'Flanders', age: 8, parents: ['Ned'], hair: 'blond' },

  {firstName: 'Abe', lastName: 'Simpson', age: 65, hair: 'none' },
  {firstName: 'Mona', lastName: 'Simpson', age: 65, hair: 'none' },
  {firstName: 'Jacqueline', lastName: 'Bouvier', age: 63, hair: 'none' },
  {firstName: 'Homer', lastName: 'Simpson', age: 42, parents: ['Abe', 'Mona'], hair: 'none' },
  {firstName: 'Marge', lastName: 'Simpson', age: 35, parents: ['Jacqueline'], hair: 'blond' },
  {firstName: 'Ned', lastName: 'Flanders', age: 40, hair: 'none' },

  {firstName: 'Apu', age: 40, lastName: 'Nahasapeemapetilon', hair: 'black' },
  {firstName: 'Manjula', lastName: 'Nahasapeemapetilon', age: 40, hair: 'brown' },
];

var homer = characters[10];

var checkIfSimpsonFamily = (item) => {
  return item.lastName === 'Simpson';
};

// console.assert(checkIfSimpsonFamily({lastName: 'Flanders'}) === false);
// console.assert(checkIfSimpsonFamily({lastName: 'Simpson'}) === true);

// Find the just the members of the "Simpsons" family
var simpsons = characters.filter(checkIfSimpsonFamily);

console.log('Simpsons family: ', simpsons);

// Find just the children of Marge and Homer

var brats = characters.filter((item) => {
  if (item.parents) {
    item.parents.indexOf('Marge') !== -1 && item.parents.indexOf('Homer') !== -1;
  }
});

console.log('Brats: ', brats);

// Calculate the max age

var maxAge = characters.reduce((currentMax, item) => {
  if (item.age > currentMax) {
    return item.age;
  }

  return currentMax;
}, 0);

console.log(maxAge);

// Calculate the average age

var ageSum = characters.reduce((currentSum, item) => {
  return currentSum + item.age;
}, 0);

var averageAge = ageSum / characters.length;

console.log(averageAge);

// List the children for homer

var getChildren = (parent) => {
  return characters.filter((item) => {
    if (item.parents) {
      return item.parents.indexOf(parent.firstName) !== -1;
    }
  });
};

// List the number of children for each character

var childrenForEach = characters.map((item) => {
  return getChildren(item).length;
});

console.log('Children:', childrenForEach);
