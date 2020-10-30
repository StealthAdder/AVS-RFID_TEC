<!-- Display vehicle RF readings -->
<?php

include("/var/www/html/access/access_test.php");

$conn = mysqli_connect($server, $user, $pass, 'cards');
unset($server, $user, $pass);

if(mysqli_connect_error()) {
    echo "Error: Check connection";
    header("Location: /test/index.php?error=sqlconnectionerror");
    exit();
}
else{
    echo "Connected to DB - ". $db;
}

$sql = 'SELECT * FROM RF_READS ORDER BY ID DESC';

$result = mysqli_query($conn, $sql);
$num_row = mysqli_num_rows($result);



?>
<?php
$page = $_SERVER['PHP_SELF'];
$sec = "2";

$t = microtime(true);
$micro = sprintf("%06d",($t - floor($t)) * 1000000);
$d = new DateTime( date('Y-m-d H:i:s.'.$micro, $t) );

$date_time = $d->format("Y-m-d H:i:s.u");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="<?php echo $sec?>;URL='<?php echo $page?>'">
    <title>Vehicle Reading Data</title>
</head>
<body>
   <h1>AVS RFID-TEC.</h1>
   <span>Click to clear.</span>
   <form action="/AVS-RFID_TEC/test/clear.php" method="post">
	<button name="avs-clear">All clear</button>
   </form>
   <a href="index.php">Home</a>
   <?php
    echo "Time: ".$date_time;
   ?>
      <h3>Vehicle Readings.</h3>
   <table border="1" cellspacing="1" cellpadding="1">
      <tr>
      <th>Read_NO.</th>
      <th>CARD UID.</th>
      <th>Location</th>
      <th>RF READER-ID</th>
      <th>Location Zip</th>
      <th>Timestamp</th>
      </tr>
      
      
      <?php
		  while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>{$row['ID']}</td>";
            echo "<td>{$row['CARD_NO']}</td>";
            echo "<td>{$row['LOC_NAME']}</td>";
            echo "<td>{$row['RF_READER_ID']}</td>";
            echo "<td>{$row['LOC_ZIP']}</td>";
            echo "<td>{$row['DATE_TIME']}</td>";
            echo "</tr>";
            
        }
      ?>
   </table>
</body>
</html>