Ext.define('ListaDeSabella.store.Jugadores', {
  extend: 'Ext.data.Store',
  
  config: {
    model: 'ListaDeSabella.model.Jugador',
    sorters: 'apellido',
    grouper: function(record) {
      return record.get('apellido')[0];
    },
    data: [
      { nombre: 'Sergio', apellido: 'Romero' },
      { nombre: 'Mariano', apellido: 'Andújar' },
      { nombre: 'Agustín', apellido: 'Orion' },
      { nombre: 'Pablo', apellido: 'Zabaleta' },
      { nombre: 'Ezequiel', apellido: 'Garay' },
      { nombre: 'Federico', apellido: 'Fernandez' },
      { nombre: 'Marcos', apellido: 'Rojo' },
      { nombre: 'Hugo', apellido: 'Campagnaro' },
      { nombre: 'Fernando', apellido: 'Gago' },
      { nombre: 'Ever', apellido: 'Banega' },
      { nombre: 'Javier', apellido: 'Mascherano' },
    ]
  }
})