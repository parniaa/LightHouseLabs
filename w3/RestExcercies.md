     

    The end-user wants to see a list of photos
     
     GET '/photos'

    The end-user wants to see a particular photo
    GET '/photos/:id'

    The end-user wants to upload a new photo
    GET '/photos/new'
    POST '/photos/'

    The end-user wants to update an existing photo
     GET '/photos/:id/edit'
    POST '/photos/:id'

    The end-user wants to see a list of user profiles
      GET '/users'

    The end-user wants to see a specific profile
    GET '/users/:id'

    The end-user wants to see a list of the photos for a specific profile
    GET'/users/:id/photos'

    The end-user wants to see one particular photo of a particular user
    GET'/users/:user/photos/:id'

You need to write the route with a verb and a path. You don't need to implement the functionality.

For example, to get a list of users, you just need to write GET '/users'. No need to write the code to get the actual users.

https://www.theodinproject.com/
https://thoughtbot.com/upcase/practice
https://hackr.io/
https://dbdiagram.io/home


## GIT BRANCHES

$ git branch new-branch
$ git branch
*** master
new-branch
||
||
||
$ git checkout new-branch
Switched to branch ‘new-branch'
$ git branch
master
*** new-branch
||
||
||
||
$ git add –A
$ git commit –m "Some commit message"
$ git checkout master
$ git merge new-branch

### VSCODE short cuts

1. Deleting a Line => (Mac: Control + X)
2. Add Cursor Above/Below => (Mac: Control + Option + Down Arrow)
3. Move Line Up/Down => Mac: Option + Down Arrow
4. Replace All Matching Occurrences of Text In The Current File => Mac: Control + F2
5. Duplicate a line => (Mac: Control + Shift + D):