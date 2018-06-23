function testNum (num) {
  if (num > 10) {
    return Promise.resolve(`${num} is greater than 10, success!`)
  } else {
    return Promise.reject(Error(`${num} is less than 10, error!`));    
  }
}

testNum(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

testNum(5)
  .then(result => console.log(result))
  .catch(error => console.log(error))


function makeAllCaps (array) {
  let caps = [];

  for (var i = 0; i < array.length; i++) {
    if (typeof (array[i]) === 'string') {
      let cap = array[i].toUpperCase();
      caps.push(cap)
    } else {
      return Promise.reject(Error(`No, the array you passed in contained an element that was not a string!`));    
    }
  }
  
  return Promise.resolve(caps)
}

function sortWords (array) {
  const sortedArr = array.sort();

  return Promise.resolve(sortedArr)
}

makeAllCaps(['wowow', 'pants', 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))

makeAllCaps(['wowow', 5, 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))