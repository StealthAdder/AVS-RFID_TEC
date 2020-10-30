<?php
include("/var/www/html/access/access.php");

$conn = mysqli_connect($server, $user, $pass, 'cards');
unset($server, $user, $pass);
    
if(mysqli_connect_error()) {
    echo "Error: Check connection";
    header("Location: /test/index.php?error=sqlconnectionerror");
    exit();
}
else{
    echo "Connected to DB";
}

// $sql = 'SELECT * FROM RF_READS ORDER BY ID DESC';

// $result = mysqli_query($conn, $sql);
// $num_row = mysqli_num_rows($result);

// date_default_timezone_set('Asia/Kolkata');
// $date_time = date('d-m-Y H:i');
// $date_time = date("F j, Y, g:i a T");
// $date_time = date("d-m-Y, g:i:s.v A");

// $micro_date = microtime();
// $date_array = explode(" ",$micro_date);
// $date = date("Y-m-d H:i:s",$date_array[1]);
// echo "Date: $date:" . $date_array[0]."<br>";

$t = microtime(true);
$micro = sprintf("%06d",($t - floor($t)) * 1000000);
$d = new DateTime( date('Y-m-d H:i:s.'.$micro, $t) );

// print $d->format("Y-m-d H:i:s.u"); // note at point on "u"
$date_time = $d->format("Y-m-d H:i:s.u");
// echo $date_time;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="<?php echo $sec?>;URL='<?php echo $page?>'">
    <title>AVS Tec</title>
</head>
<body>
   <h1>Dashboard</h1>
   <?php
    echo "Time: ".$date_time;
   ?>
   <br>
   <a href="avs.php">Vehicle Readings</a>
   <br>
   <a href="traf_avs.php">Traffic violation</a>
</body>
</html>