var configValues = require('./config');

module.exports = {
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + ':' +
        configValues.pwd + '@ds149905.mlab.com:49905/nodetodosample14';
    }

}