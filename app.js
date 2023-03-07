let num = 0;
const intervalId = setInterval(() => {
	const value = ++num;
	// console.log(value);
	displayInterval("output", value);
}, 1000);

clearInterval(intervalId);

const displayInterval = (id, value) => {
	const displayId = document.getElementById(id);
	displayId.innerText = value;
};
// document.getElementById("btn-start").addEventListener("click", () => {});
// document.getElementById("btn-pause").addEventListener("click", () => {});
// document.getElementById("btn-reset").addEventListener("click", () => {});
