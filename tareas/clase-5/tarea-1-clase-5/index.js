document.querySelector('#calcularSalarioMensual').onclick = function(){
  const salarioAnual = Number(document.querySelector('#salarioAnual').value);
  const salarioMensual = calcularSalarioMensual(salarioAnual);
  document.querySelector('#salarioMensual').value = salarioMensual;

  return false;
};

function calcularSalarioMensual (salarioAnual){
  const mesesDelAnio = 12;
  return salarioAnual / mesesDelAnio;
};