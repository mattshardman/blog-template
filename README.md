# Blog Template

Live Example: [gear-head.now.sh](https://gear-head.now.sh)

# TL:DR

* Fork and clone repository
* Create prismic repository
* Link prismic repository by updating ```lib/config```
* Update details in ```lib/config``` and ```lib/theme```
* Change project title in ```now.json```
* Deploy using ```now --prod```

### Dark mode
<img src="https://res.cloudinary.com/dgdniqfi9/image/upload/v1576039050/portfolio/Screenshot_2019-12-11_at_12.33.53.png" width="50%"/>

### Light mode
<img src="https://res.cloudinary.com/dgdniqfi9/image/upload/v1576039058/portfolio/Screenshot_2019-12-11_at_12.33.40.png" width="50%"/>

### Mobile
<img src="https://res.cloudinary.com/dgdniqfi9/image/upload/v1576039047/portfolio/Screenshot_2019-12-11_at_12.35.08.png" width="30%">

### Blog page
<img src="https://res.cloudinary.com/dgdniqfi9/image/upload/v1576039424/portfolio/Screenshot_2019-12-11_at_12.43.33.png" width="50%">


# What does it do?

A simple blog designed to be setup and deployed as quickly as possible, requires minimal setup using a config and a theme file.

The setup allows the user to configure various aspects of the blog including colors, logos etc. using the config files.

The blog can be updated by creating a *[prismic](https://prismic.io)* account, and writing any posts using their headless CMS.

# Technologies used

The blog uses next.js, posts are server rendered for optimal initial page load times.

The project is setup to be easily deployed to Now ([now.sh](https://now.sh)).

# Project aims

The project aims to be a way for developers to set up a simple, easy to update and highly performant blog, with minimal configuration.

Alternatively, the blog could be setup up quickly for less technical users with little to no upkeep going forward.

# Instructions

## Initial set up

### Prismic
* Set up a prismic account ([prismic.io](https://prismic.io)) and create a repository
* Create a repository on prismic
* Go to settings -> API & Security and make a note of API endpoint

### Project setup
* Fork and clone the repository
* Go to lib/config.js
* Enter the prismic api endpoint under "apiURL"
* Install dependencies (```yarn```)
* Sign up and install the now cli if you haven't already ([Zeit cli](https://zeit.co/download))
* Run ```now dev``` to run the project locally
* Run ```now``` to deploy the project

## Configuration
The project has a number of configuration options (all found with in lib/config.js) detailed below:

### General
```javascript
general: {
    favicon: '', // sets the favicon for the project
}
```
### Header
Settings for the navigation bar:
```javascript
header: {
    capitalize: false, // determines whether header is capitalised
    title: '', // title appearing in nav bar
    titleImgForDark: '', // the blog has a dark mode, images for light and dark mode in the nav bar can be set separately
    titleImgForLight: '',
}
```
### Author
Sets information for the author section that appears at the top of the home page and at the bottom of each blog post.

```javascript
author: {
    title: '', 
    subTitle: '', 
    avatarImage: '',
    socialIcons: [{
        name: '',
        link: '',
        class: 'twitter',
    },
    {
        name: '',
        link: '',
        class: 'instagram',
    }],
}
```

### Sign Up
Sets information for the sign up box appearing at the bottom of each blog post.
By default this is on, but will not send the information anywhere, to send the information to mailchimp, enter your mailchimp api key in the ```now.json``` file, and add a list number to pages/api/send.ts (replace <your-list-number>).
If the user does sign up this is stored in local storage so when they return it will be remembered that they have signed up.
Alternatively, the sign up box can be removed by setting on to false.

```javascript
signUp: {
    on: true, // whether sign up box is displayed or not
    title: '', // Title for sign up box
    text: '', // any additional text
    leftImage: '', // image to go under text
    signedUpImage: '', // image to be displayed once user has signed up
    signedUpMessage: 'Thanks you\'ve signed up',
    namePlaceHolder: 'Your first name',
    emailPlaceHolder: 'Your email address',
    btnText: 'Subscribe',
}
```

### Api Url
Url for prisma api endpoints
```javascript
apiURL: '',
```

## Theme
Various aspect of the them can be changed by altering the lib/theme.js file.

```javascript
{
  headedFont: 'Poppins', // font name to be imported from google fonts
  headerFontFamily: 'Poppins, sans-serif', // font family name to set font
  font: 'Open+Sans', // font name to be imported from google fonts
  fontFamily: 'Open Sans, sans-serif', // font family name to set font
  darkColor: '#262626', // background colour for dark mode
  lightColor: '#ffe8fd', // background colour for light mode
  textColorForDark: '#fff', // main text colour for dark mode
  textColorForLight: '#484848', // main text colour for light mode
  altColors: ['rgb(255, 0, 120)', 'rgb(255, 0, 120)'], // alternative colors for various titles
};
```


## Adding a blog post
To add blog posts go to prisma and create a new "Custom type", the type should have the name "post".

On the post type create 4 fields:


|Field Name|Type|API ID|
|---|---|---|
|date|Date|date|
|title|Title|title|
|snippet|Rich Text|snippet|
|body|Rich Text|body|

Once this is set up new posts can be created and will appear on the blog once published through prisma.
