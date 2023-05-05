pipeline {
  
   agent any

   stages {
   
     stage('Install Dependencies') { 
        steps {  
           sh 'npm2222 install' 
        }
     }
     
     stage('Test') { 
        steps { 
           sh 'echo "testing application..."'
        }
      }

     stage("Deploy application") { 
         steps { 
           sh 'echo "deploying application..."'
         }
     }
  
   }

   post {
      success {
         emailext body: 'Stage Jenkins job has been succeeded!', subject: ' StageJenkins Job succeeded!', to:'dhupati@prakat.in'
      }
      failure {
         emailext body: 'Stage Jenkins job has been failed!', subject: ' Stage Jenkins Job failed!', to:'dhupati@prakat.in'
      }
   }
}


