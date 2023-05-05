pipeline {
  
   agent any

   stages {
   
     stage('Install Dependencies') { 
        steps {  
           sh 'npm1 install' 
        }
        post {
          failure {
             emailext body: ' Dev-npm install has failed', subject: 'Dev-Jenkins - npm install failed', to:'dhupati@prakat.in'
          }
        }
     }
     
     stage('Test') { 
        steps { 
           sh 'echo "testing application..."'
        }
        post {
          failure {
             emailext body: 'Dev-testing application has failed', subject: 'Dev-Jenkins - testing application failed', to:'dhupati@prakat.in'
          }
        }
      }

     stage("Deploy application") { 
         steps { 
           sh 'echo "deploying application..."'
         }
         post {
          failure {
             emailext body: 'Dev-deployment has failed', subject: 'Dev-Jenkins - deployment failed', to:'dhupati@prakat.in'
          }
        }
     }
  
   }

   post {
      success {
         emailext body: 'Dev Jenkins job has been succeeded!', subject: 'Dev-Jenkins Job succeeded!', to:'dhupati@prakat.in'
      }
      failure {
         emailext body: 'Dev Jenkins job has been failed!', subject: 'Dev-Jenkins Job failed!', to:'dhupati@prakat.in'
      }
   }
}





