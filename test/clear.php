<?php

    
$server="192.168.1.122";
$user="bluejay";
$pass="bluejay@123";
$db="cards";

$conn = mysqli_connect($server, $user, $pass, $db);

if(mysqli_connect_error()) {
    echo "Error: Check connection";
    header("Location: /test/index.php?error=sqlconnectionerror");
    exit();
}
else{
    if (isset($_POST['traf-clear']))  {
        $sql = "DELETE FROM TR_RF_READS";

        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: /test/traf_avs.php?error=sqlerror1");
            exit();
            }
        else {
            mysqli_stmt_bind_param($stmt);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            header("Location: /test/traf_avs.php?CLEAR=success");
            exit();
        }
    }
    elseif (isset($_POST['avs-clear'])) {
        $sql = "DELETE FROM RF_READS";

        $stmt = mysqli_stmt_init($conn);

        if(!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: /test/avs.php?error=sqlerror1");
            exit();
            }
        else {
            mysqli_stmt_bind_param($stmt);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            header("Location: /test/avs.php?CLEAR=success");
            exit();
        }
    }
    else {
        header("Location: /test/avs.php?CLEAR=success");
        exit();
    }
}
mysqli_stmt_close($stmt);
mysqli_close($conn);

?>