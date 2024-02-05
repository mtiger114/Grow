const menuButton = document.getElementById("Smenu");
const overlay = document.getElementById("Soverlay");

// Dynamically create a style element and append it to the document head
const style = document.createElement("style");
style.innerHTML = `
#Smenu {
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#Smenu.active {
}

#Smenu div {
  width: 30px;
  height: 5px;
  background-color: #3498db;
  transition: 0.3s;
}

#Soverlay {
  margin: 45px 15px;
  z-index: 100;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  place-content: center;
  background-color: #ffffff;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 1s, opacity 0.5s;
  transform: translateY(-100%);
  opacity: 0;
}

#Soverlay.active {
  transform: translateX(0);
  opacity: 1;
}

.menu-option {
  margin: 10px 0;
  cursor: pointer;
  color: #1a1a1a;
  text-decoration: none;
  display: block;
  padding: 10px 30px;
  transition: 0.3s;
}

.menu-option:hover {
  background-color: #f7f7f7;
}

#Soverlay a:hover {
  text-decoration: underline;
}

.close-btn {
  margin-top:20px;
  background-color: #e74c3c;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

.close-btn:hover {
  background-color: #c91705;
}
`;

// Append the style element to the document head
document.head.appendChild(style);

menuButton.addEventListener("click", openMenu);

function openMenu() {
  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.classList.add("active");
  }, 50); // Delay the class addition to allow the fadeIn effect
}

function closeMenu() {
  overlay.style.display = "none";
  overlay.classList.remove("active");
}
