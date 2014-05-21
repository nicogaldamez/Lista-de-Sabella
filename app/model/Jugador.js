Ext.define('ListaDeSabella.model.Jugador', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: ['nombre', 'apellido', 'posicion']
  },
  
  nombreCompleto: function() {
    var d = this.data;
    
    return d.nombre + " " + d.apellido;
  }
})