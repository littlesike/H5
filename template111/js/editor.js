
var arr=JSON.parse(localStorage.Ddata);

function create() {
    var namer = document.querySelector('#name');
    var ager = document.querySelector('#age');
    var hobbyr = document.querySelector('#hobby');
    var workr = document.querySelector('#work');


    if (namer.value == '' || ager.value == '' || hobbyr.value == '' || workr.value == '') {
        alert('不能为空的')
    } else {
        var info = {};
        info.name = namer.value;
        info.age = ager.value;
        info.hobby = hobbyr.value;
        info.work = workr.value;
        arr.push(info);
        console.log(arr);
          
    }
  localStorage.Ddata=JSON.stringify(arr);
}
