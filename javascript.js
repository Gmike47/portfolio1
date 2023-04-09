const showmess = () => {
    const copyMess = document.getElementsByClassName('message')[0];
    copyMess.style.display = "block";
}

const unshowMess = () => {
    const copyMess = document.getElementsByClassName('message')[0];
    copyMess.style.display = "none";
}

function copyToClipboard() {
    navigator.clipboard.writeText('@gmail.com');
    showmess();
    setTimeout(unshowMess, 2000)
}

//creates a function to copy email adress to clipboard, i.e. ctrl+c