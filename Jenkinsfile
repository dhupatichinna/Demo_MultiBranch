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
      }

         stage("Deploy application") { 
         steps { 
           sh 'echo "deploying application..."'
         }

     }
       stage("Email Notification"){
         mail bcc: '', body: '''Hi welcome to jenkins email alerts
         Thanks
         Team''', cc: '', from: '', replyTo: '', subject: 'jenkins job', to: 'dhupati@prakat.in' 
       }
  
  
   	}

   }
