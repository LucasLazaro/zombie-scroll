var pixelToCm = 0.026458333,
  cmToM = 100,
  cmToKm = 100000,
  pixels,
  centimeters,
  distance,
  unit;

function renderStatus(text) {
  document.getElementById('scrollzone').textContent = text;
}

document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get("pixelsScrolled", function (items){
    pixels = items.pixelsScrolled;
    centimeters = pixels * 0.026458333; // to cm

    if(centimeters >= cmToKm) {
      distance = centimeters/cmToKm;
      unit = "kilometers";
    } else if (centimeters >= cmToM){
      distance = centimeters/cmToM;
      unit = "meters";
    } else {
      distance = centimeters;
      unit = "centimeters";
    }
    renderStatus("You have scrolled " + distance.toFixed(2) + " " + unit);
  });
});
