# The good cup
## Dev guide

### Basic requirements: 
* A terminal with linux 
    * if you're on windows this will help: https://www.windowscentral.com/heres-why-you-might-be-blocked-getting-windows-10-october-2020-update
* Yarn

### How to dev
* run `yarn install` in your terminal to setup the project
* then run `yarn dev`
* then you can open http://localhost:3000

OR if you are on windows gitbash

* npx concurrently 'npm run dev:client' 'npm run dev:server'


### How to deploy 
* just push to `main`
* if deployment works you'll see it on https://nostalgic-goldstine-6c236a.netlify.app/


#
## Architecture

The whole project is hosted on `Netlify` 
### Front-end 
We use `Nextjs` for front end. 
### Back-end 
We use netlify's `lambdas functions` . Lambdas are located in `server/api` 
### Databases
For now we have no databases. Will probably be on `contentful` or `strapi.io`