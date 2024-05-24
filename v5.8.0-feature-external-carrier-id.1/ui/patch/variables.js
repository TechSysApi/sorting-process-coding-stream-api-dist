var variables={
  "name": "@ch-post-logistics/sorting-process-coding-stream-api",
  "version": "5.8.0-feature-external-carrier-id.1",
  "description": "Sorting Process Coding Stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix",
    "prepublishOnly": "npm test"
  },
  "author": "seilerch",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "apikana": "0.9.30",
    "apikana-defaults": "0.0.79",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "seilerch",
    "namespace": "logistics.sorting.process.coding",
    "shortName": "sorting-process-coding",
    "projectName": "sorting-process-coding-stream-api",
    "title": "Sorting Process Coding Stream API",
    "plugins": [
      "maven",
      "dotnet",
      "readme"
    ],
    "javaPackage": "ch.post.logistics.sorting.process.coding.v1",
    "mavenGroupId": "ch.post.logistics.sorting.process",
    "dotnetNamespace": "Ch.Post.Logistics.Sorting.Process.Coding.V1",
    "dotnetPackageId": "Ch.Post.Logistics.Sorting.Process.Coding.StreamApi",
    "mqs": "Kafka",
    "avro": {
      "enumAsString": true
    }
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}