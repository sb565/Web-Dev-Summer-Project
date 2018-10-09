<!doctype html>
<html>
<head><title>Panjab University Connect | People</title>
    <meta charset="utf-8" lang="en" >
    <meta name="viewport" content="width=device-width,initial-scale=1" >
    
    <link rel="stylesheet" href="../../common/css/main.css">
    <link rel="stylesheet" href="../../common/css/nav-style.css">
    <link rel="stylesheet" href="../../common/normalise.css">
    <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
    
</head>
<body>
<header>
  <div class = "nav-bar">
    <h1 class="logo">People</h1>
    <nav class="site-nav">
      <ul>
        <li><a href="../home/home.html"><i class=" site-nav--icon"></i>Home</a></li>
        <li><a href="../about/about.html"><i class=" site-nav--icon"></i>About</a></li>
          <li><a href="../departments/departments.html"><i class=" site-nav--icon"></i>Departments</a></li>
        <li><a href="../courses/courses.html"><i class=" site-nav--icon"></i>Courses</a></li>
        <li><a href="../maps/maps.html"><i class=" site-nav--icon"></i>Maps</a></li>
        <li><a href="../news/news.html"><i class=" site-nav--icon"></i>News</a></li>
        <li><a href="../events/events.php"><i class=" site-nav--icon"></i>Events</a></li>
        <li><a href="../eateries/eateries.html"><i class=" site-nav--icon"></i>Eateries</a></li>
        <li><a href="../utilities/utilities.html"><i class=" site-nav--icon"></i>Utilities</a></li>
      </ul>
  </nav>
  <div class="menu-toggle">
    <div class="hamburger"></div>
  </div>
  <script type="text/javascript" src="../../common/css/nav-js.js"></script>
</div>
</header>
<div class = "common-search">    
    <div class="search">
                        <form action="people.php" method="post">
                            <input type="text" id="sear" name="sea" placeholder ="Look for Places, Food Joints, Courses... ">
                            <button type="submit" class="button_1"><img src="../../common/css/search.svg"></button>
                        </form>
        
</div>
</div>
    <div class="container">
        <div class="table">
        <?php     
            define('DB_NAME','project');
            define('DB_USER','root');
            define('DB_PASSWORD','');
            define('DB_HOST','localhost');
            $link= new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
            if(isset($_POST["sea"])){$ser=$_POST["sea"];}
            else{$ser="";}
            if($ser=="")
            {$res = $link->query("select * from uietdb");            }
            else{
             $ser =  mysql_real_escape_string($ser);
            $res = $link->query("select * from uietdb where Concat(name, '', phone, '', designation, '',department) like '%$ser%'");    
            }
            if ($res->num_rows > 0) { 
                
                echo "<table border='2px'>
                            <tr class ='head'>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>Designation</th>
                    </tr>";
                
                while($row = $res->fetch_assoc()) 
                    {
                        echo ' <tr>
                                    <td>'.$row["name"].'</td>
                                    <td>'.$row["phone"].'</td>
                                    <td>'.$row["department"].'</td>
                                    <td>'.$row["designation"].'</td>
                                    </tr>
                        ';
                    }
                echo "</table>";
            } else
                {echo "<p class ='noresult'>0 results</p>";}
            $link->close();
            
            $session_value=(isset($_POST["sea"]))?$_POST["sea"]:''; 
    
        ?>
            
         <script >
                var searc = '<?php echo $session_value; ?>';
                $('#sear').val(searc);
        </script>
            <br/>
        <h2 align="right">
            <form action="login.html">
                <input type="submit" value="ADMIN LOGIN">
            </form>
        </h2>
        </div>
    </div>
</body>
</html>


