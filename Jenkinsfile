pipeline {

  agent any
  tools {
    maven 'Maven'
  }
  environment {
    PATH = "/opt/maven/bin:$PATH"
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
                sh "echo ${PATH}"
		sh "mvn clean install"
                junit 'target/surefire-reports/**/*.xml' 
            }
        }
    }

  }

}
