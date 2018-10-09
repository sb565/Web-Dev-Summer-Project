<!doctype html>
<html>
<head>
    <meta charset="utf-8" lang="en" >
    <meta name="viewport" content="width=device-width,initial-scale=1" >
    <title>Panjab University Connect | Maps</title>
    <link rel="stylesheet" href="../../common/css/main.css">
    <link rel="stylesheet" href="../../common/css/nav-style.css">
    <link rel="stylesheet" href="../../common/css/normalise.css">
    <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
</head>
<body>
<header>
  <div class = "nav-bar">
    <h1 class="logo">Maps Search</h1>
    <nav class="site-nav">
      <ul>
        <li><a href="../home/home.html"><i class=" site-nav--icon"></i>Home</a></li>
        <li><a href="../about/about.html"><i class=" site-nav--icon"></i>About</a></li>
        <li><a href="../departments/departments.html"><i class=" site-nav--icon"></i>Departments</a></li>
        <li><a href="../courses/courses.html"><i class=" site-nav--icon"></i>Courses</a></li>
        <li><a href="../people/people.php"><i class=" site-nav--icon"></i>People</a></li>
        <li><a href="../news/news.html"><i class=" site-nav--icon"></i>News</a></li>
        <li><a href="../events/events.php"><i class=" site-nav--icon"></i>Events</a></li>
        <li><a href="../eateries/eateries.html"><i class=" site-nav--icon"></i>Eateries</a></li>
        <li><a href="../utilities/utilities.html"><i class=" site-nav--icon"></i>Utilities</a></li>
      </ul>
  </nav>
  </div>
  <div class="menu-toggle">
    <div class="hamburger">
  </div>
  <script type="text/javascript" src="../../common/css/nav-js.js"></script>
</div>
</header>

<div class = "common-search">    
    <div class="search">
                        <form action="../searchEngine/mapser1.php" method="post">
                            <input type="text" id="search" name="sea" placeholder ="Look for Departments, Places, Food Joints,... ">
                            <button type="submit" class="button_1"><img src="../../common/css/search.svg"></button>
                        </form>
    </div>
</div>
    
    <section>
    <h1 class = 'search-results'>Search results from nearby locations</h1>
        <div class="container">
            <div class="table">
            
            <?php
            define('DB_NAME','project');
            define('DB_USER','root');
            define('DB_PASSWORD','');
            define('DB_HOST','localhost');
            $link= new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
            if(isset($_POST["sea"])){$ser = $_POST["sea"];}
            else{$ser="";}
            if($ser!=""){
             $ser =  mysql_real_escape_string($ser);
            $res = $link->query("select * from LOCATION where Concat(NAME, '', NAME2) like '%$ser%'");    
            if ($res->num_rows > 0) {
                 echo " <table border='2px'>
                            <tr>
                            <th>Name</th>
                        </tr>";
                while($row = $res->fetch_assoc()) 
                    {
                        echo ' <tr>
                                    <form action="../maps/maps.php" method="POST" >
                                    
                                    <td>
                                    <button type="submit" class="res-button" id='.$row["ID"].' onclick="a('. $row["COL1"] .','. $row["COL2"] .')" >
                                    '.$row["NAME"].' '.$row["NAME2"].'
                                    </button>
                                    </td>
                                    </form>
                                    </tr>
                                ';

                    }
            } else
                {echo "<p class ='noresult'>0 results</p>";}
            $link->close();
            echo "</table>";
            }
            else
                {echo "<p class ='noresult'>0 results</p>";}
            ?>
            </div>
        </div>
        
    <script language="javascript" type="text/javascript"  >
        function a(longi,lati){                                
            sessionStorage.setItem("long", longi);
            sessionStorage.setItem("lat", lati);
        }
        
    </script>
    </section>
    
</body>
</html>