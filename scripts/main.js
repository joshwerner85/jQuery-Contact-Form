var button=$('button');
var nameInput=$('.name-input');
var websiteInput=$('.website-input');
var emailInput=$('.email-input');
var textarea=$('.textarea');
var success=$('.success');
var section=$('.section')
var hasError=false;
var errorMessage1=$('#error-message1');
var errorMessage2=$('#error-message2');
var errorMessage3=$('#error-message3');
var errorMessage4=$('#error-message4');

button.on('click', function() {
  if(nameInput.val()==='') {
     hasError=true;
     errorMessage1.html('Name cannot be left empty');
     errorMessage1.css({marginBottom: '1em'});
     nameInput.css({borderLeft: '0.5em solid red'});
  }

  if(emailInput.val() ==='') {
    hasError=true;
    error2.html('Please enter an email address');
    error2.css({marginBottom: '1em'});
    emailInput.css({borderLeft: '0.5em solid red'});
  }

  if(emailInput.val() !=='' && emailInput.val().indexOf('@') === -1) {
    hasError=true;
    error2.html('Email must have contain an \'@\'');
    error2.css({marginBottom: '1em'});
    emailInput.css({borderLeft: '0.5em solid red'});
  }

  if(websiteInput.val()==='') {
    hasError=true;
    error3.html('Website must start with http://');
    error3.css({marginBottom: '1em'});
    websiteInput.css({borderLeft: '0.5em solid red'});
  }

  if(textarea.val()==='') {
    hasError=true;
    error4.html('Message cannot be left empty');
    error4.css({marginBottom: '1em'});
    textarea.css({borderLeft: '0.5em solid red'});
  }

  if(!hasError===true){
    section.css({display: 'none'});
    success.css({
            display: 'block',
            background: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            padding: '4em'
          });
    success.html('Thanks for contacting us '+nameInput.val()+'. We have received your message and will be in touch with you shortly.');

  }
});