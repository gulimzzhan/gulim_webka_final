document.addEventListener("DOMContentLoaded", function () {
     const showAllTeamBtn = document.getElementById("showAllTeamBtn");
     const teamRow = document.querySelector(".team-cards .row");

     showAllTeamBtn.addEventListener("click", function () {
          teamRow.classList.toggle("show");
     });
});