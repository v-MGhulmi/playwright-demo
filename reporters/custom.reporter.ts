
import { Reporter, FullConfig, Suite, TestCase, TestResult, FullResult } from '@playwright/test/reporter';
const nodemailer = require('nodemailer');
const Email = require('email-templates');
const fs = require("fs");
const mime = require('mime');
const transporter = nodemailer.createTransport({
    
    service: 'gmail',
    auth: {
  
      user: 'mohammad.ghulmi@gmail.com',
  
      pass: 'mxqwxsqzsgmzqffj'
  
    }
  
  });

  var mailOptions = {

    from: 'mohammad.ghulmi@gmail.com',
  
    to: 'mohammad.ghulmi@gmail.com',
  
    subject: 'report',
  
    text: '',
    html:''
  
  };
  let total :number;
class MyReporter implements Reporter {
    public numberpassed:number;
    public attachments; 
    public driveclient;
  constructor(options: { customOption?: string } = {}) {
    console.log(`my-awesome-reporter setup with customOption set to ${options.customOption}`);
    this.numberpassed = 0;
    this.attachments=[ 
        {   // file on disk as an attachment
            filename: 'index.html',
            path: './playwright-report/index.html', // stream this file
        }
    ]
  }

  

  onBegin(config: FullConfig, suite: Suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
    mailOptions.text= mailOptions.text+"the suite included "+suite.title+" "+suite.allTests().length +" tests\n";
    total = suite.allTests().length
  }

  onTestBegin(test: TestCase) {
    console.log(`Starting test ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Finished test ${test.title}: ${result.status}`);
    mailOptions.text= mailOptions.text+"test "+test.title +" finished with result "+result.status+"\n";
    if(result.status == "passed"){
        this.numberpassed = this.numberpassed+1
    }
  }

  async onEnd(result: FullResult) {
        mailOptions.subject = "report : tests ran = "+total+" test passed : "+this.numberpassed + " pass ratio "+((this.numberpassed/total)*100)+"%";
       
        var mailoOptions = {

            from: 'mohammad.ghulmi@gmail.com',
          
            to: 'mohammad.ghulmi@gmail.com',
          
            subject: mailOptions.subject,
          
            text: mailOptions.text,
            attachments: this.attachments,
          };         
        await fs.readdir('./playwright-report/data', async(error, files) => {
        if (error) console.log(error)
        await files.forEach( file => {
            this.attachments = [...this.attachments,{filename:file,path:'./playwright-report/data/'+file}]
            mailoOptions.attachments= this.attachments;
            
        })
        transporter.sendMail(mailoOptions)
        })
        console.log(this.attachments)
        console.log(mailoOptions.attachments)
    }
}
export default MyReporter;