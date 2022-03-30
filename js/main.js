// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']}); //linea ESCENCIAL 

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(dibujarGrafica);//llamanda asincrona  ESCENCIAL

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function dibujarGrafica() {//

  // Create the data table.
  var data = new google.visualization.DataTable();//instanciado VARIABLE IMPORTANTE
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([//valores de linea 
    ['Champiñones', 1.5],
    ['Cebollas', 0.5],
    ['Aceitunas', 0.1],
    ['Queso', 5],
    ['Pepperoni', 3],
    ['Jamón', 1],
    ['Piña', 3]
  ]);

  // Set chart options
  var options = {'title':'¿Cuanta pizza comistes anoche?',
                 'width':450,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('grafica'));
  chart.draw(data, options);
}