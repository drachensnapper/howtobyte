//==================================================================================================
// brain class
// offers functions to convert a number from its current representation into another
// implemented as singleton pattern.
//==================================================================================================

var Brain = new function()
{

	//----------------------------------------------------------------------------------------------
	// binary >>
	
	this.bin2dec = function( binary ) {
		return parseInt( binary, 2 );
	}

	this.bin2hex = function( binary ) {
		return this.dec2hex( this.bin2dec(binary) );
	}
	
	this.bin2ascii = function( binary ) {
		return this.hex2ascii( this.bin2hex( binary ) );
	}
	
	
	//----------------------------------------------------------------------------------------------
	// decimal >>
	
	this.dec2bin = function ( decimal ) {
		return parseInt(decimal,10).toString(2);
	}

	this.dec2hex = function( decimal ) {
		return decimal.toString(16);
	}

	this.dec2ascii = function( decimal ) {
		return this.hex2ascii( this.dec2hex( decimal ) );
	}

	
	//----------------------------------------------------------------------------------------------
	// hex >>
	
	this.hex2bin = function( hex ) {
		return this.dec2bin( this.hex2dec(hex) );
	}

	this.hex2dec = function( hex ) {
		return parseInt(hex,16);
	}

	this.hex2ascii = function( hex ) {
		var str = '';
		for (var i = 0; i < hex.length; i += 2) {
			str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
		}
		return str;
	}
	
	
	//----------------------------------------------------------------------------------------------
	// ascii >>
	
	this.ascii2bin = function( ascii ) {
		return this.hex2bin( this.ascii2hex(ascii) );
	}

	this.ascii2dec = function( ascii ) {
		return this.hex2dec( this.ascii2hex(ascii));
	}

	this.ascii2hex = function( hex ) {
		var arr = [];
		for (var i = 0, l = hex.length; i < l; i ++) {
			var hexnumber = Number(hex.charCodeAt(i)).toString(16);
			arr.push(hexnumber);
		}
		return arr.join('');
	}

	
}
