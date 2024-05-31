import esbuild from "esbuild";
import { execSync } from "node:child_process";

execSync("tsc --emitDeclarationOnly");

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.js",
    platform: "node",
    target: ["es2017"],
    format: "cjs",
    sourcemap: true,
    tsconfig: "./tsconfig.json",
  })
  .catch(() => process.exit(1));
esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.mjs",
    platform: "node",
    target: ["es2017"],
    format: "esm",
    sourcemap: true,
    tsconfig: "./tsconfig.json",
  })
  .catch(() => process.exit(1));
