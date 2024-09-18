const axios = require('axios');
const xml2js = require('xml2js');

const soapRequest = async () => {
  const url = 'https://www.example.com/soap-endpoint'; // Replace with your SOAP endpoint URL
  const soapEnvelope = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.example.com/webservice">
      <soapenv:Header/>
      <soapenv:Body>
        <web:GetData>
          <!-- You can pass parameters here if needed -->
        </web:GetData>
      </soapenv:Body>
    </soapenv:Envelope>
  `;

  try {
    const response = await axios.post(url, soapEnvelope, {
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': 'http://www.example.com/webservice/GetData', // Replace with your SOAPAction
      },
    });

    const xml = response.data;

    xml2js.parseString(xml, { explicitArray: false }, (err, result) => {
      if (err) {
        throw err;
      }

      // Assuming the response has a structure like <Envelope><Body><GetDataResponse><Data>...</Data></GetDataResponse></Body></Envelope>
      const data = result['soap:Envelope']['soap:Body']['GetDataResponse']['Data'];
      console.log(data);
    });
  } catch (error) {
    console.error(error);
  }
};

soapRequest();
