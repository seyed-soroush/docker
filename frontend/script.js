const API_URL = "http://localhost:8000/api";

async function checkStatus() {
  const resultDiv = document.getElementById("status");
  try {
    const response = await fetch(`${API_URL}/status`);
    const data = await response.json();
    resultDiv.textContent = JSON.stringify(data, null, 2);
    resultDiv.style.display = "block";
  } catch (error) {
    resultDiv.textContent = `Error: ${error.message}`;
    resultDiv.style.display = "block";
  }
}

async function getUsers() {
  const resultDiv = document.getElementById("users");
  try {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    resultDiv.textContent = JSON.stringify(data, null, 2);
    resultDiv.style.display = "block";
  } catch (error) {
    resultDiv.textContent = `Error: ${error.message}`;
    resultDiv.style.display = "block";
  }
}

async function sendEcho() {
  const input = document.getElementById("echoInput").value;
  const resultDiv = document.getElementById("echo");

  if (!input) {
    resultDiv.textContent = "Please enter some text";
    resultDiv.style.display = "block";
    return;
  }

  try {
    const response = await fetch(`${API_URL}/echo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();
    resultDiv.textContent = JSON.stringify(data, null, 2);
    resultDiv.style.display = "block";
  } catch (error) {
    resultDiv.textContent = `Error: ${error.message}`;
    resultDiv.style.display = "block";
  }
}
