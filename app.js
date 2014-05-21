Ext.application({
    name: 'ListaDeSabella',

    controllers: ['Main'],
    views: ['Main'],
    stores: ['Jugadores'],
    models: ['Jugador'],

    launch: function() {
        // Destruye el indicador de carga
        Ext.fly('appLoadingIndicator').destroy();

        // Inicializa la vista principal
        Ext.Viewport.add({
          xclass: 'ListaDeSabella.view.Main'
        });
    }

});
