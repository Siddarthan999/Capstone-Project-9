pipeline {
    agent any

    tools { 
        nodejs 'node'
    }

    stages {
        stage('Build') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Siddarthan999/Capstone-Project-9.git']])
                bat 'npm install'
                bat 'npm run build'
                
                // Clean up unwanted file
                bat 'del dist\\assets\\index-BunWj7KW.js'
            }
        }
        stage('Code Quality') {
            steps {
                bat 'npm run lint'
            }
        }
        stage('Testing') {
            steps {
                dir('src') {
                    bat 'npm test'
                }
            }
        }
    }
    post {
        always {
            echo 'This will always run after completion of all Stages.'
        }
        success {
            echo 'All stages completed successfully!'
        }
        failure {
            echo 'One or more stages failed!'
        }
    }
}
