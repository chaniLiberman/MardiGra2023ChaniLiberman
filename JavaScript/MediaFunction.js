let thePictures = [
    "Images/imagesToMedia/mardi1.jpg",
    "Images/imagesToMedia/mardi2.jpg",
    "Images/imagesToMedia/mardi3.webp",
    "Images/imagesToMedia/mardi4.jpg",
    "Images/imagesToMedia/mardi5.jpg",
    "Images/imagesToMedia/mardi6.jpg",
    "Images/imagesToMedia/mardi7.jpg",
    "Images/imagesToMedia/mardi8.jpg",
    "Images/imagesToMedia/mardi9.jpg",
    "Images/imagesToMedia/mardi10.jpg",
    "Images/imagesToMedia/mardi11.jpg",
    "Images/imagesToMedia/mardi12.jpg",
    "Images/imagesToMedia/mardi13.jpg",
    "Images/imagesToMedia/mardi14.jpg",
    "Images/imagesToMedia/mardi15.jpg",
    "Images/imagesToMedia/mardi16.jpg",
];

function showPictures() {
    let html = '';
    for (let i = 0; i < thePictures.length; i++) {
        html +=
            `<div class="col-md-3 mb-3">
                <img loading="lazy" src="${thePictures[i]}" data-bs-toggle="modal" data-bs-target="#infoModal" onclick=setModal(${i}) >
            </div>`
    }
    document.getElementById("pictures").innerHTML = html;

}
showPictures();

function setModal(index) {
    document.querySelector(".modal-header img").src = thePictures[index];

}
// function close() {
//     aria - hidden="false"
// }