function showText (el) {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more")
    if(el.previousElementSibling.clientHeight===80) {
        el.previousElementSibling.style.height = "100%";
        dots.style.display = "inline";
        el.innerHTML = "Show Less..." ;
        moreText.style.display = "none";
    } else {
        el.previousElementSibling.style.height = "80px";
        dots.style.display = "none";
        el.innerHTML = "Read More..." ;
        moreText.style.display = "inline";
    }
}
