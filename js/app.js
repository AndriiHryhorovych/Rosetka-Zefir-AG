$(document).ready(function(){
 	var sliderOptions = {
  	prevArrow: '<div class="prev-button"><svg><use href="#chevron-right"></use> </svg> </div>',
  	nextArrow: '<div class="next-button"><svg><use href="#chevron-right"></use> </svg> </div>',
  };
  $('.home__banner-slider').slick(sliderOptions);
});

// $(document).on('ready', function(){
// 	alert('jQuery is ok');
// })

// $('.header__search form button').on('click', function(){
// 	var searthTerm = $('.header__search form input').val();
// 	alert(searthTerm);
// })

$(document).on('click', '.header__search form button', function(){
	var searthTerm = $('.header__search form input').val();
	alert(searthTerm);
})

$(document).on('click', '.header__menu-toggle', function(){
	//$(this) == $('.header__menu-toggle');
	
	// if ($(this).hasClass('opened')){
	// 	$(this).removeClass('opened');
	// } else {
	//  $(this).addClass('opened');
	// }

	$(this).toggleClass('opened');//аналог попереднього блоку - перемикач класів
	//Змінюємо клас для кнопки
	$('.slide-menu').toggleClass('opened');
})


	

	//var firstName = 'Андрій';
	//var lastName = 'Григорович';
	//console.log(firstName+' '+lastName);
	//var fullName = firstName + ' ' + lastName;
	//console.log(fullName);

	var myData = {
		firstName: 'Andrii',
		lastName: 'Hryhorovych',
		age: 52,
	}

	function fullNameFunction(first, last){
 		var fullName = first + ' ' + last;
 		return fullName;
	}
	var myFullName = fullNameFunction(myData.firstName, myData.lastName);
	// alert(myFullName);
