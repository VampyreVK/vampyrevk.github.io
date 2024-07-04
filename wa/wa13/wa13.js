
let companyEmployees = [
    {
        "firstName" : "Sam",
        "department" : "Tech",
        "designation" : "Manager",
        "salary" : 40000,
        "raiseEligible" : true
    },
    {
        "firstName" : "Mary",
        "department" : "Finance",
        "designation" : "Trainee",
        "salary" : 18500,
        "raiseEligible" : true
    },
    {
        "firstName" : "Bill",
        "department" : "HR",
        "designation" : "Executive",
        "salary" : 21200,
        "raiseEligible" : false
    }
]

let company = {
        "companyName" : "Tech Stars",
        "website" :  "www.techstars.site",
        "employees" : companyEmployees
}

//problem1
function problem1() {
    console.log(JSON.stringify(companyEmployees));
}

//problem2
function problem2() {
    console.log(JSON.stringify(company));
}

//problem3
function problem3() {
    companyEmployees.push( 
        {
            "firstName" : "Anna",
            "department" : "Tech",
            "designation" : "Executive",
            "salary" : 25600,
            "raiseEligible" : false
        }
    );
    console.log(JSON.stringify(company));
}

//problem4
function problem4() {
    let totalSalary = 0;
    for (let employee of company.employees) {
        totalSalary += employee.salary;
    }

    console.log("Total Salary: " + totalSalary);
    console.log(JSON.stringify(company));
}

//problem5
function problem5() {
    for (let i = 0; i < company.employees.length; i++) {
        if (company.employees[i].raiseEligible) {
            company.employees[i].salary = company.employees[i].salary * 1.1;
            company.employees[i].raiseEligible = false;
        }
    }
}

//problem6
function problem6() {
    for (let i = 0; i < company.employees.length; i++) {
        company.employees[i].wfh = false;
        if (company.employees[i].firstName === "Anna" || company.employees[i].firstName === "Sam") {
            company.employees[i].wfh = true;
        }
    }
    console.log(JSON.stringify(company));
}

console.log("Problem 1");
problem1();

console.log("Problem 2");
problem2();

console.log("Problem 3");
problem3();

console.log("Problem 4");
problem4();

console.log("Problem 5");
problem5();

console.log("Problem 6");
problem6();