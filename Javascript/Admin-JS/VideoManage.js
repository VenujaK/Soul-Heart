var VidName, VidLink, gg;
gg = 'gggggggggggggggggggggggggggggg';

function getVidinfo() {
    VidName = document.getElementById('VidTitle').value;
    VidLink = document.getElementById('VidLink').value;
    console.log(VidName, VidLink);


}

function Clear() {
    document.getElementById('VidTitle').value = "";
    document.getElementById('VidLink').value = "";
}
// insert
document.getElementById("insertVid").onclick = function() {
    getVidinfo();
    if (VidName.length == 0 || VidLink.length == 0) {
        alert('Please Fill All the Details');
    } else {
        firebase
            .database()
            .ref("VidDetails/" + VidName)
            .set({
                vidname: VidName,
                vidlink: VidLink,
            });

        alert("Data Inserted");
        Clear();
        SelectVidData('Vidcontent');


    }
};

// find
document.getElementById("readVid").onclick = function() {
    getVidinfo();
    if (VidName.length == 0) {
        alert('Please Provide the Video name');
    } else {
        firebase
            .database()
            .ref("VidDetails/" + VidName)
            .on("value", function(snap) {
                document.getElementById("VidTitle").value = snap.val().vidname;
                document.getElementById("VidLink").value = snap.val().vidlink;
            });
    }

};
document.getElementById("updateVid").onclick = function() {
    getVidinfo();

    if (VidName.length == 0 || VidLink.length == 0) {
        alert('Please Fill All the Details');
    } else {
        firebase
            .database()
            .ref("VidDetails/" + VidName)
            .update({
                vidname: VidName,
                vidlink: VidLink,
            });
        alert("Data Updated");
        document.getElementById('VidTitle').value;
        document.getElementById('VidLink').value;
        Clear();
        SelectVidData('Vidcontent');

    }

};
document.getElementById("deleteVid").onclick = function() {
    getHosinfo();
    if (VidName.length == 0) {
        alert('Please Fill Provide the Video name');
    } else {
        firebase
            .database()
            .ref("VidDetails/" + VidName)
            .remove();
        alert("Data Deleted");
        document.getElementById('VidTitle').value;
        document.getElementById('VidLink').value;
        Clear();
        SelectVidData('Vidcontent');

    }
};

try {
    // get video data
    db.collection('VidDetails').get().then((snapshot) => {
        snapshot.document.forEach(document => {
            console.log(document.data());
        })
    })
} catch (error) {

}


SelectVidData();

// Video Details Table
function SelectVidData(tableid) {
    console.log("WORKING HERE ");
    // document.getElementById(tableid).innerHTML = '';
    var videoContentArea = document.getElementById('vid');
    firebase.database().ref('VidDetails').once('value',
        function(currentRecord) {
            console.log("Sontent are");
            console.log(videoContentArea);
            // console.log(Allrecords);
            // AllRecords.forEach(
            //     function(CurrentRecord) {
            //         var VideoName = CurrentRecord.val().vidname;
            //         var VideoLink = CurrentRecord.val().vidlink;
            //         AddItemsToTable(VideoName, VideoLink, tableid);

            //     }
            // );
        }
    );
}

function AddItemsToTable(VideoName, VideoLink, tableid) {
    var tbody = document.getElementById(tableid);
    var trow = document.createElement('tr');
    var td1 = document.getElementById('vidTitle');
    var td2 = document.getElementById('link');
    td1.innerHTML = VideoName;
    td2.innerHTML.href = VideoLink;
    trow.appendChild(td1);
    trow.appendChild(td2);
    tbody.appendChild(trow);
}
