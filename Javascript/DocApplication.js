var DocReqName, DocReqUsname, DocReqEmail, DocReqContact, DocReqPsword, DocReqSpeciality;

function getDocReqinfo() {
    DocReqName = document.getElementById('Reqfullname').value;
    DocReqUsname = document.getElementById('Requsername').value;
    DocReqEmail = document.getElementById('ReqEmail').value;
    DocReqContact = document.getElementById('ReqContactNo').value;
    DocReqPsword = document.getElementById('ReqPsword').value;
    DocReqSpeciality = document.getElementById('ReqSpecialist').value;
    console.log(DocReqName, DocReqUsname, DocReqEmail, DocReqContact, DocReqPsword, DocReqPsword);
}

function gg() {
    firebase.database().ref('DocDetails/').limitToLast(1).on('child_added', function(snapshot) {
        console.log(snapshot.val().docid); // gives key and value pair
    });
}
// Insert
document.getElementById("DocReqSubmit").onclick = function() {
    getDocReqinfo();
    if (DocReqName.length == 0 || DocReqUsname.length == 0 || DocReqEmail.length == 0 || DocReqContact.length == 0 || DocReqPsword.length == 0 || DocReqSpeciality.length == 0) {
        alert('Please Fill All the Details');
    } else {
        firebase
            .database()
            .ref("DocReqDetails/" + DocReqName)
            .set({
                docreqname: DocReqName,
                docrequsname: DocReqUsname,
                docreqemail: DocReqEmail,
                docreqcontact: DocReqContact,
                docreqpsword: DocReqPsword,
                docreqspeciality: DocReqSpeciality,
            });

        alert("Request Submitted");
        document.getElementById('Reqfullname').value = "";
        document.getElementById('Requsername').value = "";
        document.getElementById('ReqEmail').value = "";
        document.getElementById('ReqContactNo').value = "";
        document.getElementById('ReqPsword').value = "";
        document.getElementById('ReqSpecialist').value = "";
    }

};