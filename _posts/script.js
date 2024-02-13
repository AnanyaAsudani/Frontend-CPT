var bunny = document.getElementById("bunny");
var carrot1 = document.getElementById("carrot1");
var carrot2 = document.getElementById("carrot2");
var counter = 0;

bunny.innerHTML = '🐰';
carrot1.innerHTML = '🥕';
carrot2.innerHTML = '🥕';

function jump() {
    if (bunny.classList.contains("animate")) {
        return;
    }
    bunny.classList.add("animate");
    setTimeout(function () {
        bunny.classList.remove("animate");
    }, 1000);
}

var checkDead = setInterval(function () {
    let bunnyTop = parseInt(window.getComputedStyle(bunny).getPropertyValue("top"));
    let carrot1Left = parseInt(window.getComputedStyle(carrot1).getPropertyValue("left"));
    let carrot2Left = parseInt(window.getComputedStyle(carrot2).getPropertyValue("left"));

    if (
        (carrot1Left < 20 && carrot1Left > -20 && bunnyTop >= 130) ||
        (carrot2Left < 20 && carrot2Left > -20 && bunnyTop >= 130)
    ) {
        carrot1.style.animation = "none";
        carrot1.style.display = "none";
        carrot2.style.animation = "none";
        carrot2.style.display = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        carrot1.style.animation = "carrot-move1 5s infinite linear";
        carrot2.style.animation = "carrot-move2 8s infinite linear";
        carrot1.style.display = "block";
        carrot2.style.display = "block";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);