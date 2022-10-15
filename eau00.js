
/*var a = 0;
var b = 1;
var c = 2;


while ( a < b < c && a <= 7 && b < 9 && c < 10) {

	console.log (a,	b ,c++);
var a1 = 0;
var b1 = 1;
var c1 = 2;
while ( a1 < b1 <c1  && a1 <= 7 && b1 < 9 && c1 < 10 ) {

	console.log (a1 , b1 ++, c1);
} 	var a2 = 0;
	var b2 = 1;
	var c2 = 2;
while ( a2 < b2 <c2  && a2 <= 7 && b2 < 9 && c2 < 10 ) {
	console.log (a2 ++, b2 , c2);	}
}
	
*/

var a = 0, b = 0 , c = 0 ;
while (a <= 7)
{
	b = a + 1;



while (b <= 8){
	c = b + 1;
	while (c <= 9){
		console.log (a , b, c);
		c++;

	}
	b++;
}
a++;
}