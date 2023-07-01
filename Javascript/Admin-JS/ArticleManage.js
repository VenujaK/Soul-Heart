var Title, Author, Content, ArtImage;

function getArtinfo() {
    Title = document.getElementById('Title').value;
    Author = document.getElementById('Author').value;
    Content = document.getElementById('Content').value;

    console.log(Title, Author, Content);
}

function Clear() {
    document.getElementById('Title').value = "";
    document.getElementById('Author').value = "";
    document.getElementById('Content').value = "";
}
// insert
document.getElementById("insertArt").onclick = function() {
    getArtinfo();
    if (Title.length == 0 || Author.length == 0 || Content.length == 0) {
        alert('Please Fill All the Details');
    } else {
        firebase
            .database()
            .ref("ArtDetails/" + Title)
            .set({
                arttitle: Title,
                artauthor: Author,
                artcontent: Content,

            });

        alert("Data Inserted");
        ArtCount();
        // SelectHosData('hosTable');
        // SelectHosData('hosTable2');
        Clear();

    }

};
// find
document.getElementById("readArt").onclick = function() {
        getArtinfo();
        if (Title.length == 0) {
            alert('Please Provide the Article Name');
        } else {
            firebase
                .database()
                .ref("ArtDetails/" + Title)
                .on("value", function(snap) {
                    document.getElementById('Title').value = snap.val().arttitle;
                    document.getElementById('Author').value = snap.val().artauthor;
                    document.getElementById('Content').value = snap.val().artcontent;

                });

        }
        // SelectHosData('hosTable');
        // SelectHosData('hosTable2');
    }
    // Update
document.getElementById("updateArt").onclick = function() {
        getArtinfo();

        if (Title.length == 0 || Author.length == 0 || Content.length == 0) {
            alert('Please Fill All the Details');
        } else {
            firebase
                .database()
                .ref("ArtDetails/" + Title)
                .update({
                    arttitle: Title,
                    artauthor: Author,
                    artcontent: Content,
                });
            alert("Data Updated");
            ArtCount();
            Clear();
            //     SelectHosData('hosTable');
            //     SelectHosData('hosTable2');
            //     SelectHosData('hosTable3');
            // }

        }
    }
    // Delete
document.getElementById("deleteArt").onclick = function() {
    getDocinfo();
    if (Title.length == 0) {
        alert('Please Provide the Article Name');
    } else {
        firebase
            .database()
            .ref("ArtDetails/" + Title)
            .remove();
        alert("Data Deleted");
        ArtCount();
        Clear();
        // SelectHosData('hosTable');
        // SelectHosData('hosTable2');
        // SelectHosData('hosTable3');
    }
}
