 var customerName = "bob";
 var customerEmail = "bob@example.com";
 var customerAddress = "123 Main St, Anytown, USA";
    var bestCustomer = {
        name: customerName,
        email: customerEmail,
        address: customerAddress
    };
    console.log(bestCustomer);
    console.log("Best customer email is: " + bestCustomer.email);
    console.log("Best customer address is: " + bestCustomer.address);
    console.log("Best customer is: " + bestCustomer.name);
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = "not bob";
}
function overwriteBestCustomer(name) {                      
    bestCustomer = name;
}   
function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = "Alice";
    leastFavoriteCustomer = "Bob"; // This will throw an error because leastFavoriteCustomer is a constant
}   
