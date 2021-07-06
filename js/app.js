var favouritesProducts = [];
if (window.localStorage.getItem('product')){
	favouritesProducts = window.localStorage.getItem('product');
	favouritesProducts = favouritesProducts.split(',');
}

console.log(favouritesProducts);
updateFavoritesCounter();
$('button.add-to-favorites').each(function(){
	var product_id = $(this).attr('data-id');
	if (favouritesProducts.includes(product_id) == true){
		$(this).addClass('in-favourites');

	}
});

$(document).on('click', "button.add-to-favorites", function(){
	// отримаэмо id продукут, який додаємо в обрані
	var product_id = $(this).attr('data-id');

	// Отримаємо поточну кількість обраних
	// var currentCount = Number($('#favourites span').html());
	

	if (favouritesProducts.includes(product_id) == true) {
		// прибираємо зі списку обраних
		// визначаємо позицію елементу в списку
		var index = favouritesProducts.indexOf(product_id);

		// приховуэмо залите серце
		$(this).removeClass('in-favourites');
		
		// видаляємо айді продуку з масиву за індексом
		favouritesProducts.splice(index, 1);
		// віднімаємо одиницю від лічильника обраних
		// currentCount--;
	}
	else {
  	// додаэмо айды товару в список обраних
  	favouritesProducts.push(product_id);
		//додаємо один товар до лічильника обраних
		//currentCount = currentCount + 1;
		// currentCount++;
		$(this).addClass('in-favourites');
	};




// зберігаємо список обраних у браузері
window.localStorage.setItem('product', favouritesProducts);

updateFavoritesCounter();

	
});

function updateFavoritesCounter(){
	// оновити дані в html лічильника
	// jQuery
	$('#favourites span').html(favouritesProducts.length);
	// показати лычильник
	if(favouritesProducts.length == 0) {
			$('#favourites span').addClass('empty');
	} else {
		$('#favourites span').removeClass('empty');
	}
	// alert(currentCount);
	console.log(favouritesProducts);
}


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


function createProductHtml(product){
	var html = `<li class="product-card home__product-list-carg">	
									<div class="thumb">
										<button data-id="${product.id}" class="add-to-favorites">
											<svg>
												<use href="#heart"></use>
											</svg>
											<svg  class='filled'>
												<use href="#heart-filled"></use>
											</svg>
										</button>
										<a href="#">
											<img src="${product.image}" alt="">
										</a>
									</div>
									<a href="#" class="title">
										${product.title}
									</a>
									<div class="old-price">
										${product.price*1.2} грн.
									</div>
									<div class="price">
										${product.price} грн.
									</div>
									<div class="availability">
										Немає в наявності
									</div>
								</li>`;
	return html;
}


function getProducts(){
	fetch('https://fakestoreapi.com/products')
	.then((response)=>{
		return response.json();
	})
	.then((products)=>{
		var allHtml = '';
		var count = 0;
		products.forEach((product)=>{
			if( count<4){
					var html = createProductHtml(product);
					allHtml = allHtml + html;
					// console.log(title);
					count++;
			}

		});
		$('.home__product-list ul').html(allHtml);
	})
	.catch((error)=>{
		console.log(error);
	})
}

getProducts();

