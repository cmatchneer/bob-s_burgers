# bob-s_burgers
Welcome to Bob's Burgers. This is a very straight foward app. You input the burger you want to eat and then hit place your order. Once that is done the burger is added the ready to be eaten list. Then when you click on the burger is gets eaten and then the burger goes into the burgers you have enjoyed list. This happens using sequalize and having a get, post and put route. Whenever the page loads the get route is hit the full list gets sent back. Then in the for loop a if statement is run checking if eaten part of returned data is true then its put in the eaten div without a id. If its not true its sent to the ready to be eaten div and has a id equal to the id of the burger in the table. 

When you add burger what happens is the post route is called and the burger is added to the table along with eaten column that is preset to false this is sent is object. Then once the data is added to the table and response is gotten the page reloads to show the update. Then when you press on a burger in the to be eaten list the put route is called. This uses the id of the div to search the table for that burger and then change the eaten to true. Once the table sends back the data the page is reloaded the get route filters and puts each burger in its correct div. 

I created all of this myself with some help from my teachers and google and the like. This uses sequalize and express for the server. This was my first forray into using tables and servers and routes all working toghther to make this app work.

https://serene-ravine-81530.herokuapp.com/



