function highlight() {
    //Write your code here
	// let ptt = document.getElementsByTagName("a");
	// let ptt = document.querySelector(p);
	// let ptt = document.getElementById("pt");
	// ptt.addEventListener("hover",()=>{
	// 	let col = document.getElementsByTagName("strong");
	// 	col.style.color = 'green';
	// });
	let strongElements = document.querySelectorAll("p strong");
	// strongElements[6].style.color = 'green';
	
	for(var i = 0 ; i<strongElements.length ; i++)
	{
		strongElements[i].style.color = 'green';
	}
}


function return_normal() {
    //Write your code here
	let strongElements = document.querySelectorAll("p strong");
	for(var i = 0 ; i<strongElements.length ; i++)
	{
		strongElements[i].style.color = 'black';
	}
}