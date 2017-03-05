$(function () {
    var reverse_cons_and_pros = function($el) {
        if ($el.text() == '-') {
            $el.text('+');
        } else if ($el.text() == '+') {
            $el.text('-');
        }
    };

    $('#game').click(function(event) {
        var $target = $(event.target);

        if ($target[0].tagName == 'TH') {
            var num = $target.prevAll().length;

            if (num == 0) {
                $target.siblings().each(function() {
                    reverse_cons_and_pros($(this));
                });
            } else {
                $target.parent().siblings().each(function() {
                    var $el = $(this).children().eq(num);
                    reverse_cons_and_pros($el);
                })
            }
        }
    })
});