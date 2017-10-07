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
        if ($target.is('[arrow]')) {
            var n_cell = $target.attr('arrow');

            if (n_cell) {
                $(this).find('[cell=' + n_cell + ']:not([arrow])').each(function() {
                    reverse_cons_and_pros($(this));
                });
            } else {
                $target.closest('tr').find('[cell]').each(function() {
                    reverse_cons_and_pros($(this));
                });
            }
        }
    });
});