// Check if there are saved details in local storage
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  // If there are saved details, show the "Login as existing user" button
  if (savedUsername && savedPassword) {
    const loginForm = document.getElementById('loginForm');
    const existingButton = document.createElement('button');
    existingButton.setAttribute('id', 'existing');
    existingButton.textContent = 'Login as existing user';
    loginForm.appendChild(existingButton);

    // Add event listener to the "Login as existing user" button
    existingButton.addEventListener('click', () => {
      alert(`Logged in as ${savedUsername}`);
    });
  }

  // Add event listener to the submit button
  document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    // Save username and password in local storage if "Remember me" is checked
    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      // Remove saved details from local storage if "Remember me" is unchecked
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    // Display alert with logged-in user
    alert(`Logged in as ${username}`);
  });
