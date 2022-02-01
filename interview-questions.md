# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: 
  As far as fixing the mistake, I will have to do research, but I am certain I know where to look. The name of the foreign key would be student_id. Student_id, the foreign key would belong to the Student model

  Researched answer:
If you forget to add the foreign key when creating a model, you can use migrations to fix the problem. According to something I found on Stack Overflow, you can use $rake: db:rollback then add_column and in this case enter "student_id: integer". The foreign key will always be on the model that "belongs_to" so in this case, "student_id" would belong to the Student model. A time I used a foreign key was on the Wildlife Tracker Challenge when I created the Sighting model.


2. Which RESTful routes must always be passed params? Why?

  Your answer:
The RESTful routes that must always be passed params are routes that typically need parameters to be valid, such Create/Post and Update/Put/Patch.

  Researched answer:
URL parameters, also known as params, are a way to pass in additional info into a controller method to query the database and they are also how the user can interact with our app and see things dynamically. RESTful routes that require params to be passed to them are Create/Post, and Update/Put/Patch. The reason they require params is because when we create or update a piece of data, there is certain, specific information we are looking to recieve, so we can define params to make sure we get what we need. A time I've used params was during the Wildlife Tracker challenge. I created params, under the "private" method(?) so that I can have strict inputs when creating new animals and sightings. 



3. Name three rails generator commands. What is created by each?
  Your answer:
Three rails generator commands are: $rails g model, which creates a new model, $rails g controller, which creates a new controller, and $rails g migration, which is used to modify existing databases/ 


  Researched answer:
Rails generate, or $rails g, os the setup command passed to Rails to quickly set up folders and files for a project. One I've found very helpful was $rails g resource. This generate command does everything generating a model does but it also creates a resource in the routes file and makes routing seamless. As mentioned before, another rails generate command is, $rails g model, which creates a migration, a model, and tests for the files that were generated. Another type of rails generate command is $rails g controller, which creates a controller, the logical center of your app. 





4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students          
The controller method that would be called by this route would be "index" and it would display all of the students.

action: "POST"   route: /students       
The controller method that would be called by this route would be "create" and it would create a student.

action: "GET"    route: /students/new
The controller method that would be called by this route would be "new" and it would return a form for creating a new student.

action: "GET"    route: /students/2  
The controller method that would be called by this route would be "show", and it would display a specific student.

action: "GET"    route: /students/2/edit    
The controller method that would be called by this route would be "edit" and it would return a form for editing a student. 
 
action: "PATCH"  route: /students/2      
The controller method that would be called by this route would be "update" and it would update a specific student.

action: "DELETE" route: /students/2      
The controller method that would be called by this route would be "destroy" and it would delete the specified student.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1.) As a developer I can create a model in the database named To-Do and it will have the following information: task, priority level, if it has been completed, and if it's currently being worked on.

2.)As a user I can see all of the tasks on the list, see their priority level, if they have been completed or not, and if it's currently being worked on.

3.)AS a user, I can create new tasks, as long as I enter: task, priority level, if it has been completed, and if it's currently being worked on.

4.) As a user, I can look at specific tasks and see their status and priority level.

5.) As a user, I can update tasks as I complete them or start on them, or if I change my mind about their level of priority.

6.) As a user, I can delete tasks that I have completed or tasks I no longer find necessary or feel like doing.

7.) As a user, I can create a list of tasks that my children are responsible for, with the same attributes as above. 

8.) As a user, I can create new tasks for them to complete. 

9.) As a user, I can update the tasks as they begin to work on them or as they complete them.

10.) As a user, I can look at the list of my children's tasks and see their status and priority.

11.) As a user, when my children complete tasks on their list, I can delete the task.