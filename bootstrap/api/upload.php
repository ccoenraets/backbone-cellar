<?php
// Not suitable for a production environment. You need to check the file characteristics before accepting to upload.
// Also Make sure, the upload directory (../pics in this case) has the appropriate permissions. If not, CHMOD as appropriate.
error_reporting(0);
if (move_uploaded_file($_FILES['file']['tmp_name'], '../pics/' . $_FILES['file']['name'])) {
    echo "OK";
} else {
    header('HTTP', true, 500);
}
?>