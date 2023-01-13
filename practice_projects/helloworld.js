function variable_syntax(){
	
	var name = "This is vishnu prakash"; // assinged to global scoop can be accesed throught program
	const age = 22; // assinged in the local block scoop cannot be accsed outside the function- cannot be changed
	let status = single; // assinged insied the local block scop cannot be accesd outside the function - can be reassinged
}


function data_types(){

	// Numbers
	let num = 20;
	
	//Strings
	let name = "vishnu";
	
	//Booleans
	let x = true;

	//objects
	const person = {firstname:"vishnu",lastname: "prakash"};

	//array objects
	const cars = ["Honda","ferrari","audi"];

	//date objects
	const date = new Date("2023-01-10");
	// --->> javascript var can hold any type of data
}

function wierd_JS(){
	//when adding number to a string js treats them as a string
	let x = 4 + "helloworld"; // the output will be 4helloworld
	let y = 4 + 10 + "vishnu prakash"; // the output will be 14vishnuprakash
	// -->>> javascript has one floating point  that is (64 bit)
	//
	let z = bigint("12344556677998865611232132453367"); // big numbers are stored in bigint format

	typeof "vishnu prakash" //returns "string" as an output 
	typeof 3 +4 //returns "number" as an output
}

function arrays(){
	//both the bellow declaration are same but first one is prefered and is faster than second
	const names = ["vishnu","vishal","victor"];
	const ages = new Array(22,21,24);

	const cars = [];
	cars[0] = "volvo";
	cars[1] = "bmw";
		
} 

//function with return statement , function may have parameters  
function functions_js(){
	let name = "vishnu prakash";
	return name;
}

function objects_js(){

	//objects are also variables with various parameters
	const person = {
	firstname: "vishnu",
	lastname: "prakash",
	age: 22,
	fullname: function(){
		return this.firstname + " " + this.lastname;
		}
	} // objects can hold any type of parameters and values 
	  // objects can also hold various type of methods and functions
	  // this refers to the current object	/ this is a keyword / when used inside a function it refers to a global object
	let name;
	let fullname;
	name = person.firstname; // accesing an object 
	fullname = person.fullname();	
	
	//-->> you can have objects in arrays

}


function forloop_js(){  //forloop

	const names = ["vishnu","saranya","ashvika"];
	for(let i =0;i < names.length;i++){
		console.log(names[i]);
	}
}


function forloop_in_js(){
	const person = {
	name: "vishnu",
	age: 22,
	fullname: "vishnu prakash"
	}
	for(let key in person){

		console.log(person[key]);
		
	}
}











