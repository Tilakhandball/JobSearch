# JobSearch
Searching for a list of jobs

Assumption and Process made during project creation:

1)The api provided in the test link was consumed as GET method to show the list of available jobs.
2)The user will be able to see all the available jobs in the job listing section(Dynamic DOM objects) only on clicking the Search button in the job Search section.
3)The user can search the displayed jobs with the use of any keywords(title,location,skills etc.,) using a search box inside the job listing section
4)The user can sort the displayed jobs either by location or experience using two available sort buttons.
5)If any of the job details arrived as empty string in the response of the service call, then those field for the particular job will not be available in the DOM(i.e., it will not be shown as empty field).
6)If the details of the job overlaps the job container(card like view) individual vertical scrolls are added.
7)Inorder to indicate the user, that he/she can navigate to details page a tooltip has been added with a message in it.
8)Inorder to view the full details of the job, the user can click on each job to navigate to the details page. User can navigate back to web launch page using the available back button.
9)A simple jasmine test case is available in the spec folder inorder to unit test the consumed end point.

Note: 
1)Faced 404 issue during POST call, hence all the available jobs are listed during Search button click event and JSON values under data of the response alone are changed for data display purpose only.
2)Please let me know if any updates needs to be done or reach out to me if you have any queries(tilakhandball@gmail.com).

Major Technical Stack:

#Angular 1.6
#ES6
#SASS
#Webpack
#UI-Router
#BootStrap
#Jasmine

Basic Instructions:

Make sure you have Node version >= 6.0 and NPM >= 3

```
# clone my repo directly by dowloading it as a zip (or) use the following git command
git clone --depth 1 https://github.com/Tilakhandball/JobSearch.git

# change directory to repo
cd Byju's_project

# install the repo with npm
npm install

# start the server
npm start

#Run the simple test case available in the project
npm test
```

go to [http://0.0.0.0:9000](http://0.0.0.0:9000) or [http://localhost:9000](http://localhost:9000) in your browser(suggested: chrome)



