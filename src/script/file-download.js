const blocks = document.querySelectorAll(".file-block");


function download(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    // a.target = "_blank";
    a.download = filename;
    a.click();
}


blocks.forEach(block => {
    const filepath = block.attributes.getNamedItem("file").value;
    
    block.addEventListener("click", () => {download("../src/dots/", filepath)});
});
