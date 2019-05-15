$(document).ready(function(){
    $(".progress-bar").each(function() {
        each_bar_width = $(this).attr("aria-valuenow");
        $(this).width(each_bar_width + "%");
      });
      $(".progress-bar-steps").each(function() {
        each_bar_height = $(this).attr("aria-valuenow");
        $(this).height(each_bar_height + "%");
      });
});