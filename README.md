# Trelleborg Marine Systems UK - Developer Test

##Tools Used:

1. [Node](https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi) version 12.18.3 LTS
2. [NPM](https://www.npmjs.com/get-npm) version 6.14.8
3. [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.
4. [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/documentation#getting-started) Bootstrap 4

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Test Brief

To gain an idea of developer capability in understanding and developing with technologies currently used at Trelleborg Marine Systems UK, this project will cover 
some key aspects of Angular. It should be noted - this is not a timed test, there is no expectation the developer should have pre-existing knowledge of Angular, 
this provides a demonstration of problem solving, self-sufficiency and task completion.

When completing a task please use: `//` or `<!-- -->` with TASK: [TASK Number] indicating the area that completes the task.  

e.g

`<!-- TASK: 1 Add heading to Home component -->`

`<h1>I Added a Heading</h1>`

or 

`// TASK: 2 Populate list with things`

`let listOfThings = {"thingOne","thingTwo"}`

### Tasks


#### 1. Fix Page Title:

The title in the card on each of the pages differ. Think of a solution to fix this.

#### 2. Fix Button Issues:

Align the buttons in the footers to the right, fix any issues arising.

#### 3. Make Table Dynamic:

Having static information in the list does not allow for easy updating - Can this be remedied using Angular.

#### 4. Create a simple service:
    
On the home page provide a service to display this text on load:
 
___"And the Lord spake, saying, First shalt thou take out the Holy Pin. 
Then shalt thou count to three, no more, no less. Three shall be the number thou shalt count,
and the number of the counting shall be three. Four shalt thou not count, neither count thou two,
excepting that thou then proceed to three. Five is right out! Once the number three,
being the third number, be reached, then lobbest thou thy Holy Hand Grenade of Antioch towards thy foe,
who, being naughty in my sight, shall snuff it."___

 and this text after a button click 

___"Right. One... two... five!"___.

Demonstrate dependency injection with this service.

#### 5. Add a new Test Component
    
Add a new component called: 'Test', add a single `<h1>` tag with the text ___"Success"___, try to keep to the look of the other components.
Make sure it is possible to navigate to the new component - add links as required.

#### 6. Weather list component:

This part is to test general Angular/HTML/UX knowledge.

The list-weather component contains a simple input field in which you can add a city along with some default temperature readings to a table.
There are a few bugs with this component. 

The goal is to fix these issues, as well as address any user experience inconsistencies you may find along the way.
       
##### Bonus - Implement the ability for a user to remove a city from the table.

#### 7. Weather view component:

To start this task, you will need to create a new component, call it 'WeatherViewComponent'. You have the freedom to style this component however you want,
the 'ngx-bootstrap' library is included if you're familiar with Bootstrap (v4).

(You will also need to add a route to navigate to this new component in 'HomeComponent', as well as in the app-routing.module.ts file.)
    
The objective here is to create a component that will allow a user to input a city name, get its current weather information and display it.
You will need to make use of a reactive form, which contains a single input field to get the city name.
This form must have some validation to check that the user input is valid.
If the user enters an invalid input (according to your validation rules), then the UI must display the violation(s).
    
Once a valid user input has been gathered, you will need to send it to the Open Weather API to get the current weather information.
(you can use the 'WeatherService' located in 'src/app/shared/services'),


The data that is retrieved from the API should be displayed in a suitable format (whether as a list group, table, separate component etc. is up to you).
The minimum data to display to the user would be the city name, and current temperature
(although showing all the data returned would be preferable, see the 'City' model, located in 'src/app/shared/models').


The component you create should also output to the user whether there was an error whilst retrieving information from the API.

#### Once these task are completed either provide a link to the GIT repo, or zip the project and email





