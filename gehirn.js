// This moduile offers functions to convert one number to the same number in a nother representation

// binary >>
function bin2dec( binary ) 
{
  return parseInt( binary, 2 );
}

function bin2hex( binary )
{
  return dec2hex(bin2dec(binary));
}

function bin2ascii( binary )
{
  return ascii;
}

// decimal >>
function dec2bin( decimal )
{
  return parseInt(decimal,10).toString(2);
}

function dec2hex( decimal )
{
  return decimal.toString(16);
}

function dec2ascii( decimal )
{
  return ascii;
}

// hex >>
function hex2bin( hex )
{
  return binary;
}

function hex2dec( hex )
{
  return dec;
}

function hex2ascii( hex )
{
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

// ascii >>
function ascii2bin( ascii )
{
  return binary;
}

function ascii2dec( ascii )
{
  return dec;
}

function ascii2hex( hex )
{
  var arr = [];
  for (var i = 0, l = hex.length; i < l; i ++) {
    var hexnumber = Number(hex.charCodeAt(i)).toString(16);
    arr.push(hexnumber);
  }
  return arr.join('');
}

