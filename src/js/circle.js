$(function () {
  // Obtener el valor porcentual
  var value = parseInt($(".text").html());

  // Cuando el porcentaje es menor o igual a 50
  if (value <= 50) {
    var html = "";

    html +=
      '<div class="mask-right" style="transform:rotate(' +
      value * 3.6 +
      'deg)"></div>';

    // Agrega elementos secundarios al elemento
    $(".circle-right").append(html);
  } else {
    value -= 50;
    var html = "";

    html += '<div class="circle-left">';
    html +=
      '<div class="mask-left" style="transform:rotate(' +
      value * 3.6 +
      'deg)"></div>';
    html += "</div>";

    // Agregar elemento tras elemento
    $(".circle-right").after(html);
  }
});
