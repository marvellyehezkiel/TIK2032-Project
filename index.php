<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Marvell">
    <meta name="description" content="Marvell Personal Homepage">
    <title> Blog | Marvell Personal Blog </title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1> Welcome to Marvell Personal Blog</h1>
        <a href="index.html" target="Home">Home</a><br>
        <a href="gallery.html" target="Gallery">Gallery</a><br>
        <a href="blog.html" target="Blog">Blog</a><br>
        <a href="contact.html" target="Contact">Contact</a>
        <hr>

        <h2>Blog</h2>
        <?php
        $servername = "localhost"; 
        $username = "root"; 
        $password = ""; 
        $dbname = "blog"; 

        
        $conn = new mysqli($servername, $username, $password, $dbname);
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        
        $sql = "SELECT title, content FROM blogs";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<h3>" . $row['title'] . "</h3>";
                echo "<p>" . $row['content'] . "</p>";
            }
        } else {
            echo "0 results";
        }

        $conn->close();
        ?>
    </header>
</body>
</html>
