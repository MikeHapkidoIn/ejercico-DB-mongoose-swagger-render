const basicInfo = require('./basicInfo');
const components = require('./components');
const task = require('./task');

module.exports = {
  ...basicInfo,
  ...components,
  ...task
}


//prueba para ver si se cambia el nombre del autor