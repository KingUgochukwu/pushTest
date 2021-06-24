var push = require('web-push'); 
const vapidkeys = {   
    publicKey: 'BCXlSJK_T5VYzNkm-LaqXtxjdTi4cqGKYMURQfCQMbnwZNacsjukA5SYQj1ipAVDAdx31cNpDaJ_BUIMfjxhgjA',       
    privateKey: '2YZo94HU98QxWY3XrymOZphkjYUH_n36pjMwjnYzcX8'
  }; 

  push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey); 

  //This would be gotten from our database of users who have allowed 
  // notification access
  const sub = {}; 

  push.sendNotification(sub, 'test message'); 


