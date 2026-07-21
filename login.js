function login(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Please fill all fields!");
    }
    else {
        fetch()
    }
}