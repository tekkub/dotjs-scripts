
// Get rid of the useless links
$("#nav-2nd li:nth-child(2), #nav-2nd li:nth-child(3), #nav-2nd li:nth-child(4)").remove()

// Stick in a mark all as read link
var markread = $("a[href*='markread']:first").attr("href")
$("#nav-2nd li:nth-child(3)").before(
  $("<li>").append(
    $("<a>").attr("href", markread).append(
      $("<span>").text("Mark Forums Read")
    )
  )
)
