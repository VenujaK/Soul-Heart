<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./CSS/HospitalInfo.css">
</head>

<body onload="SelectHosData('hosTable3');">
<?php @include('./Components/Header.php'); ?>
<section>
  <!--for demo wrap-->
  <h1>Hospital Information</h1>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Contact No</th>
          
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody id="hosTable3">
        
      </tbody>
    </table>
  </div>
</section>

 <!-- footer -->
 <footer>
        <?php @include('./Components/Footer.php'); ?>
    </footer>

    <!-- end of footer -->
    <!-- Firebase Libraries -->
<script src="https://www.gstatic.com/firebasejs/8.4.2/firebase.js"></script>
<!-- Firebase Configuration -->
<script src="./Javascript/fireConfig.js"></script>
<!-- Admin Dashboard JS -->
<script src="./Javascript/Admin-JS/AdminDash.js"></script>
<!-- Hospital Details JS -->
<script src="./Javascript/Admin-JS/HospitalDetails.js"></script>
<!-- Jquery Libraries -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


</body>

</html>