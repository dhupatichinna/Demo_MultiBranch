pipeline { 
  
   agent any

   stages {
   
     stage('Install Dependencies') { 
        steps { 
           sh 'npm install' 
        }
     }
     
     stage('Test') { 
        steps { 
           sh 'echo "testing application..."'
        }
        
        post {
             success {
              emailext body: 'Jenkins job has been succeeded!', subject: 'Jenkins Job succeeded!', to:'dhupati@prakat.in'
             }
             failure {
               emailext body: 'Jenkins job has been failed!', subject: 'Jenkins Job failed!', to: 'dhupati@prakat.in'
             }
        }
      }

         stage("Deploy application") { 
             steps { 
               sh 'echo "deploying application..."'
             }
             post {
               success {
                  emailext body: 'Jenkins job has been succeeded!', subject: 'Jenkins Job succeeded!', to:'dhupati@prakat.in'
               }
               failure {
                 emailext body: 'Jenkins job has been failed!', subject: 'Jenkins Job failed!', to:'dhupati@prakat.in'
               }
             }
     }
  
   	}

   }
