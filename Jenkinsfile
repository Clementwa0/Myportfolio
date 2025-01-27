pipeline {
    agent any

    environment {
        // Optional: You can define environment variables here
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub using the specified credentials
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']], // Replace with your branch if different
                    userRemoteConfigs: [[
                        url: 'https://github.com/Clementwa0/Myportfolio.git',
                        credentialsId: 'githu' // The credentials ID you created in Jenkins
                    ]]
                ])
            }
        }

        // Add more stages as needed (e.g., Build, Test)
        stage('Build') {
            steps {
                // Placeholder for build steps
                echo "Building the project..."
            }
        }

        stage('Test') {
            steps {
                // Placeholder for test steps
                echo "Running tests..."
            }
        }
    }

    post {
        always {
            // Optional post actions (cleanup, notifications, etc.)
            echo "Pipeline finished."
        }
    }
}
