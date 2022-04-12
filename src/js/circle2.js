$(function () {
  // Obtener el valor porcentual
  var value = parseInt($(".text2").html());

  // Cuando el porcentaje es menor o igual a 50
  if (value <= 50) {
    var html = "";

    html +=
      '<div class="mask-right2" style="transform:rotate(' +
      value * 3.6 +
      'deg)"></div>';

    // Agrega elementos secundarios al elemento
    $(".circle-right2").append(html);
  } else {
    value -= 50;
    var html = "";

    html += '<div class="circle-left2">';
    html +=
      '<div class="mask-left2" style="transform:rotate(' +
      value * 3.6 +
      'deg)"></div>';
    html += "</div>";

    // Agregar elemento tras elemento
    $(".circle-right2").after(html);
  }
});
