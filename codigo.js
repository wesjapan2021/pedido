function doGet(e) {
  var htmltemplate = HtmlService.createTemplateFromFile('pedido');

  // Obtiene los parámetros de la URL y asigna un valor predeterminado si no están presentes
  var detalleVenta = e.parameter.detalleVenta || '';
  var noVenta = e.parameter.noVenta || '';
  var tipoVenta = e.parameter.tipoVenta || '';
  var transporte = e.parameter.transporte || '';
  var fecha = e.parameter.fecha || '';
  var nombreCliente = e.parameter.nombreCliente || '';
  var nombreEmpresa = e.parameter.nombreEmpresa || '';
  var codigoCliente = e.parameter.codigoCliente || '';
  var direccion = e.parameter.direccion || '';
  var telefono = e.parameter.telefono || '';
  var noNit = e.parameter.noNit || '';
  var totalVenta = e.parameter.totalVenta || '';
  var nombreAsesor = e.parameter.nombreAsesor || '';
  var tipoPago = e.parameter.tipoPago || '';
  var ruta = e.parameter.ruta || '';
  var area = e.parameter.area || '';

  // Asigna los valores a las variables en la plantilla
  htmltemplate.detalleVenta = detalleVenta;
  htmltemplate.noVenta = noVenta;
  htmltemplate.tipoVenta = tipoVenta;
  htmltemplate.transporte = transporte;
  htmltemplate.fecha = fecha;
  htmltemplate.nombreCliente = nombreCliente;
  htmltemplate.nombreEmpresa = nombreEmpresa;
  htmltemplate.codigoCliente = codigoCliente;
  htmltemplate.direccion = direccion;
  htmltemplate.telefono = telefono;
  htmltemplate.noNit = noNit;
  htmltemplate.totalVenta = totalVenta;
  htmltemplate.nombreAsesor = nombreAsesor;
  htmltemplate.tipoPago = tipoPago;
  htmltemplate.ruta = ruta;
  htmltemplate.area = area;

// Evaluar la plantilla y configurar las opciones de X-Frame
  var y = htmltemplate.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

  // Devolver la plantilla evaluada con las opciones de X-Frame configuradas
  return z;
}
  /* Evaluar la plantilla y devolverla como archivo
  return htmltemplate.evaluate();
}*/
