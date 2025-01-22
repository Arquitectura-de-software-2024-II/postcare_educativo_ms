export const validateApiGateway = (req: any) => {
    const allowedOrigin = process.env.ALLOWED_ORIGIN || 'your-api-gateway-domain.com'; // Cambia esto por el dominio del API Gateway
    if (req.headers['x-api-key'] !== process.env.API_KEY) {
      throw new Error('Unauthorized: Invalid API key');
    }
    if (req.headers.origin !== allowedOrigin) {
      throw new Error('Unauthorized: Requests must come from API Gateway');
    }
  };