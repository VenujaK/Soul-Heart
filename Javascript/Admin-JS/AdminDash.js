function test() {
    $(".dsh").css('visibility', 'visible');
    $(".Art").css('visibility', 'hidden');
    $(".Vid").css('visibility', 'hidden');
    $(".DocDetail").css('visibility', 'hidden');
    $(".Req").css('visibility', 'hidden');
    $(".User").css('visibility', 'hidden');
    $(".DocManage").css('visibility', 'hidden');
    $(".HosDetails").css('visibility', 'hidden');
}

function loading() {
    test();
    SelectHosData('hosTable');
    SelectHosData('hosTable2');
    SelectDocData('DocTable');
    DocCount();
    ArtCount();
    SelectDocReqData('DocReqTable');
    ReqCount();
    VidCount();
}

function DocCount() {
    firebase.database().ref("DocDetails").once('value', function(snapshot) {
        var docCount = snapshot.numChildren();
        console.log(docCount);
        document.getElementById('doctorcount').innerHTML = docCount + '</br><span>Doctors</span>';
    });
}

function ArtCount() {
    firebase.database().ref("ArtDetails").once('value', function(snapshot) {
        var artcount = snapshot.numChildren();
        console.log(artcount);
        document.getElementById('articlecount').innerHTML = artcount + '</br><span>Articles</span>';
    });
}

function ReqCount() {
    firebase.database().ref("DocReqDetails").once('value', function(snapshot) {
        var reqcount = snapshot.numChildren();
        console.log(reqcount);
        document.getElementById('reqcount').innerHTML = reqcount + '</br><span>Requests</span>';
    });
}

function VidCount() {
    firebase.database().ref("VidDetails").once('value', function(snapshot) {
        var vidcount = snapshot.numChildren();
        console.log(vidcount);
        document.getElementById('vidcount').innerHTML = vidcount + '</br><span>Videos</span>';
    });
}
$(".nav").click(function() {
    $("#mySidenav").css('width', '70px');
    $("#main").css('margin-left', '70px');
    $(".logo").css('visibility', 'hidden');
    $(".logo span").css('visibility', 'hidden');
    $(".logo span").css('margin-left', '-10px');
    $(".icon-a").css('visibility', 'hidden');
    $(".icons").css('visibility', 'visible');
    $(".icons").css('margin-left', '-8px');
    $(".nav").css('display', 'none');
    $(".nav2").css('display', 'block');


});

$(".nav2").click(function() {
    $("#mySidenav").css('width', '300px');
    $("#main").css('margin-left', '300px');
    $(".logo").css('visibility', 'visible');
    $(".logo span").css('visibility', 'visible');
    $(".icon-a").css('visibility', 'visible');
    $(".icons").css('visibility', 'visible');
    $(".nav").css('display', 'block');
    $(".nav2").css('display', 'none');
});
// Pages


$("#dsh").click(function() {
    showHideEllements(['.Art', '.Vid', '.DocDetail', '.Req', '.User', '.DocManage', '.HosDetails'], false);
    showHideEllements(['.dsh'], true);
});
$("#Art").click(function() {
    showHideEllements(['.dsh', '.Vid', '.DocDetail', '.Req', '.User', '.DocManage', '.HosDetails'], false);
    showHideEllements(['.Art'], true);
});
$("#Vid").click(function() {
    showHideEllements(['.dsh', '.Art', '.DocDetail', '.Req', '.User', '.DocManage', '.HosDetails'], false);
    showHideEllements(['.Vid'], true);
});

$("#DocDetail").click(function() {
    showHideEllements(['.dsh', '.Vid', '.Art', '.Req', '.User', '.DocManage', '.HosDetails'], false);
    showHideEllements(['.DocDetail'], true);
});
$("#Req").click(function() {
    showHideEllements(['.dsh', '.Vid', '.DocDetail', '.Art', '.User', '.DocManage', '.HosDetails'], false);
    showHideEllements(['.Req'], true);
});
$("#User").click(function() {
    showHideEllements(['.dsh', '.Vid', '.DocDetail', '.Req', '.Art', '.DocManage', '.HosDetails'], false);
    showHideEllements(['.User'], true);
});
$("#DocManage").click(function() {
    showHideEllements(['.dsh', '.Vid', '.DocDetail', '.Req', '.User', '.Art', '.HosDetails'], false);
    showHideEllements(['.DocManage'], true);
});
$("#HosDetails").click(function() {

    showHideEllements(['.dsh', '.Vid', '.DocDetail', '.Req', '.User', '.DocManage', '.Art'], false);
    showHideEllements(['.HosDetails'], true);
});

function showHideEllements(elements, isShow) {
    try {
        for (let index = 0; index < elements.length; index++) {
            $(elements[index]).css('visibility', isShow ? 'visible' : 'hidden');
        }
    } catch (error) {

    }

}
showHideEllements();
// Article Image Upload
function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function() {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function() {
    $('.image-upload-wrap').removeClass('image-dropping');
});





try {
    // Video Uploader
    const form = document.querySelector("form"),
        fileInput = document.querySelector(".file-input"),
        progressArea = document.querySelector(".progress-area"),
        uploadedArea = document.querySelector(".uploaded-area");

    form.addEventListener("click", () => {
        fileInput.click();
    });
    fileInput.onchange = ({ target }) => {
        let file = target.files[0];
        if (file) {
            let fileName = file.name;
            if (fileName.length >= 12) {
                let splitName = fileName.split('.');
                fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
            }
            uploadFile(fileName);
        }
    }
} catch (error) {

}


function uploadFile(name) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/upload.php");
    xhr.upload.addEventListener("progress", ({ loaded, total }) => {
        let fileLoaded = Math.floor((loaded / total) * 100);
        let fileTotal = Math.floor(total / 1000);
        let fileSize;
        (fileTotal < 1024) ? fileSize = fileTotal + " KB": fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB";
        let progressHTML = `<li class="row">
                          <i class="fas fa-file-alt"></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${name} • Uploading</span>
                              <span class="percent">${fileLoaded}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%"></div>
                            </div>
                          </div>
                        </li>`;
        uploadedArea.classList.add("onprogress");
        progressArea.innerHTML = progressHTML;
        if (loaded == total) {
            progressArea.innerHTML = "";
            let uploadedHTML = `<li class="row">
                            <div class="content upload">
                              <i class="fas fa-file-alt"></i>
                              <div class="details">
                                <span class="name">${name} • Uploaded</span>
                                <span class="size">${fileSize}</span>
                              </div>
                            </div>
                            <i class="fas fa-check"></i>
                          </li>`;
            uploadedArea.classList.remove("onprogress");
            uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
        }
    });
    let data = new FormData(form);
    xhr.send(data);
}


/* Video Uploader */