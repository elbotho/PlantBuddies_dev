<?php


$date = date('ymd_His');

//backup
rename('./data/plants-data.js', './data/backup/'.$date.'-plants-dataXXX.js');
rename('./data/relations-data.js', './data/backup/'.$date.'-relations-dataXXX.js');

//write new data
file_put_contents('./data/plants-data.js', $_POST[plants]);
file_put_contents('./data/relations-data.js', $_POST[relations]);

//return result
echo ( $date." saved!".$_POST[data]);

?>