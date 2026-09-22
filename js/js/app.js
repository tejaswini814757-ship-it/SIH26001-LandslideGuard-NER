document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        return;
    }


    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();


        // Check fields
        if (email === "" || password === "") {

            alert("Please enter email and password.");

            return;
        }


        // Simple prototype login
        const loginButton =
            document.getElementById("loginButton");


        loginButton.innerHTML =
            "<span>Opening Dashboard...</span><span>✓</span>";

        loginButton.disabled = true;


        // Open dashboard
        setTimeout(function () {

            window.location.href = "./dashboard.html";

        }, 500);

    });

});
