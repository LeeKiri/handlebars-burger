//front end js fetch and click handlers
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const devourBtn = document.querySelectorAll(".devBtn");

  if (devourBtn) {
    devourBtn.forEach((button) => {
      button.addEventListener("click", (e) => {
          
        const setEatstate = {
          devoured: false,
        };
        fetch(`/api/burgers`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
          },
          body: JSON.stringify(setEatstate),
        }).then((response) => {
          if (response.ok) {
            console.log("updated new Burger");
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
        });
      });
    });
  }
});
