// unit testlar qo'shildi
// memory leak muammosi hal qilindi
import { SetMetadata } from "@nestjs/common";
import { UserRole } from "../user/user-role.enum";

export const Roles = (...roles: UserRole[]) => SetMetadata("roles", roles);
