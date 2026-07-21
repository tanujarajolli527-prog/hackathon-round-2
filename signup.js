function signup(event) {
    event.preventDefault();

    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;

    if (username === "" || email === "" || password === "" || confirmpassword === "") {
        alert("Please fill all fields!");
        return;
    }
    if (password !== confirmpassword) {
        alert("Passwords do not match!");
        return;
    }
    fetch("http://localhost:8000/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        }
    )
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Account Created Successfully!");
                window.location.href = "index.html";
            }
            else {
                alert(data.message || "Signup Failed!");
            }
        })
        .catch(error => {
            console.log(error);
            alert("Something went wrong");
        });
}