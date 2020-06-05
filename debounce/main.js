function getData(){
    console.log('called');
}

var timeout;
let debounceIt = function(){
    clearTimeout(timeout);
 timeout = setTimeout(() =>{
        getData();
    },300)
}