let menude ={ 
	Developpement:{
		'Html/CSS':'html.com',
		'Javascript/React js':'html.com',
		'Python/Django':'html.com'
	}, 
	"Base de données":{
		'Posgresql':'html.com',
		'Mysql':'html.com',
		'Oracle':'html.com'
	},
	Systéme:{
		'Linux':'html.com',
		'Windows':'html.com'
	}

};
function message(){
        alert('Bonjour EXPERTS');
}

function loadMenu(){
for (var [cle, valeur] of Object.entries(menude)){
  console.log(cle + ' v= ' + valeur[0]);
  createMenu(cle,valeur);
}
document.querySelectorAll("li").forEach(function(li){

li.onclick=message;

});
	
}
function createMenu(men1,submen){
	const li=document.createElement("li");
	li.style.fontWeight="bold";
	const litext=document.createTextNode(men1);
	const mprinc=document.getElementById("menu");
	li.appendChild(litext);
	mprinc.appendChild(li);

	const ul=document.createElement("ul");
	for (let i=0; i<submen.length;i++){
		const lis=document.createElement("li");
		const listext=document.createTextNode(submen[i][0]);
		lis.appendChild(listext);
		ul.appendChild(lis);
	}
	mprinc.appendChild(ul);
}

				
	
document.addEventListener('DOMContentLoaded',loadMenu);
