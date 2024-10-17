//import { DatabaseModel } from './model/DatabaseModel';
import { server } from './server';

const port: number = 3333;
console.log(`Servidor rodando em http://localhost:${3333}`);

 /*
new DatabaseModel().testeConexao().then((resbd) => {
    if(resbd) {
        server.listen(3333, () => {
            console.log(`Servidor rodando em http://localhost:${3333}`);
        })
    } else {
        console.log('Não foi possível conectar ao banco de dados');
    }
});

*/