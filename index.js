const now = new Date();
const day = now.getDay();
let weekend = false;
if (day === 0 || day == 5 || day === 6) {
  weekend = true;
}
if (day === 4 && now.getTime() > 17 * 3600 * 100) {
  weekend = true;
}

if (weekend) {
    document.getElementById("weekend").className = "show";
    document.getElementById("geen_weekend").className = "hidden";
} else {
    document.getElementById("weekend").className = "hidden";
    document.getElementById("geen_weekend").className = "show";
}