const nameinput=document.querySelector('#name');
const email=document.querySelector('#mail');
const myform=document.querySelector('#my-form');

myform.addEventListener("mouseover", myFunction);
myform.addEventListener("click", mySecondFunction);
myform.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  myform.style.background='red';
  console.log(nameinput.value);
  console.log(email.value);

}

function mySecondFunction() {
    myform.style.background='yellow';
    console.log(nameinput.value);
    console.log(email.value);
}

function myThirdFunction() {
    myform.style.background='blue';
    console.log(nameinput.value);
    console.log(email.value);
}

