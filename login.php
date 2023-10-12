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
    $password = $_POST["password"];

    // Retrieve the user's hashed password from the database
    $query = "SELECT id, username, password FROM users WHERE username='$username'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
        $hashed_password = $row["password"];

        // Verify the password
        if (password_verify($password, $hashed_password)) {
            // Password is correct, user is logged in
            echo "Login successful! Welcome, " . $row["username"];
        } else {
            echo "Incorrect username or password.";
        }
    } else {
        echo "User not found.";
    }
}

mysqli_close($conn);
?>
