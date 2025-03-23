//your JS code here. If required.
const counterdisplay=document.getElementById("counter");
		const incrementbutton=document.getElementById("incrementBtn");
			let count=0;
		incrementbutton.addEventListener("click",function(){
			alert("Before increment: " + count);
			count++;
			counterdisplay.textContent=count;	
		});