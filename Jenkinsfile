pipeline {

  agent master

  stages {

    stage('build'){
        steps {
            checkout scm
        }
    }
	
	stage('test'){
        steps {
            dir('cucumber-with-java'){
                sh "mvn test"
            }
        }
    }

  }

}