pipeline {

  agent any
  tools {
        maven 'Maven'
  }

  stages {

    stage('build'){
        steps {
            checkout scm
        }
    }
	
    stage('build and unit test'){
        steps {
            dir('cucumber-with-java'){
                sh "mvn clean install"
                junit 'target/surefire-reports/**/*.xml' 
            }
        }
    }

  }

}
