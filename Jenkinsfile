pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']], // Replace with your branch if different
                    userRemoteConfigs: [[
                        url: 'https://github.com/Clementwa0/Myportfolio.git',
                        credentialsId: 'GitHub PAT' // The credentials ID you created in Jenkins
                    ]]
                ])
            }
        }

        // Other stages
        stage('Build') {
            steps {
                echo "Building the project..."
            }
        }
    }

    stage('SAST Scan') {
    steps {
        script {
            // Integrate SonarQube for static code analysis
            sh 'mvn sonar:sonar -Dsonar.host.url=http://your_sonarqube_url'
        }
    }
}


    post {
        always {
            echo "Pipeline finished."
        }
    }
}
