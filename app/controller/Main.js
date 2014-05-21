Ext.define('ListaDeSabella.controller.Main', {
  extend: 'Ext.app.Controller',
  
  config: {
    refs: {
      main: 'mainpanel'
    },
    control: {
      'jugadoreslist': {
        disclose: 'mostrarDetalle'
      }
    }
  },
  
  mostrarDetalle: function(list, record) {
    this.getMain().push({
      xtype: 'jugadordetail',
      title: record.nombreCompleto(),
      data: record.data
    });
  }
})