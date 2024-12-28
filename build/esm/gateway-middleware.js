import JWT from 'jsonwebtoken';
import { NotAuthorizedError } from './error-handler';
const tokens = ['auth', 'seller', 'gig', 'search', 'buyer', 'message', 'order', 'review'];
export function verifyGatewayRequest(req, res, next) {
  var _req$headers, _req$headers2;
  if ((_req$headers = req.headers) != null && _req$headers.gatewayToken) {
    throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request not coming from api gateway');
  }
  const token = (_req$headers2 = req.headers) == null ? void 0 : _req$headers2.gatewayToken;
  if (!token) {
    throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request not coming from api gateway');
  }
  try {
    const payload = JWT.verify(token, '');
    if (!tokens.includes(payload.id)) {
      throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request payload not coming from api gateway');
    }
  } catch (err) {
    throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request not coming from api gateway');
  }
}
//# sourceMappingURL=gateway-middleware.js.map