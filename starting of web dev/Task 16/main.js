function Student(firstName, lastName, rollNo, sex, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNo = rollNo;
    this.sex = sex;
    this.age = age;
    this.getBirthYear = function () {
      return 2019 - this.age;
    };
    this.fullName = function () {
      return this.firstName + " " + this.lastName;
    };
  }
  var student1 = new Student("Luv", "Bhardwaj", 1, "Male", 23);
  var student2 = new Student("Akshay", "Kumar", 2, "Male", 20);
  if (student1.age > student2.age) {
    console.log(student1.fullName());
  } else {
    console.log(student2.fullName());
  }
  
Student.prototype.check=function check(min_age){ 
    if(this.age>min_age)
    {
        console.log('he is egligible');
    }
    else{
        console.log('he is not egligible');
    }
}
student1.check(25);
student2.check(10);
