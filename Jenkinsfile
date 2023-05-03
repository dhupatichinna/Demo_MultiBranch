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
              emailext body: 'Tests succeeded!', subject: 'Tests succeeded!', to:'dhupati@prakat.in'
             }
             failure {
               emailext body: 'Tests failed!', subject: 'Tests failed!', to: 'dhupati@prakat.in'
             }
        }
      }

         stage("Deploy application") { 
             steps { 
               sh 'echo "deploying application..."'
             }
             post {
               success {
                  emailext body: 'Tests succeeded!', subject: 'Tests succeeded!', to:'dhupati@prakat.in'
               }
               failure {
                 emailext body: 'Tests failed!', subject: 'Tests failed!', to:'dhupati@prakat.in'
               }
             }
     }
  
   	}

   }
