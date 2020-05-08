# bob-s_burgers
Welcome to Bob's Burgers. This is a very straightforward app. You input the burger you want to eat and then hit place your order. Once that is done the burger is added to the ready to be eaten list. Then when you click on the burger it gets eaten and then the burger goes into the burgers you have enjoyed list. This happens using sequelize and having a get, post and put route. Whenever the page loads the get route is hit the full list gets sent back. Then in the for loop a if statement is run checking if eaten part of returned data is true then its put in the eaten div without an id. If it's not true it's sent to the ready to be eaten div and has an id equal to the id of the burger in the table.
When you add burger what happens is the post route is called and the burger is added to the table along with an eaten column that is preset to false this is sent as an object. Then once the data is added to the table and response is gotten the page reloads to show the update. Then when you press on a burger in the to be eaten list the put route is called. This uses the id of the div to search the table for that burger and then change the eaten to true. Once the table sends back the data the page is reloaded the get route filters and puts each burger in its correct div.
I created all of this myself with some help from my teachers and google and the like. This uses sequelize and express for the server and jquery for the front end. This was my first foray into using tables and servers and routes all working together to make this app work.
https://serene-ravine-81530.herokuapp.com/




