export default {
  path: __dirname + "../",
  title: "Practica Encriptacion API",
  version: "1.0.0",
  tagIndex: 2,
  ignore: ["/swagger", "/docs"],
  preferredPutPatch: "PATCH", // if PUT/PATCH are provided for the same rout, prefer PUT
  common: {
    parameters: {}, // OpenAPI conform parameters that are commonly used
    headers: {}, // OpenAPI confomr headers that are commonly used
  },
  snakeCase: false, // convert paths, parameters and headers to snake_case
}