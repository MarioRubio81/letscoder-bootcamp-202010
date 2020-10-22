retrieveAllUsers('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTE5NzJkMjE3YzAwMTc2ZDhiNzYiLCJpYXQiOjE2MDMzOTI1MTIsImV4cCI6MTYwMzM5NjExMn0.w8e-MSYDX-P8vY_iQNHj6Wyfzm2gjLaeWxuRxYEHuX4', function(error, user) {
    console.log('DEMO retriveAllUsers()');

    if (error) console.error(error);
    else console.log(user);
}) 