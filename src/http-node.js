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

//POST /todos {"text":string , "title":string}
  if(request.method === 'POST' && request.url.startsWith('/todos')){
    let bodyRaw = '';

    request.on('data',data => bodyraw += data)

    request.on('once',() =>{
      const todo = JSON.parse(bodyRaw);
      todosDatabase.insert(todo)
        .then(inserted => {
            response.writeHead(201, {'Content-Type': 'application/json'})
            response.end(JSON.stringify(todo));
        })
    })

    return
  }

//API todos
/*
-- POST /todos
-- GET /todos/
-- GET /todos/:id
-- DELETE /todos/:id
-- PUT /todos/:id

*/

})

server.listen(3000,"0.0.0.0",()=>{
  console.log('Server starting');
});
