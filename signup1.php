<?php
// Connect to the database (update these with your database credentials)
$host = "localhost";
$username = "your_username";
$password = "your_password";
$database = "tailtalesreunion"; // Replace with your database name

$conn = mysqli_connect($host, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hash the password

    // Check if the username or email already exists
    $checkQuery = "SELECT * FROM users WHERE username='$username' OR email='$email'";
    $result = mysqli_query($conn, $checkQuery);

    if (mysqli_num_rows($result) > 0) {
        echo "Username or email already exists. Please choose a different one.";
    } else {
        // Insert the new user into the database
        $insertQuery = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
        if (mysqli_query($conn, $insertQuery)) {
            echo "Registration successful!";
        } else {
            echo "Error: " . $insertQuery . "<br>" . mysqli_error($conn);
        }
    }
}

mysqli_close($conn);
?>
