function bonjour(){
				welcome=document.querySelector('#welcome');
				if(welcome.innerHTML==="Bonjour"){
					welcome.innerHTML="Bienvenue sur le forum de reference dedie aux dernieres technologies IT en Afrique";
				}else{
					welcome.innerHTML="Bonjour";
				}
					
			}
			function loadev(){
				document.querySelector("button").onclick= bonjour;
			}
			
			document.addEventListener('DOMContentLoaded',loadev);
