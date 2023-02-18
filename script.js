import { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_api_key');

function PaymentPage() {
  const [processing, setProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    setProcessing(false);

    if (error) {
      setErrorMessage(error.message);
    } else {
      setPaymentComplete(true);
    }
  };

  if (paymentComplete) {
    return (
      <div className="payment-form">
        <h2>Payment successful!</h2>
        <p>Thank you for your purchase.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <label>
        Card details
        <CardElement options={{/* additional options */ }} />
      </label>

      {errorMessage && (
        <div style={{ color: 'red' }}>
          {errorMessage}
        </div>
      )}

      <button type="submit" disabled={processing} className="payment-form__submit">
        {processing ? 'Processing...' : 'Submit Payment'}
      </button>
    </form>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1 className="app__title">My Payment Page</h1>
      <Elements stripe={stripePromise}>
        <PaymentPage />
      </Elements>
    </div>
  );
}
