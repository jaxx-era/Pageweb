const API = "https://rankareaweb.vercel.app";

// LOGIN
async function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(API + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });

  const data = await res.json();
  console.log(data);
}


// SIGNUP
async function signup() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(API + "/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  });

  const data = await res.json();
  console.log(data);
}


// ADD BUSINESS
async function addBusiness() {

  const businessName = document.getElementById("businessName").value;

  const res = await fetch(API + "/business/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      businessName: businessName
    })
  });

  const data = await res.json();
  console.log(data);
    }
