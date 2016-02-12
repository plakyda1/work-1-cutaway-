    ;(function($) {

         // DOM Ready
        $(function() {

            // Binding a click event
            // From jQuery v.1.7.0 use .on() instead of .bind()
            $('#my-button').bind('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();


                // Triggering bPopup when click event is fired
                $('#element_to_pop_up').bPopup({
                    speed: 500,
                    transition: 'slideDown',
                    transitionClose: 'slideDown',
                    modalColor: '#58697a', 
                    opacity : '0.75'
                });

            });

        });

    })(jQuery);