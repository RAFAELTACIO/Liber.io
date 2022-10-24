<?php
if(isset($_POST['save_audio']) && $_POST['save_audio']=="Upload Audio")
{
        $dir = 'uploads/';
        $audio_path=$dir.basename($_FILES['audioFile']['name']);

        if(move_uploaded_file($_FILES['audioFile']['tmp_name'],$audio_path))
        {
            echo 'uploaded successfully.'
        }
}
?>