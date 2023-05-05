const app = require("../src/app");
const session = require("supertest");
const request = session(app);

const charModel = {
  id: "999",
  name: "name",
  species: "species",
  gender: "gender",
  status: "status",
  origin: {name: "origin.name"},
  image: "image"
}

describe("Test de RUTAS", () => {

  describe("GET /rickandmorty/character/:id", () => {

    it("Responde con status: 200", async () => {
      // await request.get('/rickandmorty/character/1').expect(200);
      const response = await request.get('/rickandmorty/character/1')
      expect(response.statusCode).toBe(200)
    })

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await request.get('/rickandmorty/character/1');
      for(const prop in charModel){
        expect(response.body).toHaveProperty(prop)
      }
    })

    it("Si hay un error responde con status: 500", async () => {
      const response = await request.get('/rickandmorty/character/abcde');
      expect(response.statusCode).toBe(500)
    })
  })

  xdescribe("GET /rickandmorty/login", () => {

    it("Responde con un obj con la propiedad access:true si la informacion del usuario es valida", async () => {
      const response = await request.get('/rickandmorty/login');
      console.log(response.body)
    })
  })

  describe("POST /rickandmorty/fav", () => {

    it("Debe agregar el personaje a favoritos", async () => {
      const response = await request.post('/rickandmorty/fav').send(charModel);
      expect(response.body).toContainEqual(charModel);
    })

    it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
      charModel.id = "9999";
      charModel.name = "name2"
      const response = await request.post('/rickandmorty/fav').send(charModel);
      expect(response.body.length).toBe(2);
    })
  })

  describe("DELETE /rickandmorty/fav/:id", () => {

    it("Debe retornar un arreglo con todos los favoritos si el ID solicitado no existe", async () => {
      const response = await request.delete('/rickandmorty/fav/2')
      expect(response.body.length).toBe(2);
    })

    it("Debe eliminar el personaje de favoritos si el ID solicitado existe", async () => {
      const response = await request.delete( `/rickandmorty/fav/${charModel.id}`)
      expect(response.body.length).toBe(1);
    })
  })
})