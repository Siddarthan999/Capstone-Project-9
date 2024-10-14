pipeline {
    agent any

    tools { 
        nodejs 'node'
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('siddarthan5-dockerhub')
        DOCKER_IMAGE = "siddarthan5/capstone-project-9"
        DOCKER_TAG = "latest"
        KUBECONFIG = credentials('minikube-kubeconfig')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Siddarthan999/Capstone-Project-9.git']])
            }
        }
        stage('Build App') {
            steps {
                bat 'npm install'
                bat 'npm run build'
                
                // Clean up unwanted files
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
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile in the project root
                    bat """
                        docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    """
                }
            }
        }
        stage('Push Docker Image to DockerHub') {
            steps {
                script {
                    // Log in to DockerHub using credentials stored in Jenkins
                    bat """
                        docker login -u ${DOCKERHUB_CREDENTIALS_USR} -p ${DOCKERHUB_CREDENTIALS_PSW}
                    """
                    // Push the Docker image to DockerHub
                    bat """
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                    """
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    bat 'kubectl apply -f deployment.yaml'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
            bat 'docker logout'
        }
        success {
            echo 'All stages completed successfully, Docker image pushed to DockerHub and deployed to Minikube!'
        }
        failure {
            echo 'One or more stages failed.'
        }
    }
}
