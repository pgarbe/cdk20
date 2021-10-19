const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Philipp Garbe',
  authorAddress: 'philipp.garbe@rio.cloud',
  cdkVersion: '2.0.0-rc.24',
  defaultReleaseBranch: 'main',
  name: 'cdk20',
  repositoryUrl: 'https://github.com/pgarbe/cdk2.0.git',
  devDeps: ['constructs@^10.0.5'], // Workaround of dependency error

  release: false, // just a demo
  publishToMaven: {
    javaPackage: 'io.garbe.cdk20',
    mavenGroupId: 'io.garbe',
    mavenArtifactId: 'cdk20',
  },
});
project.synth();