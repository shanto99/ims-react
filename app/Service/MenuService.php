<?php

namespace App\Service;

use App\Models\User;

class MenuService
{
    public function menus(User $user)
    {
        $allPermissions = collect([]);
        $roles = $user->roles ?: [];
        $permissions = $user->permissions ?: [];

        foreach ($roles as $role) {
            $allPermissions = $allPermissions->merge($role->permissions);
        }

        foreach ($permissions as $permission) {
            $allPermissions->push($permission);
        }

        $menus = [];

        foreach ($allPermissions as $permission) {
            $permissionMenus = $permission->menus ?: [];
            foreach ($permissionMenus as $menu) {
                $parameters = $menu->parameters ?: [];
                $params = [];
                foreach ($parameters as $parameter) {
                    $params[$parameter->ParamKey] = $parameter->ParamValue;
                }
                $menus[$menu->Name] = [
                    'title' => $menu->Title,
                    'icon' => $menu->Icon,
                    'route_name' => $menu->RouteName,
                    'params' => $params
                ];
            }

            $permissionSubMenus = $permission->subMenus ?: [];

            foreach ($permissionSubMenus as $subMenu) {
                $menu = $subMenu->menu;
                if (!isset($menus[$menu->Name])) {
                    $menus[$menu->Name] = [
                        'title' => $menu->Title,
                        'icon' => $menu->Icon,
                        'sub_menu' => []
                    ];
                }
                $parameters = $subMenu->parameters ?: [];
                $params = [];
                foreach ($parameters as $parameter) {
                    $params[$parameter->ParamKey] = $parameter->ParamValue;
                }

                $menus[$menu->Name]['sub_menu'][$subMenu->Name] = [
                    'title' => $subMenu->Title,
                    'icon' => $subMenu->Icon,
                    'route_name' => $subMenu->RouteName,
                    'params' => $params
                ];
            }
        }

        return $menus;
    }
}
