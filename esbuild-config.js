const ESBuild = require('esbuild');
const path = require('path');

ESBuild.build({
    outdir: path.resolve(__dirname),
    entryPoints: [path.resolve(__dirname, 'ddos.js')],
    entryNames: 'index',
    bundle: true,
    minify: true
})