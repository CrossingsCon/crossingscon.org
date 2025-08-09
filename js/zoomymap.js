const zoomables = document.querySelectorAll("img.zoomable");

console.table(zoomables);

const onMapClick = event => {
  const { target } = event;
  
  const dialog = document.createElement("dialog");
  
  const closeButton = document.createElement("button");
  closeButton.setAttribute("autofocus", "true");
  closeButton.textContent = "❌";
  closeButton.addEventListener("click", () => {
    dialog.close();
    
    target.parentElement.removeChild(dialog);
  });
  
  const image = document.createElement("img");
  image.setAttribute("src", target.src);
  
  dialog.appendChild(closeButton);
  dialog.appendChild(image);
  
  target.parentElement.appendChild(dialog);
  
  dialog.showModal();
};

zoomables.forEach(zoomable => {
  zoomable.addEventListener("click", onMapClick);
});
