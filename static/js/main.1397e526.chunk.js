(this.webpackJsonpgeekvirtual=this.webpackJsonpgeekvirtual||[]).push([[0],{49:function(e){e.exports=JSON.parse('{"a":[{"entrega1":"https://github.com/keymer2000/code_camp_tributo1","entrega2":"https://keymer2000.github.io/code_camp_tributo1/","conclusion":"Este reto de formacion estuvo muy bueno  aunque al inicio se me complico un poquito el manejo de las etiquetas ya que escribia una y presionaba la tecla para autocompletar pero no funcionaba, asi que tenia que escribir cada letra de la etiqueta. Acerca de esto aprendi que es buena practica aprender a escribir completamente las etiquetas asto me permitio retener mucho mas cada etiqueta."}]}')},51:function(e){e.exports=JSON.parse('{"a":[{"title":"pagina tributo FCC","responsible":"keymer","description":"realizar pagina tributo free code camp","priority":"low"},{"title":"formulario FCC","responsible":"keymer","description":"desarrollar formulario de encuesta FCC","priority":"medium"},{"title":"GeekBook Web","responsible":"keymer","description":"realizar los retos del gitbook web","priority":"high"}]}')},58:function(e,t,c){},80:function(e,t,c){},83:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(2),s=c.n(n),r=c(26),i=c.n(r),o=c(5),l=c(4),d=c(9),j=c(17),b=c.n(j),h=c(20),u=c(24),m=c(10),A=c(11),x=c(13),O=c(12),p=(c(58),c(25),c(22)),v=c.n(p),f=c.p+"static/media/desktop.f3aa91d8.png",g=c(7),N=c(8),y="http://localhost:3001/usuarios",k=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(m.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={form:{username:"",password:""}},e.handleChange=function(){var t=Object(u.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({form:Object(o.a)(Object(o.a)({},e.state.form),{},Object(h.a)({},c.target.name,c.target.value))});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.iniciarSesion=Object(u.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get(y,{params:{username:e.state.form.username,password:e.state.form.password}}).then((function(e){return e.data})).then((function(e){e.length>0?window.location.href="/Posts":alert("El usuario o la contrase\xf1a no son correctos")})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)}))),e}return Object(A.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"border border-success container-fluid ",style:{height:"100vh"},children:Object(a.jsxs)("div",{className:"row border border-warning",id:"cont-general",children:[Object(a.jsx)("div",{className:"col-lg-6 border",children:Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:"img-fluid",src:f,alt:""})})}),Object(a.jsx)("div",{className:"col-lg-6 border",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-12 border border-primary",id:"cont-sesion",children:Object(a.jsxs)("div",{id:"form-sesion",children:[Object(a.jsx)("h3",{children:"Iniciar Sesi\xf3n"}),Object(a.jsx)(g.a,{icon:N.d,id:"icon-login"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",className:"form-control",name:"username",placeholder:"Username",onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.iniciarSesion()},children:"Iniciar Sesi\xf3n"})]})})})})]})})}}]),c}(n.Component),w=(c(80),c(29)),C=c(21),P=c(49),S=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){var e;return Object(m.a)(this,c),(e=t.call(this)).state={entrega1:"",entrega2:"",conclusion:""},e.handleInputChange=e.handleInputChange.bind(Object(C.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(C.a)(e)),e}return Object(A.a)(c,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onAddTarea(this.state),this.setState({entrega1:"",entrega2:"",conclusion:""})}},{key:"handleInputChange",value:function(e){var t=e.target,c=t.value,a=t.name;this.setState(Object(h.a)({},a,c))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container border border-primary mt-3",children:Object(a.jsx)("form",{action:"",method:"get",className:"border border-success  p-2",onSubmit:this.handleSubmit,children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsxs)("div",{className:"row  form-group row ",children:[Object(a.jsx)("lable",{className:"col-4",style:{fontSize:"16px",fontWeight:"bold"},children:"Url Repositorio GitHub:"}),Object(a.jsx)("input",{name:"entrega1",type:"text",className:"col-8",placeholder:"Adjunta tu enlace del repositorio",value:this.state.entrega1,onChange:this.handleInputChange})]}),Object(a.jsxs)("div",{className:"row form-group row ",children:[Object(a.jsx)("label",{className:"col-4",style:{fontSize:"16px",fontWeight:"bold"},children:"Url Endpoint Evidencia:"}),Object(a.jsx)("input",{name:"entrega2",type:"text",className:"col-8",placeholder:"Adjunta tu Endpoint de la evidencia",value:this.state.entrega2,onChange:this.handleInputChange})]}),Object(a.jsx)("div",{className:"row form-group row border",children:Object(a.jsx)("textarea",{name:"conclusion",className:"col-12",rows:"6",placeholder:"Conclusiones de la evidencia...",value:this.state.conclusion,onChange:this.handleInputChange})}),Object(a.jsxs)("div",{className:"row ",children:[Object(a.jsx)("div",{className:"col-10"}),Object(a.jsx)("div",{className:"col-2 p-0",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-primary  float-right ",children:"Contestar"})})]})]})})})}}]),c}(n.Component),T=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){var e;return Object(m.a)(this,c),(e=t.call(this)).state={tareas:P.a},e.handleAddTarea=e.handleAddTarea.bind(Object(C.a)(e)),e}return Object(A.a)(c,[{key:"removeTarea",value:function(e){this.setState({tareas:this.state.tareas.filter((function(t,c){return c!==e}))})}},{key:"handleAddTarea",value:function(e){this.setState({tareas:[].concat(Object(w.a)(this.state.tareas),[e])})}},{key:"render",value:function(){var e=this,t=this.state.tareas.map((function(t,c){return Object(a.jsx)("div",{className:"container border border-primary",children:Object(a.jsx)("div",{className:"row border mt-3",children:Object(a.jsx)("div",{className:"col-10 border border-warning",style:{margin:"auto"},children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-12 card-header",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Url GitHub:"})," ",t.entrega1]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Url Endpoint:"})," ",t.entrega2]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Conlusi\xf3n:"}),Object(a.jsx)("br",{}),t.conclusion]})]}),Object(a.jsx)("div",{className:"col-12 card-footer text-center",children:Object(a.jsx)("button",{className:"btn btn-danger",onClick:e.removeTarea.bind(e,c),children:"Delete"})})]})})})},c)}));return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"",children:Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)("div",{className:"",children:Object(a.jsx)(S,{onAddTarea:this.handleAddTarea})}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("div",{className:"",children:t})})]})})})}}]),c}(n.Component);var R=function(){return Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("section",{className:"col- border",id:"menu-lateral-de-tareas",children:Object(a.jsx)("ul",{children:Object(a.jsxs)("li",{style:{listStyle:"none"},children:[Object(a.jsx)(g.a,{icon:N.c,style:{fontSize:"20px"}}),Object(a.jsx)(l.b,{to:"#",style:{color:"black"},children:"RETOS DE FORMACI\xd3N"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{style:{listStyle:"none"},children:[Object(a.jsx)(g.a,{icon:N.c,style:{fontSize:"20px"}}),Object(a.jsx)(l.b,{to:"#",className:"estilos-entregas",children:"Entregas FCC  Web 1-2"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"/Evidence/prueba",children:"P\xe1gina tributo"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"/Evidence/prueba1",children:"Formulario de encuesta"})]})]})]}),Object(a.jsxs)("li",{style:{listStyle:"none"},children:[Object(a.jsx)(g.a,{icon:N.c,style:{fontSize:"20px"}}),Object(a.jsx)(l.b,{to:"#",className:"estilos-entregas",children:"Entregas FCC  Web 3-4-5"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"P\xe1gina de destino del producto"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"P\xe1gina de documentaci\xf3n t\xe9cnica"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"P\xe1gina web portafolio personal"})]})]})]}),Object(a.jsxs)("li",{style:{listStyle:"none"},children:[Object(a.jsx)(g.a,{icon:N.c,style:{fontSize:"20px"}}),Object(a.jsx)(l.b,{to:"#",className:"estilos-entregas",children:"Entrega GitBook Web"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"Retos Introduci\xf3n a la Web"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"Retos Fundamentos de programacion Parte I"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",className:"estilos-entregas",children:"Retos Fundamentos de programacion Parte II"})]})]})]}),Object(a.jsxs)("li",{style:{listStyle:"none"},children:[Object(a.jsx)(g.a,{icon:N.c,style:{fontSize:"20px"}}),Object(a.jsx)(l.b,{to:"#",className:"estilos-entregas",children:"Entregas FCC JavaScript"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"Comprobador de palindrome"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"Convertidor de n\xfameros romanos"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"Cifrado de Caesars"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"Validador de n\xfameros de tel\xe9fonos"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"Caja Registradora"})]})]})]}),Object(a.jsxs)("li",{style:{listStyle:"none"},children:[Object(a.jsx)(g.a,{icon:N.c,style:{fontSize:"20px"}}),Object(a.jsx)(l.b,{to:"#",className:"estilos-entregas",children:"Entregas FCC Bibliotecas Front-end"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"Maqu\xedna de cotizaciones al azar"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"Visor de Markdown"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"Caja de Ritmos"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"Calculadora de JavaScript"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:N.b}),Object(a.jsx)(l.b,{to:"#",children:"Reloj 25 + 5"})]})]})]})]})]})})}),Object(a.jsx)("section",{className:"col- border",id:"menu-central-de-tareas",children:Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{path:"/Evidence/prueba",exact:!0,render:function(e){return Object(a.jsx)(T,Object(o.a)({},e))}}),Object(a.jsx)(d.b,{path:"/Evidence/prueba1",exact:!0,render:function(e){return"hola mundo 1"}})]})})]})})})},I=(c(83),c(104)),E=c(101),q=c(102),J=c(103),M="http://localhost:3001/anuncios",V=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(m.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:[],modalInsertar:!1,form:{textAnuncio:"",anuncio:""}},e.modalInsertar=function(){e.setState({modalInsertar:!e.state.modalInsertar})},e.peticionGet=function(){v.a.get(M).then((function(t){e.setState({data:t.data})}))},e.peticionPost=Object(u.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.post(M,e.state.form).then((function(t){e.modalInsertar(),e.peticionGet()})).catch((function(e){console.log(e.message)}));case 2:case"end":return t.stop()}}),t)}))),e.handleChange=function(){var t=Object(u.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.persist(),t.next=3,e.setState({form:Object(o.a)(Object(o.a)({},e.state.form),{},Object(h.a)({},c.target.name,c.target.value))});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(A.a)(c,[{key:"componentDidMount",value:function(){this.peticionGet()}},{key:"render",value:function(){var e=this,t=this.state.form;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"cont-title-geek",className:"border",children:Object(a.jsx)("h1",{id:"title-geek",children:"Academia Geek"})}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"border",id:"cont-icon-anuncio-boton",children:[Object(a.jsxs)("h1",{id:"title-anuncio",children:[Object(a.jsx)(g.a,{icon:N.a,id:"icon-anuncio"}),"Anuncios"]}),Object(a.jsx)("button",{className:"btn btn-warning",id:"boton-modal-anuncio",onClick:function(){return e.modalInsertar()},children:Object(a.jsx)("u",{children:"Clic para crear anuncio"})})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{style:{width:"100%"},children:this.state.data.map((function(e,t){return Object(a.jsx)("div",{id:"cont-fila-anuncio",className:"border border-primary",style:{height:"450px"},children:Object(a.jsxs)("div",{className:"border",id:"area-anuncio",children:[Object(a.jsx)("p",{children:e.textAnuncio}),Object(a.jsxs)("p",{children:["Enlace: ",Object(a.jsx)("u",{children:e.enlace})]})]})},t)}))}),Object(a.jsxs)(I.a,{isOpen:this.state.modalInsertar,children:[Object(a.jsx)(E.a,{}),Object(a.jsx)(q.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)("form",{action:"",children:[Object(a.jsx)("textarea",{name:"textAnuncio",value:t.textAnuncio,id:"",cols:"63",rows:"8",placeholder:"Escriba su anuncio...",onChange:this.handleChange}),Object(a.jsx)("input",{type:"text",name:"enlace",value:t.enlace,placeholder:"adjunte el enlace de la reunion",style:{width:"100%"},onChange:this.handleChange})]})})}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.modalInsertar()},children:"Cancelar"}),Object(a.jsx)("button",{className:"btn btn-success",onClick:function(){return e.peticionPost()},children:"Insertar"})]})]})]})}}]),c}(n.Component);c(91);var F=function(){return Object(a.jsx)("header",{className:"container-fluid ",children:Object(a.jsxs)("div",{className:"row border",id:"cont-header",children:[Object(a.jsx)("div",{className:"col-lg-7 border",children:Object(a.jsx)("p",{id:"logo-academia-geek",children:"Geek Virtual"})}),Object(a.jsx)("div",{className:"col-lg-5 border",children:Object(a.jsxs)("div",{className:"row",style:{height:"100%"},children:[Object(a.jsx)("div",{className:"col-2 border",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("img",{className:"",src:"",alt:"perfil.jp"})})}),Object(a.jsx)("div",{className:"col-8 border",children:Object(a.jsx)("div",{className:"row pl-1",children:Object(a.jsx)("p",{children:"KEYMER ALEXANDER JIMENEZ JEREZ"})})}),Object(a.jsx)("div",{className:"col-2 border",children:Object(a.jsx)("div",{className:"row pl-1"})})]})})]})})},z=(c(92),c.p+"static/media/logoAgile.667ecaf6.png"),X=c.p+"static/media/logoEvolution.51377381.png";function Z(e){return Object(a.jsx)("div",{className:"container-fluid mt-4 border border-dark",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("section",{className:"col- border border-dark",id:"cont-navegador",children:[Object(a.jsx)("nav",{className:"",children:Object(a.jsxs)("ul",{className:"nav nav-tabs",id:"navegador",children:[Object(a.jsx)("li",{className:"nav-item ",children:Object(a.jsx)(l.b,{className:"nav-link"+("/Posts"==e.match.path?" active":""),to:"/Posts",children:"Anuncios"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{className:"nav-link"+("/BootcampMain"==e.match.path?" active":""),to:"/BootcampMain",children:"Contenido del bootcamp"})}),Object(a.jsx)("li",{className:"nav-item ",children:Object(a.jsx)(l.b,{className:"nav-link"+("/ForumMain"==e.match.path?" active":""),to:"/ForumMain",children:"Foro Social"})}),Object(a.jsx)("li",{className:"nav-item ",children:Object(a.jsx)(l.b,{className:"nav-link"+("/TaskMain"==e.match.path?" active":""),to:"/TaskMain",children:"Tareas"})}),Object(a.jsx)("li",{className:"nav-item ",children:Object(a.jsx)(l.b,{className:"nav-link"+("/PortfolioMain"==e.match.path?" active":""),to:"/PortfolioMain",children:"Cronograma General"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{className:"nav-link"+("/DocMain"==e.match.path?" active":""),to:"/DocMain",children:"Documentaci\xf3n reglamentaria"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{className:"nav-link"+("/ParticipantsMain"==e.match.path?" active":""),to:"/ParticipantsMain",children:"Participantes"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{className:"nav-link"+("/InstructorsMain"==e.match.path?" active":""),to:"/InstructorsMain",children:"Instructores"})})]})}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{id:"cont-colaboradores",children:Object(a.jsxs)("div",{id:"cont-img",className:"text-center mt-4",children:[Object(a.jsx)("h3",{children:"Fundadores"}),Object(a.jsx)("div",{className:" border",children:Object(a.jsx)("a",{href:"",alt:"",children:Object(a.jsx)("img",{className:" img-fluid",src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gNjAK/9sAQwANCQoLCggNCwoLDg4NDxMgFRMSEhMnHB4XIC4pMTAuKS0sMzpKPjM2RjcsLUBXQUZMTlJTUjI+WmFaUGBKUVJP/9sAQwEODg4TERMmFRUmTzUtNU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09P/8AAEQgAyADIAwEiAAIRAQMRAf/EABsAAQACAwEBAAAAAAAAAAAAAAAFBgIEBwMB/8QAORAAAQQBAgMGAwYGAQUAAAAAAAECAwQFERIGITETQVFxgZEUImEHFaGxwfAWIzIzQlLRJENikvH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQMCBAX/xAAkEQEBAQEAAgIBAwUAAAAAAAAAARECAyESMRMEIlFBccHh8P/aAAwDAQACEQMRAD8A6cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHktiFIVm7Rqxp/ki6oB6jVEIW1kpnrpCixtXoveqfoa0UM9pyq3V2nVzl5J6nXx/ljfNNyTVjBDw1bsLUkgmY9PBHaopI1LCWYt2m1zV0c3wUljvnvfuPcAEdgAAAAAAAAAAAAAAAAAAAAAYTSxwQvmmcjI42q5zl6IidVMytfaFO+Dg+52eqLIrI1VPBXJqWTal9RD1ZLnHdmxI+1LTwcD9iRxLtfOvX5l8tPf1JenSq0qrK9CHZXa9UhjVVXc5erl1Ij7OZu34VtVINO3ZYXcmunJyJov4L7Fhk+RZNn/bRIY/Neq/md/Vxh3djxSJZZmxRrrudpu/2XvXyPuRyUcTfgsdLTc5iqyaKdytV30ReSeJv0YkS7IidIWoxPPv/U1M3SsTTIsGLp2o1b8yvXa/Xz5F5s+Xtn3z1OLeUFG91GVPh3T4yZekcrt8Mnr/APfMm8LkfichIydqQWdnzxdz/wDyapXrPa0Wqxa9itG7rXsJ2kTvJe798zSWwjdj4HOZ2a7o+erol8EXvb+/P03x/OPBz574uv8AH/f6/s6aDQwuQTJY5k/JJE+WRE7nJ+9Sl8U5zKYzjJHV7MvwVaKKaaBF+VWK7R3L1Q8fxu4+xz3OuZ1Pquhgxje2SNr2KjmuRFRU70U55dz+Sscd12VbUjMa26ypsavyyOTm/wDP8iSa6tx0UHhdtR0qU1uddI4WK9y/RE1KPwrmcs3NVPviw99fMQulrtd0jcjlVGp6fmgk0txfwVzj27aocLz2KU74JmvYiPYuipq7mbeQzlXDYOK5eernujbsYn9Ur1Togw1MArnDdfNWZn5XN2ZYu25w0WroyJvdu8V/flJcQZJuIwdu85U1ijXYi97l5NT30Gf0NSIKVwdkMpBlZcTnbL5ppq0dqB0nVEVPmb6fopIcf3bWP4adYpTvglSZib2LouirzGe8N9asoMIVVYGKq6qrU/I567iLJJnfvr4l/wBxpf8Aguy/x27dN/vzEmluOigICKAAAQ/FmPdlOGrtWNNZFj3sTxc1dyJ+GhMAT0OC4HM3MHf+Mpqi6JpJG7o9vgv/AD3HT8TxTg80sOlhtOdrt7oJtG7l+i9FKpxlw6mJyrrsSdnRtP3NlRuqV5V7lT/Vf305xDKUXbdk6OtDYciKtS0ukMydzopUXlr5+q9Da517Y5nqu0xRRsV740/uLuVfE+Wp21qstiTXZExXrp4Impyuu+ri5WNs2M/gXaoqt3drC5Povh7lz4py0E3CSy0JUlS/pFC5vLdqvP8ABFOJxvUju9Zzaxm4j+Kkw7IYGJDeR8k7Jm7lbG1F1/JV9DQyGLqXcYmYwqOSByK50atVOSLoqoi9PIhZJXPSZ9ZFeqxsxdFE/wAum9yfj/7Fh4Za6XKWmxTOXG0K7ajURfkkenNztPPXn9UPRn4/fLy98c+afHphwVYVt2esq/LIzenmi/8ACnnbqR3/ALRL9Ob+3Piuzd6qhnwZArslPOify42bUX6qvL8EJKPFXE48lyqxt+EdTSJH7013apy06nHns/JcT9DL+Cb/ACi8Rnn47ga58Wv/AFmJ3VVavVXJyZ+aexHOxq4tvBsMn9+S4s0yr1V7tqr+iehJZfhS3b4tZYh2/ddmSOa23ciavZrpy79eXupKcR4u5fy+CsVY2ujp2VkmVXImjeXv0Mtj14jftIyKR42ti2ufuuyJ2mxNzkiauq6In109iG4oz+PuYykuLr3obOOlZJAsldWtRqclTXu6J7Foq4m7NxtZzF+Nra8MKQ003oqqne7ROnf7lgnhZYryQSpujkarHJ4oqaKSWRc1T+N7sWR+z742Ff5c6xPT6auTl6ENao52pFR4svpHYdWVqrT26pDDpoip9e9fBdFNxeG87/BV3BOhY9zLKOqu7VPnj3ar5ePqXqvBpQjgmajtIkY9q80XloqF3EzWOOvV8lRiuVH74ZW7mr+i/UpvH+ShdlMZipklfXbIlm02Jm9ytRflTRPHmSGAw+S4fzlirWYk2EsLvZrIm6B3kvVO72XxPfh/E3Y8/lcxlI2smsuSOBqPR22JOnTyT2JMl1fdir8R8TU5spi8vQguxzUpNJO1gViOiXqmvv7k59o8jJuDu1jcjmPlic1U70VeRY8xQZk8TaoydJ41ai+C9y+i6FRs4LOW/s/ixE1di3YJWo1O1bo5iLqi6+S6ehZZ6Sy+03xXlFxPCc0zF0mkjSGLx3OTT8E1X0KiuUxH8DfcPwuQ7Xsf6/hV07XXdr5bvwLPlsReynEGH7SJqY2knayKr01dInRNPRPdSzk2SLmoHgrKLleGq0r11mhTsZfHc3lr6popPFYwWIvYjibKKyJv3XcXtmOR6asf3pp1719kLOS/az6AARQAAQ/FbLEnDlxKrWvejNVY5iORzUX5k0X6FMZgLEmKjs4RkGUxcqblx9pfmhd/kjH9UXX6p6nS1TVNCmZPhrKULEtrhi0+Jkq7n1kftTX6a8vRTXx5Z8bcZ9yy61OGsO9FdYZNlMVVrSJ29K4qPiemmqoirpy+uhDcT5iPK5JkdRyRUaqbYla3TXxcifkZX6nFt/8Ak3YL8rdf6VRNv4cjZxfAuTsva+85tSPqvNHP9ETknuenx88eP93XTz99dd/t5jUoNs27cVehFpa7Ps4G68qsa/1Pcv8Asuq+WvkhaqNW83HJiMXUfVrt1bLZnTRz171RPqT2JxFLEVuxpRbdebnrzc9fFVN8x78231Gk8Fs91qYzHw42o2vBzRObnL1cvibYBhbbdrfnmczIAAigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=",alt:"",width:"150px"})})}),Object(a.jsx)("div",{className:" border",children:Object(a.jsx)("a",{href:"",alt:"",children:Object(a.jsx)("img",{className:" img-fluid",src:z,alt:"",width:"150px"})})}),Object(a.jsx)("div",{className:" border",children:Object(a.jsx)("a",{href:"",alt:"",children:Object(a.jsx)("img",{className:" img-fluid",src:X,alt:"",width:"150px"})})})]})})]}),Object(a.jsx)("section",{className:"border border-warning",id:"cont-anuncios",children:s.a.createElement(e.contentComponent,e)})]})})}var B=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(F,{}),Object(a.jsx)(Z,Object(o.a)({},e))]})},U=(c(93),"http://localhost:3001/foro"),G=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){var e;return Object(m.a)(this,c),(e=t.call(this)).comentar=function(){e.setState({comentar:!e.state.comentar})},e.peticionGet=function(){v.a.get(U).then((function(t){e.setState({data:t.data})}))},e.peticionPost=Object(u.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.post(U,e.state.form).then((function(t){e.peticionGet()})).catch((function(e){console.log(e.message)}));case 2:case"end":return t.stop()}}),t)}))),e.handleChange=function(){var t=Object(u.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.persist(),t.next=3,e.setState({form:Object(o.a)(Object(o.a)({},e.state.form),{},Object(h.a)({},c.target.name,c.target.value))});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={comentar:!1,data:[],form:{id:"",tema:""}},e}return Object(A.a)(c,[{key:"componentDidMount",value:function(){this.peticionGet()}},{key:"render",value:function(){var e=this,t=this.state.form;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"accordion",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header",id:"headingOne",children:Object(a.jsx)("h5",{className:"mb-0",children:Object(a.jsx)("button",{className:"btn btn-link","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:{color:"black"},children:"Su nuevo tema de consulta"})})}),Object(a.jsx)("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordion",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("form",{style:{width:"60%",margin:"auto"},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("h5",{children:"Mensaje *"}),Object(a.jsx)("textarea",{name:"tema",value:t.tema,className:"form-control",rows:"5",placeholder:"Escribe tu tema de consulta...",onChange:this.handleChange})]}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-10"}),Object(a.jsx)("div",{className:"col-2",style:{padding:"0px"},children:Object(a.jsx)("button",{type:"button",className:"btn btn-primary",style:{float:"right"},onClick:function(){return e.peticionPost()},children:"Publicar"})})]})})]})})})]})}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"mt-5",style:{width:"95%",margin:"auto"},children:this.state.data.map((function(e,t){return Object(a.jsx)("div",{className:"mt-3",children:Object(a.jsx)("div",{className:"border p-4",style:{borderRadius:"10px"},children:Object(a.jsx)("p",{children:e.tema})})},t)}))})]})}}]),c}(n.Component),L=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){return Object(m.a)(this,c),t.apply(this,arguments)}return Object(A.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"border border-success ",style:{height:"100%"},children:[Object(a.jsxs)("div",{className:"mt-4 mb-4 pl-3",children:[Object(a.jsx)("h1",{children:"Foro Social"}),Object(a.jsx)("p",{children:"Puedes abrir un debate sobre consultas que tengas o para invitar a otras personas a discutir alg\xfan tema de inter\xe9s relacionado con el curso."}),Object(a.jsxs)("p",{children:["Tambi\xe9n te daremos ",Object(a.jsx)("strong",{children:"informaci\xf3n de cosas importantes que puedan acontecer."})]}),Object(a.jsx)("strong",{children:"\xa1Hagamos comunidad!"})]}),Object(a.jsx)("div",{children:Object(a.jsx)(G,{})}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]})}}]),c}(n.Component),Y=(c(96),c(51)),W=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){var e;return Object(m.a)(this,c),(e=t.call(this)).state={title:"",responsible:"",description:"",priority:"low"},e.handleInputChange=e.handleInputChange.bind(Object(C.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(C.a)(e)),e}return Object(A.a)(c,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onAddTodo(this.state),this.setState({title:"",responsible:"",description:"",priority:"low"})}},{key:"handleInputChange",value:function(e){var t=e.target,c=t.value,a=t.name;this.setState(Object(h.a)({},a,c))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"card border border-primary",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"card-body",children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",name:"title",className:"form-control",value:this.state.title,onChange:this.handleInputChange,placeholder:"Titulo"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",name:"responsible",className:"form-control",value:this.state.responsible,onChange:this.handleInputChange,placeholder:"Responsable"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("textarea",{type:"text",name:"description",className:"form-control",value:this.state.description,onChange:this.handleInputChange,placeholder:"Descripci\xf3n"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("select",{name:"priority",className:"form-control",value:this.state.priority,onChange:this.handleInputChange,children:[Object(a.jsx)("option",{children:"Seleccionar prioridad"}),Object(a.jsx)("option",{children:"Baja"}),Object(a.jsx)("option",{children:"Media"}),Object(a.jsx)("option",{children:"Alta"})]})}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})}}]),c}(n.Component),D=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){var e;return Object(m.a)(this,c),(e=t.call(this)).state={todos:Y.a},e.handleAddTodo=e.handleAddTodo.bind(Object(C.a)(e)),e}return Object(A.a)(c,[{key:"removeTodo",value:function(e){this.setState({todos:this.state.todos.filter((function(t,c){return c!==e}))})}},{key:"handleAddTodo",value:function(e){this.setState({todos:[].concat(Object(w.a)(this.state.todos),[e])})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t,c){return Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("div",{className:"card mt-4",children:[Object(a.jsxs)("div",{className:"card-title text-center pt-2",children:[Object(a.jsx)("h4",{children:t.title}),Object(a.jsx)("span",{className:"badge badge-pill badge-warning ml-2 mt-3 p-3",children:t.priority})]}),Object(a.jsxs)("div",{className:"card-body ",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Responsable(s): "}),t.responsible]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Descripcion: "}),t.description]})]}),Object(a.jsx)("div",{className:"card-footer text-center",children:Object(a.jsx)("button",{className:"btn btn-danger",onClick:e.removeTodo.bind(e,c),children:"Delete"})})]})},c)}));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(a.jsxs)("a",{className:"navbar-brand",href:"/",children:["Tasks",Object(a.jsx)("span",{className:"badge badge-pill badge-light ml-2",children:this.state.todos.length})]})}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row mt-4",children:[Object(a.jsx)("div",{className:"col-md-6 text-center",style:{margin:"auto"},children:Object(a.jsx)(W,{onAddTodo:this.handleAddTodo})}),Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsx)("div",{className:"row",children:t})})]})})]})}}]),c}(n.Component);function Q(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"text-center mt-5",children:"Cronograma de clases y actividades programadas"}),Object(a.jsxs)("div",{className:"row  mt-5",children:[Object(a.jsx)("div",{className:"col-1 "}),Object(a.jsx)("div",{className:"col-10",children:Object(a.jsx)("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%2326ddc8&ctz=America%2FBogota&src=Y2FsZW5kYXJpb2FjYWRlbWlhZ2Vla0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uY28jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043",style:{border:"solid 1px #777",width:"100%",height:"600px",frameborder:"0",scrolling:"no"}})}),Object(a.jsx)("div",{className:"col-1"})]})]})}c(97);function K(){return Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsxs)("h5",{className:"text-center mt-5",children:["Descargar las autorizaciones y actas de compromiso, leerlas y firmarlas. Una vez diligenciadas enviarlas al correo: ",Object(a.jsx)("u",{children:"documentacion@academiageek.com.co"})]}),Object(a.jsx)("table",{className:"mt-5 text-center ",style:{width:"80%",margin:"auto"},children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{className:"border ",children:[Object(a.jsx)("td",{children:Object(a.jsx)("h4",{children:"Autorizacion de datos personales"})}),Object(a.jsx)("td",{children:Object(a.jsx)("iframe",{src:"https://drive.google.com/file/d/13190g8-PRvgep5PtKkjK3SVuD6b1Pret/preview",width:"300",height:"200"})})]}),Object(a.jsxs)("tr",{className:"border ",children:[Object(a.jsx)("td",{children:Object(a.jsx)("h4",{children:"Autorizacion de uso de imagen"})}),Object(a.jsx)("td",{children:Object(a.jsx)("iframe",{src:"https://drive.google.com/file/d/1P4w32PMQ6RRwsfl3xxZoP7htf4TVfJxV/preview",width:"300",height:"200"})})]}),Object(a.jsxs)("tr",{className:"border ",children:[Object(a.jsx)("td",{children:Object(a.jsx)("h4",{children:"Acta de compromiso de recepci\xf3n de beca"})}),Object(a.jsx)("td",{children:Object(a.jsx)("iframe",{src:"https://drive.google.com/file/d/1IhaJ838eg4pouK2i8he1JBU3lfxcgYT2/preview",width:"300",height:"200"})})]})]})})]})}var H="http://localhost:3001/usuarios",_=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(m.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:[]},e.peticionGet=function(){v.a.get(H).then((function(t){e.setState({data:t.data})}))},e}return Object(A.a)(c,[{key:"componentDidMount",value:function(){this.peticionGet()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"text-center mt-5",style:{fontFamily:"Georgia"},children:"Participantes"}),Object(a.jsx)("table",{className:"mt-5  ",style:{width:"70%",margin:"auto",height:"auto"},children:Object(a.jsx)("tbody",{children:this.state.data.map((function(e,t){return Object(a.jsxs)("tr",{style:{borderTop:"1px solid black"},children:[Object(a.jsx)("td",{className:"p-2",children:Object(a.jsx)("div",{style:{width:"110px",height:"80px"},children:Object(a.jsx)("img",{className:"img-fluid",style:{minWidth:"110px",maxWidth:"110px",height:"80px"},src:e.foto,alt:""})})}),Object(a.jsx)("td",{children:Object(a.jsx)("a",{href:"",style:{color:"black",fontSize:"18px"},children:"".concat(e.primer_nombre,"\n                                        ").concat(e.segundo_nombre,"\n                                        ").concat(e.primer_apellido,"\n                                        ").concat(e.segundo_apellido)})})]},t)}))})})]})}}]),c}(n.Component),$=(c.p,"http://localhost:3001/instructores"),ee=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(m.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:[]},e.peticionGet=function(){v.a.get($).then((function(t){e.setState({data:t.data})}))},e}return Object(A.a)(c,[{key:"componentDidMount",value:function(){this.peticionGet()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"mt-4",style:{width:"88%",margin:"auto"},children:[Object(a.jsx)("h1",{className:"text-center mb-4",style:{fontFamily:"Georgia"},children:"Instructores"}),this.state.data.map((function(e,t){return Object(a.jsx)("div",{className:"col-lg-4",style:{display:"inline-grid",justifyContent:"center"},children:Object(a.jsxs)("div",{className:"card text-center  mb-4",children:[Object(a.jsx)("img",{className:"img-fluid ",src:e.foto,alt:"Card image cap",style:{width:"250px",height:"250px",margin:"auto"}}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h5",{className:"card-title",children:"".concat(e.primer_nombre,"\n                                    ").concat(e.segundo_nombre,"\n                                    ").concat(e.primer_apellido,"\n                                    ").concat(e.segundo_apellido)}),Object(a.jsx)("p",{className:"card-text",children:e.descripcion})]})}),Object(a.jsx)("div",{className:"card-footer"})]})},t)}))]})}}]),c}(n.Component);var te=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(l.a,{children:Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{path:"/Login",exact:!0,render:function(e){return Object(a.jsx)(k,Object(o.a)({},e))}}),Object(a.jsx)(d.b,{path:"/Posts",exact:!0,render:function(e){return Object(a.jsx)(B,Object(o.a)(Object(o.a)({},e),{},{contentComponent:V}))}}),Object(a.jsx)(d.b,{path:"/Posts",exact:!0,render:function(e){return Object(a.jsx)(B,Object(o.a)(Object(o.a)({},e),{},{contentComponent:V}))}}),Object(a.jsx)(d.b,{path:"/BootcampMain",exact:!0,render:function(e){return Object(a.jsx)(B,Object(o.a)(Object(o.a)({},e),{},{contentComponent:R}))}}),Object(a.jsx)(d.b,{path:"/ForumMain",exact:!0,render:function(e){return Object(a.jsx)(B,Object(o.a)(Object(o.a)({},e),{},{contentComponent:L}))}}),Object(a.jsx)(d.b,{path:"/TaskMain",exact:!0,render:function(e){return Object(a.jsx)(B,Object(o.a)(Object(o.a)({},e),{},{contentComponent:D}))}}),Object(a.jsx)(d.b,{path:"/PortfolioMain",exact:!0,render:function(e){return Object(a.jsx)(B,Object(o.a)(Object(o.a)({},e),{},{contentComponent:Q}))}}),Object(a.jsx)(d.b,{path:"/DocMain",exact:!0,render:function(e){return Object(a.jsx)(B,Object(o.a)(Object(o.a)({},e),{},{contentComponent:K}))}}),Object(a.jsx)(d.b,{path:"/ParticipantsMain",exact:!0,render:function(e){return Object(a.jsx)(B,Object(o.a)(Object(o.a)({},e),{},{contentComponent:_}))}}),Object(a.jsx)(d.b,{path:"/InstructorsMain",exact:!0,render:function(e){return Object(a.jsx)(B,Object(o.a)(Object(o.a)({},e),{},{contentComponent:ee}))}}),Object(a.jsx)(d.b,{path:"/",exact:!0,render:function(e){return Object(a.jsx)(d.a,Object(o.a)(Object(o.a)({},e),{},{to:"/Login"}))}})]})})})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(te,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.1397e526.chunk.js.map