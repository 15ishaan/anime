window.addEventListener('mousemove', eyeball);
document.getElementById("one").addEventListener("click", f);
document.getElementById("two").addEventListener("click", f);

function eyeball(){

	var eye = document.querySelectorAll('.eye');
	eye.forEach(function(eye){

		let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
		let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

		let radian = Math.atan2(event.pageX-x, event.pageY-y);
		let rot = (radian*(180 / Math.PI)*-1)+270;

		eye.style.transform = "rotate("+rot+"deg)";
		console.log(eye.clientWidth);
	})
}
function f(){
	alert("Oooh! My eyes hurts.");
}