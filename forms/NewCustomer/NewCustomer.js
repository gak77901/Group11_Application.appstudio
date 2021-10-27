
  let customerId = inptID.value
  let customer = inptCustomer.value
  let email = inptEmail.value
  let phone = inptPhone.value
  

btnSubmit.onclick=function(){
    query = "INSERT INTO customer (customer_id, customer_name, customer_email, customer_phone) VALUES ('" + customerId + "', '" + customer + "', '" + email + "', '" + phone + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)
            console.log("You have successfully added a customer!")
        else
            console.log("There was a problem with adding the customer to the database.")
    } else
        console.log("Error: " + req.status)
}
