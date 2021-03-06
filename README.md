# BCS DEGREE NAVIGATOR

By Danny Israel, Cody Gagnon, and Kathryn Simone.

The BCS Degree Navigator enables students to track their progress through the University of British Columbia’s Bachelor of Computer Science (BCS) second degree program. You can find more information about the BCS program here: https://www.cs.ubc.ca/students/undergrad/degree-programs/bcs-program-second-degree.

Unlike students in other programs at the University of British Columbia, whom have access to online tools to help them plan their degrees, students in the BCS program had only a .pdf document with which to track their degree progress and plan for the future. Thus, we created The BCS Degree Navigator, a multi-featured web application intended to make plotting one’s course through the BCS Degree less complicated and more intuitive.

The BCS Degree Navigator, which can be found at https://bcsdn.herokuapp.com/, enables users to create an account, enter and save information about their courses, and view their progress as displayed in progress bars, sortable tables, and a semester-by-semester timeline.

Users can easily see the exact proportion of the degree that they have completed to date by entering information about the courses that they have successfully completed in past semesters. The BCS Degree Navigator conveniently displays a user’s overall progress, as well as progress toward the program’s various components, including core requirements, the bridging module, upper-level electives, and exemption replacements.

In addition, the BCS Degree Navigator helps users to plan future course enrollment by listing all outstanding requirements and enabling users to easily add and delete courses to current and future sessions. The user’s past, present, and future courses are all displayed in an easy-to-understand timeline.

![Timetable](https://github.com/katxsim/BCS-degree-navigator/blob/master/readme_images/Timeline%20View.png)

## Team Member Contributions

### Danny Israel

- Implemented Redux actions
- Implemented first versions of CourseList and SummaryView
-	Designed and implemented data structures to handle degree requirement logic
-	Implemented business logic (assessment of degree requirements met) 
-	Implemented add and delete course functionality
-	Implemented sorting in timeline component so sessions appear in order
- Implemented design and actions for handling multiple users
-	Contributed to Grades component to calculate GPA only for courses with grades
-	Implemented dynamic session generation to compare dates

### Cody Gagnon

Cody’s major technical contributions include:

- Added Redux
- Implemented the first version of the AddCourse component
- Implemented the ProgressTabs component
- Implemented the Grades component
- Implemented the Timeline component
- Implemented the Progress component
- Implemented tables in the SummaryView component
- Helped my team to understand Meteor’s publications, subscriptions, and methods
- Helped to structure the data so that it would be easily traversable

### Kathryn Simone

- Created user interface with SemanticUI
- Added accounts and users
- Created EmailSteve component
- Added signup and sign-in functionality
- Created progress bar visuals
- Created EasySelect for students to add main courses
- Implemented Meteor methods
- Added input for session/year
- Added onHover info for Core/Bridging/Exemptions/Replacements/Electives


## Challenges Overcome

### The Progress Table and Semantic UI

We used Semantic UI React to style the components in our web application. Although Semantic UI has many benefits, its default behaviour for building tables caused some unforeseen challenges. By default, Semantic UI builds tables by inserting _records_ row by row, such that all cells in a table are filled. This default behaviour worked well for our Grades table, shown below.

![Grades Table](https://github.com/katxsim/BCS-degree-navigator/blob/master/readme_images/Grades%20View.png)

However, Semantic UI’s default behaviour did not work well for our Progress table (shown below), which organizes individual _cells_, rather than _records_. To put it another way, our Progress table needed to organize courses by _column_, rather than by _row_. In addition, we needed to insert empty cells where appropriate, such that each column’s length could vary.

![Progress Table](https://github.com/katxsim/BCS-degree-navigator/blob/master/readme_images/Progress%20View.png)

To achieve the desired behaviour, we wrote an algorithm that calculated the cell coordinates for each course, based upon the course’s year and session, as well as the courses that had already been added to the table. The algorithm then inserts the cells into their appropriate locations within an array of arrays. Then, the algorithm inserts empty cells at each index that does not contain a course cell. Finally, when the table renders, the program maps over this array of arrays and builds the Progress Table row by row, as it normally does.

### Degree Requirement Verification

The first attempt for creating and updating degree requirements for a list of courses iterated through a list of courses, and for each course iterated through a list of requirements. This made the code and case checking overly complex, not to mention the nightmarish debugging when a bug is repeadedtly triggered in the double iteration. The final solution was to iterate over each course and for each course to drill in to a json object of requirements based on the course given. Then, each course simply leads to a small block of code that can perform a few final checks and increment the necessary parts of the json requirements object. Furthermore, to centralize this responsibility, the function was moved to a seperate file that when called returns a json object of degree requirements. We then use this requirements object to render some desired information in the various progress views. 

## Future Direction

Over the course of the semester, we realized that some of our initial goals were either unrealistic or outside the scope of CPSC 436I. In order to maintain our focus on developing the most central aspects of the BCS Degree Navigator, we decided to postpone some features for future development, including:

- **Search:** search for courses and instructors.
- **Validation:** validate courses entered by users against a complete list of courses offered at UBC.
- **Suggestions:** suggest future courses based upon a user’s completed prerequisites.

As a first step in accomplishing the above features, we will first need to scrape data from the UBC website. Web scraping presented our team with a seemingly large challenge that was nonessential for the most critical features and functions of the BCS Degree Navigator.
In addition, we would like to continue to tweak the styling and responsive design of the BCS Degree Navigator, so that it delivers the best possible experience to our users. As we add new features and modify old ones, we will continue to test and debug the code to ensure its functionality does not falter.

## Above and Beyond

The Progress component of the BCS Degree Navigator is compact, yet rich in features. To create the best possible user experience, we wanted to display a lot of information in a small space that would make it possible for the user to focus on different types of information displays without scrolling very much. To solve this problem, we used React and Semantic UI to create tabs, inside of which we nested a summary view, a progress view, a timeline, and a grades table. Inside each of these four components, we nested other, smaller components, such as Semantic UI’s progress bars, tables, and steps. As an added bonus, displaying information using tabs will make it easy for us to add new features in the future, as we will not have to create space on the page or move existing components to accommodate the new feature.

## Presentation Slides

You can view the slides from our showcase presentation (which we gave on Saturday, August 10, 2019) [here](https://github.com/katxsim/BCS-degree-navigator/blob/master/BCS-Degree-Navigator-Presentation.pdf).
