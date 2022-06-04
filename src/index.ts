import Server from './Server';

const server = new Server();

server.Start().catch(error => {
  console.log(error);
});
