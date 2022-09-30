fs = require('fs')

var sleep = require('system-sleep')

function randomint(min, max) {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}
function fakentcode(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
   }
   return result;
}
console.clear()

i = 1
while(i > 0){
  sleep(randomint(0,10)*1000)

  if (randomint(0,50) == 50) {

    var code = fakentcode(16)
    var link = "https://discord.gift/"
    var linkcode = link + code
    fs.appendFile('nitrocodes.txt', "\n" + linkcode, function (err) {
      if (err) return console.log(err)
    })

    console.log('\x1b[33m%s\x1b[0m','[Working] '  + '\x1b[37m\x1b[0m' + linkcode);
  }else {

    var code = fakentcode(16)
    var link = "https://discord.gift/"
    var linkcode = link + code

    console.log('\x1b[31m%s\x1b[0m', '[Invalid] ' + '\x1b[37m\x1b[0m' + linkcode)
  }
}
