
fs = $("frameset#viewframe")
if (fs.length > 0) console.log("frameset#viewframe", fs);
if (fs.length > 0) fs.attr("rows", "75,*,0,0");

fs = $("frameset#frmenu")
if (fs.length > 0) fs.attr("cols", "350,*");
