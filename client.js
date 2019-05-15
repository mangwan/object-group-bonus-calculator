const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

for (let employee of employees) {
  console.log(employeeBonus(employee));
}


function employeeBonus(employee) {
  console.log('in employeeBonus', employee);
  let calcPercentage = calcBonus(employee);
  let totalBonus = Math.floor(employee.annualSalary * calcPercentage);
  let totalCompensation = Number(employee.annualSalary) + totalBonus;

  let newEmployee = {
    name: employee.name,
    bonusPercentage: calcPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus,
  };
  return newEmployee;
};

function calcBonus(employee) {
  console.log('in calcBonus', employee);
  let bonusPercentage = 0;

  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    bonusPercentage = 4;
  } else if (employee.reviewRating === 4) {
    bonusPercentage = 6;
  } else {
    bonusPercentage = 10;
  }

  if (employee.employeeNumber.toString().length === 4) {
    bonusPercentage = bonusPercentage + 5;
  }

  if ( employee.annualSalary > 65000 ) {
    bonusPercentage = bonusPercentage - 1;
  }

  if (bonusPercentage > 13) {
    bonusPercentage = 13;
  }

  if (bonusPercentage < 0 ) {
    bonusPercentage = 0;
  }

  console.log(employee.name,bonusPercentage);
  
  return (bonusPercentage/100);

}

  console.log(employees);




// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.