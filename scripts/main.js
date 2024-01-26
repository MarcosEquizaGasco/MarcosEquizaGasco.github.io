const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/headshot.jpg") {
    myImage.setAttribute("src", "images/basketball.JPG");
  } else {
    myImage.setAttribute("src", "images/headshot.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h3");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to my page, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Welcome to my page, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };