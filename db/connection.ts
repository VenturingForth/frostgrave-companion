const { Pool } = require("pg");

const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
    path: `${__dirname}/../.env.${ENV}`
})

if (!process.env.PGDATABASE) {
    throw new Error ("PGDATABASE not set!");
}

type Config = {
    connectionString: string | undefined,
    max: number
}

const config: Config = {
    connectionString: "",
    max: 0
}

const db = new Pool(config);

module.exports = { db }