To begin, fork this plunker. When you're finished, the plunker link to your fork is the deliverable.

Your task is to finish writing the user list page (index.html + controllers.js).
The page already loads the user list from the mock server and displays it.
As an example of how to talk to server, the page also has a working delete button.

Please add the following functionality:

1. Entering a name in last row's text field and clicking the create button should use POST /api/users to create the user and update the displayed list.
2. Clicking edit button should put the row into edit mode. While the row is in edit mode:
	* The user name should be replaced by an editable input field.
	* The action buttons should be replaced by a save button. Clicking the save button should use PUT /api/users/{userId} to save the user, update the displayed list, and take the row out of edit mode.
3. Display any error messages from server in red text below the user list table.
4. Search box should filter list to show only users with search string in their name.

The following 4 api calls will return http code 200 if all went well or code 400 and a string (error message) if something went wrong.

1. GET /api/users returns array of user objects
2. POST /api/users accepts a user object (ignores user.id) and returns the new user object
3. PUT /api/users/{userId} accepts a user object (ignores user.id) and returns the edited user object
4. DELETE /api/users/{userId}

Notes:

* The app.js file implements the mock server via ngMockE2E module. You should not need to edit app.js.
* You can use the "Refresh" button to see the server's user list (to verify your code works correctly).
* Refreshing the whole page will reset the mock server's user list (this is not a bug).

