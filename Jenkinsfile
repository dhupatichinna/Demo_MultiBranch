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
                mail bcc: '', body: 'Jenkin Job succeeded', cc: 'dhupati70@gmail.com', from: '', replyTo: '', subject: 'Jenkins job has been succeeded!', to: 'dhuapti@prakat.in'             
              }
             failure {
               emailext body: 'Jenkin job has been failed!', subject: 'Jenkins Job failed!', to: 'dhupati@prakat.in'
             }
        }
      }

         stage("Deploy application") { 
             steps { 
               sh 'echo "deploying application..."'
             }
             post {
               success {
                  mail bcc: '', body: 'Jenkin Job succeeded', cc: 'dhupati70@gmail.com', from: '', replyTo: '', subject: 'Jenkins job has been succeeded!', to: 'dhuapti@prakat.in'
               }
               failure {
                 emailext body: 'jenkins job has been failed!', subject: 'Jenkins Job failed!', to:'dhupati@prakat.in'
               }
             }
     }
  
   	}

   }
