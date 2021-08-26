var btn=document.getElementById("btn");


function xmlFunc(){
	
	var xhr=new XMLHttpRequest();
	xhr.open("GET","https://api.github.com/users",true);
		
	

	xhr.onload=function(){
		var jData=JSON.parse(this.responseText);
		if(this.status==200){
			output="";
			for(var i in jData){
		
		output+='<div class="users">'+
				'<img src="'+jData[i].avatar_url+'" width="70" height="60">'+
				'<ul>'+
				'<li> ID: '+jData[i].id+'</li>'+
		
				'<li> Login: '+jData[i].login+
				'</li>'+'</ul>'+'</div>';


			}
				

				document.getElementById("demo").innerHTML=output;
	}
	};



	
	
	xhr.send();

}