let pkg=require("./package.json"),rollup=require("rollup").rollup,terser=require("rollup-plugin-terser").terser,babel=require("@rollup/plugin-babel").default,commonjs=require("@rollup/plugin-commonjs"),resolve=require("@rollup/plugin-node-resolve").default,gulp=require("gulp"),banner=`/*!
* reveal.js-menu ${pkg.version}
* ${pkg.homepage}
* MIT licensed
*
* Copyright (C) 2016 Greg Denehy
*/
`,babelConfig={babelHelpers:"bundled",ignore:["node_modules"],compact:!1,extensions:[".js",".html"],plugins:["transform-html-import-to-string"],presets:[["@babel/preset-env",{corejs:3,useBuiltIns:"usage",modules:!1}]]},babelConfigESM=JSON.parse(JSON.stringify(babelConfig)),cache=(babelConfigESM.presets[0][1].targets={browsers:["last 2 Chrome versions","not Chrome < 60","last 2 Safari versions","not Safari < 10.1","last 2 iOS versions","not iOS < 10.3","last 2 Firefox versions","not Firefox < 60","last 2 Edge versions","not Edge < 16"]},{});gulp.task("build",()=>Promise.all([{name:"RevealMenu",input:"./plugin.js",output:"./menu"}].map(plugin=>rollup({cache:cache[plugin.input],input:plugin.input,plugins:[resolve(),commonjs(),babel({...babelConfig,ignore:[/node_modules\/.*/]}),terser()]}).then(bundle=>{cache[plugin.input]=bundle.cache,bundle.write({file:plugin.output+".esm.js",name:plugin.name,format:"es"}),bundle.write({file:plugin.output+".js",name:plugin.name,format:"umd"})})))),gulp.task("default",gulp.series("build"));