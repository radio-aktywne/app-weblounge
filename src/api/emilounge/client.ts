import "server-only";

import createClient from "openapi-fetch";
import type { paths } from "./types";

const scheme = process.env.WEBLOUNGE__EMILOUNGE__HTTP__SCHEME || "http";
const host = process.env.WEBLOUNGE__EMILOUNGE__HTTP__HOST || "localhost";
const port =
  process.env.WEBLOUNGE__EMILOUNGE__HTTP__PORT === undefined
    ? 28000
    : process.env.WEBLOUNGE__EMILOUNGE__HTTP__PORT;
const path = (process.env.WEBLOUNGE__EMILOUNGE__HTTP__PATH || "")
  // Ensure path starts with a slash
  .replace(/^(?!\/)(.*)$/, "/$1")
  // Remove trailing slashes
  .replace(/\/+$/, "");
const url = `${scheme}://${host}${port ? `:${port}` : ""}${path}`;

export const emilounge = createClient<paths>({ baseUrl: url });
