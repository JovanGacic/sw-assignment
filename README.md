Instructions

First instal dependencies & start proxy server (created with https://expressjs.com/en/starter/generator.html):
### `cd /sw-assignment/proxy`  
### `npm install`
### `npm start`

Then install app dependencies & start the app:
### `cd sw-assignment`
### `npm install`
### `npm start`

You're good to go!

Summary

To login into the app use the following credentials:
Username > *skywalker96@gmail.com*,
Password > *heismyfather*
(These credentials are hard-coded)

After successful login you are redirected to the home page.
User will be logged in until he logges out. 

Home page contains a list view of all the resources' names (starships, vehicles, people, planets, species) and titles (films). 
You can toggle the filter for each resource to turn it on/off. 

Clicking on the Details button brings out a modal of the resources' details. 

Also, the page contains a seacrh input field. 
When you type something into it, and then click the Search button, it will run a search across all the resources (that are filtered on).
The search string will be highlighted in the resources' details, if entered.

