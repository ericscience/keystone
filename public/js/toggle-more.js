(function($) {
  $.fn.extend({
    toggleMore: function (elementClass, numberInitialBlocks, moreString, lessString) {
      var self = this;
      function toggle(text, style) {
        $(self).text(text);
        $(elementClass).each(function (index) {
          if (index >= numberInitialBlocks) {
            $(this).attr('style',style);
          }
        });
      };

      toggle(moreString, 'display: none');

      self.click( function () {
        if ($(self).text() === moreString) {
          toggle(lessString, '');
        }	else {
          toggle(moreString, 'display: none');
        }
      });
    }
  });
})(jQuery);
