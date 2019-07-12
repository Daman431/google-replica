function button_press() {
	var searched = document.getElementById('searching_field').value;
	if(searched ===""){
		pass;
	}
	else{
	window.location.href = "https://www.google.com/search?source=hp&ei=gs8IXevkA9r5rQGEsYLADw&q="+searched+"&oq="+searched+"&gs_l=psy-ab.3.0.0i10l10.665269.666914..668478...7.0..0.171.1425.0j10......0....1..gws-wiz.....6..35i39j0i131j0j0i67j0i20i263.fXe4VqQiLlI";
	}
}

function autoComplete(entered){
	    var states = [  
    "Delhi", 
    "Ahemdabad", 
    "Punjab", 
    "Himachal Pradesh", 
    "Uttar Pradesh", 
    "Karnatka", 
    "Kerela", 
    "Maharashtra", 
    "Gujrat", 
    "Rajasthan", 
    "Bihar", 
    "Tamil Nadu", 
    "Haryana" 
      ]; 
  
    n = states.length;
    for(i=0;i<n;i++){
    	if((states[i].toLowerCase()).indexValueOf(entered.toLowerCase()) > -1){
    		var options = document.createElement("option");
    		var text_node = document.createTextNode(states[i]);
    		options.appendChild(text_node);

    		document.getElementById("datalist").appendChild(options);
    	}
    }
}