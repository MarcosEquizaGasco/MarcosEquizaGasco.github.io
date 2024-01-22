const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/basketball.jpg") {
    myImage.setAttribute("src", "images/hiking.jpg");
  } else {
    myImage.setAttribute("src", "images/basketball.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Nice to meet you, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Nice to meet you, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };