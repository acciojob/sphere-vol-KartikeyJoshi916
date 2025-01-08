function volume_sphere() {
	let rad=document.getElementById("radius");
	let vol=document.getElementById("volume");
	let value=parseInt(rad.value);
	if(isNaN(value) || value<0){
		vol.innerHTML='NaN';
	}else{
		let calc=((4/3)*(22/7)*Math.pow(value,3)).toFixed(4);
		vol.innerHTML=calc;
	}
} 

window.onload = function() {
    document.getElementById('MyForm').onsubmit = function(event) {
        event.preventDefault(); // This line prevents the form from being submitted which would cause a page refresh.
        volume_sphere();
    };
}
