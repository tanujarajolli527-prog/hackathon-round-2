function login(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Please fill all fields!");
    }
    else {
        fetch("https://localhost:8000/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }
        )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert(data.message);
        })
    }
}