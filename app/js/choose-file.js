
 $(function (){

            $('.file-stand-in').click(function(){
                $('.file-upload').click();
                return(false);
            });
            $('.file-upload').on('change',function(){
                // console.log($('.file-upload').val())
                $('.file-stand-in-text').val($('.file-upload').val());
                var text= $('.file-stand-in-text').val();
                text = text.replace("C:\\fakepath\\", "");
                $('.file-stand-in-text').val(text);
            }).change();// .change() в конце для того чтобы событие сработало при обновлении страницы

 });