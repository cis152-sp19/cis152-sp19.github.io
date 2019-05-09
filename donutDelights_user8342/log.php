<?php
$myfile = fopen("log.txt", "w") or die("Unable to open file!");
$email = $_POST["email"] + "\n";
fwrite($myfile, $email);
fclose($myfile);
echo "Thank You!";
?>

