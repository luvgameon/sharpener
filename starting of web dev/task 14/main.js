/*const person={
    Firstname:'Luv',
    Lastname: 'sharma',
    age: 18,
    hobbies: ['eaing','movies','playing'],
    address: { 
        street: '50A',
        city: 'kanpur',
        state: 'UP'

    }
}
console.log(person.hobbies[1]);
console.log(person.address.city);
*/
function convertTemp(value,temp)
{
    const ans=temp=='K'?273+value+'K' : value-207+'C';
    console.log(ans);
}
console.log(convertTemp(300,'C'));