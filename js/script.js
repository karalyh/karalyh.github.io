let menu = {
	Developpement:['Html/Css','Javascript/React','Python/Django'], 
	"Base de données":['Posgresql','Mysql','Oracle'],
	Systéme:['Linux','Windows']

};
function loadMenu(){
	//sidebar=document.querySelector('#sidebar');
	console.log(menu);
	menu.forEach(createMenu);
	
}
function createMenu(libelle){
	const li=document.createElement("li");
	const litext=document.createTextNode(libelle);
	const mprinc=document.getElementById("menu");
	li.appendChild(litext);
	mprinc.appendChild(li);

}
				
	
document.addEventListener('DOMContentLoaded',loadMenu);
