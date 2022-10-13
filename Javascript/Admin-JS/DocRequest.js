// Request Table
function SelectDocReqData(tableid) {
    document.getElementById(tableid).innerHTML = '';
    firebase.database().ref('DocReqDetails').once('value',
        function(AllRecords) {
            AllRecords.forEach(
                function(CurrentRecord) {
                    var DoctorreqName = CurrentRecord.val().docreqname;
                    var DoctorreqUsname = CurrentRecord.val().docrequsname;
                    var DoctorreqEmail = CurrentRecord.val().docreqemail;
                    var DoctorreqContact = CurrentRecord.val().docreqcontact;
                    var DoctorreqPsword = CurrentRecord.val().docreqpsword;
                    var DoctorreqSpecialist = CurrentRecord.val().docreqspeciality;
                    AddItemsToDocReqTable(DoctorreqName, DoctorreqUsname, DoctorreqEmail, DoctorreqContact, DoctorreqPsword, DoctorreqSpecialist, tableid);
                }
            );
        }
    );
}



function validateDotor() {
    firebase.database().ref('DocDetails/').limitToLast(1).on('child_added', function(snapshot) {
        console.log(snapshot.val().docid); // gives key and value pair
        var docNo = 0;
        docNo = snapshot.val().docid;
        console.log(docNo);
        firebase
            .database()
            .ref("DocDetails/" + docNo)
            .set({
                docid: docNo++,
                docreqname: td1,
                docrequsname: td2,
                docreqemail: td3,
                docreqcontact: td4,
                docreqpsword: td5,
                docreqspeciality: td6,
            });
        alert("Doctor Approved");
    });

};



function AddItemsToDocReqTable(DoctorreqName, DoctorreqUsname, DoctorreqEmail, DoctorreqContact, DoctorreqPsword, DoctorreqSpecialist, tableid) {
    var tbody = document.getElementById(tableid);
    var trow = document.createElement('tr');
    var td = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');

    td.innerHTML = `<input type="checkbox" class="vv" onclick="validateDotor('${DoctorreqName}')"/>`;
    td1.innerHTML = DoctorreqName;
    td2.innerHTML = DoctorreqUsname;
    td3.innerHTML = DoctorreqEmail;
    td4.innerHTML = DoctorreqContact;
    td5.innerHTML = DoctorreqPsword;
    td6.innerHTML = DoctorreqSpecialist;

    trow.appendChild(td);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    tbody.appendChild(trow);




    // var checkedValue = document.querySelector('.vv:checked').value;

    //     if (document.querySelector('.vv:checked')) {

}