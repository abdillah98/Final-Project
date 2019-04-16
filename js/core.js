$('.carousel').carousel({
  	interval: 5000
})

$('.form-login').on('submit', function(e){
	e.preventDefault();

	$('#message-error').addClass('d-none').hide();

	email = $('[name="email"]').val();
	password = $('[name="password"]').val();
	
	if (email == 'admin@mail.com' && password == 'abc123') {
		redirect('tutorial.html');
	}
	else {
		$('#message-error').removeClass('d-none').show();
	}
	//console.log(email)
})


$('.item').on('click', function(){
	data = $(this).attr('data-title');
	title = data.toUpperCase()
	img = 'icon/'+ data +'.png';

	$('.modal-article-title').text(title);
	$('.modal-img').attr('src', img);
	//console.log(title)
})


// function area
function redirect(url) {
  location.replace(url)
}