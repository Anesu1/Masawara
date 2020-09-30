$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.carousel').carousel({
    ride:false
})



// var i, tabcontent, tablinks;
// function openTeam(evt, memberName) {
    
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";

//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     var dropDown = document.getElementById(memberName);
//     dropDown.style.display = "block";
//     function closeTab(closeName){
//         var chivhariso = document.getElementById(closeName);
//         chivhariso.style.display = "none";
//     }
//     evt.currentTarget.className += " active";
// }


