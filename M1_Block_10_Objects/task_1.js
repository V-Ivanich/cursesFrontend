const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const keyStatus = "online";
const onlineUsers = [];

for (let item of users) {
  if (item["status"] === keyStatus) {
    onlineUsers.push(item);
  }
}
const usersOnlineNames = onlineUsers.map((elem) => {
  return elem.username;
});

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames.join(", ")}`);
