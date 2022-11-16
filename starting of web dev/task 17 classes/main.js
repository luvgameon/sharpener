class Student{
    constructor(firstname,lastname,roll_no,sex,student_age)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.roll_no=roll_no;
        this.sex=sex;
        this.student_age=student_age;
    }
    getfullname(){
        return this.firstname+' '+this.lastname;
    }
    getageyear(){
        return this.student_age.getFullYear();
    }
}
var student1 = new Student("Luv", "Bhardwaj", 1, "Male",'23');
  var student2 = new Student("Akshay", "Kumar",2, "Male",'24');
  if (student1.student_age > student2.student_age) {
    console.log(student1.getfullname());
  }
   else {
    console.log(student2.getfullname());
  }

  

