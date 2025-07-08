function timing(){
const timer = document.getElementById("root");
const now = new Date();
const IndianTime = now.toLocaleTimeString();
timer.innerHTML = IndianTime;
}

setInterval(timing,1000);

const timer = document.getElementById("root");
timer.style.fontSize = "100px";
timer.style.display = "flex";
timer.style.height = "100vh";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
// timer.style.backgroundColor = "orange";