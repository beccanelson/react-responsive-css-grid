import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss-modules";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import sass from "rollup-plugin-sass";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    sass(),
    external(),
    postcss({
      modules: true,
      writeDefinitions: true
    }),
    url(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true
    }),
    commonjs()
  ]
};
