<!DOCTYPE html>
<html>

<head>
    <title>Contact Us page</title>
    <link rel="stylesheet" href="./CSS/ContactUs.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css ">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


</head>

<body>
<?php @include('./Components/Header.php'); ?>
    <section class="background firstsection">
        <div class="box-main">
            <div class="firstHalf">
                <p class="text-big">Contact Us</p>
                <br>
                <p class="text-small">
                    You can Contact Us if you face any problem
                </p>
                <br><br>
                <p class="center">
                    Click on the below options to Contact us
                </p>
            </div>
            <br>
            <!-- <div class="lgimg">
                <img src="./images/logo-removebg-preview.png" alt="">
            </div> -->
        </div>
    </section>
    <section class="service">
        <!-- Heading-->
        <h1 class="contopic">
            Options to Contact
        </h1>
        <div class="container">
            <div class="content">
                <div class="left-side">
                    <div class="address details">
                        <i class="fas fa-map-marker-alt" onclick="div_show2()"></i>
                        <div class="topic">Address</div>
                        <div class="text-one">Nugegoda</div>
                        <div class="text-two">Colombo 06</div>
                    </div>
                    <div class="phone details">
                        <i class="fas fa-phone-alt"></i>
                        <div class="topic">Phone</div>
                        <div class="text-one">0769262396</div>
                        <div class="text-two">0788098385</div>
                    </div>
                    <div class="email details">
                        <i class="fas fa-envelope" onclick="div_show()"></i>
                        <div class="topic">Email</div>
                        <div class="text-one">soulheart@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="contact">
            <!-- Popup Div Starts Here -->
            <div id="popupContact">
                <!-- Contact Us Form -->
                <form action="#" id="form" method="post" name="form">
                    <!-- <img id="close" src="images/3.png" onclick="div_hide()"> -->
                    <i id="close" class="fa-solid fa-xmark" onclick="div_hide()"></i>
                    <h2>Contact Us</h2>
                    <hr>
                    <input id="name" name="name" placeholder="Name" type="text">
                    <input id="email" name="email" placeholder="Email" type="text">
                    <textarea id="msg" name="message" placeholder="Message"></textarea>
                    <a href="javascript:%20check_empty()" id="submit">Send</a>
                </form>
            </div>
            <!-- Popup Div Ends Here -->
        </div>
        <div id="location">
            <i id="close2" class="fa-solid fa-xmark" onclick="div_hide2()"></i>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.163841436205!2d79.88364281460511!3d6.870962720933052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a4f6053caa7%3A0xd23eb8e15897ae47!2sICBT%20Nugegoda%20Campus!5e0!3m2!1sen!2slk!4v1654001833187!5m2!1sen!2slk"
                class="loc" width="350" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <!-- Display Popup Button -->
        <!-- <h1>Click Button To Popup Form Using Javascript</h1>
        <button id="popup" onclick="div_show()">Popup</button> -->

    </section>

    <script>
        // Validating Empty Field
        function check_empty() {
            if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
                alert("Fill All Fields !");
            } else {
                document.getElementById('form').submit();
                alert("Form Submitted Successfully...");
            }
        }
        //Function To Display Popup
        function div_show() {
            document.getElementById('contact').style.display = "block";
        }
        //Function to Hide Popup
        function div_hide() {
            document.getElementById('contact').style.display = "none";
        }
        //Function To Display Popup
        function div_show2() {
            document.getElementById('location').style.display = "block";
        }
        //Function to Hide Popup
        function div_hide2() {
            document.getElementById('location').style.display = "none";
        }
    </script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>