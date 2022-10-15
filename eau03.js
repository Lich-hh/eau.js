// Entrer un nombre :



var n = 9


const fibo = new Array(n);
fibo[0] = 0;
fibo[1] = 1;

for ( let i = 2 ; i < n ; i = i + 1) {
	fibo[i] = fibo[i - 1] + fibo [i - 2];
}

console.log(fibo);

function cherch(n){
	for (i in fibo){
		if (fibo[i] == n){
			console.log (n + " Appartient à l'index " + i);
			break;
		} 
		
		
		 
		}
if (n != fibo[i]) {
			console.log ( " -1 ");	
	}  
	}


cherch(n)
