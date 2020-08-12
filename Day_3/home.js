window.onload = function() {
    var xhr = new XMLHttpRequest()
    console.log(xhr)
    var url = "https://api.themoviedb.org/3/movie/550?api_key=7dc4729348e1ec797c81d70db5c8f778"
    xhr.open("Get", url)
    xhr.send()
    xhr.onload = function() {

        var response = JSON.parse(this.response)
        console.log(response)
        handleRespone(response)
    }
}
var xyz = 
function page (){
    document.getElementById("#home")
}