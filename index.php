<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <!-- Boxicons CDN Link (FAQ) -->
  <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.css ">
  <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
  <!-- Right Arrow icon-->
  <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <title>Soul Heart</title>
  <!-- Css File Location -->
  <link rel="stylesheet" href="./CSS/Main.css">
</head>

<body>
  <?php @include('./Components/Header.php'); ?>
  <div class="container-fluid">
    <img src="./assets/undraw_medicine_b-1-ol.svg" width="100%" height="400px" alt="">
    <input type="button" class="bannerbtn" value="Video Call" id="VideoCall" onclick="videocall();">
    <input type="button" class="bannerbtn" value="1990" id="1990" onclick="call();">
  </div>

  <!-- Article Slider -->
  <h1 class="heading" align="center">Instant Knowledge</h1>
  <div class="container-fluid">
    <div class="row pad" align="center">
      <div class="col-md-3 ">
        <div class="card">
          <div class="imgcrd"><img src="./assets/Blog/rescuer_1.jpg" alt="">
            <div class="text">
              Cardiopulmonary resuscitation (CPR): First aid
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="imgcrd"><img src="./assets/Blog/rescuer_4.jpg" alt=""></div>
          <div class="text"> Chemical splash in the eye: First aid
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="imgcrd"><img src="./assets/Blog/2004.i203.006..paramedic emergency ambulance cartoon set.jpg" alt=""></div>
          <div class="text"> Chest pain: First aid
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="imgcrd"><img src="./assets/Blog/2005.i203.001.paramedic emergency ambulance cartoon set.jpg" alt=""></div>
          <div class="text"> Corneal abrasion (scratch): First aid
          </div>
        </div>
      </div>
    </div>
  </div>
  <h1 class="readMore" align="center"><a href="./Blog.php"> More Articles.....</a></h1>
  <!-- FAQ -->
  <div class="container">
    <div class="FAQ" align="center">
      <div class="image-box">
        <img src="./assets/undraw_social_sharing_re_pvmr.svg" alt="FAQ Image">
      </div>
      <div class="FAQ-text">
        <div class="title">FAQ</div>
        <ul class="faq-text">
          <li>
            <div class="question-arrow">
              <span class="question">What is first aid?</span>
              <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <p>First aid is the first and immediate assistance given to any person with either a minor or serious illness or injury, with care provided to preserve life</p>
            <span class="line"></span>
          </li>
          <li>
            <div class="question-arrow">
              <span class="question">Who are we?</span>
              <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <p>Soul heart is a first aid website which is developed to save life in emergencies.</p>
            <span class="line"></span>
          </li>
          <li>
            <div class="question-arrow">
              <span class="question">What is the success rate of CPR.?</span>
              <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <p>especially if administered immediately after cardiac arrest, can double or triple a persons chance of survival. .</p>
            <span class="line"></span>
          </li>
          <li>
            <div class="question-arrow">
              <span class="question">Why is the beta version of Soul Bot?</span>
              <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <p>Sout bot is a AI based bot which we build to replace the regular searching of the users. Stay tuned you may be suprised in the future</p>
            <span class="line"></span>
          </li>
          <li>
            <div class="question-arrow">
              <span class="question">Is the videos on our website is valid? </span>
              <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <p>Yes all of our videos and articles are validated by professionals </p>
            <span class="line"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div align="center">
    <p>Enjoy the new features of our Soul bot (beta)</p>
    <button class="soulbotbtn" onclick="soulbot()">Click Here</button>
  </div>

  <!-- Footer -->
  <?php @include('./Components/Footer.php'); ?>
  <!-- FAQ -->
  <script>
    let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e) => {
        let clickedLi;
        if (e.target.classList.contains("question-arrow")) {
          clickedLi = e.target.parentElement;
        } else {
          clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
      });
    }

    function call() {
      window.open('tel:1990').self;
    }

    function videocall() {
      window.open('Agora.html').self;
    }

    function soulbot() {
      window.open('chatbot.html').self;
    }
  </script>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>