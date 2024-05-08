<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "school";

// Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data from the POST request
$fullname = $_POST['fullname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Prepare and execute the SQL query
$sql = "INSERT INTO school (fullname, phone, email, subject, message)
VALUES ('$fullname', '$phone', '$email', '$subject', '$message')";

if ($conn->query($sql) === True) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>