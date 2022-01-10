require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

$(document).on('turbolinks:load', function() {
  $("#gnav").hide();
  $("#hamberger").on("click", function(){
    let target = $(this).attr("data-target");
    $(target).slideToggle();
  });
});