
// function to change picture when standing on the picture
function change(id, path) {
    document.getElementById(id).src = path;
}

let theSponsers = [
    {
        logo: "Images/imagesToSponsers/walkOns1.jpg",
        image: "Images/imagesToSponsers/walkOns2.jpg",
        imgOne: "Images/imagesToSponsers/walkOns3.jpg",
        addres: "1009 Poydras St, New Orleans",
        name: "Walk-On's Bistreaux & Bar Home Resturant",
        link: "https://locate.walk-ons.com/nc/wilmington/restaurants-420.html",
        imgTwo: "Images/imagesToSponsers/walkOns4.PNG"
    },
    {
        logo: "Images/imagesToSponsers/ACEhotel1.jpg",
        image: "Images/imagesToSponsers/ACEhotel2.jpg",
        imgOne: "Images/imagesToSponsers/ACEhotel3.jpg",
        addres: "600 Carondelet St New Orleans,",
        name: "Ace Hotel New Orleans",
        link: "https://acehotel.com/new-orleans/rooms/",
        imgTwo: "Images/imagesToSponsers/ACEhotel4.PNG"
    },
    {
        logo: "Images/imagesToSponsers/premiumParking1.jpg",
        image: "Images/imagesToSponsers/premiumParking2.jpg",
        imgOne: "Images/imagesToSponsers/premiumParking3.webp",
        addres: "300 N Peters St, New Orleans,",
        name: " Premium Parking - P402",
        link: "https://www.premiumparking.com/P402",
        imgTwo: "Images/imagesToSponsers/premiumParking4.PNG"
    },
    {
        logo: "Images/imagesToSponsers/sheratonHotel1.jpg",
        image: "Images/imagesToSponsers/sheratonHotel2.jpg",
        imgOne: "Images/imagesToSponsers/sheratonHotel3.webp",
        addres: "500 Canal St, New Orleans,",
        name: "Sheraton New Orleans Hotel",
        link: "https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/rooms/",
        imgTwo: "Images/imagesToSponsers/sheratonHotel4.PNG"
    },
    {
        logo: "Images/imagesToSponsers/ritzCarlton1.PNG",
        image: "Images/imagesToSponsers/ritzCarlton2.jpg",
        imgOne: "Images/imagesToSponsers/ritzCarlton3.jpg",
        addres: "921 Canal St, New Orleans,",
        name: " The Ritz-Carlton, New Orleans",
        link: "https://www.ritzcarlton.com/en/hotels",
        imgTwo: "Images/imagesToSponsers/ritzCarlton4.PNG"
    },
    {
        logo: "Images/imagesToSponsers/huntedMuseum1.webp",
        image: "Images/imagesToSponsers/huntedMuseum2.jpg",
        imgOne: "Images/imagesToSponsers/huntedMuseum3.jpg",
        addres: "826 & 828 N Rampart St, New Orleans,",
        name: " Haunted Museum, New Orleans",
        link: "https://www.neworleans.com/listing/bloody-marys-tours-haunted-museum-and-voodoo-shop/11608/",
        imgTwo: "Images/imagesToSponsers/huntedMuseum4.PNG"
    },
    {
        logo: "Images/imagesToSponsers/museumofDeath1.PNG",
        image: "Images/imagesToSponsers/museumofDeath2.jpg",
        imgOne: "Images/imagesToSponsers/museumofDeath3.webp",
        addres: "227 Dauphine St, New Orleans ,",
        name: " Museum of Death, New Orleans",
        link: "https://www.neworleans.com/listing/museum-of-death/37175/",
        imgTwo: "Images/imagesToSponsers/museumofDeath4.PNG"
    },
    {
        logo: "Images/imagesToSponsers/luisianaMuseum1.webp",
        image: "Images/imagesToSponsers/luisianaMuseum2.webp",
        imgOne: "Images/imagesToSponsers/luisianaMuseum3.jpg",
        addres: "15 Henry Thomas Dr, New Orleans,",
        name: " Louisiana Children's Museum",
        link: "https://www.neworleans.com/listing/louisiana-childrens-museum/2593/",
        imgTwo: "Images/imagesToSponsers/luisianaMuseum4.PNG"
    },
    {
        image: "Images/imagesToSponsers/toSponsers.jpg",
        name: "toSponsers"
    },
];



function showCards() {
    for (let i = 0; i < theSponsers.length; i++) {
        document.getElementById("sponser").innerHTML +=
            `<div class="col-md-4 mb-3">
            <div class="card" style="width: 8rem;">
            <a w-100" data-bs-toggle="modal" data-bs-target="#infoModal" onclick=setModal(${i})>
            <img id="item${i}"
            src="${theSponsers[i].image}" class="card-img-top" alt=${theSponsers[i].name}
            onmouseover="change('item${i}', '${theSponsers[i].logo}')"
            onmouseleave="change('item${i}','${theSponsers[i].image}')"
            style="width: 150px; height: 150px;"
            >
            </a>
            
             </div>
         </div>`
    }

}
showCards();



function setModal(index) {
    document.querySelector("#oneHeader img").src = theSponsers[index].imgOne;
    document.getElementById("theAddress").innerHTML = `
  <div>${theSponsers[index].addres}</div>`
    document.getElementById("theName").innerHTML = `
  <div>${theSponsers[index].name}</div>`
    document.querySelector("#toEnter a").href = theSponsers[index].link;
    document.querySelector("#maps img").src = theSponsers[index].imgTwo;
}

