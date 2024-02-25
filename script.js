const adress = document.getElementById('loc');
const naam = document.getElementById('name');
const id = document.getElementById('id');
const followers = document.getElementById('follower');
const button = document.getElementById('btn');
let username = document.getElementById('mytext');
button.addEventListener('click',()=>{
    console.log(username.value)
    let myurl = `${username.value}`
    console.log(myurl);
    
const requestUrl = `https://api.github.com/users/${myurl}`
const xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl);
xhr.onreadystatechange=function(){
    var data = JSON.parse(this.responseText)
    naam.innerHTML=`${data.name}`;
    id.innerHTML=`${data.id}`;
    follower.innerHTML=`${data.followers}`
    adress.innerHTML=`${data.location}`
   

}
xhr.send()
})




