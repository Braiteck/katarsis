$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Карусель отзывов
	const reviewsSliders = []

	$('.reviews .swiper-container').each(function (i) {
		$(this).addClass('reviews_s' + i)

		let slides = $(this).find('.slide').length,
			options = {
				loop: false,
				speed: 500,
				simulateTouch: false,
				allowTouchMove: true,
				noSwiping: true,
				spaceBetween: 20,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
						autoHeight: true
					},
					1280: {
						slidesPerView: 2,
						autoHeight: false
					}
				},
				on: {
					init: swiper => {
						setTimeout(() => {
							setHeight($(swiper.$el).find('.review .data'))

							$('.reviews .swiper-button-next, .reviews .swiper-button-prev').css('top', $(swiper.$el).find('.review .data').outerHeight() * 0.5)
						})
					},
					resize: swiper => {
						setTimeout(() => {
							setHeight($(swiper.$el).find('.review .data'))

							$('.reviews .swiper-button-next, .reviews .swiper-button-prev').css('top', $(swiper.$el).find('.review .data').outerHeight() * 0.5)
						})
					}
				}
			}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))

		if (slides > reviewsSliders[i].params.slidesPerView) {
			options.loop = true
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false

			reviewsSliders[i].destroy(true, true)
			reviewsSliders[i] = new Swiper('.reviews_s' + i, options)
		}
	})


	// Карусель сертификатов
	const certsSliders = []

	$('.certs .swiper-container').each(function (i) {
		$(this).addClass('certs_s' + i)

		let slides = $(this).find('.slide').length,
			options = {
				loop: false,
				speed: 500,
				simulateTouch: false,
				allowTouchMove: true,
				noSwiping: true,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					0: {
						spaceBetween: 20,
						slidesPerView: 2
					},
					768: {
						spaceBetween: 20,
						slidesPerView: 3
					},
					1024: {
						spaceBetween: 24,
						slidesPerView: 4
					},
					1280: {
						spaceBetween: 27,
						slidesPerView: 5
					}
				}
			}

		certsSliders.push(new Swiper('.certs_s' + i, options))

		if (slides > certsSliders[i].params.slidesPerView) {
			options.loop = true
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false

			certsSliders[i].destroy(true, true)
			certsSliders[i] = new Swiper('.certs_s' + i, options)
		}
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		if (!$('.mob_header .mob_menu_btn').hasClass('active')) {
			$('.mob_header .mob_menu_btn').addClass('active')
			$('body').addClass('menu_open')
			$('header').addClass('show')
		} else {
			$('.mob_header .mob_menu_btn').removeClass('active')
			$('body').removeClass('menu_open')
			$('header').removeClass('show')
		}
	})
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!fiestResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 428) $('meta[name=viewport]').attr('content', 'width=428, user-scalable=no')

			fiestResize = true
		} else {
			fiestResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}
})