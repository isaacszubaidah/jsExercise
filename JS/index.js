document.getElementById('heading').innerText = 'Javascript'
// in order to change information without usuin query selector you have to getElementById.

// question2
document.querySelector('.paragraph').innerText = 'This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself';
// innerText is used when you want to access the class or Id not the tag itself.

// question3
document.querySelector('h3').innerHTML = 'Things I\'ve accomplished so far';
// the time you wanrt to change something in a tag you use innerHTML

// question4
document.getElementsByTagName('p')[1].innerText = 'I have discovered that I can accomplish anything I put my mind to'
// remeber that when using indexing to a tag or anything else that the sqaure brackets comes outside of the parenthesis

// question5
// 5.1 
let input1 = document.querySelector('[data-firstMultiply]').value;
// 5.2
let input2 = document.querySelector('[data-secondMultiply]').value;
// 5.3
let btn = document.querySelector('[data-calculate1]');
//5.4
let span1 = document.querySelector('[data-first]').innerText
// 5.5


function multiply(){
    let input1 = document.querySelector('[data-firstMultiply]').value;
    let input2 = document.querySelector('[data-secondMultiply]').value;
    answer = input1 * input2;
    document.querySelector('[data-first]').innerText = answer;
    // this is so I change the first spans value
    console.log(answer)
};

multiply()
// 5.6
btn.addEventListener('click',()=> multiply())
// this is so that the function runs when clicking the button

// question6
// 6.1
let input3 = document.querySelector('[data-firstModulus]').value;
// 6.2
let input4 = document.querySelector('[data-secondModulus]').value;
// 6.2
let span2 = document.querySelector('[data-second]').innerText;
// 6.4
let btn2 = document.querySelector('#calculate2')
function modulus(){
    let input3 = document.querySelector('[data-firstModulus]').value;
    let input4 = document.querySelector('[data-secondModulus]').value;
    answer = input3 % input4;
    document.querySelector('[data-second]').innerText = answer;
    console.log(answer)
    
};

btn2.addEventListener('click',()=>modulus())

// question7
// 7.1
document.getElementById('bubbleTea').innerText = 'White Tea'
// 7.2
document.querySelector('.greenTea').innerText = 'Black Tea'
// 7.3
document.getElementsByTagName('li')[3].innerText = 'Herbal Tea'

// question8
 const lastName = "Isaacs";

//  question9
let parentsAge = 20;

// question 10
 let coolCars= ['BMW','Bugati','Ferrari','McLaren', 'Mercedes'];


// question11
coolCars[3] = 'Lamborghini';

// question12
for(let b=0;b<coolCars.length;b++){
    console.log(coolCars[b]);
}

//  question13
console.log(coolCars.reverse());

// question14
console.log(coolCars.reverse());
let a12 = coolCars.pop();
console.log(coolCars);


// question15
coolCars.unshift(a12);
console.log(coolCars);

// question16
let age= 17;
let a = age;
if(a>18){
    console.log('Hooraay you are older than 18')
}else if (age == 18){
    console.log('You are 18')

}else{
    console.log('You are younger than 18')
};

// question17
switch(true) {
case (a>18):
    console.log('Horaay you  are older than 18');
    break;
case (age == 18):
    console.log('You are 18');
    break;
default:
    console.log('You are a minor')
 }

//  question18
let mathMark = 77,physicsMark = 70,englishMark = 50;
averageMark = (mathMark+physicsMark+englishMark)/3
switch(true){
    case averageMark>79:
        console.log(`You did well you average was excellent  ${averageMark.toFixed(2)}`);
        break;
    case averageMark>69:
        console.log(`You did good your average was good   ${averageMark.toFixed(2)}`);
        break;
    case averageMark>49:
        console.log(`You did okay your average was satisfactory  ${averageMark.toFixed(2)}`);
        break;
    default:
        console.log(`You must work harder next time  ${averageMark.toFixed(2)}`);

}


// question19

let m = 0;
while(m <= parentsAge) {
    console.log(m);
    m++;
}

// question20
let  j =0
while(j<coolCars.length){
    console.log(coolCars[j]);
    j++;
}
// question21
let chair = {
    legs: 4,
     material: "plastic"
};

// question22
chair.armRestBars = 'none'

// question23.1
console.log(chair.armRestBars);

// question23.2
delete chair.legs;

// question 24
function electricalDevices(name,type,year,description){
    return{
        name:name,
        type:type,
        year:year,
        description:description,
    }
}

let item1 = new electricalDevices('Samsung','cellphone',2020,'This cellphone has a very good qaulity camera');

console.log(item1);
let item2 = new electricalDevices('Huwei','Tablet',2021,'This tablet is very lightweight');
console.log(item2);

let item3 = new electricalDevices('Mac','Laptop',2020,'This laptop I recommend to developers');
console.log(item3);

let item4 = new electricalDevices('Samsung','Fridge',2019,'This fridge has a built in water dispenser');
console.log(item4);

// question25
function carTypes (brand, model, year, transmission, drivetrains) {
          this.brand,
          this.model,
          this.year,
          this .transmission,
          this.drivetrains
          
};

// question26
let car1 = new carTypes('Renault','Clio',2011,'Automatic','AWD');
console.log(car1);
let car2 = new carTypes('Honda','Accord',2011,'Automatic','AWD');
console.log(car2);
let car3 = new carTypes('Toyota','Supra',2015,'Automatic','AWD');
console.log(car3);
let car4 = new carTypes('Renault','Kwid',2016,'Automatic','AWD');
console.log(car4);










