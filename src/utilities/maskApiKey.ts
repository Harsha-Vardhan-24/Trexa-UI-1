export const maskApiKey = (apiKey) => {
  const maskedLength = 6;
  const maskedChars = '*'.repeat(apiKey.length - maskedLength);
  const visibleChars = apiKey.slice(-maskedLength);
  return maskedChars + visibleChars;
};