export const validateApiGateway = (req: any) => {
    const allowedOrigin = process.env.ALLOWED_ORIGIN || "localhost:8080";
    // if (req.headers['x-api-key'] !== process.env.API_KEY) {
    //   throw new Error('Unauthorized: Invalid API key');
    // }
    if (req.headers.origin !== allowedOrigin) {
      throw new Error('Unauthorized: Requests must come from API Gateway');
    }
  };