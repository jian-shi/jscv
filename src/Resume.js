import React, { Component } from 'react';


export default class Resume extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {

    return (
      <div className="main-content"> 
      <h4>EXPERIENCE</h4>
        <p>For examples of my work, please visit my Github repository: github.com/jian-shi and see the summary below.</p>
        <h5>PHP/Laravel programme</h5>
        <p>What: developed an electoral roll programme to manage elector information printing, elector searching, door knocking and survey data recording and data analysis against the New Zealand electoral roll (>3 million records).</p>
        <p>Languages used:</p>
        <ul>
        <li>Written in PHP/Laravel Framework;</li>
        <li>Re-designed and developed elector database to store over 3 million records;</li>
        <li>Created REST API using Laravel;</li>
        <li>Design and Developed UI using HTML/CSS/AngularJS and Photoshop;</li>
        </ul>
        <p>Outcome: improved access to the electoral roll, especially for the client’s non-professional IT users and volunteers. Saved my client $10,000s in software maintenance and licensing charges vis-à-vis the legacy programme.</p>

        <h5>Website development</h5>
        <p>What: website development and management of www.act.org.nz.</p>
        <p>Languages/Techniques used:</p>
        <ul>
        <li>Coding of custom templates for Wordpress suing HTML, CSS, PHP and Javascript;</li>
        <li>Use of grid system to adapt a range of devices, tested in multiple browsers to ensure compatibility;</li>
        <li>Increased front-end efficiency;</li>
        <li>Created HTML email templates and newsletters for campaigning;</li>
        <li>Participated in all stages of the product life cycle;</li>
        <li>Monitoring and reporting website traffic;</li>
        <li>Used tools included: Git, Github, Webpack;</li>
        </ul>
        <p>Outcome: a well-functioning website</p>
        

        <h5>Data analysis</h5>
        <p>What: data analysis and visualisation.</p>

        <p>Languages used:</p>
        <ul>
        <li>NumPy (including Python arrays, lists and dictionaries) and Panda to analyse a phone number list with more than 100,000 records in iPhython;</li>
        <li>Displaying data on diagrams using Matplotlib and on maps using Leaflet (JavaScript).</li></ul>
        <p>Outcome:
        Synthesised complex data into visual formats so that it could be easily digested by the business.</p>



        <h5>Java/PHP programming</h5>
        <p>What: I spent a summer working as a Java/PHP programmer on the Lightwork Project at Massey University (New Zealand) under Associate Professor Eva Heinrich.</p>

        <p>Language used:</p>
        <ul><li>Lightwork is a Java application used for synchronising/updating Moodle server information through RESTful APIs.</li>
          <li>Developed and Designed UI for the APP</li>
        </ul>
        <h5>System support</h5>
        <p>What: network and server administrator, de facto help desk support and lead trouble shooter.</p>
        <p>Languages/Techniques used:</p>
        <ul>
        <li>Setting up and maintaining Linux and Windows servers;</li>
        <li>Trouble-shot and fixed website and server problems through client requests;
</li>
        <li>Maintaining customer database (CiviCRM)</li>
        <li>Windows and Mac desktop support</li>
        <li>MS Office suite</li>
        <li>Outcome: I kept the place running.</li></ul>
        <h5>Other</h5>
        <p>I also have experience with Bootstrap, Drupal, Facebook apps, jQuery ExpressJS and React.</p>
        <h4>EMPLOYMENT HISTORY</h4>
        <p>I have gained my experienced working:
        as a programmer on the Lightwork Project at Massey University (October 2012 – January 2013);
        as a developer and IT administrator for ACT New Zealand and the New Zealand Parliamentary Service (February 2013 - 2016;
        freelance work.</p>
        <h4>EDUCATION</h4>
        <p>Bachelor of Computer & Information Science, Auckland University of Technology</p>
      </div>
    );
  }
}


