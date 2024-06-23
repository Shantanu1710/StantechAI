// Sample data
const data = [
    { userId: 1, activityType: 'login', timestamp: '2024-06-14T10:00:00Z' },
    { userId: 2, activityType: 'logout', timestamp: '2024-06-14T10:05:00Z' },
    { userId: 1, activityType: 'view', timestamp: '2024-06-14T10:10:00Z' },
    { userId: 3, activityType: 'login', timestamp: '2024-06-14T10:15:00Z' },
    { userId: 2, activityType: 'view', timestamp: '2024-06-14T10:20:00Z' },
    { userId: 1, activityType: 'logout', timestamp: '2024-06-14T10:25:00Z' },
  ];
  
  // Function to count the number of unique users
  function countUniqueUsers(data) {
    const uniqueUsers = new Set(data.map(item => item.userId));
    return uniqueUsers.size;
  }
  
  // Function to find the most common activity type
  function findMostCommonActivityType(data) {
    const activityCounts = new Map();
    data.forEach(item => {
      if (activityCounts.has(item.activityType)) {
        activityCounts.set(item.activityType, activityCounts.get(item.activityType) + 1);
      } else {
        activityCounts.set(item.activityType, 1);
      }
    });
  
    let mostCommonActivity = '';
    let maxCount = 0;
    activityCounts.forEach((count, activity) => {
      if (count > maxCount) {
        mostCommonActivity = activity;
        maxCount = count;
      }
    });
  
    return mostCommonActivity;
  }
  
  // Function to generate a timeline of activities for each user, sorted by timestamp
  function generateUserActivityTimelines(data) {
    const userTimelines = {};
  
    data.forEach(item => {
      if (!userTimelines[item.userId]) {
        userTimelines[item.userId] = [];
      }
      userTimelines[item.userId].push(item);
    });
  
    for (const userId in userTimelines) {
      userTimelines[userId].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    }
  
    return userTimelines;
  }
  
  // Using the functions
  const uniqueUsersCount = countUniqueUsers(data);
  const mostCommonActivity = findMostCommonActivityType(data);
  const userActivityTimelines = generateUserActivityTimelines(data);
  
  console.log('Number of unique users:', uniqueUsersCount);
  console.log('Most common activity type:', mostCommonActivity);
  console.log('User activity timelines:', userActivityTimelines);
  