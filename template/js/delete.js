var arr=JSON.parse(localStorage.Ddata);
function deletea() {
    var namer=document.querySelector('#name');
   var result= arr.filter(function(item){
        if(item.name ==namer.value){
           console.log(item);
            return item;
        }
    });
     var a= indexaa(result[0]);
    if(a>-1){
        arr.splice(a,1);
       localStorage.Ddata=JSON.stringify(arr);
    }
}
  function indexaa(result){
      for(var i=0;i<arr.length;i++){
          if(arr[i]==result){
              return i;
          }
      }
      return -1;
  }
  