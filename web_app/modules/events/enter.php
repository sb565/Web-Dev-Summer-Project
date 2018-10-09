<!doctype html>
<html>
<head><title>EDIT</title></head>
    <meta charset="utf-8" lang="en" >
    <meta name="viewport" content="width=device-width,initial-scale=1" >

<body>
    <form action="enter.php"method="post">
    Date : <input type="date" name="date">
    Heading : <input type="text" name="heading" >
    Event: <textarea name="event"></textarea>
    Link: <input type="url" name="link">
    <input type="submit" >
    </form>
    
    <?php

define('DB_NAME','project');
define('DB_USER','root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');
$link=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD);

if(!$link){
    die('Could not connect: '.mysql_error());
}

$db_selected=mysql_select_db(DB_NAME, $link);

if(!$db_selected){
    die('Can not use'.DB_NAME.':'.mysql_error());
}

echo "Connected Successfully";
$date=$_POST["date"];
$event=htmlspecialchars($_POST["event"]);
$link= htmlspecialchars($_POST["link"]);
$heading= htmlspecialchars($_POST["heading"]);
    echo $event;
$newid=mysql_insert_id();
$sql="INSERT INTO events (Date,Heading,Event,Link) VALUES ('$date','$heading',$event','$link')";
if(!mysql_query($sql)){
    die("Error:".mysql_error());
}
mysql_close();
?>
    
</body>
</html>