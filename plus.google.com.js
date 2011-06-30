
$(function() {
  function hide_sparks() {
    $(".a-b-Gf-la-A").hide()
  }

  $("body").bind("DOMNodeInserted", function(){hide_sparks()})
  hide_sparks()
})
