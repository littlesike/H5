var arr = JSON.parse(localStorage.Ddata);
var sec = document.querySelector('#oldname');

var namer = document.querySelector('#name');
var ager = document.querySelector('#age');
var hobbyr = document.querySelector('#hobby');
var workr = document.querySelector('#work');

var strHtml = '';
arr.forEach(function (item) {
    strHtml += '<option>' + item.name + '</option>';
})
sec.innerHTML = strHtml;

function selectName() {
    var result = arr.forEach(function (item) {
        if (item.name == sec.value) {
            namer.value = item.name;
            ager.value = item.age;
            hobbyr.value = item.hobby;
            workr.value = item.work;
        }
    })
}
function OK() {
    var newinfo = {};
    newinfo.name = namer.value;
    newinfo.age = ager.value;
    newinfo.hobby = hobbyr.value;
    newinfo.work = workr.value;
     var a=indexs(sec.value);
     console.log(a);
     if(a>-1){
         arr.splice(a,1,newinfo);
         localStorage.Ddata=JSON.stringify(arr);
     }

}
function indexs(canshu) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name == canshu) {
            return i;
        }
    }
    return -1;
}