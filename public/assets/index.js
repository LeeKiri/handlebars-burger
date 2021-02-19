// front end js fetch and click handlers
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const addbtn = document.getElementById("addBtn");
  addbtn.addEventListener("click", (e) => {
    const newBurg = {
      burger_name: document.getElementById("bur").value.trim(),
      devoured: 0,
    };
    fetch(`/api/burgers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBurg),
    }).then((response) => {
      if (response.ok) {
        console.log("updated new Burger");
        location.reload("/");
      } else {
        alert("something went wrong!");
      }
    });
  });

  const devBtn = document.querySelectorAll(".devBtn");
  for (var i = 0; i < devBtn.length; i++) {
    devBtn[i].addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      fetch(`/api/burgers/${id}`, {
        method: "PUT",
      }).then((res) => {
        console.log(`deleted Burger ${id}`);
        location.reload();
      });
    });
  }
});
