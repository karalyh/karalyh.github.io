let menu = {
	Developpement:['Html/Css','Javascript/React','Python/Django'], 
	Base de données:['Posgresql','Mysql','Oracle'],
	Systéme:['Linux','Windows']

};
function loadMenu(){
	menu=document.querySelector('#sidebar');
	console.log(menu);
	
}
				
	
document.addEventListener('DOMContentLoaded',loadMenu);
