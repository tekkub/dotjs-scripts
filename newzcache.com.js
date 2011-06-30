
var table = $("<table>").addClass("tektable")
$(".download:first").before(table)

table.before("<style> .tektable {font-size: 16px; border-collapse: collapse;} .tektable tr:hover td {background: #cdc;} .tektable td {padding: 0 5px;} </style>")

var rows = {}
var names = []
$(".download").each(function(i) {
  var dis = $(this)

  var row = $("<tr>")
  var link = dis.find("a:first")
  link.text(dis.find("h3").text())

  row.append(
    $("<td>").append(link)
  )
  row.append(
    $("<td>").text(dis.find("h6").text())
  )
  row.append(
    $("<td>").text(dis.find("h5").text())
  )
  row.append(
    $("<td>").append(dis.find(".settings"))
  )
  row.append(
    $("<td>").append(dis.find(".remove"))
  )

	var name = dis.find("h3").text() + " " + dis.find("h6").text()
	rows[name] = row
	names.push(name)

	dis.remove()
})

names.sort()
$.each(names, function(i,v) {
  table.append(rows[v])
})
