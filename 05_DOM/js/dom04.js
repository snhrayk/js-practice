const school = document.getElementById("school");
const btn = document.getElementById("btn");
const output = document.getElementById("text");

btn.onclick = () => {
    output.innerText = school.value;
}