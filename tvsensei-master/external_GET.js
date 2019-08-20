/*From w3 school. Inserts html files where attribute states, including for
the inserted files themselves.*/
function include_External() {
	var z, i, elmnt, file, xhttp;
	
	z = document.getElementsByTagName("*");
	

	for (i = 0; i < z.length; i++){
		elmnt = z[i];
		file = elmnt.getAttribute("tvs-include");

		if(file){
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4){
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					
					elmnt.removeAttribute("tvs-include");
					include_External(); 
									
				}
			}
		xhttp.open("GET", file, true);
		xhttp.send();
		return;
		}
	}
		
}	
