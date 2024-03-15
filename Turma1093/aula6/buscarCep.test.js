const axios = require("axios");
const getCEPInfo = require("./buscarCep");

jest.mock("axios");

describe("getCEPInfo", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve retornar as informações do CEP corretamente", async () => {
    const mockResponse = {
      data: {
        cep: "01001000",
        logradouro: "Praça da Sé",
        complemento: "lado ímpar",
        bairro: "Sé",
        localidade: "São Paulo",
        uf: "SP",
      },
      status: 200,
    };

    axios.get.mockResolvedValue(mockResponse);

    const expectedOutput = `{
  "cep": "01001000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "cidade": "São Paulo",
  "estado": "SP"
}`;

    const consoleSpy = jest.spyOn(console, "log");

    await getCEPInfo("01001000");

    expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);
    expect(axios.get).toHaveBeenCalledWith(
      "https://viacep.com.br/ws/01001000/json"
    );
  });
});
