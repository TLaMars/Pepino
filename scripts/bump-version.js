#!/usr/bin/env node
import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { createRequire } from "module";
import { resolve } from "path";

const require = createRequire(import.meta.url);
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getCurrentVersion() {
  const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
  return packageJson.version;
}

function bumpVersion(currentVersion, type) {
  const [major, minor, patch] = currentVersion.split(".").map(Number);
  switch (type) {
    case "major":
      return `${major + 1}.0.0`;
    case "minor":
      return `${major}.${minor + 1}.0`;
    case "patch":
      return `${major}.${minor}.${patch + 1}`;
    default:
      throw new Error("Invalid version type");
  }
}

function updatePackageJson(newVersion) {
  const packagePath = resolve("package.json");
  const packageJson = JSON.parse(readFileSync(packagePath, "utf8"));
  packageJson.version = newVersion;
  writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);
}

function updateTauriConfig(newVersion) {
  const tauriConfigPath = resolve("src-tauri/tauri.conf.json");
  const tauriConfig = JSON.parse(readFileSync(tauriConfigPath, "utf8"));
  tauriConfig.version = newVersion;
  writeFileSync(tauriConfigPath, `${JSON.stringify(tauriConfig, null, 2)}\n`);
}

function updateCargoToml(newVersion) {
  const cargoPath = resolve("src-tauri/Cargo.toml");
  let cargoContent = readFileSync(cargoPath, "utf8");
  cargoContent = cargoContent.replace(
    /^version = ".*?"/m,
    `version = "${newVersion}"`,
  );
  writeFileSync(cargoPath, cargoContent);
}

function gitCommitAndTag(version) {
  execSync(
    "git add package.json src-tauri/tauri.conf.json src-tauri/Cargo.toml",
  );
  execSync(`git commit -m "chore(release): v${version}"`);
  execSync(`git tag v${version}`);
  execSync("git push --follow-tags");
}

async function promptVersionType() {
  return new Promise((resolve) => {
    readline.question(
      "What type of version bump would you like? (major/minor/patch): ",
      (answer) => {
        if (!["major", "minor", "patch"].includes(answer)) {
          console.error(
            "Invalid version type. Please use major, minor, or patch",
          );
          process.exit(1);
        }
        resolve(answer);
        readline.close();
      },
    );
  });
}

async function main() {
  try {
    const currentVersion = getCurrentVersion();
    console.info(`Current version: ${currentVersion}`);

    const versionType = await promptVersionType();
    const newVersion = bumpVersion(currentVersion, versionType);
    console.info(`Bumping to version: ${newVersion}`);

    updatePackageJson(newVersion);
    updateTauriConfig(newVersion);
    updateCargoToml(newVersion);

    gitCommitAndTag(newVersion);

    console.info(
      `Successfully bumped version to ${newVersion} and pushed changes`,
    );
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
