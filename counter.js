let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
            console.log("The number is decreasing, negative value!")
        } else if ((styles.contains("reset"))) {
            count = 0;
            console.log("It is reset!")
        } else {
            count++;
            console.log("The number is increasing, positive value!")
        }

        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "black";
        }

        value.textContent = count;
    });
});