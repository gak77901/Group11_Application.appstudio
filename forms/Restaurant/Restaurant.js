let req = ""
let query = ""
let results = ""
let netID = "gak77901"
let pw = "Ym100%otsydt" 

Button1.onclick=function(){
 let cityName = inptcity.value
 
 query = "SELECT * from accountinfo Where city = '"+ cityName +"'"
 req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {       
      results = JSON.parse(req.responseText)
      if (results.length == 0)
        txtRestaurant.value = "There are no restaurants in that city."
      else {
          let message = ""
          for (i = 0; i < results.length; i++)
            message = message + results[i][1] + results[i][6] + "\n"
          txtRestaurant.value = message
         }
    } else {
        txtRestaurant.value = "Error code: " + req.status
} 
}


