pipeline {

  agent any
  tools {
    maven 'Maven'
  }
  environment {
    MAVEN="/opt/maven/bin/mvn"
  }

  stages {

    stage('build'){
	agent { label 'docker' }
        steps {
            checkout scm
        }
    }
	
    stage('build and unit test'){
	agent { label 'docker' }
        steps {
            dir('cucumber-with-java'){
                sh "${MAVEN} clean install"
                junit 'target/surefire-reports/**/*.xml' 
            }
        }
    }

  }

}
