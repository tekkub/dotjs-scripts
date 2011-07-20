
$(function() {
  function hide_sparks() {
    $(".a-b-Gf-la-A").hide()
    $("a[href='/welcome'], a[href='/u/0/welcome']").hide().next().hide()
  }

  var inrename = false
  var new_names = {
    "Jerome Leclanche": "Adys",
    "Chris Heald": "Antiarc",
    "Jim Whitehead II": "Cladhaire",
    "Bryan McLemore": "Kaelten",
    "André Eriksson": "Cide",
    "Nicolas Noble": "|Pixel|",
    "Kevin Ballard": "Eridius",
    "Martin Brabham": "Optedoblivion",
    "Tom Finn": "Dolby",
    "Pete Lawler": "Bleeter",
    "James Twyford": "KD3",
    'Karen "Cairenn" Hobson': "Cairenn",
    'Cairenn MMOUI': "Cairenn",
    'Ryan Lakanen': "Seerah",
    'P.C. Johnston': "pcj",
    'Matt Converse': "Unkle",
    'Matthew Orlando': "Cogwheel",
    'David Lynch': "Kemayo",
    'James "Denny" Callahan III': "Torhal",
    'Jeremy Neumann': "Arrowmaster",
    'James Adam': "Lazyatom",
    'Matt Casey': "Vataro",
    'Amber Yust': "Aiiane",
    'Michael Dennis': "Loupyn",
    'Sin Huan Chan': "Xinhuan",
    'Mark Breitenbach': "Zhinjio",
    'Jon Akhtar': "Sylvanaar",
    'Trond A Ekseth': "Haste",
    'George Pribul': "Kirkburn",
    'Tim Connor': "Timocratic",
    'Shane Sveller': "Ithato",
    'Shane S.': "Ithato",
    'Steve L.': "Hasteur",
    'Keenan Maistry (BearStation)': "Neon Grizzly",
    'Will Duncan': "Imagtic",
    'Hone Melgren': "bluspacecow",
    'David Burrow': "Hirsute",
    'Dave Zachritz': "Lazerdave",
    'Ben Lai': "Wobin",
    'Andreas Legrum': "Elkano",
    'Brandon Jernigan': "Whatisboom",
  }

  function rename_people(links) {
    // console.log("Checking for renames", inrename, links)

    if (inrename) return;

    inrename = true

    links.each(function(i) {
      var realname = $(this).text()
      var alias = new_names[realname]
      if (alias) $(this).text(alias);
    })

    inrename = false
  }

  $("body").bind("DOMNodeInserted", function() {
    rename_people($(this).find("a"))
    hide_sparks()
    $("span.a-b-f-i-aGdrWb:contains('Public')").parents("div.a-f-i").addClass("tek-public")
    $("span.a-b-f-i-aGdrWb:contains('Limited')").parents("div.a-f-i").addClass("tek-limited")
  })
  rename_people($("a"))
  hide_sparks()

  $("body").append("<style> .tek-public { background: #f6fff6; } .tek-limited { background: #fff6f6; } </style>")

})
