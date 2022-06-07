let menude =[ 
		['Developpement',[
				{
				'course_name':'Html/CSS',
				'url':'html.com',
				},
				{
				'course_name':'Javascript/React js',
				'url':'js.com',
				},
				{
				'course_name':'Python/Django',
				'url':'python.com',
				}
				]
		 ],
                ['Base de donnees',[
                                {
                                'course_name':'Mysql',
                                'url':'mysql.com',
                                },
                                {
                                'course_name':'Posgresql',
                                'url':'pgsql.com',
                                },
                                {
                                'course_name':'Oracle',
                                'url':'oracle.com',
                                }
                                ]
                 ]

 
	];
function message(){
        alert('Bonjour EXPERTS');
}

function loadMenu(){
for (let i=0; i<menude.length; i++){
  console.log(menude[i][0] + ' v= ' + menude[i][1]);
  createMenu(menude[i][0],menude[i][1]);
}
document.querySelectorAll(".submenu").forEach(function(li){

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
		lis.className="submenu";
		const listext=document.createTextNode(submen[i].course_name);
		lis.appendChild(listext);
		ul.appendChild(lis);
	}
	mprinc.appendChild(ul);
}

				
	
document.addEventListener('DOMContentLoaded',loadMenu);
