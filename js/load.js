let myVar;

function load() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loadingImg").style.visibility = "hidden";
    document.getElementById("content-header").style.visibility = "visible";
    document.getElementById("content-container").style.visibility = "visible";
    document.getElementById("content-footer").style.visibility = "visible";
}
load();
showPage();