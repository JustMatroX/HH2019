<?php
$p1 = file('usa.txt');
$pp1 = $p1[0];
$pp2 = $p1[1];
$pp3 = $p1[2];

@$country->p1 = $pp1;
@$country->p2 = $pp2;
@$country->p3 = $pp3;

$myJSON = json_encode($country);

echo $myJSON;
?>