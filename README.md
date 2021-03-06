# WAD2 Coursework 2
This is a restaurant website created through the use of Express, Mustache and NeDB.
I have had to generate a fresh GitHub repo for this, as the initial .zip file has failed to upload several times.

## Setup
Firstly, you must clone the repo by doing the following command.
```
git clone git@github.com:ruisurat/wad2-cw2.git
```
Secondly, you must run a command to populate the Dishes database.
```
npm run populate
```
Thirdly, generate a .env file by using `touch .env` and then supplying the following information
```
SECRET_ACCESS_TOKEN="TEXT"
```
Then run the application by running
```
npm start
```

The site is hosted on localhost:3000, so type this into your browser to begin using the site.

## Credentials
The administrator account credentials are Username: `Admin`, Password: `admin123`

## Features
### Main Site
- Navigation Bar
- About Page
- Menu Page
  - Selectable tabs for each dish type
  - Information on dishes such as price, ingredients, allergy info, etc. 
- Login page for staff

### Staff Dashboard
- Add New Dish Page
- Edit Dish Page
  - Contains delete function
