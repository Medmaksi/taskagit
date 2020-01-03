<?php
include '../con/connection.php';

$status = $_POST['data'];

if ($status==='YollaKaderim'){

  /*$sql= 'INSERT INTO keygens (keygen,isGiven) VALUES (:randomKey, 0)';
  $stmt = $dbh->prepare($sql);
  for($i=0; $i<count($keygenArray); $i++){
      $stmt->bindParam(':randomKey',$keygenArray[$i]);
      $stmt->execute();
  }*/

  $sql= 'SELECT * FROM keygens WHERE isGiven!= 1';
  $stmt = $dbh->prepare($sql);
  $stmt-> execute();
  $stmtx= $stmt->fetchAll(PDO::FETCH_ASSOC);

  $sql2= 'UPDATE keygens SET isGiven= 1 WHERE ID='. $stmtx[0]['ID'];
  $newstmt= $dbh->prepare($sql2);
  $newstmt->execute();
  echo $stmtx[0]['keygen'];


}