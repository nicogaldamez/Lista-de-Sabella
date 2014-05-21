Ext.define('ListaDeSabella.view.JugadorList', {
  extend: 'Ext.List',
  xtype: 'jugadoreslist',
  
  config: {
    title: 'La lista de Sabella',
    grouped: true,
    indexBar: true,
    itemTpl: '{nombre} {apellido}',
    store: 'Jugadores',
    onItemDisclosure: true
  }
})