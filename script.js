const fullbox = document.getElementById("fullbox");
const fullimg = document.getElementById("fullimg");
const closebutton = document.querySelector("#closebutton");
const button_section = document.querySelectorAll("#button_section button");
const gallery = document.querySelectorAll(".gallery .gallery_items")

// function openimg(imgsrc) {
//     fullbox.style.display="flex";
//     fullimg.src = imgsrc;
// }


closebutton.addEventListener("click",()=>{
    fullbox.style.display="none";
})

gallery.forEach((gallery_items)=>{
    gallery_items.addEventListener("click",function expandimg(picsrc) {
        console.log(picsrc.target.src);
        fullbox.style.display="flex"
        fullimg.src = picsrc.target.src
    })
})
//code for filtering the images



function filterimg(e) {
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")

    console.log("hello");


    gallery.forEach((gallery_items)=>{
        gallery_items.classList.add("hide")
        console.log(gallery_items.dataset.name);
        if (gallery_items.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            gallery_items.classList.remove("hide");
        }
    })
   
}

button_section.forEach((button)=>{
    button.addEventListener("click",filterimg);
})
