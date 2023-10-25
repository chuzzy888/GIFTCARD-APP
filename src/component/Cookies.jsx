import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function CookieConsent() {
  const [show, setShow] = useState(true);

  // Function to handle the user's choice to accept or decline cookies
  const handleAccept = () => {
    // Perform actions when the user accepts cookies, e.g., set a cookie or save preferences.
    // You can implement this logic here.
    setShow(false); // Close the consent alert
  };

  const handleDecline = () => {
    // Perform actions when the user declines cookies, e.g., show a message or disable certain features.
    // You can implement this logic here.
    setShow(false); // Close the consent alert
  };

  return (
    <>
      {show && (
        <Alert show={show} variant="info">
          <Alert.Heading>Cookie Consent</Alert.Heading>
          <p>
            We use cookies to enhance your experience on our website. By clicking "Accept," you consent to the use of cookies. Please read our <a href="/privacy-policy">Privacy Policy</a> for more information.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleAccept} variant="success" style={{ marginRight: '10px' }}>
              Accept
            </Button>
            <Button onClick={handleDecline} variant="danger">
              Decline
            </Button>
          </div>
        </Alert>
      )}
    </>
  );
}

export default CookieConsent;
