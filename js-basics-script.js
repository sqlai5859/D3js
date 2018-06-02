var myArray=[1,2,3,4,5];
var nest=[1,2,[3.1,3.2,3.3],5];

var  mystruct={
	a1:"nissan",
	a2:"G",
	year:2004,
	gears:[1,2,3,4,5,"R"]
};

function add(n){
	return (n*n);
	
};


var  myObjArray=[
	{a1:"1",	a2:"A",	year:2001, 	gears:[1,2,3,4,5,"R"] },
	{a1:"2",	a2:"B",	year:2002, 	gears:[1,2,3,4,5,"R"] },
	{a1:"3",	a2:"C",	year:2003, 	gears:[1,2,3,4,5,"R"] },
	{a1:"4",	a2:"D",	year:2004, 	gears:[1,2,3,4,5,"R"] }
];


function chk(obj){
	
	var name=obj.a1 + " " +obj.a2;
	var age= 2017-obj.year;
	
	if (age==0){ return "this is a new one!";}
	else if (age<=15 ) {return "not too bad!";}
	else if (age>15){return  "name is=" + name +", and the age is:" +age +".";}
	else { return   "sth wrong!";};
};
	
function sum(obj){
	var sum=0, i=0, avg=0;
for (i=0; i<obj.length; i++){

		sum=sum+2017-obj[i].year;
		console.log("i="+i+ " cumsum="+sum);
	};
	avg=sum/(i-1);
	
	return "sum="+sum +"  avg=" +avg;
};