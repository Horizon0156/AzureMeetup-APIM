// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  defaultApiUrl: "<<THE API URL OF THE GATEWAY OR THE DEPLOYED APP SERVICE>>",
  b2cClientId: "<<INSERT YOUR B2C CLIENT IDENTIFIER>>",
  b2cDomain: "<<INSERT YOUR B2C CLIENT TENANT>>",
  b2cPolicy: "B2C_1_SuSi",
  apiScope: "<<INSERT THE API SCOPE OF YOUR API B2C APPLICATION>>"
};
