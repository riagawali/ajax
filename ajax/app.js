document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;

    // Store data in local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name: userName, email: userEmail });
    localStorage.setItem("users", JSON.stringify(users));

    // Send data to the server using AJAX
    postData(userName, userEmail);
  });

function postData(name, email) {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      username: email, // Assuming username is similar to email for simplicity
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json)) // You can handle the response here if needed
    .catch((err) => console.error("Error posting data:", err));
}
