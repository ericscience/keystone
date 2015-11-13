(function($) {
  $.fn.extend({
    testimonial: function (contentDisplaySelector, size, loopInterval) {
      var $self = $(this);
      var testimonialItems = $self.find('li');

      var tid = setTimeout(loopTestimonials, loopInterval);
      function loopTestimonials() {
        var items = $self.find('li');
        selectItem(items[2]);
        tid = setTimeout(loopTestimonials, loopInterval); // repeat myself
      }

      function selectItem(selectedItem) {
        var items = $self.find('li');
        var index = items.index(selectedItem);
        var parent = $(selectedItem).parent();

        if (index === 0) {
          var $item = items.last();
          $item.css('margin-left', -$item.width());
          $item.prependTo(parent);
          $item.animate({'margin-left': 0}, 500);
        }

        if (index === size-1) {
          var $item = items.first();
          $item.animate({'margin-left': -$item.width()}, 500, 'swing', function () {
            $item.css('margin-left',0);
            $item.appendTo(parent);
          });
        }

        $(items).removeClass('active');
        $(selectedItem).addClass('active');
        $(contentDisplaySelector).text($(selectedItem).find('.hidden').text());
      }

      testimonialItems.click(function () {
        clearTimeout(tid);
        selectItem(this);
        tid = setTimeout(loopTestimonials, loopInterval);
      })

      selectItem(testimonialItems[1]);
    }
  });


})(jQuery);