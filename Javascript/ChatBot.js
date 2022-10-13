document.getElementById("send").onclick = function() {
    var msg1 = document.getElementById('msg1');
    var msg2 = document.getElementById('msg2');
    var usermsg = document.getElementById('usermsg');
    var elem = document.getElementById('reply');
    var elem2 = document.getElementById('reply2');

    msg1.innerHTML = usermsg.value;
    elem.style.visibility = 'visible';
    if (usermsg.value == "") {
        msg2.innerHTML = "please type a word like sunburn , Frostbite , Fainting..etc 😎"
    } else if (usermsg.value == "injury") {
        msg2.innerHTML = "Please <a href='https://www.mayoclinic.org/first-aid/first-aid-spinal-injury/basics/art-20056677' id='link'>Click Here</a> to learn about " + usermsg.value;
    } else if (usermsg.value == "sunburn") {
        msg2.innerHTML = "Please <a href='https://www.mayoclinic.org/first-aid/first-aid-sunburn/basics/art-20056643' id='link'>Click Here</a> to learn about " + usermsg.value;
    } else if (usermsg.value == "Nosebleeds") {
        msg2.innerHTML = "Please <a href='https://www.mayoclinic.org/first-aid/first-aid-nosebleeds/basics/art-20056683' id='link'>Click Here</a> to learn about " + usermsg.value;
    } else if (usermsg.value == "burn") {
        msg2.innerHTML = "Please <a href='https://www.mayoclinic.org/first-aid/first-aid-burns/basics/art-20056649' id='link'>Click Here</a> to learn about " + usermsg.value;
    } else if (usermsg.value == "choking") {
        msg2.innerHTML = "Please <a href='https://www.mayoclinic.org/first-aid/first-aid-choking/basics/art-20056637' id='link'>Click Here</a> to learn about " + usermsg.value;
    } else if (usermsg.value == "Fainting") {
        msg2.innerHTML = "Please <a href='https://www.mayoclinic.org/first-aid/first-aid-fainting/basics/art-20056606' id='link'>Click Here</a> to learn about " + usermsg.value;
    } else if (usermsg.value == "Frostbite") {
        msg2.innerHTML = "Please <a href='https://www.mayoclinic.org/first-aid/first-aid-frostbite/basics/art-20056653' id='link'>Click Here</a> to learn about " + usermsg.value;
    } else {
        msg2.innerHTML = "Sorry I cant find anything on that I'm still learning 😥"
    }


    document.getElementById("link").onclick = function() {
        msg1.innerHTML = '';
        msg2.innerHTML = '';
        usermsg.innerHTML = '';
        elem.style.visibility = 'hidden';
        elem2.style.visibility = 'hidden';
    }

}