declare module "path-webpack" {
  import * as path from "path"
  export = path
}

declare module "*.njk" {
  const mod: (ctx: Record<string, unknown>) => JSXElement
  export = mod
}
