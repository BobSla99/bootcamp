const express = require("express");
const app = express();

/*
app.use(express.json())
Parsea JSON: Cuando una solicitud con un cuerpo JSON llega al servidor, express.json() convierte ese JSON en un objeto JavaScript y lo asigna a req.body.

Middleware: app.use(express.json()) agrega este middleware a la cadena de middleware de tu aplicación. Se ejecutará para cada solicitud que pase por tu aplicación.
*/
app.use(express.json());
/*
json-parser takes the JSON data of a request, transforms it into a JavaScript object and then attaches it to the body property of the request
*/
let notes = [
  {
    id: 1,
    content: "HTML isffffdfedf aeasy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>hello world!</h1>");
});

app.get("/api/notes", (request, response) => {
  console.log(request.headers);
  response.json(notes);
});

app.post("/api/notes/", (request, response) => {
  const note = request.body;
  if (!note.content)
    return response.status(400).json({ "error": "content mising" });

  notes = notes.concat({
    ...note,
    id: generatedId(),
    important: Boolean(note.important || false),
  });
  response.json(notes);
});

app.patch("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  const data = request.body;
  if (!data.content)
    return response.status(400).json({ error: "content mising" });
  const keys = Object.keys(data);
  let noteToEdit = notes.find((n) => n.id == id);
  keys.forEach((k) => (noteToEdit[k] = data[k]));
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  const note = notes.find((not) => not.id == id);
  if (note) {
    response.json(note);
  } else {
    response.statusMessage = "no se encuentra el recurso";
    response.status(404).end();
  }
});

app.put("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  let data = request.body;
  if (!data.content)
    return response.status(400).json({ error: "content mising " });
  // console.log(request.headers);
  const note = notes.find((n) => n.id == id);

  //antualizala
  if (note) {
    notes = notes.map((n) => (n.id == id ? data : n));
    // console.log("nota actualizada");
  } else {
    //Creaala
    notes.push(data);
    // console.log("nota creada");
  }
  response.json(notes);
});

app.delete("/api/notes/:id", (request, respond) => {
  const id = request.params.id;
  notes = notes.filter((n) => n.id != id);
  // console.log(notes)
  respond.status(204).end();
});

const generatedId = () => {
  const maxID = Math.max(...notes.map((n) => Number(n.id)));
  return maxID + 1;
};

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
