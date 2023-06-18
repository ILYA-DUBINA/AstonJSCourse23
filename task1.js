const staff = {
  name: 'Alex',
  age: 20,
  skills: [
      {
          id: 1,
          value: 'html',
      },
      {
          id: 2,
          value: 'js',
      },
      {
          id: 3,
          value: 'css',
      },
  ],
  cost: undefined,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...',
  knowledge: [
      {
          label: 'React JS',
          score: 7,
      },
      {
          label: 'JS',
          score: 7,
      },
      {
          label: 'CSS',
          score: 9,
      },
      {
          label: 'HTML',
          score: 10,
      },
  ],
  avatar: null,
};

function deepCopyObject(obj){
  let copyObj = {};
  for(let key in obj){
    if(typeof obj[key] === 'obj'){
      deepCopyObject(obj[key]);
    }
    copyObj[key] = obj[key];
  }
  return copyObj;
}

let oneDeepCopyObject = deepCopyObject(staff);
console.log(oneDeepCopyObject);