const API = "https://rankareaweb.vercel.app";

/* ---------------- SIGNUP ---------------- */

async function signup() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {

    const res = await fetch(API + "/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await res.json();

    alert(data.message);

  } catch (error) {

    console.log(error);
    alert("Signup error");

  }
}


/* ---------------- LOGIN ---------------- */

async function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {

    const res = await fetch(API + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    alert(data.message);

  } catch (error) {

    console.log(error);
    alert("Login error");

  }

}


/* ---------------- ADD BUSINESS ---------------- */

async function addBusiness() {

  const businessName = document.getElementById("businessName").value;

  try {

    const res = await fetch(API + "/business/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        businessName
      })
    });

    const data = await res.json();

    alert(data.message);

  } catch (error) {

    console.log(error);
    alert("Business add error");

  }

      }
