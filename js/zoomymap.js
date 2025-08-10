const zoomables = document.querySelectorAll("img.zoomable");

/**
 * Builds a structure like this:
 * 
 * <div class="mapbox">
 *   <img src="target source" />
 * </div>
 */
const buildMapbox = (target) => {
  const parent = target.parentElement;
  
  const image = document.createElement("img");
  image.setAttribute("src", target.src);
  
  const mapbox = document.createElement("div");
  mapbox.setAttribute("class", "mapbox");
  mapbox.appendChild(image);
  
  return mapbox;
};

/**
 * Copies any image (and its caption) into a dialog so it can be seen bigger.
 */
const onMapClick = event => {
  const { target } = event;
  
  const container = target.parentElement.parentElement;
  
  /*
   Makes a structure like this:
   <dialog class="mapdialog">
     <button autofocus="true">❌</button>
     <div class="mapbox">
       <img src="target source" />
     </div>
   </dialog>
  */
  
  const dialog = document.createElement("dialog");
  dialog.setAttribute("class", "mapdialog");
  
  const closeDialog = () => {
    dialog.close();
    
    container.removeChild(dialog);
  };
  
  dialog.addEventListener('click', closeDialog);
  
  const contents = document.createElement("div");
  contents.setAttribute("class", "dialogcontents");
  contents.addEventListener("click", e => e.stopPropagation());
  
  const closeButton = document.createElement("button");
  closeButton.setAttribute("class", "dialogclose");
  closeButton.setAttribute("autofocus", "true");
  closeButton.addEventListener("click", closeDialog);
  
  const image = document.createElement("img");
  image.setAttribute("src", "/images/2025/x.svg");
  closeButton.appendChild(image);
  
  contents.appendChild(closeButton);
  contents.appendChild(buildMapbox(target));
  
  dialog.appendChild(contents);
  
  container.appendChild(dialog);
  
  dialog.showModal();
};

// throw the dialogifier on any image like this
zoomables.forEach(zoomable => {
  zoomable.addEventListener("click", onMapClick);
});
