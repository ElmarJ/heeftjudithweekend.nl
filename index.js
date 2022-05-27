const now = new Date();
const day = now.getDay();
let weekend = false;

if (day === 0 || day == 5 || day === 6) {
  weekend = true;
}
if (day === 4 && now.getTime() > 17 * 3600 * 100) {
  weekend = true;
}

if (now > new Date(2022, 5, 28) && now < new Date(2022, 6, 7)) {
  document.getElementById("vakantie").className = "show";
  document.getElementById("weekend").className = "hidden";
  document.getElementById("geen_weekend").className = "hidden";
}
else if (now > new Date(2022, 7, 4) && now < new Date(2022, 7, 18)) {
  document.getElementById("vakantie").className = "show";
  document.getElementById("weekend").className = "hidden";
  document.getElementById("geen_weekend").className = "hidden";
} else if (weekend) {
  document.getElementById("vakantie").className = "hidden";
  document.getElementById("weekend").className = "show";
  document.getElementById("geen_weekend").className = "hidden";
} else {
  document.getElementById("vakantie").className = "hidden";
  document.getElementById("weekend").className = "hidden";
  document.getElementById("geen_weekend").className = "show";
}