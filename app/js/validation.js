// 
// Объявление модуля
var myModule = (function () {
		//Обявляю переменные
		var	form = $('.rf'),
		send = form.find('.send'),
		reset = form.find('.reset'),
		rInputs = form.find('.rfield'),
		inputFile = form.find('.input-file');

	// Инициализирует наш модуль
	function init () {
		_setUpListners();
	};

	// Прослушивает события 
	function _setUpListners () {

		//событие на нажатие submit
		send.on('click', function(event){
			event.preventDefault ? event.preventDefault() : (event.returnValue = false);
			_checkInput();
		});
		// событие при нажатие на "reset"очистка инпутоав
		reset.on('click', function(){
			rInputs.each(function(){
				_hideTooltip($(this));
			})
		})
		//событие на нажатие клавиши в пустом инпуте
		rInputs.on('keypress', function(){
			_hideTooltip($(this));
		});
		inputFile.on('click', function(){
			$(this).removeClass('empty-input')
			$(this).next().hide()
		})
	};
	
		function _checkInput(){
			rInputs.each(function(){
					//проверяю какой тип поля 
				if ($(this).val() == "" ) {
					// если значение поля .val() поусток то добавляем к нему класс .empty-input
					$(this).addClass('empty-input');
					//показываем тултип
					$(this).next().show();
					//вертикально центрируем
					$(this).next().css({'margin-top': -$(this).outerHeight()/2-$(this).next().outerHeight()/2});
				};
				//проверям атрибут "data-tooltip", что бы определить с какой стороны ставить тултип
				if ($(this).attr('data-tooltip')=='left'){
					$(this).next().css({'left': -$(this).next().outerWidth()-7})
					$(this).next().addClass('left-tooltip-arrow');

				}else{
					if ($(this).attr('data-tooltip')=='right'){
						$(this).next().css({'left': $(this).outerWidth()+7})
						$(this).next().addClass('right-tooltip-arrow');
					}
				}
			})

		}
	// Скрываем тултипы и стилизацию постого инпута

	function _hideTooltip(currentInput){
		if (currentInput.next('.tooltip')) {
			currentInput.next('.tooltip').hide()
			currentInput.removeClass('empty-input')
		}
	};

	// Возвращаем объект (публичные методы) 
	return {
		init: init
	};

})();

// Вызов модуля
// Проверяем есть ли на странице формы для проверки
if ($('.rf')) {
myModule.init();
}