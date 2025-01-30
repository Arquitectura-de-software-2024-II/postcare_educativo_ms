import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Imprime todas las variables cargadas
console.log("Variables de entorno cargadas:");
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("PORT:", process.env.PORT);
console.log("NODE_ENV:", process.env.NODE_ENV);

// Valida que las variables críticas existan
if (!process.env.MONGO_URI || !process.env.PORT) {
  console.error("❌ Las variables de entorno no se cargaron correctamente.");
  process.exit(1); // Finaliza el programa con error
} else {
  console.log("✅ Las variables de entorno se cargaron correctamente.");
}
