<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <!-- CSS File -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>
        .btn {
            margin-top: 5px;
            font-weight: 600;
            background-color: #007BFF;
        }

        .btn:hover {
            transform: translateY(-2px);
        }
    </style>
    <link rel="stylesheet" href="./CSS/VideoGallery.css" />
    <title>Video Gallery</title>

    <!-- Firebase Libraries -->
    <script src="https://www.gstatic.com/firebasejs/8.4.2/firebase.js"></script>
    <script src="./Javascript/fireConfig.js"></script>





</head>

<body>
    <?php @include('./Components/Header.php'); ?>
    <main class="main">
        <script>
            var gg = 'gggggggggggggggggggggggggggggg';
        </script>

        <div class="content" id="Vidcontent">
            <div class="videos" id="vid">

            </div>




        </div>

        </div>

    </main>
    <script>
        firebase.initializeApp(firebaseConfig);
        var firebaseRef = firebase.database().ref("ArtDetails");
        firebaseRef.once("value", function(snapshot) {
            var data = snapshot.val();
            for (let i in data) {
                console.log(data[i]);
            }
        })
    </script>




    <script>
        // Video Details Table
        function SelectVidData(tableid) {
            console.log("WORKING HERE ");

            var firebaseRef = firebase.database().ref("ArtDetails");
            firebaseRef.once("value", function(snapshot) {
                var data = snapshot.val();
                var videoContentArea = document.getElementById('vid');

                for (let i in data) {


                    videoContentArea.innerHTML = videoContentArea.innerHTML + `
                                <div class="video">
                                <img class="thumbnail" id="link" src="./assets/Img1.png">
           
                                <div class="details">

                                    <div class="title">
                                        <h3 id="vidTitle">
                                        ${data[i].arttitle}
                                        </h3>
                                        <a href="">
                                            By ${data[i].artauthor}
                                        </a>
                                        <span> Refer this carefully </span>
                                        <a href="${data[i].artcontent}" class="btn" style="color:#ffffff">read more</a>
                                    </div>
                                </div>
                            </div>

                                `;


                    // console.log(data[i]);

                    // videoContentArea.append('<div class="video"><iframe class="thumbnail" id="link" src="https://www.youtube.com/embed/nH8o-bgwo_g"></iframe><div class="details"><div class="title"><h3 id="vidTitle">First Aid for Snake Bite</h3> <a href="">By Admin </a><span> Refer this carefully </span></div></div></div>');
                    // videoContentArea.append('<h1>sf sdfds fjs dkf</h1>');
                }
            })



            // document.getElementById(tableid).innerHTML = '';
            //             firebase.database().ref('VidDetails').once('value',
            //                 function(currentRecord) {
            //                     var videoContentArea = document.getElementById('vid');
            //                     console.log("Sontent are");
            //                     console.log(videoContentArea);
            //                     console.log(currentRecord);

            //                     //     <div class="video">
            //                     //     <iframe class="thumbnail" id="link" src="https://www.youtube.com/embed/nH8o-bgwo_g"></iframe>

            //                     //     <div class="details">

            //                     //         <div class="title">
            //                     //             <h3 id="vidTitle">
            //                     //                 First Aid for Snake Bite

            //                     //             </h3>
            //                     //             <a href="">
            //                     //                 By Admin
            //                     //             </a>
            //                     //             <span> Refer this carefully </span>
            //                     //         </div>
            //                     //     </div>
            //                     // </div>


            //                     videoContentArea.innerHTML = `
            //                     <div class="video">
            //                     <iframe class="thumbnail" id="link" src="https://www.youtube.com/embed/nH8o-bgwo_g"></iframe>
            // ${currentRecord.vidname}
            //                     <div class="details">

            //                         <div class="title">
            //                             <h3 id="vidTitle">
            //                                 First Aid for Snake Bite

            //                             </h3>
            //                             <a href="">
            //                                 By Admin
            //                             </a>
            //                             <span> Refer this carefully </span>
            //                         </div>
            //                     </div>
            //                 </div>

            //                     `;


            //                     // console.log(Allrecords);
            //                     // AllRecords.forEach(
            //                     //     function(CurrentRecord) {
            //                     //         var VideoName = CurrentRecord.val().vidname;
            //                     //         var VideoLink = CurrentRecord.val().vidlink;
            //                     //         AddItemsToTable(VideoName, VideoLink, tableid);

            //                     //     }
            //                     // );
            //                 }
            // );
        }

        SelectVidData();
    </script>


    <!-- <script src="./Javascript/Admin-JS/VideoManage.js"></script> -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>