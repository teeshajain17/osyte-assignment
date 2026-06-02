/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';

import { PlanConfigService } from 'src/config/src/config/plan-config.service';

import { FEATURE_KEY } from './require-feature.decorator';

@Injectable()
export class PlanFeatureGuard implements CanActivate {
  constructor(
    private reflector: Reflector,

    private readonly planConfig: PlanConfigService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const feature = this.reflector.get<string>(
      FEATURE_KEY,
      context.getHandler(),
    );

    if (!feature) {
      return true;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const request = context.switchToHttp().getRequest();

    const accountTier = request.user?.accountTier;

    const enabled = this.planConfig.isFeatureEnabled(accountTier, feature);

    if (!enabled) {
      throw new ForbiddenException({
        error: `Feature '${feature}' requires Professional plan or above. Current plan: ${accountTier}.`,
      });
    }

    return true;
  }
}
