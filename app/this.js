

/*

Implicit Binding
Explicit Binding
new Binding
Window Binding

*/


var sayName = function(name){

	console.log('My Name' + name);

};


sayName('saurabh'); //invokes the this function in javascript



/* 

Implicit binding
*/

/* First Example */
var me = {
	name:'saurabh kamble',
	age:27,
	sayName:function(){
		console.log(this.name);
		console.log(me.name);//same output
	}
};

me.sayName('saurabh');


/* Second Example */

var sayNameMixin = function(obj){
	obj.sayName = function(){
		console.log(this.name)
	};
};

var me ={
	name:'saurabh',
	age:27

};

var you ={
	name:'Raju',
	age:28
};


sayNameMixin(me);
sayNameMixin(you);

me.sayName();
you.sayName();

/* Third Example */

var Person = function(name,age){
	return {
		name:name,
		age:age,
		sayName:function(){
			console.log(this.name)
		},
		mother:{
			name:'jayashri',
			sayName:function(){
				console.log(this.name);
			}	

		}
	}


}


var jim = Person('saurabh',27);

jim.sayName();
jim.mother.sayName();



/* Explicit Binding  */


var sayName = function(lang1,lang2,lang3){
	console.log('My Name is '+ this.name+' and i know '+lang1+','+lang2+'and'+lang3);
};

var jayashri ={
	name:'jayashri',
	age:54,
};

var language = ['php','html','css','javascript'];

sayName.call(jayashri,language[0],language[1],language[2]); //call method is used to combine to seperate functions 


sayName.apply(jayashri,language); //call method is used to combine to seperate functions 

var newFunc = sayName.bind(jayashri,language[0],language[1],language[2],language[3]);
console.log('HERE');

newFunc();

