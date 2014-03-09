$(function() {
  var re = /GH \*github\.com\s+(\S+)/
  var desc = $("dl.detail_list.long > dd:contains('GH *github.com')")
  var id = re.exec(desc.text())
  if (id) {
    var link = $("<a>")
    link.text("Search stafftools")
    link.attr('href', 'https://github.com/stafftools/search?query=' + id[1])
    link.attr('target', '_blank')
    link.css('margin-left', '10px')
    desc.append(link)
  }
})
