define(['app'], function (app) {
  app.controller('MailboxController', function ($scope, messageBox) {


    // Set mailbox tip number.
    var messageBum = 0;
    setInterval(function() {
      messageBum ++ ;
      messageBum = messageBum > 5 ? 0 : messageBum;
      messageBox.mailBoxTip(messageBum);
    }, 1000);
  });
});