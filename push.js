var push = require('web-push'); 
const vapidkeys = {   
    publicKey: 'BCXlSJK_T5VYzNkm-LaqXtxjdTi4cqGKYMURQfCQMbnwZNacsjukA5SYQj1ipAVDAdx31cNpDaJ_BUIMfjxhgjA',       
    privateKey: '2YZo94HU98QxWY3XrymOZphkjYUH_n36pjMwjnYzcX8'
  }; 
  try{
  push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey); 
  }catch(err){
      console.log("Error setting vapi keys", err); 
  }
  //This would be gotten from our database of users who have allowed 
  // notification access
const sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/d8H88AQo1pM:APA91bGCfDSesrq_OEze0Q0Ka13VEEAu5Q_wYLbMI2JSjyHSdRwp7opvMuIOYJmm2IellDFV5AW1Un4bAAeq913ECHfI19z7136RqWqMesg_Gi_KbrELQzzcB2yXV_HPzjnd4ZVWS49J", "expirationTime": null, "keys": { "p256dh": "BM8ny5YKiyLyMAFgbswGk-zhTOKS7zIir6ICf2soKtYq7mD812IkInDXzwUBVL6CLfpOyikzFA8cnBk-kNPxqgQ", "auth": "Hz83VyJPiFfJpblN9LlRGg" } }

  push.sendNotification(sub, 'test message').then(console.log("Notif sent successfully")).catch(err => {console.log("That didnt work", err)}); 


