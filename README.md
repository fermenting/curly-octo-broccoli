# Bookle

![Bookle Screenshot](assets/images/bookle-screenshot.png)

##  The Project
With the Bookle app, the user can search for books using the Google Books API, which allows them to view the searched book along with the accompanied information about said book.  Information that will be provided will be:
- Title
- Author(s)
- Description

Along with a thumbnail image of the book and a link to the book's information.

The user will also be able to save books of interest onto a "saved books page." This page renders all the books using a Mongo database, where they can either "view" or "delete" a book.  The latter will remove the book from the rendered database.  

## Installing
Navigate to the root directory of the cloned repository. Install the necessary dependencies by running the following command:
```
$ yarn install
```
Then, initialize the app:
```
$ yarn start
```
Finally, access the app by opening your web browser and visiting `http://localhost:3000/`.
<hr>

## Built With

We utilized a MERN stack to deploy Bookle

* MongoDB - Our database which stores the results of the API call as well as saved books. We added mlab to Heroku for our deployed version.

* Express - Routing of all server  routes.

* React - The fundamental structure of the app. A dynamic, modular structure which quickly displays components & elements.

* Node.js - Our server software

* Heroku - The best way to deploy apps like this.

## Authors
Zoe Chang
Lyle A Xander Farrell
Fernando Mendoza
Jacob Moore