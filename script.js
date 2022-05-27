let input = document.getElementById('input');
let btn = document.getElementById('btn');
let ul = document.querySelector('ul');


    
var one_div = document.getElementById("one");
function show(){
one.innerHTML = 'USER INFO!'
}
btn.addEventListener('click', function (event) {
    event.preventDefault();
    
    let fetchRequest = fetch(`https://api.github.com/users/${input.value}`);
    fetchRequest
    .then((responses) => {
        console.log(responses);
        return responses.json()
    })
    .then(result => {
        const userAvatar_url = result.avatar_url;
        const userName = result.name;
        const userId = result.id;
        const userLogin = result.login;
        const image = document.createElement('img')
        image.src = userAvatar_url
        document.querySelector('.container').appendChild(image)
        userInfo = [userName, userId, userLogin];
        console.log(userInfo);
        let li = document.createElement('li');
        ul.append(li);
        li.innerHTML = userInfo;
    })
})

// check xeniacat