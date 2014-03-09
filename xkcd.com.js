var comic = $("div#comic img[title]")
comic.after(
  $("<p>").text(comic.attr("title")).css({
    "font-variant": "normal",
    "padding": "1em"
  })
)
