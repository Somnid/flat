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
        itemObj[keyvalSplit[0]] = getValue(keyvalSplit[1]);
      }
      itemsArr.push(itemObj);
    }
    return itemsArr;
  }
  function getValue(text){
    //array
    if(text.indexOf(",") != -1){
      var textValues = text.split(",");
      var arr = [];
      for(var i = 0; i < values.length; i++){
        arr.push(getValue(textValues[i]))
      }
      return arr;
    }
    //date
    var date = new Date(text);
    if(date.getTime() === date.getTime()){
      return date;
    }
    //number
    if(!isNaN(text)){
      return parseInt(text);
    }
    //string
    return text;
  }
  return {
    parse : parse
  };
})();