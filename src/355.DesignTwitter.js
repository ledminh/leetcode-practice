var Twitter = function () {
  this.followers = {};
  this.posts = {};
  this.count = 0;
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.count++;

  if (!this.posts[userId]) {
    this.posts[userId] = [[tweetId, this.count]];
  } else {
    this.posts[userId].push([tweetId, this.count]);
  }
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const userIDs = [userId];

  if (this.followers[userId])
    userIDs.push(...Object.keys(this.followers[userId]).map((k) => Number(k)));

  const posts = userIDs
    .filter((id) => this.posts[id])
    .map((id) => [this.posts[id], this.posts[id].length - 1]);

  const result = [];

  while (result.length < 10) {
    let latestTime = Number.NEGATIVE_INFINITY,
      latestI = -1;

    for (let iPosts = 0; iPosts < posts.length; iPosts++) {
      const [currArrPosts, pointer] = posts[iPosts];

      if (pointer >= 0) {
        const currTime = currArrPosts[pointer][1];

        if (currTime > latestTime) {
          latestTime = currTime;
          latestI = iPosts;
        }
      }
    }
    if (latestI === -1) break;

    const pointer = posts[latestI][1];
    const tweetID = posts[latestI][0][pointer][0];

    posts[latestI][1] = pointer - 1;
    result.push(tweetID);
  }

  return result;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.followers[followerId]) {
    this.followers[followerId] = {};
  }

  this.followers[followerId][followeeId] = true;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.followers[followerId]) delete this.followers[followerId][followeeId];
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

const tweet = new Twitter();

function run(commands, params) {
  console.log("-----Start Test----------");

  let result = "";
  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case "postTweet":
        result += `User-${params[i][0]} posts tweet ${params[i][1]}\n`;
        tweet.postTweet(...params[i]);
        break;
      case "getNewsFeed":
        result += `Get News Feed of user-${params[i]}: ${tweet.getNewsFeed(
          ...params[i]
        )}\n`;
        break;
      case "follow":
        result += `User-${params[i][0]} follows user-${params[i][1]}\n`;
        tweet.follow(...params[i]);
        break;
      case "unfollow":
        result += `User-${params[i][0]} unfollows user-${params[i][1]}\n`;
        tweet.unfollow(...params[i]);
        break;
      default:
        break;
    }
  }

  console.log(result);
  console.log("-----End Test----------");
}

run(
  [
    "Twitter",
    "postTweet",
    "getNewsFeed",
    "follow",
    "postTweet",
    "getNewsFeed",
    "unfollow",
    "getNewsFeed"
  ],
  [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
);
