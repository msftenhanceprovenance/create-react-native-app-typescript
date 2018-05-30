import fse from 'fs-extra';
import path from 'path';
import log from './log';

/**
 * Creates a rn-cli.config.js file
 * It configures ts transpilation for ejected projects
 * @link https://github.com/Microsoft/TypeScript-React-Native-Starter#adding-typescript
 */
export async function createRnCliConfig() {
  log(
    `
Creating a rn-cli.config.js file.
It includes typescript transpilation config for react-native
  `
  );

  const rnCliConfigContents = `module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx"];
  }
};
  `;
  await fse.writeFile(path.resolve('rn-cli.config.js'), rnCliConfigContents);
}
