$(function () {
    var reverse_cons_and_pros = function($el) {
        if ($el.text() == '-') {
            $el.text('+');
        } else if ($el.text() == '+') {
            $el.text('-');
        }
    };

    $('#brain_teaser').click(function(event) {
        var $target = $(event.target);
        if ($target[0].classList.contains('brain_teaser__arrow')) {
            var n_cell = $target.attr('cell');

            if (n_cell) {
                $(this).find('[cell=' + n_cell + ']:not(.brain_teaser__arrow)').each(function() {
                    reverse_cons_and_pros($(this));
                });
            } else {
                $target.parent().find('[cell]').each(function() {
                    reverse_cons_and_pros($(this));
                });
            }
        }
    })

    //fill table
    $('[value="-"]').each(function() {
        $(this).text('-');
    });

    $('[value="+"]').each(function() {
        $(this).text('+');
    });
});