const now = new Date();
const day = now.getDay();
let weekend = false;

if (day === 0 || day == 5 || day === 6) {
  weekend = true;
}
if (day === 4 && now.getHours() > 17) {
  weekend = true;
}

// Note: date constructor month is 0-11, so we need to substract 1
if (now >= new Date(2022, 4, 28) && now <= new Date(2022, 5, 6)) {
  document.getElementById("vakantie").className = "show";
  document.getElementById("weekend").className = "hidden";
  document.getElementById("geen_weekend").className = "hidden";
}
else if (now >= new Date(2022, 6, 4) && now <= new Date(2022, 6, 18)) {
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