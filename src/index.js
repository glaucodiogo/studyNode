const http =  require('http')

const server = http.createServer((request,response) => {

  if(request.method === 'GET' && /ˆ\/hello\/\w+$/.test(request.url)){
    const [,name] = request.url.split('/')
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('Hello ${name}!\n')
    return
  }

  if(request.method === 'GET' && request.url.startsWith('/hello')){
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end('hello world');
  }
  response.writeHead(404,() => {
    response.end("Resource not found\n");
  })

  if(request.method === 'POST' && request.url.startsWith('/echo')){
      response.writeHead(200, {'Content-Type': 'application/json'});

      return
  }
})

server.listen(3000,"0.0.0.0",()=>{
  console.log('Server starting');
});
