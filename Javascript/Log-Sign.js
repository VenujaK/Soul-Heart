const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

function adminLogin() {
    var Adminusname = document.getElementById('adminusname').value;
    var Adminpsword = document.getElementById('adminpsword').value;
    if (Adminusname.length == 0 || Adminpsword.length == 0) {
        alert('Please Fill All the Details');
    } else if (Adminusname == 'admin' && Adminpsword == '1234') {
        // alert('gg');
        // window.open("AdminDashboard.html", self);
        // window.location.href = "AdminDashboard.html";
        // location.href = './AdminDashboard.html';
        window.open('AdminDashboard.html').self;
    } else {
        alert('Wrong Credentials');
    }
}

function DoctorLogin() {
    var Doctorusname, Doctorpsword;
    Doctorusname = document.getElementById('doctorusname').value;
    Doctorpsword = document.getElementById('doctorpsword').value;
    var isUsernameCorrect = false;
    var isPasswordCorrect = false;

    if (Doctorusname.length == 0 || Doctorpsword.length == 0) {
        alert('Please Fill All the Details');
    } else {

        firebase.database().ref('DocDetails').on('value',
            function(AllRecords) {

                AllRecords.forEach(
                    function(CurrentRecord) {
                        if (CurrentRecord.val().docusname == Doctorusname) {
                            console.log("Name Matching");
                            isUsernameCorrect = true;
                            if (CurrentRecord.val().docpsword == Doctorpsword) {
                                isPasswordCorrect = true;
                                console.log("Password Matching");
                            }
                        }
                    }
                );

                if (isUsernameCorrect && isPasswordCorrect) {
                    window.open('DoctorUI.html').self;
                } else {
                    if (!isUsernameCorrect) {
                        alert('Wrong Username');
                    } else {
                        alert('Wrong Password');
                    }
                }

            }
        );


        //     var firebaseRef = firebase.database().ref("DocDetails");
        //     firebaseRef.once("value", function(snapshot) {
        //             var data = snapshot.val();
        //             console.log(data);
        //             if (Doctorusname == data.docusname && Doctorpsword == data.docpsword) {
        //                 alert('gg');

        //             } else {
        //                 alert('Wrong Credentials');

        //             }
        //             // var data = snapshot.val();
        //             // for (let i in data) {
        //             //     console.log(data[i]);
        //             // }
        //         })
        //         // firebase
        //         //     .database()
        //         //     .ref("DocDetails/")
        //         //     .on("value", function(snapshot) {
        //         //         if (Doctorusname == snapshot.val().docusname && Doctorpsword == snap.val().docpsword) {
        //         //             alert('gg');

        //     //         } else {
        //     //             alert('Wrong Credentials');

        //     //         }
        //     //         // Doctorusname = snap.val().docusname;
        //     //         // Doctorpsword = snap.val().docpsword;

        //     //     });
    }
};