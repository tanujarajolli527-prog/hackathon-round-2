function login(event) {
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
                if (data.success) {
                    alert("Login Successful!");
                    window.location.href = "dashboard.html";
                }
                else {
                    alert(data.message || "INvalid Username or Password");
                }
            })
            .catch(error => {
                console.log(error);
                alert("Something went wrong");
            })
    }
};