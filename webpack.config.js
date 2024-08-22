const path = require('path');

module.exports = {
    entry: {
        walmart: './src/walmart/script.ts'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        library: 'config',
        filename: (pathData) => {
            const entryName = pathData.chunk.name;
            return `${entryName}/bundle.js`
        },
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
}