function displayUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userList = document.getElementById("userList");

  userList.innerHTML = ""; // Clear current list

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.email}`;
    userList.appendChild(li);
  });
}

// Call displayUsers to update the list on page load
displayUsers();
