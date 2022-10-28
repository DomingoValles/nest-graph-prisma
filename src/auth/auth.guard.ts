import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { CognitoJwtVerifier } from 'aws-jwt-verify';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    const tokenHeader =
      request.headers?.authorization || request.cookies?.TOKEN || '';
    if (!tokenHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException();
    }
    const token = tokenHeader.substring(7, tokenHeader.length);
    try {
      const verifier = CognitoJwtVerifier.create({
        userPoolId: process.env.COGNITO_USER_POOL_ID,
        tokenUse: 'access',
        clientId: process.env.COGNITO_CLIENT_ID,
      });

      try {
        const payload = await verifier.verify(token);
        request.session = payload;
        return true;
      } catch (err) {
        throw new UnauthorizedException(
          'An error has ocurred during token validation',
        );
      }
    } catch (err) {
      throw new UnauthorizedException(err?.response?.data);
    }
  }
}
