const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  name: 'cdk20',
  defaultReleaseBranch: 'main',
  repositoryUrl: 'https://github.com/pgarbe/cdk2.0.git',

  author: 'Philipp Garbe',
  authorAddress: 'philipp.garbe@rio.cloud',

  cdkVersion: '2.0.0-rc.24',
  cdkDependencies: ['aws-cdk-lib'],
  devDeps: ['constructs@^10.0.5'], // Workaround of dependency error

  release: false, // just a demo
  publishToMaven: {
    javaPackage: 'io.garbe.cdk20',
    mavenGroupId: 'io.garbe',
    mavenArtifactId: 'cdk20',
  },
});
project.synth();