document.addEventListener("DOMContentLoaded", function () {
     const openChatBtn = document.getElementById("openChatBtn");
     const closeChatBtn = document.getElementById("closeChatBtn");
     const chatPopup = document.getElementById("chatPopup");
     const sendBtn = document.getElementById("sendBtn");
     const messageInput = document.getElementById("messageInput");

     openChatBtn.addEventListener("click", function () {
          chatPopup.style.display = "block";
     });

     closeChatBtn.addEventListener("click", function () {
          chatPopup.style.display = "none";
     });

     sendBtn.addEventListener("click", function () {
          const message = messageInput.value.trim();

          if (message !== "") {
               alert("Message sent: " + message);

               messageInput.value = "";
          }
     });

     window.addEventListener("scroll", function () {
          let scrollToTopButton = document.querySelector(".scrollTop");
          let openChatBtn = document.getElementById("openChatBtn");
     
          let scrollThreshold = 600;
     
          if (window.pageYOffset > scrollThreshold) {
               scrollToTopButton.style.opacity = 1;
               openChatBtn.style.opacity = 1;
          } else {
               scrollToTopButton.style.opacity = 0;
               openChatBtn.style.opacity = 0;
          }
     });
});

