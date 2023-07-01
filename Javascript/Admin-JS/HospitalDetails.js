//  Hospital Details
var HosName, HosLocation, HosContact;


function getHosinfo() {
    HosName = document.getElementById('HosName').value;
    HosLocation = document.getElementById('HosLocation').value;
    HosContact = document.getElementById('HosContact').value;
    console.log(HosName, HosContact, HosLocation);


}

function Clear() {
    document.getElementById('HosName').value = "";
    document.getElementById('HosLocation').value = "";
    document.getElementById('HosContact').value = "";
}
// insert
document.getElementById("insertHos").onclick = function() {
    getHosinfo();
    if (HosName.length == 0 && HosLocation.length == 0 && HosContact.length == 0) {
        alert('Please Fill All the Details');
    } else {
        firebase
            .database()
            .ref("HosDetails/" + HosName)
            .set({
                hosname: HosName,
                hoslocation: HosLocation,
                hoscontact: HosContact,
            });

        alert("Data Inserted");
        Clear();
        SelectHosData('hosTable');
        SelectHosData('hosTable2');
        SelectHosData('hosTable3');

    }
};
// find
document.getElementById("readHos").onclick = function() {
    getHosinfo();
    if (HosName.length == 0) {
        alert('Please Provide the hospital name');
    } else {
        firebase
            .database()
            .ref("HosDetails/" + HosName)
            .on("value", function(snap) {
                document.getElementById("HosName").value = snap.val().hosname;
                document.getElementById("HosLocation").value = snap.val().hoslocation;
                document.getElementById("HosContact").value = snap.val().hoscontact;
            });
    }

};
document.getElementById("updateHos").onclick = function() {
    getHosinfo();

    if (HosName.length == 0 && HosLocation.length == 0 && HosContact.length == 0) {
        alert('Please Fill All the Details');
    } else {
        firebase
            .database()
            .ref("HosDetails/" + HosName)
            .update({
                hosname: HosName,
                hoslocation: HosLocation,
                hoscontact: HosContact,
            });
        alert("Data Updated");
        document.getElementById('HosName').value;
        document.getElementById('HosLocation').value;
        document.getElementById('HosContact').value;
        Clear();
        SelectHosData('hosTable');
        SelectHosData('hosTable2');
        SelectHosData('hosTable3');
    }

}
document.getElementById("deleteHos").onclick = function() {
    getHosinfo();
    if (HosName.length == 0) {
        alert('Please Fill Provide the Hospital name');
    } else {
        firebase
            .database()
            .ref("HosDetails/" + HosName)
            .remove();
        alert("Data Deleted");
        document.getElementById('HosName').value;
        document.getElementById('HosLocation').value;
        document.getElementById('HosContact').value;
        Clear();
        SelectHosData('hosTable');
        SelectHosData('hosTable2');
        SelectHosData('hosTable3');
    }
};

// Hospital Details Table
function SelectHosData(tableid) {
    document.getElementById(tableid).innerHTML = '';

    var firebaseRef = firebase.database().ref("HosDetails");
    firebaseRef.once("value", function(snapshot) {
        var data = snapshot.val();

        try {
            for (let i in data) {
                console.log("HOSPITAL ");
                console.log(tableid);
                console.log(data[i]);
                var HospitalName = data[i].hosname;
                var HospitalLocation = data[i].hoslocation;
                var HospitalContact = data[i].hoscontact;
                AddItemsToTabled(HospitalName, HospitalLocation, HospitalContact, tableid);
            }
        } catch (error) {

        }

    });


    // firebase.database().ref('HosDetails').once('value',
    //     function(AllRecords) {
    //         AllRecords.forEach(
    //             function(CurrentRecord) {


    //             }
    //         );
    //     }
    // );
}

// $("#HosDetails").click(function() {
//     SelectHosData;
// });
// window.onload = SelectHosData()
// table Data
function AddItemsToTabled(HospitalName, HospitalLocation, HospitalContact, tableid) {

    console.log("DSDO IOPIOPIDOPSIO PDIOPDs");
    console.log(HospitalName);
    console.log(HospitalLocation);
    console.log(HospitalContact);

    var tbody = document.getElementById(tableid);
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    td1.innerHTML = HospitalName;
    td2.innerHTML = HospitalLocation;
    td3.innerHTML = HospitalContact;
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    tbody.appendChild(trow);
}
