/* Code By Webdevtrick ( https://webdevtrick.com ) */
$(document).ready(function () {

	
$('.items').slick({
dots: true,
infinite: true,
speed: 800,
autoplay: true,
autoplaySpeed: 4000,
slidesToShow: 3,
slidesToScroll: 3,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 4,
slidesToScroll: 4,
infinite: true,
dots: true
}
},
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 800,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}


]
});
	
	
	
});
