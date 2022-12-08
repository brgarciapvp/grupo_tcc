/* Lê o XML */	
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

let x = xmlDoc.getElementsByTagName("conteudo");
let y = xmlDoc.getElementsByTagName("postagem");
/* Exibe o conteúdo */
function funcaoConteudo(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h1 id='textos'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>" +			
		"<h4 id='textos'>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</h4>");}
}
function funcaotitulosobre(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h1 id='textos'>" + x[i].getElementsByTagName("titulosobre")[0].childNodes[0].nodeValue + "</h1>");}
}
function funcaoConteudosobre1(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h4 id='textos'>" + x[i].getElementsByTagName("corposobre1")[0].childNodes[0].nodeValue + "</h4>");}
}
function funcaoConteudosobre2(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h4 id='textos'>" + x[i].getElementsByTagName("corposobre2")[0].childNodes[0].nodeValue + "</h4>");}
}
function funcaoapp(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h1 id='textos'>" + x[i].getElementsByTagName("tituloapp")[0].childNodes[0].nodeValue + "</h1>" +			
		"<h4>" + x[i].getElementsByTagName("corpoapp")[0].childNodes[0].nodeValue + "</h4>");}
}
function funcaomaquete(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h1 id='textos'>" + x[i].getElementsByTagName("titulomaquete")[0].childNodes[0].nodeValue + "</h1>" +			
		"<h4 id='textos'>" + x[i].getElementsByTagName("corpomaquete")[0].childNodes[0].nodeValue + "</h4>");}
}
function funcaoarduino(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h1 id='textos'>" + x[i].getElementsByTagName("tituloarduino")[0].childNodes[0].nodeValue + "</h1>" +			
		"<h4 id='textos'>" + x[i].getElementsByTagName("corpoarduino")[0].childNodes[0].nodeValue + "</h4>");}
}
function funcao(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h1 id='textos'>" + x[i].getElementsByTagName("tituloarduino")[0].childNodes[0].nodeValue + "</h1>" +			
		"<h4>" + x[i].getElementsByTagName("corpoarduino")[0].childNodes[0].nodeValue + "</h4>");}
}
function blog(){
	n = y.length-1;
	for (var i = n; i >= 0; i--){
		var destaque = (i == n)?'#c0c0c0':'#ffffff';
		document.write("<div class='row' id='blog'"+ destaque +"'>" +
		"<div class='col'><a href='postagem.html?id=" + i + "'><img src='imgs/fotos_adicionais/" + y[i].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='100%'class='rounded'></a></div>" +
		"<div class='col'><h1 class'display-3'>" + y[i].getElementsByTagName("manchete")[0].childNodes[0].nodeValue +"</h1><h4>"+ y[i].getElementsByTagName("noticia")[0].childNodes[0].nodeValue.substr(0,250) + "</h4></div></div>");}
}
function funcaoPostagem(){
	let url = new URL(window.location.href);
	let search_params = url.searchParams; 
	i = search_params.get('id');	
		document.write("<div class='row'>"+
		"<div class='col-4'><img src='imgs/fotos_adicionais/" + y[i].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='100%'></div>" +
		"<div class='col-4'><h3>" + y[i].getElementsByTagName("manchete")[0].childNodes[0].nodeValue + "</h3></div>" +
		"<div class='col-4'><h3>" + y[i].getElementsByTagName("noticia")[0].childNodes[0].nodeValue + "<h3></div></div>");		
}	
function fonte(){
	document.write("<h1>"+ y[i].getElementsByTagName("fonte")[0].childNodes[0].nodeValue +"</h1>")
}			
