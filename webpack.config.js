//arquivo de configuração do webpack

module.exports = {
    entry: ['@babel/polyfill', './src/main.js'], // nos diz o arquivo que vai conter o código de entrada
    output: { // informações sobre o arquivo de saída
        path: __dirname + '/public', // diretório do arquivo de saída
        filename: 'bundle.js', // nome do arquivo de saída
    },
    devServer: {
        contentBase: __dirname + '/public' // pra onde deve abrir o servidor da nossa aplicação, geralmente onde fica o 'index.html'
    },
    module: { // diz como o webpack deve se comportar quando tentarmos importar novos pacotes
        rules: [
            {   /* nos dá um comportamento automatizado que vai traduzir nosso código es6
                 para uma sintaxe js que todos os navegadores reconhecem */
                test: /\.js$/, // expressão regular pra mostrar em quais arquivos o webpack vai trabalhar
                exclude: /node_modules/, // diz pro webpack não mexer na pasta /node_modules
                use: {
                    loader: 'babel-loader', // nos diz qual loader o webpack vai usar pra fazer a tradução
                }
            }
        ],
    },
};