setInterval(function(){
  $('.content a').each(function() {
    if (/\.(gif|jpe?g|png)/i.test($(this).text()))
      $(this).html('<img src="'+$(this).text()+'"/>"')
  })
}, 1000)
