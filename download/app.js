const siteConfig = {
    fileToDownload: "setup_EasyCracks.zip"
};

((fileName) => {
    document.getElementById("fileName").innerText = fileName;

    let counter = 1;

    let avScan = setInterval(() => {
        if (Math.random() >= 0.5) {
            const el = document.getElementById("av" + counter);

            if (el) {
                el.textContent = "virus free ✅";
                el.style.color = "lightgreen";
                counter++;
            } else {
                clearInterval(avScan);
                location = fileName;
            }
        }
    }, 350);

})(siteConfig.fileToDownload);