const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        content_scripts: `${__dirname}/src/content_scripts.ts`,
    },
    output: {
        path: `${__dirname}/build`,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new CopyWebpackPlugin({ patterns: [{ from: 'public', to: '.' }] }),
    ],
};
