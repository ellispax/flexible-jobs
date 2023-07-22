from rest_framework.permissions import BasePermission

class IsGeneralUser(BasePermission):
    def has_permission(self, request, view):
        return request.user and not request.user.is_company_user and not request.user.is_superuser

class IsCompanyUser(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.is_company_user

class IsAdminUser(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.is_superuser
