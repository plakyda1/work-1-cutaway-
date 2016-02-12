 $(function (){
            if($('#chose-file').length)
            {
                $('#chose-file').click(function(){
                    $('#chose-file-input').click();
                    return(false);
                });

                $('#chose-file-input').change(function(){
                    $('#chose-file-text').html($(this).val());
                    var text= $('#chose-file-text').html();
                    text = text.replace("C:\\fakepath\\", "");
                    $('#chose-file-text').html(text);
                    if ($(this).val()=='') {
                        $('#chose-file-text').text($(this).attr('placeholder'));
                    };
                }).change();// .change() в конце для того чтобы событие сработало при обновлении страницы
            
            }
});