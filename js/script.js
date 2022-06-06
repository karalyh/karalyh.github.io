let menude ={ 
	Developpement:['Html/Css','Javascript/React','Python/Django'], 
	"Base de données":['Posgresql','Mysql','Oracle'],
	Systéme:['Linux','Windows']

};
function message(){
        alert('Bonjour');
}

function loadMenu(){
for (var [cle, valeur] of Object.entries(menude)){
  console.log(cle + ' v= ' + valeur);
  createMenu(cle,valeur);
}
document.querySelector('li').onclick= message;
	
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
		const listext=document.createTextNode(submen[i]);
		lis.appendChild(listext);
		ul.appendChild(lis);
	}
	mprinc.appendChild(ul);
}

				
	
document.addEventListener('DOMContentLoaded',loadMenu);
