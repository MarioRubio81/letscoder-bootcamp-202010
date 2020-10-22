retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTE5NzJkMjE3YzAwMTc2ZDhiNzYiLCJpYXQiOjE2MDMzODk3MzUsImV4cCI6MTYwMzM5MzMzNX0.h-6LKJnMewRwbNpNxQ_-siXkX5FW8Zu0xYU7dK4GLTw', function(error, user) {
    console.log('DEMO retriveUser()')

    if (error) console.error(error)
    else console.log(user)
}) 