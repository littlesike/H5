var arr=JSON.parse(localStorage.Ddata);
var html = template('table', {list:arr,title:"Hero"});
document.querySelector('#content').innerHTML = html;

