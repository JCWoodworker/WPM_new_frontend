# WPM_new_frontend
## Completely re-writing client side code for Woodworker's Project Management app ... Take a look while it is under construction!!

Table Of Contents:
- [Current Progress](#current-progress)
- [Next Steps](#next-steps)
  - [Upcoming Features](#upcoming-features)
  - [CRM System](#crm-component)
  - [Analytics](#analytics-component)
- [Dev Ops Breakdown](#dev-ops-breakdown)
  - [Front End Deployment](#front-end-deployment)
  - [Back End Deployment](#back-end-deployment)

## Current Progress: <a name="current-progress"></a>

Users can do the following:
* Sign up for an account
* Sign into their account
* Create a new project
* Utilize the board foot calculator and save a tally of calculations for differet sized boards
* Sign out

## Next Steps: <a name="next-steps"></a>

* Enable a user to edit a project after it is created <a name="upcoming-features"></a>
* Add ability to upload pictures to a project
* Add ability to choose from a list of woods and pricing to add to a project
* Add materials list with pricing so users can add the cost of things like glue or tape to a project
* Enable user to quickly add their list of tallies from the boardfoot calculator to a specific project
* Create user settings to handle wood waste, labor rate, and retail markup
* Create an editable price list that will populate the wood list when selecting woods for a project or for the board foot calculator
  * In the previous iteration of this app there was an admin account that handled this.
  * It was meant for a lumber yard to distribute the app to their customers and control the pricing structure
  * In this version I plan on allowing the user to have control over their price list
* Create the entire CRM system <a name="crm-component"></a>
  * Utilize Twilio/Sendgrid APIs so users can text and email their customer right from the app.
  * User an add a customer to a specific project and data will be recorded for analytics
    * The customer can be automatically or manually emailed or texted whenever progress is changed on their project
      * Images Uploaded
      * Status Changed
      * Invoice or Quote Sent
      * Timeline Changes
      * Etc ... 
* Create the analytics component <a name="analytics-component"></a>
  * Users will see a quick rundown of:
    * Open projects
    * Due dates
    * Yearly/monthly/weekly sales on delivered projects
    * Up to date tally on future income from open projects
  * Users can also run reports such as history from specific customers and/or projects
  * Users can choose to view tables, data visualizations, or both

## Dev Ops Breakdown <a name="dev-ops-breakdown"></a>

* Deployed on Netlify <a name="front-end-deployment"></a>
  * Preprod site = https://www.woodpromanpreprod.netlify.app
    * Auto deploys on any push to preprod branch in this repo
  * Prod site = https://www.woodproman.com
    * Auto deploys on any push to main branch in this repo

* Backend is deployed on Heroku <a name="back-end-deployment"></a>
  * Staging - https://wpm-new-backend-staging.herokuapp.com/
    * Preprod branch utilizes this when communicating with server
    * This has it's own Postgres database for experimentation
  * Production - https://wpm-new-backend-production.herokuapp.com/
    * Staging can be pushed to production when ready
    * This has it's own separate Postgres database as well



