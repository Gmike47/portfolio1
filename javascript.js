function copyToClipboard() {
    navigator.clipboard.writeText('@gmail.com').then(() => {alert("email copied")});
}

//creates a function to copy email adress to clipboard, i.e. ctrl+c