<!-- Signal violation reading receiver for arduino.-->
<?php
include("/var/www/html/access/access.php");
    //Var values from arduino are stored here. 
    $cid=$_POST["cid"]; //card no
    $loc_name=$_POST["loc_name"]; //location name
    $loc_zip=$_POST["loc_zip"]; //location zipcode
    $rid=$_POST["rid"]; //reader id


    // date_default_timezone_set('Asia/Kolkata');
    // $date_time = date("d-m-Y, g:i:s:v A");

    $t = microtime(true);
    $micro = sprintf("%06d",($t - floor($t)) * 1000000);
    $d = new DateTime( date('Y-m-d H:i:s.'.$micro, $t) );

    // print $d->format("Y-m-d H:i:s.u"); // note at point on "u"
    $date_time = $d->format("Y-m-d H:i:s.u");
    // echo $date_time;

    // echo $cid;

    $conn = mysqli_connect($server, $user, $pass, 'cards');
    unset($server, $user, $pass);
    if(mysqli_connect_error()) {
        echo "Error: Check connection";
        header("Location: /test/index.php?error=sqlconnectionerror");
        exit();
    }
    else{
    
        echo "Connected to Server";

        $sql = "INSERT INTO TR_RF_READS (CARD_NO, LOC_NAME, RF_READER_ID, LOC_ZIP, DATE_TIME) VALUES (?, ?, ?, ?, ?)";

        $stmt = mysqli_stmt_init($conn);

        if(!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: /test/index.php?error=sqlerror1");
            exit();
            }
        else {
            mysqli_stmt_bind_param($stmt, "sssss", $cid, $loc_name, $rid, $loc_zip, $date_time);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            header("Location: /test/index.php?stored=success");
            exit();
            }
    }
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
?>