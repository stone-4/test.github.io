
let btn_buscar = document.getElementById("btn_buscar");
let caja_buscar = document.getElementById("caja_buscar");

btn_buscar.onclick = function buscar(){

	if (btn_buscar.value == "Buscar") {
		
		return;
	}
	else{
		caja_buscar.removeAttribute("hidden");
		btn_buscar.removeAttribute("type");
		btn_buscar.setAttribute("type", "submit");
		btn_buscar.value = "";
		btn_buscar.value = "Buscar";
	}	
}

document.addEventListener("click", function (event){
	let isClickBoton = btn_buscar.contains(event.target);
	let isClickCaja = caja_buscar.contains(event.target);

	if (!(isClickBoton || isClickCaja)) {

		if (btn_buscar.value == "Buscar") {
			btn_buscar.removeAttribute("type");
			btn_buscar.setAttribute("type", "button");
		 	btn_buscar.value = "";
		 	btn_buscar.value = "¿Desea buscar algo?";
		 	caja_buscar.value = "";
			caja_buscar.setAttribute("hidden", "true");
	    }
    }  	
});