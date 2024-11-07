$(function () {
    $('body').on('click', '.v-thumb', function (e) {
        e.preventDefault();
        $('.v-thumbs .active').removeClass('active');
        var el = $(this), container = $('.v-thumb-show .bg_full'),
            thumb = el.attr('data-thumb'), slideCount = parseInt(el.attr('data-slide')),
            thumbHeight = el.closest('.v-thumb-hold').innerHeight(),
            scrollHeight = (slideCount - 2) * thumbHeight;

        $('.v-thumbs-wrap').css('transform', 'translateY(-' + scrollHeight + 'px)');

        el.addClass('active');
        el.closest('.v-thumb-hold').addClass('active');
        container.css('background-image', 'url(' + thumb + ')');
        container.attr('data-slide-count', slideCount);
    });
});