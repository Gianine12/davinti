const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

const criar_log = (data) => {
    const texto = stringify(data)
    const dados = fs.writeFileSync(path.resolve(__dirname, "./logs","log.txt"), texto + '\n', {flag: 'a+'}, (e) => {
        if(e){
            console.error(e);
            return
        }
    })

    return 'ok'
}

module.exports = criar_log;
