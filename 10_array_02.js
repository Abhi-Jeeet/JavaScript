const carCompany=["Mahindra", "Tata","Toyota", "BMW"]
const carName=["Scorpio", "Bolero", "XUV700","Thar"]

// carCompany.push(carName)
// console.log(carCompany);
/*[
    'Mahindra',
    'Tata',
    'Toyota',
    'BMW',
    [ 'Scorpio', 'Bolero', 'XUV700', 'Thar' ]
  ]*/
// console.log(carCompany[4][1]);

const allCar = carCompany.concat(carName)
// console.log(allCar);

/*
[
  'Mahindra', 'Tata',
  'Toyota',   'BMW',
  'Scorpio',  'Bolero',
  'XUV700',   'Thar'
]
*/

const allNewCar=[...carCompany, ...carName]
console.log(allNewCar);

console.log(Array.isArray("Abhijeet"))
console.log(Array.from("Abhijeet"));
console.log(Array.from("Abhijeet"));




