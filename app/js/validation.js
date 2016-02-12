// Объявление модуля
var myModule = (function () {

	// Инициализирует наш модуль
	function init () {
		_setUpListners();
		//checkInput();
		// _centeringTop()
	};

	// Прослушивает события 
	function _setUpListners () {
		//событие на нажатие submit
		send.on('click', function(e){
			e.preventDefault();
			_checkInput();
			_inputFile();
		});
		//событие на нажатие клавиши в пустом инпуте
		rInputs.on('keypress', function(){
			_hideTooltip($(this));
		});
		// очистка онпутоав
		reset.on('click', function(){
			rInputs.each(function(){
				_hideTooltip($(this));
			})
		})
	};

	//Проверка полей
	var	form = $('.rf'),
	send = form.find('.send'),
	reset = form.find('.reset'),
	rInputs = form.find('.rfield'),
	file = form.find('#chose-file-input');
	
		function _checkInput(){
			rInputs.each(function(){
				if ($(this).val() == "" && $(this).attr('type')!='file') {
					//показываем тултип
					$(this).addClass('empty-input');
					$(this).next().show();
					//вертикально центрируем
					$(this).next().css({'margin-top': -$(this).outerHeight()/2-$(this).next().outerHeight()/2});
				};
				//проверям атрибут, с какой стороны ставить тултип
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
		function _inputFile(){
			if ($('#chose-file-input').val()==""){
					//условие для инпута типа файл
					$('#chose-file').addClass('empty-input');
					$('#chose-file').prev().show();
				} else{
					$('#chose-file').removeClass('empty-input');
					$('#chose-file').prev().hide();
				}
		}
	// Скрываем тултипы и стилизацию постого инпута

	function _hideTooltip(currentInput){
		if (currentInput.next('.tooltip')) {
			currentInput.next('.tooltip').hide()
			currentInput.removeClass('empty-input')
		}
	}


	// Возвращаем объект (публичные методы) 
	return {
		init: init
	};

})();

// Вызов модуля
myModule.init();