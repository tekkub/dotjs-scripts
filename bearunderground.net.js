$("#nav li:eq(1) a").attr("href", "http://bearunderground.net/profiles/region/")

$(document).on('keydown', '#messagetextarea', function(e) {
  if(e.keyCode == 13 && (e.metaKey || e.ctrlKey)) {
    $('#messagesubmit').click()
  }
})
