<?php

    
include("/var/www/html/access/access.php");

$conn = mysqli_connect($server, $user, $pass, 'cards');
unset($server, $user, $pass);

if(mysqli_connect_error()) {
    echo "Error: Check connection";
    header("Location: /AVS-RFID_TEC/test/index.php?error=sqlconnectionerror");
    exit();
}
else{
    if (isset($_POST['traf-clear']))  {
        $sql = "DELETE FROM TR_RF_READS";

        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: /AVS-RFID_TEC/test/traf_avs.php?error=sqlerror1");
            exit();
            }
        else {
            mysqli_stmt_bind_param($stmt);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            header("Location: /AVS-RFID_TEC/test/traf_avs.php?CLEAR=success");
            exit();
        }
    }
    elseif (isset($_POST['avs-clear'])) {
        $sql = "DELETE FROM RF_READS";

        $stmt = mysqli_stmt_init($conn);

        if(!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: /AVS-RFID_TEC/test/avs.php?error=sqlerror1");
            exit();
            }
        else {
            mysqli_stmt_bind_param($stmt);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            header("Location: /AVS-RFID_TEC/test/avs.php?CLEAR=success");
            exit();
        }
    }
    else {
        header("Location: /AVS-RFID_TEC/test/avs.php?CLEAR=success");
        exit();
    }
}
mysqli_stmt_close($stmt);
mysqli_close($conn);

?>