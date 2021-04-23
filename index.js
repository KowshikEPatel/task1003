let xhr  = new XMLHttpRequest()

xhr.open("get","https://restcountries.eu/rest/v2/all",true);

xhr.onload = function(){
    var data = JSON.parse(this.response)
    data.forEach(element => {
        console.log(element["name"])
    });
    
}

xhr.send();