var tab_val = [5, 10, 12, 30];


var tab_sub = [tab_val[0] - tab_val[1], tab_val[0] - tab_val[2], tab_val[0] - tab_val[3], tab_val[3] - tab_val[0], tab_val[2] - tab_val[0], tab_val[1] - tab_val[0],
		   tab_val[1] - tab_val[0], tab_val[1] - tab_val[2], tab_val[1] - tab_val[3], tab_val[3] - tab_val[1], tab_val[2] - tab_val[1], tab_val[0] - tab_val[1],
		   tab_val[2] - tab_val[0], tab_val[2] - tab_val[1], tab_val[2] - tab_val[3], tab_val[3] - tab_val[2], tab_val[1] - tab_val[2], tab_val[0] - tab_val[2],
		   tab_val[3] - tab_val[0], tab_val[3] - tab_val[1], tab_val[3] - tab_val[2], tab_val[0] - tab_val[3], tab_val[1] - tab_val[3], tab_val[2] - tab_val[3]]

function valeur_min(tab_sub) {

	var min = 0;
for (i in tab_sub) if (tab_sub[i] < min) min=tab_sub[i];
	return min
}


min=valeur_min(tab_sub)


console.log(min)




