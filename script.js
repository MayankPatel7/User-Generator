async function generate_function(){
    var response = await fetch("https://randomuser.me/api")
    var data = await response.json();

    profile.src = data.results[0].picture.large;
    document.getElementById('name').innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    age.innerHTML = data.results[0].dob.age;
    gender.innerHTML = data.results[0].gender;
    address.innerHTML = data.results[0].location.city + ", " + data.results[0].location.state + ", " + data.results[0].location.country;
    email.innerHTML = data.results[0].email;
}

generate.addEventListener('click', function(){
    generate_function();
})