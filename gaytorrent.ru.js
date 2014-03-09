
$(function() {
  var words = [
    'Happy Bareback',
    'Happy.Bareback',
    'FraternityX',
    'Schoolboy',
    'Teen',
    'BelAmi',
    'Belami',
    'Bel Ami',
    'Sean.Cody',
    'RubHim',
    'Hotboys',
    'BigDaddy',
    'Big.Daddy',
    'Big Daddy',
    'Staxus',
    'Popboys',
    'Helix',
    'Twink',
    'Youngster',
  ]
  $.each(words, function(i,word) {
    $("table.browse_result td > a:contains('"+word+"')").each(function(i,e) {
      $(e).parent().parent().remove()
    })
  })
})

$(function() {
  var words = [
    'Bearfilms',
    'Bear Films',
    'Cyberbears',
    'CyberBears',
    'Pantheon',
  ]
  $.each(words, function(i,word) {
    $("table.browse_result div.browsedesc > a:contains('"+word+"')").each(function(i,e) {
      // $(e).css("color", "green")
      console.log(e)
      $(e).parent().parent().parent().css("border", "2px solid #6f6")
    })
  })
})
