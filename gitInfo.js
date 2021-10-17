/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'Git is a version control software that allows developers to save "screenshots" of their code with notations describing changes made and saving those changes along with a changelog'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'GitHub is a web service where developers can upload their git repositories to save their code outside of their local machine and allow team members to access the repositories';

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = {description: 'Initializes a git repository in the current directory',
            code: 'git init'};

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {description: 'clones a git repository from a URL into the current directory',
             code: 'git clone (URL)'};

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {description: 'Checks changes in the contents of the local repository against the repository in a web hosting service such as GitHub',
              code: 'git status'};

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {description: 'Stages selected files with their changes to be pushed in a commit to the repository',
           code: 'git add (file names, or ".'};

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {description: 'Creates a "screenshot" of the files added with "git add" and the message added for notation of the changes made to the files',
              code: 'git commit -m "notation"'};


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {description: 'Adds the commit as well as the changes to the files added with "git add" to the git repository and/or the GitHub repository',
            code: 'git push'};

            console.log(push, commit, add, clone, init, status );