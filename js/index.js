document.addEventListener("DOMContentLoaded", function(){
  Ajax.promiseRequest({ url : "sample/sample.flat" }).then(function(result){
    console.log(result);
    console.log(Flat.parse(result));
  });
});