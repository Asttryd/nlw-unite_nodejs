import fastify from "fastify";

const app = fastify()

/* REST
Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, ...
Corpo da requisição (Request Body - POST ou PUT)
Parâmetros de busca (Search Params / Query Params - GET)
Parâmetros de rota (Route Params) -> Identificação de recursos - PUT, DELETE ou PATCH
Cabeçalhos (Headers) -> Contexto

Semânticas = Significado

Driver nativo / Query Builders / ORMs
*/



app.post("/events", (request, reply) => {
    // Criar um evento
    console.log(request.body)
    return "Hello NLW Unite"
})

app.listen({ port: 3333 }).then(() => {
    console.log("HTTP server running!")
})