window.onload = function () {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");
  const searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });

  searchBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });

  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
};

function activerCodePrepaye() {
  const codeAttendu = "MONCODEPREPAYE123";
  const codeSaisi = document.getElementById("code").value;

  if (codeSaisi === codeAttendu) {
    document.getElementById("message").textContent =
      "Le code a été activé avec succès!";
  } else {
    document.getElementById("message").textContent =
      "Le code est incorrect. Veuillez réessayer.";
  }

  // Empêche le formulaire de se soumettre réellement
  return false;
}
