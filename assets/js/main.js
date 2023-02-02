function main() {
    var banner = document.getElementById("banner");
    var gif = document.getElementById("gif");
    var panorama = document.getElementById("panorama");

    banner.addEventListener("click", esconderBanner);
    gif.addEventListener("click", esconderBanner);

    function esconderBanner() {
        banner.style.display = "none"
        gif.style.display = "none"
    }
}

main();