let arr:string[] = new Array("GEEKSFORGEEKS", "2300", "Java", "Abhishek"); 

// Passing an Array in a function 
function display(arr_values:string[]) { 
for(let i = 0;i<arr_values.length;i++) { 
	console.log(arr[i].toLocaleUpperCase()); 
}	 
} 


display(arr);

export {}