import { readFileSync, writeFileSync } from "node:fs";

if (!process.env.GITHUB_RELEASE_TAG) {
  throw Error(`GITHUB_RELEASE_TAG env var not set`);
}

const parsedVersion =
  process.env.GITHUB_RELEASE_TAG.match(/^v?(\d+\.\d+\.\d+)$/);

if (!parsedVersion) {
  throw Error(
    `GITHUB_RELEASE_TAG must be a valid semver version (optionally prefixed with v)`
  );
}

const packageJson = JSON.parse(readFileSync("package.json", "utf-8"));
packageJson.version = parsedVersion[1];

writeFileSync("package.json", JSON.stringify(packageJson, null, 2), "utf-8");
