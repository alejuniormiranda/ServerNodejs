const http = require('http');
const servidor = http.createServer(function (req, resp) {
  resp.end(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Servidor Node</title>
  </head>
  <body>
    <h1>Teste de serviço em Html 5</h1>
    <h2>Servidor de acesso básico em NodeJS para demonstração.</h2>
  </body>
</html>
    `);
});
servidor.listen(3000);
console.log(`
          Servidor escutando na porta 3000...
          http://127.0.0.1:3000/
          Para sair use Ctrl+C.
          `);
