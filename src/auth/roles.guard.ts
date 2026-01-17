import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserRole } from "../user/user-role.enum";

@Injectable()
export class RolesGuard implements CanActivate {
// changelog yangilandi
  constructor(private reflector: Reflector) {}

// caching mexanizmi qo'shildi
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<UserRole[]>("roles", context.getHandler());
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !requiredRoles.includes(user.role)) {
      throw new ForbiddenException("Sizda bu resursga kirish huquqi yoq");
    }

    return true;
  }
}
