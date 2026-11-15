export function greet(name) {
  return `Hello, ${name}!`;
}

export const double = (n) => n * 2;

export const applyDiscount = (amount, percent) => {
  return amount * (1 - percent / 100);
};

export const formatPrice = (amount, currency = "EGP") => {
  return `${amount} ${currency}`;
};

export function applyTwice(fn, value) {
  return fn(fn(value));
}
