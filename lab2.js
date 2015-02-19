var gl;
var points;
var PointX = 0;
var PointY = 0.1;
window.onload = function init(){
	
	var canvas = document.getElementById( "gl-canvas" );
	
	gl = WebGLUtils.setupWebGL( canvas );
	if ( !gl ) { alert( "WebGL isn't available" ); }
//
// Configure WebGL
//
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 0.82, 0.01, 1.0 );
	
	//document.onkeydown = handleKeyDown;
    //document.onkeyup = handleKeyUp;
// Load shaders and initialize attribute buffers

	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );
	
	 window.onkeydown = function( event ) {
        var key = String.fromCharCode(event.keyCode);
        switch( key ) {
          case 'W':
			if(0.8 > PointY-0.1){
				PointY = PointY+0.1;
			}
			console.log("W");
			console.log(PointY);
            break;

          case 'S':
			if(-0.8 < PointY-0.1){
				PointY = PointY-0.1;
			}
			console.log("S");
			console.log(PointY);
            break;

          case 'D':
			if(0.79 > PointX-0.1){
				PointX = PointX+0.1;
			}
			console.log("D");
			console.log(PointX);
            break;
			
          case 'A':
			if(-0.9 < PointX-0.1){
				PointX = PointX-0.1;
			}
			console.log("A");
			console.log(PointX);
            break;
			
          case '1':
            PointX=0;
			PointY=0.1;
            break;
        }
	
	var num = 0;
	
	 var vertices1 = new Float32Array([
		PointX, PointY,//0.1,0.2,
		PointX-0.1, PointY-0.15,//0,0.05,
		PointX+0.1, PointY-0.15,//0.2,0.05,
		
		PointX, PointY-0.2,//0.1,0,
		PointX+0.1, PointY-0.05,//0.2,0.15,
		PointX-0.1, PointY-0.05//0,0.15
	]); 
	// Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices1, gl.STATIC_DRAW );
	num = 6;
		
    // Associate our shader variables with our data buffer
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition ); 
	
// Load the data into the GPU
// Associate our shader variables with our data buffer
	render(num);
    };

	
};
function render(num) {
	gl.clear( gl.COLOR_BUFFER_BIT );
	gl.drawArrays( gl.TRIANGLES, 0, num );
}
