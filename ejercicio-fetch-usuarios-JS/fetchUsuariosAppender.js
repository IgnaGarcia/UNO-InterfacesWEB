//GARCIA RAVLIC, Ignacio Agustin
/**
P-01. Mostrar la lista de usuarios aplicando HTML y CSS de modo que esté bien presentada toda la información disponible del usuario, incluyendo la foto-avatar.
**/
var boton= document.querySelector("#fetchUsers");
var boxUsers= document.querySelector("#boxUsers");
boxUsers.style.display="none";

boton.addEventListener('click',function(){
 boxUsers.style.display="flex";
 buscar_Usuarios("https://reqres.in/api/users?per_page=20",listarUsuarios); 
});

var buscar_Usuarios = function(url, cb){
  var promise = fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
 
  promise
    .then(response => response.json())
    .then(data => cb(data));
}; 

var listarUsuarios= function(users){
  var cantUsuarios = "Usuarios recolectados: "+users.total;
  var usuarios = [];
  usuarios= users.data;
  appender(boxUsers, 'h2', cantUsuarios);
  appendUsers(usuarios, boxUsers);
}

var appendUsers= function(users, padre){
  for(var element in users){
      appenderCard(padre, users[element]);
  }
}

var appenderCard= function(padre, contenido){
  var box= document.createElement('div');
  box.setAttribute('class','userCard');
  
  var avatar= document.createElement('div');
  avatar.setAttribute('class', 'userAvatar');
  var foto= document.createElement('img');
  foto.setAttribute('src',contenido.avatar);
 avatar.append(foto);
  box.append(avatar);
  
  
  var box2= document.createElement('div');
  box2.setAttribute('class','userText');
  
  var userData= "#"+contenido.id+": "+contenido.first_name+" "+contenido.last_name;  
  appender(box2, 'h4', userData,'class','userInfo');
  appender(box2, 'h6', contenido.email, 'class','userMail');
  box.append(box2);
  
  
  padre.append(box);
}

var appender= function(padre, etiqueta, contenido, ...atributos){
  var recipiente= document.createElement(etiqueta);
 
  if(atributos){
     console.log(atributos);
    for(var i=0; i<atributos; i=i+2){
      recipiente.setAttribute(atributos[i],atributos[i+1]);
    }
  }
  recipiente.append(contenido);
  padre.append(recipiente);
}