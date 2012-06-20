
$("body").append("<style> .lower_footer .sponsor { display: none !important; } </style>")
$("body").append("<style> #userbox #notifications .unread_count { display: none !important; } </style>")
// $("body").append("<style>body {zoom: 99%;}</style>")
// $("body").append("<style>.pagehead > ul.tabs li a .counter {font-size: 11px; line-height: 14px;}</style>")
// $("body").append("<style>.subnav-bar ul.subnav .counter {font-size: 11px; padding-top: 2px;}</style>")

if (document.location == "https://github.com/newsies") {
  // $("#header,#serverstats,#footer-push,#footer").remove()
  $("#serverstats,#footer-push,#footer").remove()
  $(".site").css({padding:0})
  $("#site-container").css({width:"100%"})
  $("#newsies").css({height:"100%"})
  $("#wrapper").css({"margin-bottom":"0px"})
}
