// alert("connected!!"); //test
var Lis = document.querySelectorAll("li");

for(var i = 0 ; i < Lis.length ; i++) {
    Lis[i].addEventListener("mouseover", function() {
        this.classList.add("selected"); //prefered convention to toggle class instead of styles.
    });

    Lis[i].addEventListener("mouseout", function() {
        this.classList.remove("selected"); //prefered convention to toggle class instead of styles.
    });

    Lis[i].addEventListener("click", function() {
        this.classList.toggle("done"); //prefered convention to toggle class instead of styles.
    });
};


// firstLi.addEventListener("mouseover" , function() {
//     firstLi.style.color="red";
// });
// firstLi.addEventListener("mouseout" , function() {
//     firstLi.style.color="black";
// });