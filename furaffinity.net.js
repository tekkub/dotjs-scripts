
$(document).on('keydown', '#JSMessage', function(e) {
  if(e.keyCode == 13 && (e.metaKey || e.ctrlKey)) {
    $('#add_comment_form').submit()
  }
})


subs = $(".block-menu-top a[title='Submissions']")
parent = subs.parent()

comment_text = subs.next().text()
// subs.next().text(comment_text.replace(/,? ?\d+J/, ''))

subs.prev().text("Submissions")
subs.prev().remove()
subs.remove()

kids = parent.children()
parent.text("")
parent.append(kids)

my_dropdown = parent.prev()
parent.after(my_dropdown)

$(".sfw-toggle").remove()

username = $("#my-username").parent()
username.after(
  $("<li>").append(
    $("<a>").attr("href", "/msg/submissions/new@60/").text("Submissions")
  )
)
