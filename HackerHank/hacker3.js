let hour = "07:05:45PM";

function timeConversion(s) {
  // Write your code here
  var letra = s[8];
  var hora = "";

  if (letra === "P") {
    if (s.substring(0, 2) == "12") {
      hora = "12";
    } else {
      hora = parseInt(s.substring(0, 2)) + 12;
    }
  } else if (letra === "A") {
    if (s.substring(0, 2) == "12") {
      hora = "00";
    } else {
      hora = s.substring(0, 2);
    }
  }
  console.log(hora + s.substring(2, 8));
  return hora + s.substring(2, 8);
}

timeConversion(hour);
