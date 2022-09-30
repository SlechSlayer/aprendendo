
function randomint(min, max) {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}


var mine1 = "x";var mine2 = "x";var mine3 = "x";var mine4 = "x";var mine5 = "x";var mine6 = "x";var mine7 = "x";var mine8 = "x";var mine9 = "x";var mine10 = "x";var mine11 = "x";var mine12 = "x";var mine13 = "x";var mine14 = "x";var mine15 = "x";var mine16 = "x";var mine17 = "x";var mine18 = "x";var mine19 = "x";var mine20 = "x";var mine21 = "x";var mine22 = "x";var mine23 = "x";var mine24 = "x";var mine25 = "x"

a = randomint(1, 8)
b = randomint(9, 13)
c = randomint(14,17)
d = randomint(18,25)

if(a == 1){mine1 = "o"}
else if (a == 2) {mine2 = "o"}
else if (a == 3) {mine3 = "o"}
else if (a == 4) {mine4 = "o"}
else if (a == 5) {mine5 = "o"}
else if (a == 6) {mine6 = "o"}
else if (a == 7) {mine7 = "o"}
else if (a == 8) {mine8 = "o"}
if(b == 9) {mine9 = "o"}
else if (b == 10) {mine10 = "o"}
else if (b == 11) {mine11 = "o"}
else if (b == 12) {mine12 = "o"}
else if (b == 13) {mine13 = "o"}
if (c == 14) {mine14 = "o"}
else if(c == 15){mine15 = "o"}
else if(c == 16){mine16 = "o"}
else if(c == 17){mine17 = "o"}
if (d == 18) {mine18 = "o"}
else if(d == 19){mine19 = "o"}
else if(d == 20){mine20 = "o"}
else if(d == 21){mine21 = "o"}
else if(d == 22){mine21 = "o"}
else if(d == 23){mine23 = "o"}
else if(d == 24){mine24 = "o"}
else if(d == 25){mine25 = "o"}

console.log(mine1 + mine2 + mine3 + mine4 + mine5 + "\n"
+ mine6 + mine7 + mine8 + mine9 + mine10 + "\n"
+ mine11 + mine12 + mine13 + mine14 + mine15 + "\n"
+ mine16 + mine17 + mine18 + mine19 + mine20 + "\n"
+ mine21 + mine22 + mine23 + mine24 + mine25)
