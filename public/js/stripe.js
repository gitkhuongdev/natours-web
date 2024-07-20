import axios from 'axios';

const { default: Stripe } = require('stripe');

const stripe = Stripe(
  'pk_test_51PcLi8KJ9WDMJQlJMvZBlbRlyAWj7qVRU21ULP53YY5PtMuLcQJntzk7Iuzky1lzBWBnMKBYXn0Q7HSAGByKdLgv001RqVNmIh',
);

export const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  const session = await axios(
    `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
  );
  console.log(session);
  // 2) Create checkout form + chanre credit card
};
