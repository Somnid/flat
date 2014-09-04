var Flat = (function(){
  function parse(flatText){
    var items = flatText.split("\n\n");
    var itemsArr = [];
    for(var i = 0; i < items.length; i++){
      var itemText = items[i];
      var itemObj = {};
      var keyvals = itemText.split("\n");
      for(var j = 0; j < keyvals.length; j++){
        var keyvalSplit = keyvals[j].split(":");
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
      for(var i = 0; i < textValues.length; i++){
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