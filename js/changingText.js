
var text = [
    "Venier Lavable Interior-Exterior <br> x 10 Litros <br> $9500",
    "Dessutol Pro Interior-Exterior <br> x 4 Litros <br> $3000",
    "Sherwin Williams <br> Z-10 Interior Mate <br> x 20 Litros <br> $25260",
    "Casablanca Performance Interior x 20 Litros <br> $18680"];
var counter = 0;
var elem = document.getElementById("text-promos");
var inst = setInterval(change, 9990);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}