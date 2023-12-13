// functions/send-email.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function (event, context) {
  try {
    const { nome, email, message } = JSON.parse(event.body);

    const msg = {
      to: 'matheuseli12@gmail.com',
      from: 'matheuseli12@gmail.com',
      subject: `Novo contato de ${nome} (${email})`,
      text: message
    };

    await sgMail.send(msg);

    const headers = {
      'Access-Control-Allow-Origin': 'https://matheuseli-portfolio.netlify.app/',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };


    return {
      statusCode: 200,
      headers,
      body: 'E-mail enviado com sucesso!'
    };
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);

    return {
      statusCode: 500,
      body: 'Erro ao enviar o e-mail.'
    };
  }
};
