<!doctype html>
<html>
    <meta charset="utf-8" lang="en" >
    <meta name="viewport" content="width=device-width,initial-scale=1" >
    <head><title>Admin Login</title></head>
    <body>
        <form action="login.php"method="post">
        <p>LOGIN ID:<input type="text" name="login"></p>
        <p>PASSWORD:<input type="password" name="pwd" ></p>
        <input type="submit" value="ENTER">
            <script src="/jquery-3.1.1.js">
            </script>
        <?php
            if($_POST['login']==''){echo 'Login ID can not be empty';}
           
            elseif($_POST["pwd"]==''){echo 'Password can not be empty';}
            
            else{
                $a=$_POST['login'];
                $link = new mysqli('localhost','root','','project');
                $qry="select * from admin where uname='$a'" ;
                echo "select * from admin where uname='$a'";
                $res = $link->query($qry);
                $row = $res->fetch_assoc();
                if(!$row){echo"Invalid ID";}
                if($row["pwd"]==$_POST['pwd']){header("location:enter.html");
                
                }
                else{echo 'Invalid password';}
                mysqli_close($link);
            }
        ?>
        </form>
    </body>
</html>