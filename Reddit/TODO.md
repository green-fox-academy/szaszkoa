*** TODO ***

TODO user related todos
  TODO implement modify functionality after identifying user
  TODO add sign-out option
TODO implement client-pageURL masking
TODO implement sorting the posts - now its ordered by time created, hard coded by the query.
TODO CORRECT: the remove and modify logic has an unwanted side-effect, upon noone is signed in, Anonymous posts can be removed by anyone

HIGHLY OPTIONAL
TODO implement content field into the post, and adding transition to the separate posts to enlargen when the 'enlarge' button is clicked

*** COMPLETED ***
TODO separated modules from index.js into main.mjs
TODO add logged in user display in the controls section
TODO rework newpost.css to accomodate all secondary page style
TODO modify GET posts to include username from users table - modify the anonimify function instead
TODO implement user-handling
  TODO add login page form
  TODO add signup page with redirect
  TODO add username to endpoint SQL insert and  display user_id 
TODO implement upvote/downvote functions
  TODO function targetting the used vote button and disabling the other. after implementing users ofcourse
TODO implement delete functionality after identifying user - done, with 'remove' link only displaying for posts by users
  TODO implement vote saving functino somehow. After refreshing, the votes should remain. This should be solved with the votes table!
TODO user related todos
    TODO implement existing votes updating with UPDATE query somehow -> complete vote-handling done both on DOM and SQL side
    TODO last resort: just delete the old one and add the new one
  TODO implement votes changing by 2 after the useer already voted once