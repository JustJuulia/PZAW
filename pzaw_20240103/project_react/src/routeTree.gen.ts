
 
 import { Route as rootRoute } from './exercise_0204/__root'
 import { Route as UsersImport } from './exercise_0204/User_table'
 import { Route as RegisterImport } from './exercise_0204/User_Add'
 
 
 const UsersRoute = UsersImport.update({
   id: '/users',
   path: '/users',
   getParentRoute: () => rootRoute,
 } as any)
 
 const RegisterRoute = RegisterImport.update({
   id: '/register',
   path: '/register',
   getParentRoute: () => rootRoute,
 } as any)
 
 
 declare module '@tanstack/react-router' {
   interface FileRoutesByPath {
     '/register': {
       id: '/register'
       path: '/register'
       fullPath: '/register'
       preLoaderRoute: typeof RegisterImport
       parentRoute: typeof rootRoute
     }
     '/users': {
       id: '/users'
       path: '/users'
       fullPath: '/users'
       preLoaderRoute: typeof UsersImport
       parentRoute: typeof rootRoute
     }
   }
 }
 
 
 export interface FileRoutesByFullPath {
   '/register': typeof RegisterRoute
   '/users': typeof UsersRoute
 }
 
 export interface FileRoutesByTo {
   '/register': typeof RegisterRoute
   '/users': typeof UsersRoute
 }
 
 export interface FileRoutesById {
   __root__: typeof rootRoute
   '/register': typeof RegisterRoute
   '/users': typeof UsersRoute
 }
 
 export interface FileRouteTypes {
   fileRoutesByFullPath: FileRoutesByFullPath
   fullPaths: '/register' | '/users'
   fileRoutesByTo: FileRoutesByTo
   to: '/register' | '/users'
   id: '__root__' | '/register' | '/users'
   fileRoutesById: FileRoutesById
 }
 
 export interface RootRouteChildren {
   RegisterRoute: typeof RegisterRoute
   UsersRoute: typeof UsersRoute
 }
 
 const rootRouteChildren: RootRouteChildren = {
   RegisterRoute: RegisterRoute,
   UsersRoute: UsersRoute,
 }
 
 export const routeTree = rootRoute
   ._addFileChildren(rootRouteChildren)
   ._addFileTypes<FileRouteTypes>()
 