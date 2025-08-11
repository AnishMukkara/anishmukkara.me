<?php
$file = "counter.txt";

// Read current count
$count = (int) file_get_contents($file);

// Increase count
$count++;

// Save new count
file_put_contents($file, $count);

// Return as JSON
echo json_encode(["visits" => $count]);
?>