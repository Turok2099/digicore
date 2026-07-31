import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is missing.");
}

export const sql = neon(databaseUrl);

export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      correo VARCHAR(255) NOT NULL,
      tipo_negocio VARCHAR(100),
      obstaculo TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS quiz_submissions (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      correo VARCHAR(255) NOT NULL,
      whatsapp VARCHAR(100) NOT NULL,
      respuestas JSONB NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
}
