function setup() {
  var string = "1234 cool st. batron roure, la (30.4524, -84.3242)";
  var split1 = split(string, "(");
  var split2 = split(split1[1], ", ");
  var split3 = split(split2[1], ")");
  println(string);
  println(split1);
  println(split2);
  println(split3);
  println(split2[0] + "," + split3[0]);

}