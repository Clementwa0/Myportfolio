pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/username/repository.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'  // Adjust according to your build tool (e.g., Maven, Gradle)
                sh 'npm run build'  // Example for a Node.js application
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'  // Run unit tests
            }
        }
    }

    post {
        success {
            echo 'Build and tests were successful!'
        }
        failure {
            echo 'There was a problem with the build or tests.'
        }
    }
}
