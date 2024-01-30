// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const HtmlWebpackPlugin = require("html-webpack-plugin");

// eslint-disable-next-line no-undef
module.exports = {
  // Ponto de entrada da aplicação, arquivo TypeScript principal
  entry: "./src/index.ts",

  // Configuração de saída, define onde o bundle resultante será colocado
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "dist"), // Caminho para o diretório de saída
    filename: "bundle.js", // Nome do arquivo de saída
    library: "Turma1132", // Nome da biblioteca exportada
    libraryTarget: "umd", // Define o formato de exportação (Universal Module Definition)
    umdNamedDefine: true, // Permite um nome para a definição do módulo UMD
  },

  // Configuração de resolução de arquivos, permite a importação de arquivos TypeScript sem especificar a extensão
  resolve: {
    extensions: [".ts", ".js"],
  },

  // Configuração dos loaders, define como os arquivos TypeScript devem ser tratados pelo webpack
  module: {
    rules: [
      {
        test: /\.ts$/, // Testa se o arquivo termina com a extensão .ts
        use: "ts-loader", // Utiliza o loader 'ts-loader' para transpilar TypeScript para JavaScript
        exclude: /node_modules/, // Exclui a pasta 'node_modules' do processo de transpilação
      },
      {
        test: /\.css$/, // Testa se o arquivo termina com a extensão .css
        use: ["style-loader", "css-loader"], // Utiliza os loaders 'style-loader' e 'css-loader' para processar arquivos CSS
      },
    ],
  },

  // Configuração de plugins, adiciona funcionalidades extras ao processo de build
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Caminho para o arquivo HTML de entrada, agora na pasta 'public'
    }),
  ],

  // Configuração do servidor de desenvolvimento
  devServer: {
    static: {
      // eslint-disable-next-line no-undef
      directory: path.join(__dirname, "dist"), // Define o diretório para servir os arquivos estáticos
    },
    port: 3000, // Define a porta do servidor de desenvolvimento
    open: true, // Abre automaticamente o navegador ao iniciar o servidor de desenvolvimento
    historyApiFallback: true, //A opção historyApiFallback: true informa ao servidor que ele deve redirecionar todas as solicitações para o index.html quando uma rota não for encontrada no servidor.
  },
};
