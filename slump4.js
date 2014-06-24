<!DOCTYPE html>
<html>
<head></head>
<script> 
        var teams = new Array("Namn1"); //Lista med lag. Kan vara hur många som helst. 
        var i=1;
	var j=1; 
        var rand; 
        document.write("<ol><li>"); 
        while(teams.length) { 
                rand = Math.floor(Math.random()*(teams.length));  // Slumpa 
                document.write(teams[rand]); // Skriv ut laget 
                teams.splice(rand,1); // Ta bort framslumpat lag från array 
                if(teams.length) { // Är det sista laget skall vi inte avsluta något 
                        if(i%4) { 
                                if(j%27)	{
					document.write(" - "); // Lagavskiljare
					}
				else	{ 
                                	document.write("</li><li>"); // Radbrytning i listan om det är jämt delbart
					i=1;
                        		} 
                        	} 

			else 	{ 
                                document.write("</li><li>"); // Radbrytning i listan om det är jämt delbart
                        	} 

                        i++; 
			j++;	// Bara för att veta hur många lag vi skrivit ut, för beräkningen ovan (i%2) 
                } 
        } 
        document.write("</ol>"); 
</script>
<body></body>
</html>