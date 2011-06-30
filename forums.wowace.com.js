
// Get rid of the useless links
$("#nav-2nd li:nth-child(2), #nav-2nd li:nth-child(3), #nav-2nd li:nth-child(4)").remove()

// Stick in a mark all as read link
$("#nav-2nd li:nth-child(3)").before(
  $("<li>").append(
    $("<a>").attr("href", "http://forums.wowace.com/forumdisplay.php?do=markread").append(
      $("<span>").text("Mark Forums Read")
    )
  )
)
