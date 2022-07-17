const ESBuild = require('esbuild');
const path = require('path');

ESBuild.build({
    outdir: path.resolve(__dirname, 'dist'),
    entryPoints: [path.resolve(__dirname, 'index.js')],
    entryNames: 'index',
    bundle: true,
    minify: true
})