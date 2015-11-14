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

      var transition = false;

      function selectItem(selectedItem) {
        if (transition) {
          return;
        }

        var items = $self.find('li');
        var index = items.index(selectedItem);

        if (index === 0) {
          transition = true;
          var $item  = items.last();
          var $clone = $item.clone();
          $item.prependTo($item.parent());
          $clone.appendTo($item.parent());
          $item.css('margin-left', -$item.width());
          $item.animate({'margin-left': 0}, 500, 'swing', function() {
            $clone.remove();
            transition = false;
          });
        }

        if (index === size-1) {
          transition = true;
          var $item  = items.first();
          var $clone = $item.clone();
          $item.appendTo($item.parent());
          $clone.prependTo($item.parent());
          $clone.animate({'margin-left': -$clone.width()}, 500, 'swing', function() {
            $clone.remove();
            transition = false;
          });
        }

        $(items).removeClass('active');
        $(selectedItem).addClass('active');
        $(contentDisplaySelector).text($(selectedItem).find('.hidden').text());
      }

      testimonialItems.click(function() {
        clearTimeout(tid);
        selectItem(this);
        tid = setTimeout(loopTestimonials, loopInterval);
      });

      selectItem(testimonialItems[1]);
    }
  });

})(jQuery);