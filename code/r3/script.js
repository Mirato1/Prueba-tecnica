const API = "http://api.mediastack.com/v1/news?access_key=44883fecbae962bda35e76d5d18f69c4"
    

fetch(API)
    .then(response => response.json()) 
    .then(data => mostrarData(data.data))      
    .catch(error => console.error(error))

const mostrarData = (data) => {
    console.log(data);
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].author}</td><td>${data[i].category}</td><td>${data[i].title}</td><td>${data[i].source}</td></tr>`      
    }
    document.getElementById('data').innerHTML = body;
}

