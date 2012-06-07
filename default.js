
// Try to prevent sites from blocking right clicks
function fixelement(e) {
  if (typeof e.oncontextmenu == "function") {
    var src = e.oncontextmenu.toString().toLowerCase();
    if (/return false/.test(src)) {
      // console.log("Fixing oncontextmenu on element", e);
      e.oncontextmenu = null;
    }
  }
}

$(function() {
  // console.log("Checking oncontextmenu handlers")
  fixelement(document);
  var all = document.getElementsByTagName('*');
  for (var i = 0; i < all.length; i++) {fixelement(all[i])}

  // $("*").css('-webkit-text-size-adjust', '')
  $("body").append("<style> * { -webkit-text-size-adjust: auto !important; } </style>")
})
