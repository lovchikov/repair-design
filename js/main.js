/*
document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }

    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);            
    });

    closeBtn.addEventListener('click', switchModal);
    
  });
*/

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
        var next = $('.swiper-button-next');
        var prev = $('.swiper-button-prev');
        var bullets = $('.swiper-pagination');

        next.css('left', prev.width() + 10 + bullets.width() + 10)
        bullets.css('left', prev.width() + 10)

        new WOW().init();

        // Валидация формы modal
        $('.modal__form').validate({
            errorClass: "invalid",
            errorPlacement: function (error, element) {
                if (element.attr("type") == "checkbox") {
                    return element.next('label').append(error);
                }
            
                 error.insertAfter($(element));
            },
            rules: {
                // строчное правило
                policyCheckbox: {
                    required: true,
                },
                userName: {
                    required: true,
                    minlength: 2
                },
                userPhone: "required",
                // правило-объект (блок)
                userEmail: {
                  required: true,
                  email: true
                }
            }, // Сообщения
            messages: {
                policyCheckbox: {
                    required: "Соглашение обязательно",
                },
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух букв"
                },
                userPhone: "Телефон обязателен",
                userEmail: {
                    required: "Обязательно укажите email",
                    email: "Введите в формате: name@domain.com"
                }
            },
            submitHandler: function(form) {
                $.ajax({
                    type: "POST",
                    url: "send.php",
                    data: $(form).serialize(),
                    success: function (response) {
                        alert('Форма отправлена мы свяжемся с вами через 10 минут');
                        $(form)[0].reset();
                        modal.removeClass('modal--visible');
                    },
                    error: function (response) {
                        console.error('Ошибка запроса ' + response);
                    }
                });
            }
        });

        // Валидация формы control
        $('.control__form').validate({
            errorClass: "invalid",
            errorPlacement: function (error, element) {
                if (element.attr("type") == "checkbox") {
                    return element.next('label').append(error);
                }
            
                 error.insertAfter($(element));
            },
            rules: {
                // строчное правило
                policyCheckbox: {
                    required: true,
                },
                userName: {
                    required: true,
                    minlength: 2
                },
                userPhone: "required",
            }, 
            // Сообщения
            messages: {
                policyCheckbox: {
                    required: "Соглашение обязательно",
                },
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух букв"
                },
                userPhone: "Телефон обязателен",
            }
        });

        // Валидация формы footer
        $('.footer__form').validate({
            errorClass: "invalid",
            errorPlacement: function (error, element) {
                if (element.attr("type") == "checkbox") {
                    return element.next('label').append(error);
                }
            
                 error.insertAfter($(element));
            },
            rules: {
                // строчное правило
                policyCheckbox: {
                    required: true,
                },
                userName: {
                    required: true,
                    minlength: 2
                },
                userQuestion: {
                    required: true,
                    minlength: 10
                },
                userPhone: "required",
            }, 
            // Сообщения
            messages: {
                policyCheckbox: {
                    required: "Соглашение обязательно",
                },
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух букв"
                },
                userQuestion: {
                    required: "Вопрос обязателен",
                    minlength: "Не короче десяти символов"
                },
                userPhone: "Телефон обязателен",
            }
        });

        // Маска для номера телефона

        $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7(___) __-__-___"});


    // Создание yandex карты
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [47.244729, 39.723187],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Наш офис',
                balloonContent: 'Вход со двора'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/marker.png',
                // Размеры метки.
                iconImageSize: [32, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });
    
        myMap.geoObjects
            .add(myPlacemark);
    });
});