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
        }
    }
}
}