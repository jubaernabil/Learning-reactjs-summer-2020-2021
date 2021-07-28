"use strict"

//a =0;
//var b= 10;
let c=10;
const e =10;


//let student = [1,3,4,'nabil'];
//console.log(student[1]);
//console.log(student[3]);

/*function sum(a,b){  //ES5 
	return a+b;
}
console.log(sum(10,5));
 */

//ES6 
/*
const sum = function (a,b){
	return a+b;
  }
  console.log(sum(40,50));

const sum1 = (a,b)=>{
	return a+b;
}
console.log(sum1(10,20));

const sum2 = (a,b)=> a+b;
console.log(sum2(20,11));
*/

//console.log('This is test value: ${c=='10'? 'true' : 'false'}');

//ES5 Class:
/*
const student = {
	id: 1,
	name: 'nabil',
	dept: 'Cse',
	getName: function(){
		return this.name;
	},
	getObj : function(){
		return {
			version: '1.0',
			getVersion: function() {
				return this.version;
			}
		}
	} 
}
//student.name = 'jubaer';
//console.log(student.getName());

console.log(student.getObj().getVersion());


const  student = ()=>{
	return {
		id: 1,
		name: 'alamin',
		dept: 'CSE',
	}
}

const s1 = student();
const s2 = student();
*/



//let student = ['ALAMIN', 'RAKIB', 'ABIR', 'RAZIB'];
//let number  = [1,20,50,40,651,141];

/*let newarray = student.filter(function(std){
	return std[0] == 'R';
});*/

//let newarray = student.filter((std)=>[1]== 'A');
//console.log(newarray);

//let newarray = student.join('_');
//console.log(newarray);
/*
let newarray = student.map((value)=>{
	return value+ '-Fokinni';
});

let newarray1 = number.map((value)=>{
	return value+ 10;
})
console.log(newarray);
console.log(newarray1);

//Spread operator
const newarray = [...student, '!', ...number];
console.log(newarray);
*/
/*
const student = {id: 1, name: 'nabil', mail: 'nabil@gmail.com'}
//let {id,name} = student;
let {id,name:myName} = student;
console.log(myName);
*/

//const student = require('./student');
//console.log(student.name);

//**callback
//**Promise
//**async/await

/*console.log('before settimeout function');
setTimeout(function(){
	console.log('after 3s...')


},3000);
  
console.log('after settime function');
*/
/*
const p = new Promise((resolve, reject)=>{

		if(40+10==50){
			resolve('task done..');
		}else{
			reject('error..');
		}

});

p.then(msg=>{
	console.log(msg);
}).catch(error=>{
	console.log(error);
})
*/
/*
function sum(a, b){
	return new Promise((resolve, reject)=>{
		if(a+b == 50){
			setTimeout(()=>{
				resolve('Right');
			},3000);
			
		}else{
			reject('error');
		}
	})
}

sum(30,20).then(msg=>{
	console.log(msg)
}).catch(error=>{
	console.log(error)
})

console.log('another task...');
*/

/// ***Await
/*
function sum(a, b){
	return new Promise((resolve, reject)=>{
		if(a+b == 50){
			setTimeout(()=>{
				resolve(a+b);
			},3000);
			
		}else{
			reject('error');
		}
	})
}

async function processMyTask(a,b){
	console.log('processing started..');

	try{
		const total = await sum(a,b);
		console.log(`my total: ${total}` );
	}catch{
		console.log('error..');
	}
}
processMyTask(30,20);
console.log('another task..');
*/
/*
function sum2(a,b){
	if(a+b == 50){
		setTimeout(()=>{
			return a+b;
		},3000);
	}else{
		return 'error';
	}
}

function processMyTask2(a,b){
	const total = sum2(a,b);
	console.log(`my total: ${total}`);
}

processMyTask2(30,30);
console.log('test this line');
*/

//**Class
/*
class student{
	constructor(id, name, email){
		this.id = id;
		this.name = name;
		this.email = email;
	}
	getName(){
		return this.name;
	}
}
*/

import  {User} from './User';

const u1 = new User(1, 'nabil', 'nabil@gmail.com');
console.log(u1.name);
console.log(u1.getName());
