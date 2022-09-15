import app from "../src/app";

describe('Testa POST /items ', () => {
  it.todo('Deve retornar 201, se cadastrado um item no formato correto', () => {

    const body = {
      title: 'Ovo frito',
      url: 'Ovo',
      description: "http://www.teste.com",
      amount: 4
    };
    const result = await app.post("/items").send(body);
    const status = result.status;
    
    const itemCreated = await prisma.items.findUnique({
      where: { titulo: body.title }
    });
    expect(status).toEqual(201);
    expect(itemCreated).not.toBeNull();
  });

  it.todo('Deve retornar 409, ao tentar cadastrar um item que exista', () => {
    const body = {
      title: 'Ovo frito',
      url: 'Ovo',
      description: "http://www.teste.com",
      amount: 4
    };
    await app.post("/items").send(body);
    const result = await app.post("/items").send(body);
    const status = result.status;
    expect(status).toEqual(409);

  });
});

describe('Testa GET /items ', () => {
  it.todo('Deve retornar status 200 e o body no formato de Array'), () => {
    const result = await app.get("/items");
    const status = result.status;
    expect(status).toEqual(201);
    expect(result).not.toBeNull();

  };
});

describe('Testa GET /items/:id ', () => {
  it.todo('Deve retornar status 200 e um objeto igual a o item cadastrado'), () => {
    const result = await app.get("/items/1");
    const status = result.status;
    expect(status.toEqual(201));
    expect(result).not.toBeNull();

  };
  it.todo('Deve retornar status 404 caso não exista um item com esse id'), () => {
    const result = await app.get("/items/123123123");
    const status = result.status;
    expect(status.toEqual(404));
    expect(result).toBeNull();

  };
});
