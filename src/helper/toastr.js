export function showToast(message, isError = false) {
    let toastDiv = document.createElement("div");
    toastDiv.id = "snackbar";
    toastDiv.textContent = message;
    toastDiv.className = isError ? "showToast error" : "showToast";
    document.body.appendChild(toastDiv);
    setTimeout(function () {
      toastDiv.remove();
    }, 3000);
  }
  