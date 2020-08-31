# Pixar

Pixar is an image search application that implements three different Image search APIs such as Unsplash, Pixabay and Pexels. Users search for images matching a keyword and the application returns a collection of those images. The number of images can be specified in the dropdown menu. The Images from the APIs are fetched using the Axios library and are displayed using React JS. Navigation to different views such as Unsplash Images, PixaBay Images and Pexels are done using React Router to achieve SPA.


## Features

**1. Search functionality added to search photos and fetch data from different API's using Axios Javascript Library.**

**2. No. of Images per page is dynamically decided by the User.**

**3. Zoom functionality added to individual photos using the react-medium-zoom library.**


## Built With

- React js
- React Router
- Axios
- Unsplash API
- PixaBay API
- Pexels API
- Material-UI


## Getting Started

Clone/download the repository on your local machine.
Create a .env file in the root of the project folder and insert your secret keys. See the example below.

`REACT_APP_UNSPLASH_API_KEY='Your Unsplash API KEY'`
`REACT_APP_PIXABAY_API_KEY='Your PixaBay API KEY'`
`REACT_APP_PEXELS_API_KEY='Your Pexels API KEY'`


##### Install dependencies

`npm install`


##### Run Pixar from the root directory.

`npm start`



## ScreenShots

### Main Page

![](images/Pixar_MainPage.png)

### Unsplash API Page

![](images/UnsplashAPI_Page.png)

### PixaBay API Page

![](images/PixaBayAPI_Page.png)

### Pexels API Page

![](images/PexelsAPI_Page.png)


