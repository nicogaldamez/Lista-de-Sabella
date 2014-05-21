Ext.define('ListaDeSabella.view.JugadorDetail', {
  extend: 'Ext.Panel',
  xtype: 'jugadordetail',
  
  config: {
    styleHtmlContent: true,
    scrollable: 'vertical',
    title: 'Detalle',
    tpl: 'Jugador: {apellido}'
  }
})