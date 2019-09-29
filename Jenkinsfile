pipeline {

  agent none

  stages {

    stage('build'){
      checkout scm
    }
	
	stage('test'){
      dir('cucumber-with-java'){
          sh "mvn test"
      }
    }

  }

}