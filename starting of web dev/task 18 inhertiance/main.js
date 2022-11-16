class User{
  static count=0;
  constructor(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;
    User.count++;
  
  }

  register(){
    console.log(this.name+' is Now register');
    
       
  }


 registeredUsers(){
  return console.log('No of user '+User.count);

}


}
const bob=new User('Luv','luvgameon@gmail.com','123');
const luv=new User('ABC','gameO@gmailcom','12340');
bob.register();
luv.register();
bob.registeredUsers();
class Member extends User{
  constructor(name,email,password,memberpackage){
    
    super(name,email,password);
    this.package=memberpackage;
    let todaydate=new Date();
    const membertillyear=todaydate.getFullYear();
    const membertillmonth=todaydate.getMonth();
    const membertillday=todaydate.getDay();
    this.membertilldate=new Date(
      membertillyear,
      membertillmonth+1,
      membertillday
    );

  }
  getpackage(){
    console.log(this.name+' have a '+this.package+ ' pakage');
  }
  getmembershipvaliddate(){
    console.log(this.name+' subscrpition date is valid upto '+this.membertilldate+'ssubscrpition type is -->'+this.package);
  }
  renewmembership(){
    let subscrpition_type=this.package;
    let todaydate=new Date();
    if(subscrpition_type=='standard'){

      const membertillyear=todaydate.getFullYear();
    const membertillmonth=todaydate.getMonth();
    const membertillday=todaydate.getDay();
    this.membertilldate=new Date(
      membertillyear,
      membertillmonth+1,
      membertillday
    );

    }
    else{
      const membertillyear=todaydate.getFullYear();
    const membertillmonth=todaydate.getMonth();
    const membertillday=todaydate.getDay();
    this.membertilldate=new Date(
      membertillyear+1,
      membertillmonth,
      membertillday
    );

    }


  }

}
const p1 =new Member('P1','luvgameon@gmail.com','123','standard');
const p2=new Member('luv','luvgameon@gmail.com','123','yearly');
p1.register();
p1.getmembershipvaliddate();
p1.renewmembership();
p1.getmembershipvaliddate();
p2.register();
p2.getmembershipvaliddate();
p2.renewmembership();
p2.getmembershipvaliddate();

