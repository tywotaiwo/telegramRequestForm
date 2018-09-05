     const nodemailer = require('nodemailer');

     function sendMail(request) {
          var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'datateamrequest@gmail.com',
            pass: 'Datateam123'
          },
          tls: {
                  rejectUnauthorized: false
              }
        });

        var mailOptions = {
          from: 'Datateam Request',
          to: 'tywotaiwo@gmail.com, Erkan.karamese@datateam.com.tr',
          subject: 'New Request',
          text: request
        };

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        }

        module.exports = sendMail;