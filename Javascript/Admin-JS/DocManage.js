var DocID, DocName, DocUsname, DocEmail, DocContact, DocPsword, DocSpeciality;

function getDocinfo() {
    DocID = document.getElementById('DocID').value;
    DocName = document.getElementById('DocName').value;
    DocUsname = document.getElementById('DocUsname').value;
    DocEmail = document.getElementById('DocEmail').value;
    DocContact = document.getElementById('DocContact').value;
    DocPsword = document.getElementById('DocPsword').value;
    DocSpeciality = document.getElementById('DocSpeciality').value;
    console.log(HosName, HosContact, HosLocation);
}

function Clear() {
    document.getElementById('DocID').value = "";
    document.getElementById('DocName').value = "";
    document.getElementById('DocUsname').value = "";
    document.getElementById('DocEmail').value = "";
    document.getElementById('DocContact').value = "";
    document.getElementById('DocPsword').value = "";
    document.getElementById('DocSpeciality').value = "";
}
// insert
document.getElementById("insertDoc").onclick = function() {
    getDocinfo();
    if (DocID.length == 0 && DocName.length == 0 && DocUsname.length == 0 && DocEmail.length == 0 && DocContact.length == 0 && DocPsword.length == 0 && DocSpeciality.length == 0) {
        alert('Please Fill All the Details');
    } else {
        firebase
            .database()
            .ref("DocDetails/" + DocID)
            .set({
                docid: DocID,
                docname: DocName,
                docusname: DocUsname,
                docemail: DocEmail,
                doccontact: DocContact,
                docpsword: DocPsword,
                docspeciality: DocSpeciality,
            });

        alert("Data Inserted");
        DocCount();
        // SelectHosData('hosTable');
        // SelectHosData('hosTable2');
        Clear();
    }

};
// find
document.getElementById("readDoc").onclick = function() {
        getDocinfo();
        if (DocID.length == 0) {
            alert('Please Provide the Doctor ID');
        } else {
            firebase
                .database()
                .ref("DocDetails/" + DocID)
                .on("value", function(snap) {
                    document.getElementById('DocID').value = snap.val().docid;
                    document.getElementById('DocName').value = snap.val().docname;
                    document.getElementById('DocUsname').value = snap.val().docusname;
                    document.getElementById('DocEmail').value = snap.val().docemail;
                    document.getElementById('DocContact').value = snap.val().doccontact;
                    document.getElementById('DocPsword').value = snap.val().docpsword;
                    document.getElementById('DocSpeciality').value = snap.val().docspeciality;
                });
            DocCount();
        }
        // SelectHosData('hosTable');
        // SelectHosData('hosTable2');
    }
    // Update
document.getElementById("updateDoc").onclick = function() {
        getDocinfo();

        if (DocID.length == 0 && DocName.length == 0 && DocUsname.length == 0 && DocEmail.length == 0 && DocContact.length == 0 && DocPsword.length == 0 && DocSpeciality.length == 0) {
            alert('Please Fill All the Details');
        } else {
            firebase
                .database()
                .ref("DocDetails/" + DocID)
                .update({
                    docid: DocID,
                    docname: DocName,
                    docusname: DocUsname,
                    docemail: DocEmail,
                    doccontact: DocContact,
                    docpsword: DocPsword,
                    docspeciality: DocSpeciality,
                });
            alert("Data Updated");
            DocCount();
            Clear();
            //     SelectHosData('hosTable');
            //     SelectHosData('hosTable2');
            //     SelectHosData('hosTable3');
            // }

        }
    }
    // Delete
document.getElementById("deleteDoc").onclick = function() {
        getDocinfo();
        if (DocID.length == 0) {
            alert('Please Provide the Doctor ID');
        } else {
            firebase
                .database()
                .ref("DocDetails/" + DocID)
                .remove();
            alert("Data Deleted");
            DocCount();
            Clear();
            // SelectHosData('hosTable');
            // SelectHosData('hosTable2');
            // SelectHosData('hosTable3');
        }
    }
    // Doctor Details table
function SelectDocData(tableid) {
    document.getElementById(tableid).innerHTML = '';
    firebase.database().ref('DocDetails').once('value',
        function(AllRecords) {
            AllRecords.forEach(
                function(CurrentRecord) {
                    var DoctorID = CurrentRecord.val().docid;
                    var DoctorName = CurrentRecord.val().docname;
                    var DoctorUsname = CurrentRecord.val().docusname;
                    var DoctorEmail = CurrentRecord.val().docemail;
                    var DoctorContact = CurrentRecord.val().doccontact;
                    var DoctorPsword = CurrentRecord.val().docpsword;
                    var DoctorSpecialist = CurrentRecord.val().docspeciality;
                    AddItemsToDocTable(DoctorID, DoctorName, DoctorUsname, DoctorEmail, DoctorContact, DoctorPsword, DoctorSpecialist, tableid);

                }
            );
        }
    );
}

// table Data
function AddItemsToDocTable(DoctorID, DoctorName, DoctorUsname, DoctorEmail, DoctorContact, DoctorPsword, DoctorSpecialist, tableid) {
    var tbody = document.getElementById(tableid);
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    td1.innerHTML = DoctorID;
    td2.innerHTML = DoctorName;
    td3.innerHTML = DoctorUsname;
    td4.innerHTML = DoctorEmail;
    td5.innerHTML = DoctorContact;
    td6.innerHTML = DoctorPsword;
    td7.innerHTML = DoctorSpecialist;
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    tbody.appendChild(trow);
}
