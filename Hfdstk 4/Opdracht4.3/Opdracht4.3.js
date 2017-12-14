var plaatjes = [1,2,3];
var slideholder1 = document.getElementById("slideholder1");
var slideholder2 = document.getElementById("slideholder2");
var slideholder3 = document.getElementById("slideholder3");
var teller = 0;


slideholder1.style.backgroundImage = "url('crookappogen/crookogen1.jpg')";
slideholder1.addEventListener("click", function () {
    slideholder1.style.backgroundImage = "url('crookappogen/crookogen" + getPicture() + ".jpg')";
});

slideholder2.style.backgroundImage = "url('crookappneus/crookneus1.jpg')";
slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url('crookappneus/crookneus" + getPicture() + ".jpg')"
});

slideholder3.style.backgroundImage = "url('crookappmond/crookmond1.jpg')";
slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url('crookappmond/crookmond" + getPicture() + ".jpg ')"
});



function getPicture(){
    if(teller >= plaatjes.length){
        teller = 1;
    }else{
        teller++
    }
    console.log(teller);
    return teller;

}
