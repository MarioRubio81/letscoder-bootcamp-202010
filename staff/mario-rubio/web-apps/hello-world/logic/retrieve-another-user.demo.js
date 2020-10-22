retrieveAnotherUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTE5NDJkMjE3YzAwMTc2ZDhiNzUiLCJpYXQiOjE2MDMzOTExNjgsImV4cCI6MTYwMzM5NDc2OH0.qRb8wfrw9EAadvDbHOy8awxS-mCtBQsDXXQ7xlxgHL8', function(error, user) {
    console.log('DEMO retriveAnotherUser()')

    if (error) console.error(error)
    else console.log(user)
}) 