// Scope copies when using closures.  If you change a variable in a copy, it only applys to its own closure.



function registerShelter(shelterNm){
	var animals = [];
	return function(newAnimal){
		animals.push(newAnimal);
		console.log(shelterNm, animals);
	}
}

var localShelterAddAnimalFn = registerShelter('local');

localShelterAddAnimalFn("Admiral Boots");
localShelterAddAnimalFn("Fluffer");
localShelterAddAnimalFn("Goatzart");
localShelterAddAnimalFn("Mr. Tickles");
localShelterAddAnimalFn("Shitter");

var nearbyShelterAddAnimalFn = registerShelter("nearby");
nearbyShelterAddAnimalFn("Margeret Scratcher");

//------------------------------------------

function makeCalculator(startNum){
	
	var total = startNum;
	
	function addition(numToAdd){
		total = total + numToAdd;
	}
	
	function subtraction(numToAdd){
		total = total - numToAdd;
	}
	
	function multliplication(numToAdd){
		total = total * numToAdd;
	division}
	
	function division(numToAdd){
		total = total / numToAdd;
	}

	return{
		add:		addition,
		subtract:	subtraction,
		multiply:	multliplication,
		divide:		division
	};
	
}


var calc1 = makeCalculator(3);
calc1.add(7);


var calc2 = makeCalculator(5);
calc2.add(5);

//keep each calculator and do the operations

//----------------------------------------------

function makeCalculator(startNum){
	
	var num = startNum;
	
	return{
	add: function(numToAdd){
		num += numToAdd;
	},
	
	subtract: function(numToSubtract){
		num -= numToSubtract;
	},
	
	multiply: function(numToMultiply){
		num *= numToAdd;
	},
	
	divide: function(numToDivide){
		num = num / numToAdd;
	},
	
	log: function(){
		console.log(num)
	},
	
	clear: function(){
		num = 0;
	}
	
	}

}

var tacoAdder = makeCalculator(5);
tacoAdder.add(5);
tacoAdder.clear();
tacoAdder.log();






//----------------------------------------------


//SAMPLE CLOSURE FUNCTION

function showName (firstName, lastName) {
  var nameIntro = "Your name is ";
  function makeFullName () {       
    return nameIntro + firstName + " " + lastName;    
  }
return makeFullName ();
}

showName ("Dave", "Davidson"); 

//-------------------------------------------

Array.prototype.sumAll = function(){
	var arr = this;
	var sum = 0;
	for(var i = 0; i< arr.length; i++){
	sum += arr[i];
	}
	return sum;
}

var nums = [1, 4, 5, 6];

console.log(nums.sumAll());




//--------------------------------

var s = "I like tacos";

String.prototype.frenchify = function(){
	return(this + " ,oui.");
}

s.frenchify();

