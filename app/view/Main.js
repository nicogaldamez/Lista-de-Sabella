Ext.define('ListaDeSabella.view.Main', {
    extend: 'Ext.navigation.View',
    
    xtype: 'mainpanel',
    requires: [
      'ListaDeSabella.view.JugadorList',
      'ListaDeSabella.view.JugadorDetail'
    ],
    config: {
      items: [ {
        xtype: 'jugadoreslist'
      }]
    }
});
