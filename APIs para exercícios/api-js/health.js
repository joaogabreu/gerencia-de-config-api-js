export function getHealthPayload() {
  return {
    status: 'ok',
    service: 'api-js',
    timestamp: new Date().toISOString(),
  };
}
