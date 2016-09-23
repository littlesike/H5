
var arrSheng = [{id:'0',name:'请选择'},{ id: '1', name: "河南省" },
    { id: '2', name: "阿拉斯加州" },
    { id: '3', name: "日本" }];
var arrShi = [{id:'Z',name:'请选择'},{ id: 'A', name: "郑州市", fid: '1' },
    { id: 'B', name: '新乡市', fid: '1' },
    { id: 'C', name: '商丘市', fid: '1' },
    { id: 'D', name: '朱诺', fid: '2' },
    { id: 'E', name: '瓦尔迪兹', fid: '2' },
    { id: 'F', name: '舒妮德', fid: '2' },
    { id: 'G', name: '大阪', fid: '3' },
    { id: 'H', name: '东京', fid: '3' },];
var arrXian = [{ id: 'A-1', name: '中牟', kid: 'A' },
    { id: 'A-2', name: '新密', kid: 'A' },
    { id: 'A-3', name: '登封', kid: 'A' },
    { id: 'B-1', name: '新乡县', kid: 'B' },
    { id: 'B-2', name: '辉县', kid: 'B' },
    { id: 'B-3', name: '获嘉县', kid: 'B' },
    { id: 'C-1', name: '永城', kid: 'C' },
    { id: 'C-2', name: '夏邑', kid: 'C' },
    { id: 'C-3', name: '宁陵', kid: 'C' },
    { id: 'D-1', name: '猪八戒', kid: 'D' },
    { id: 'D-2', name: '朱列', kid: 'D' },
    { id: 'D-3', name: '朱雀', kid: 'D' },
    { id: 'E-1', name: '佤山', kid: 'E' },
    { id: 'E-2', name: '瓦特', kid: 'E' },
    { id: 'E-3', name: '洼地卡', kid: 'E' },
    { id: 'F-1', name: '舒服你', kid: 'F' },
    { id: 'F-2', name: '老司机', kid: 'F' },
    { id: 'F-3', name: '新司机', kid: 'F' },
    { id: 'G-1', name: '小美', kid: 'G' },
    { id: 'G-2', name: '小板', kid: 'G' },
    { id: 'H-1', name: '西京', kid: 'H' },
    { id: 'H-2', name: '鸣人', kid: 'H' },
    { id: 'H-1', name: '卡卡西', kid: 'H' },];

var sheng = document.querySelector('#sheng');
initSheng();
  function initSheng(){
      var strHtml='';
      arrSheng.forEach(function(item){
          strHtml+='<option value="'+item.id+'">'+item.name+'</option>';
      })
       sheng.innerHTML=strHtml;
  }

  function selectSheng(){
      var result= arrShi.filter(function(item){
            if(item.fid==sheng.value){
                return item;
            }
      })
     initShi(result);
     selectShi();
  
  }

   var shi = document.querySelector('#shi');
   function initShi(data){
    //    if(data.length==0){
    //        data.push({id:'0',name:'请选择'});
    //    }
       var strHtml='';
       data.forEach(function(item){
           strHtml+='<option value="'+item.id+'">'+item.name+'</option>';
       })
       shi.innerHTML=strHtml;
   }
//    initShi(arrShi);

      function selectShi(){
          var result =arrXian.filter(function(item){
              if(item.kid==shi.value){
                  return item;
              }
          })
          initXian(result);
      }

   var xian = document.querySelector('#xian');

   function initXian(data){
       var strHtml='';
    //    if(data.length==0){
    //        data.push({id:'Z',name:'请选择'});
    //    }
        data.forEach(function(item){
           strHtml+='<option value="'+item.kid+'">'+item.name+'</option>';
       })
       xian.innerHTML=strHtml;
   }
//    initXian(arrXian);