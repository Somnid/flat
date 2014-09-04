var Flat = (function(){
  function parse(flatText){
    var items = flatText.split("\n\n");
    var itemsArr = [];
    for(var i = 0; i < flatText.length; i++){
      var item = flatText[i];
      var itemObj = {};
      var keyvals = item.split("\n");
      for(var j = 0; j < keyvals.length; j++){
        var keyvalSplit = keyvals[i].split(":");
        itemObj[keyvalSplit[0]] = keyvalSplit[1];
      }
      itemsArr.push(itemObj);
    }
    return itemsArr;
  }
})();