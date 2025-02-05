/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutA2Import } from './routes/_layout-a2'
import { Route as LayoutA1Import } from './routes/_layout-a1'
import { Route as JestedRouteImport } from './routes/jested/route'
import { Route as IndexImport } from './routes/index'
import { Route as NestedLayoutB2Import } from './routes/nested/_layout-b2'
import { Route as NestedLayoutB1Import } from './routes/nested/_layout-b1'
import { Route as JestedLayoutB4Import } from './routes/jested/_layout-b4'
import { Route as JestedLayoutB3Import } from './routes/jested/_layout-b3'
import { Route as FooBarImport } from './routes/foo/bar'
import { Route as LayoutA2BarImport } from './routes/_layout-a2/bar'
import { Route as LayoutA1FooImport } from './routes/_layout-a1/foo'
import { Route as folderInFolderImport } from './routes/(folder)/in-folder'
import { Route as FooLayoutB5RouteImport } from './routes/foo/_layout-b5/route'
import { Route as NestedLayoutB1IndexImport } from './routes/nested/_layout-b1/index'
import { Route as JestedLayoutB3IndexImport } from './routes/jested/_layout-b3/index'
import { Route as FooLayoutB5IndexImport } from './routes/foo/_layout-b5/index'
import { Route as NestedLayoutB2FooImport } from './routes/nested/_layout-b2/foo'
import { Route as NestedLayoutB1LayoutC1Import } from './routes/nested/_layout-b1/_layout-c1'
import { Route as JestedLayoutB4FooImport } from './routes/jested/_layout-b4/foo'
import { Route as JestedLayoutB3LayoutC2Import } from './routes/jested/_layout-b3/_layout-c2'
import { Route as FooLayoutB5IdImport } from './routes/foo/_layout-b5/$id'
import { Route as NestedLayoutB1LayoutC1BarImport } from './routes/nested/_layout-b1/_layout-c1/bar'
import { Route as JestedLayoutB3LayoutC2BarImport } from './routes/jested/_layout-b3/_layout-c2/bar'

// Create Virtual Routes

const NestedImport = createFileRoute('/nested')()
const FooImport = createFileRoute('/foo')()

// Create/Update Routes

const NestedRoute = NestedImport.update({
  id: '/nested',
  path: '/nested',
  getParentRoute: () => rootRoute,
} as any)

const FooRoute = FooImport.update({
  id: '/foo',
  path: '/foo',
  getParentRoute: () => rootRoute,
} as any)

const LayoutA2Route = LayoutA2Import.update({
  id: '/_layout-a2',
  getParentRoute: () => rootRoute,
} as any)

const LayoutA1Route = LayoutA1Import.update({
  id: '/_layout-a1',
  getParentRoute: () => rootRoute,
} as any)

const JestedRouteRoute = JestedRouteImport.update({
  id: '/jested',
  path: '/jested',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NestedLayoutB2Route = NestedLayoutB2Import.update({
  id: '/_layout-b2',
  getParentRoute: () => NestedRoute,
} as any)

const NestedLayoutB1Route = NestedLayoutB1Import.update({
  id: '/_layout-b1',
  getParentRoute: () => NestedRoute,
} as any)

const JestedLayoutB4Route = JestedLayoutB4Import.update({
  id: '/_layout-b4',
  getParentRoute: () => JestedRouteRoute,
} as any)

const JestedLayoutB3Route = JestedLayoutB3Import.update({
  id: '/_layout-b3',
  getParentRoute: () => JestedRouteRoute,
} as any)

const FooBarRoute = FooBarImport.update({
  id: '/bar',
  path: '/bar',
  getParentRoute: () => FooRoute,
} as any)

const LayoutA2BarRoute = LayoutA2BarImport.update({
  id: '/bar',
  path: '/bar',
  getParentRoute: () => LayoutA2Route,
} as any)

const LayoutA1FooRoute = LayoutA1FooImport.update({
  id: '/foo',
  path: '/foo',
  getParentRoute: () => LayoutA1Route,
} as any)

const folderInFolderRoute = folderInFolderImport.update({
  id: '/(folder)/in-folder',
  path: '/in-folder',
  getParentRoute: () => rootRoute,
} as any)

const FooLayoutB5RouteRoute = FooLayoutB5RouteImport.update({
  id: '/_layout-b5',
  getParentRoute: () => FooRoute,
} as any)

const NestedLayoutB1IndexRoute = NestedLayoutB1IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => NestedLayoutB1Route,
} as any)

const JestedLayoutB3IndexRoute = JestedLayoutB3IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => JestedLayoutB3Route,
} as any)

const FooLayoutB5IndexRoute = FooLayoutB5IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => FooLayoutB5RouteRoute,
} as any)

const NestedLayoutB2FooRoute = NestedLayoutB2FooImport.update({
  id: '/foo',
  path: '/foo',
  getParentRoute: () => NestedLayoutB2Route,
} as any)

const NestedLayoutB1LayoutC1Route = NestedLayoutB1LayoutC1Import.update({
  id: '/_layout-c1',
  getParentRoute: () => NestedLayoutB1Route,
} as any)

const JestedLayoutB4FooRoute = JestedLayoutB4FooImport.update({
  id: '/foo',
  path: '/foo',
  getParentRoute: () => JestedLayoutB4Route,
} as any)

const JestedLayoutB3LayoutC2Route = JestedLayoutB3LayoutC2Import.update({
  id: '/_layout-c2',
  getParentRoute: () => JestedLayoutB3Route,
} as any)

const FooLayoutB5IdRoute = FooLayoutB5IdImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => FooLayoutB5RouteRoute,
} as any)

const NestedLayoutB1LayoutC1BarRoute = NestedLayoutB1LayoutC1BarImport.update({
  id: '/bar',
  path: '/bar',
  getParentRoute: () => NestedLayoutB1LayoutC1Route,
} as any)

const JestedLayoutB3LayoutC2BarRoute = JestedLayoutB3LayoutC2BarImport.update({
  id: '/bar',
  path: '/bar',
  getParentRoute: () => JestedLayoutB3LayoutC2Route,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/jested': {
      id: '/jested'
      path: '/jested'
      fullPath: '/jested'
      preLoaderRoute: typeof JestedRouteImport
      parentRoute: typeof rootRoute
    }
    '/_layout-a1': {
      id: '/_layout-a1'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutA1Import
      parentRoute: typeof rootRoute
    }
    '/_layout-a2': {
      id: '/_layout-a2'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutA2Import
      parentRoute: typeof rootRoute
    }
    '/foo': {
      id: '/foo'
      path: '/foo'
      fullPath: '/foo'
      preLoaderRoute: typeof FooImport
      parentRoute: typeof rootRoute
    }
    '/foo/_layout-b5': {
      id: '/foo/_layout-b5'
      path: '/foo'
      fullPath: '/foo'
      preLoaderRoute: typeof FooLayoutB5RouteImport
      parentRoute: typeof FooRoute
    }
    '/(folder)/in-folder': {
      id: '/(folder)/in-folder'
      path: '/in-folder'
      fullPath: '/in-folder'
      preLoaderRoute: typeof folderInFolderImport
      parentRoute: typeof rootRoute
    }
    '/_layout-a1/foo': {
      id: '/_layout-a1/foo'
      path: '/foo'
      fullPath: '/foo'
      preLoaderRoute: typeof LayoutA1FooImport
      parentRoute: typeof LayoutA1Import
    }
    '/_layout-a2/bar': {
      id: '/_layout-a2/bar'
      path: '/bar'
      fullPath: '/bar'
      preLoaderRoute: typeof LayoutA2BarImport
      parentRoute: typeof LayoutA2Import
    }
    '/foo/bar': {
      id: '/foo/bar'
      path: '/bar'
      fullPath: '/foo/bar'
      preLoaderRoute: typeof FooBarImport
      parentRoute: typeof FooImport
    }
    '/jested/_layout-b3': {
      id: '/jested/_layout-b3'
      path: ''
      fullPath: '/jested'
      preLoaderRoute: typeof JestedLayoutB3Import
      parentRoute: typeof JestedRouteImport
    }
    '/jested/_layout-b4': {
      id: '/jested/_layout-b4'
      path: ''
      fullPath: '/jested'
      preLoaderRoute: typeof JestedLayoutB4Import
      parentRoute: typeof JestedRouteImport
    }
    '/nested': {
      id: '/nested'
      path: '/nested'
      fullPath: '/nested'
      preLoaderRoute: typeof NestedImport
      parentRoute: typeof rootRoute
    }
    '/nested/_layout-b1': {
      id: '/nested/_layout-b1'
      path: '/nested'
      fullPath: '/nested'
      preLoaderRoute: typeof NestedLayoutB1Import
      parentRoute: typeof NestedRoute
    }
    '/nested/_layout-b2': {
      id: '/nested/_layout-b2'
      path: ''
      fullPath: '/nested'
      preLoaderRoute: typeof NestedLayoutB2Import
      parentRoute: typeof NestedImport
    }
    '/foo/_layout-b5/$id': {
      id: '/foo/_layout-b5/$id'
      path: '/$id'
      fullPath: '/foo/$id'
      preLoaderRoute: typeof FooLayoutB5IdImport
      parentRoute: typeof FooLayoutB5RouteImport
    }
    '/jested/_layout-b3/_layout-c2': {
      id: '/jested/_layout-b3/_layout-c2'
      path: ''
      fullPath: '/jested'
      preLoaderRoute: typeof JestedLayoutB3LayoutC2Import
      parentRoute: typeof JestedLayoutB3Import
    }
    '/jested/_layout-b4/foo': {
      id: '/jested/_layout-b4/foo'
      path: '/foo'
      fullPath: '/jested/foo'
      preLoaderRoute: typeof JestedLayoutB4FooImport
      parentRoute: typeof JestedLayoutB4Import
    }
    '/nested/_layout-b1/_layout-c1': {
      id: '/nested/_layout-b1/_layout-c1'
      path: ''
      fullPath: '/nested'
      preLoaderRoute: typeof NestedLayoutB1LayoutC1Import
      parentRoute: typeof NestedLayoutB1Import
    }
    '/nested/_layout-b2/foo': {
      id: '/nested/_layout-b2/foo'
      path: '/foo'
      fullPath: '/nested/foo'
      preLoaderRoute: typeof NestedLayoutB2FooImport
      parentRoute: typeof NestedLayoutB2Import
    }
    '/foo/_layout-b5/': {
      id: '/foo/_layout-b5/'
      path: '/'
      fullPath: '/foo/'
      preLoaderRoute: typeof FooLayoutB5IndexImport
      parentRoute: typeof FooLayoutB5RouteImport
    }
    '/jested/_layout-b3/': {
      id: '/jested/_layout-b3/'
      path: '/'
      fullPath: '/jested/'
      preLoaderRoute: typeof JestedLayoutB3IndexImport
      parentRoute: typeof JestedLayoutB3Import
    }
    '/nested/_layout-b1/': {
      id: '/nested/_layout-b1/'
      path: '/'
      fullPath: '/nested/'
      preLoaderRoute: typeof NestedLayoutB1IndexImport
      parentRoute: typeof NestedLayoutB1Import
    }
    '/jested/_layout-b3/_layout-c2/bar': {
      id: '/jested/_layout-b3/_layout-c2/bar'
      path: '/bar'
      fullPath: '/jested/bar'
      preLoaderRoute: typeof JestedLayoutB3LayoutC2BarImport
      parentRoute: typeof JestedLayoutB3LayoutC2Import
    }
    '/nested/_layout-b1/_layout-c1/bar': {
      id: '/nested/_layout-b1/_layout-c1/bar'
      path: '/bar'
      fullPath: '/nested/bar'
      preLoaderRoute: typeof NestedLayoutB1LayoutC1BarImport
      parentRoute: typeof NestedLayoutB1LayoutC1Import
    }
  }
}

// Create and export the route tree

interface JestedLayoutB3LayoutC2RouteChildren {
  JestedLayoutB3LayoutC2BarRoute: typeof JestedLayoutB3LayoutC2BarRoute
}

const JestedLayoutB3LayoutC2RouteChildren: JestedLayoutB3LayoutC2RouteChildren =
  {
    JestedLayoutB3LayoutC2BarRoute: JestedLayoutB3LayoutC2BarRoute,
  }

const JestedLayoutB3LayoutC2RouteWithChildren =
  JestedLayoutB3LayoutC2Route._addFileChildren(
    JestedLayoutB3LayoutC2RouteChildren,
  )

interface JestedLayoutB3RouteChildren {
  JestedLayoutB3LayoutC2Route: typeof JestedLayoutB3LayoutC2RouteWithChildren
  JestedLayoutB3IndexRoute: typeof JestedLayoutB3IndexRoute
}

const JestedLayoutB3RouteChildren: JestedLayoutB3RouteChildren = {
  JestedLayoutB3LayoutC2Route: JestedLayoutB3LayoutC2RouteWithChildren,
  JestedLayoutB3IndexRoute: JestedLayoutB3IndexRoute,
}

const JestedLayoutB3RouteWithChildren = JestedLayoutB3Route._addFileChildren(
  JestedLayoutB3RouteChildren,
)

interface JestedLayoutB4RouteChildren {
  JestedLayoutB4FooRoute: typeof JestedLayoutB4FooRoute
}

const JestedLayoutB4RouteChildren: JestedLayoutB4RouteChildren = {
  JestedLayoutB4FooRoute: JestedLayoutB4FooRoute,
}

const JestedLayoutB4RouteWithChildren = JestedLayoutB4Route._addFileChildren(
  JestedLayoutB4RouteChildren,
)

interface JestedRouteRouteChildren {
  JestedLayoutB3Route: typeof JestedLayoutB3RouteWithChildren
  JestedLayoutB4Route: typeof JestedLayoutB4RouteWithChildren
}

const JestedRouteRouteChildren: JestedRouteRouteChildren = {
  JestedLayoutB3Route: JestedLayoutB3RouteWithChildren,
  JestedLayoutB4Route: JestedLayoutB4RouteWithChildren,
}

const JestedRouteRouteWithChildren = JestedRouteRoute._addFileChildren(
  JestedRouteRouteChildren,
)

interface LayoutA1RouteChildren {
  LayoutA1FooRoute: typeof LayoutA1FooRoute
}

const LayoutA1RouteChildren: LayoutA1RouteChildren = {
  LayoutA1FooRoute: LayoutA1FooRoute,
}

const LayoutA1RouteWithChildren = LayoutA1Route._addFileChildren(
  LayoutA1RouteChildren,
)

interface LayoutA2RouteChildren {
  LayoutA2BarRoute: typeof LayoutA2BarRoute
}

const LayoutA2RouteChildren: LayoutA2RouteChildren = {
  LayoutA2BarRoute: LayoutA2BarRoute,
}

const LayoutA2RouteWithChildren = LayoutA2Route._addFileChildren(
  LayoutA2RouteChildren,
)

interface FooLayoutB5RouteRouteChildren {
  FooLayoutB5IdRoute: typeof FooLayoutB5IdRoute
  FooLayoutB5IndexRoute: typeof FooLayoutB5IndexRoute
}

const FooLayoutB5RouteRouteChildren: FooLayoutB5RouteRouteChildren = {
  FooLayoutB5IdRoute: FooLayoutB5IdRoute,
  FooLayoutB5IndexRoute: FooLayoutB5IndexRoute,
}

const FooLayoutB5RouteRouteWithChildren =
  FooLayoutB5RouteRoute._addFileChildren(FooLayoutB5RouteRouteChildren)

interface FooRouteChildren {
  FooLayoutB5RouteRoute: typeof FooLayoutB5RouteRouteWithChildren
  FooBarRoute: typeof FooBarRoute
}

const FooRouteChildren: FooRouteChildren = {
  FooLayoutB5RouteRoute: FooLayoutB5RouteRouteWithChildren,
  FooBarRoute: FooBarRoute,
}

const FooRouteWithChildren = FooRoute._addFileChildren(FooRouteChildren)

interface NestedLayoutB1LayoutC1RouteChildren {
  NestedLayoutB1LayoutC1BarRoute: typeof NestedLayoutB1LayoutC1BarRoute
}

const NestedLayoutB1LayoutC1RouteChildren: NestedLayoutB1LayoutC1RouteChildren =
  {
    NestedLayoutB1LayoutC1BarRoute: NestedLayoutB1LayoutC1BarRoute,
  }

const NestedLayoutB1LayoutC1RouteWithChildren =
  NestedLayoutB1LayoutC1Route._addFileChildren(
    NestedLayoutB1LayoutC1RouteChildren,
  )

interface NestedLayoutB1RouteChildren {
  NestedLayoutB1LayoutC1Route: typeof NestedLayoutB1LayoutC1RouteWithChildren
  NestedLayoutB1IndexRoute: typeof NestedLayoutB1IndexRoute
}

const NestedLayoutB1RouteChildren: NestedLayoutB1RouteChildren = {
  NestedLayoutB1LayoutC1Route: NestedLayoutB1LayoutC1RouteWithChildren,
  NestedLayoutB1IndexRoute: NestedLayoutB1IndexRoute,
}

const NestedLayoutB1RouteWithChildren = NestedLayoutB1Route._addFileChildren(
  NestedLayoutB1RouteChildren,
)

interface NestedLayoutB2RouteChildren {
  NestedLayoutB2FooRoute: typeof NestedLayoutB2FooRoute
}

const NestedLayoutB2RouteChildren: NestedLayoutB2RouteChildren = {
  NestedLayoutB2FooRoute: NestedLayoutB2FooRoute,
}

const NestedLayoutB2RouteWithChildren = NestedLayoutB2Route._addFileChildren(
  NestedLayoutB2RouteChildren,
)

interface NestedRouteChildren {
  NestedLayoutB1Route: typeof NestedLayoutB1RouteWithChildren
  NestedLayoutB2Route: typeof NestedLayoutB2RouteWithChildren
}

const NestedRouteChildren: NestedRouteChildren = {
  NestedLayoutB1Route: NestedLayoutB1RouteWithChildren,
  NestedLayoutB2Route: NestedLayoutB2RouteWithChildren,
}

const NestedRouteWithChildren =
  NestedRoute._addFileChildren(NestedRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/jested': typeof JestedLayoutB3LayoutC2RouteWithChildren
  '': typeof LayoutA2RouteWithChildren
  '/foo': typeof LayoutA1FooRoute
  '/in-folder': typeof folderInFolderRoute
  '/bar': typeof LayoutA2BarRoute
  '/foo/bar': typeof FooBarRoute
  '/nested': typeof NestedLayoutB1LayoutC1RouteWithChildren
  '/foo/$id': typeof FooLayoutB5IdRoute
  '/jested/foo': typeof JestedLayoutB4FooRoute
  '/nested/foo': typeof NestedLayoutB2FooRoute
  '/foo/': typeof FooLayoutB5IndexRoute
  '/jested/': typeof JestedLayoutB3IndexRoute
  '/nested/': typeof NestedLayoutB1IndexRoute
  '/jested/bar': typeof JestedLayoutB3LayoutC2BarRoute
  '/nested/bar': typeof NestedLayoutB1LayoutC1BarRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/jested': typeof JestedLayoutB3IndexRoute
  '': typeof LayoutA2RouteWithChildren
  '/foo': typeof FooLayoutB5IndexRoute
  '/in-folder': typeof folderInFolderRoute
  '/bar': typeof LayoutA2BarRoute
  '/foo/bar': typeof FooBarRoute
  '/nested': typeof NestedLayoutB1IndexRoute
  '/foo/$id': typeof FooLayoutB5IdRoute
  '/jested/foo': typeof JestedLayoutB4FooRoute
  '/nested/foo': typeof NestedLayoutB2FooRoute
  '/jested/bar': typeof JestedLayoutB3LayoutC2BarRoute
  '/nested/bar': typeof NestedLayoutB1LayoutC1BarRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/jested': typeof JestedRouteRouteWithChildren
  '/_layout-a1': typeof LayoutA1RouteWithChildren
  '/_layout-a2': typeof LayoutA2RouteWithChildren
  '/foo': typeof FooRouteWithChildren
  '/foo/_layout-b5': typeof FooLayoutB5RouteRouteWithChildren
  '/(folder)/in-folder': typeof folderInFolderRoute
  '/_layout-a1/foo': typeof LayoutA1FooRoute
  '/_layout-a2/bar': typeof LayoutA2BarRoute
  '/foo/bar': typeof FooBarRoute
  '/jested/_layout-b3': typeof JestedLayoutB3RouteWithChildren
  '/jested/_layout-b4': typeof JestedLayoutB4RouteWithChildren
  '/nested': typeof NestedRouteWithChildren
  '/nested/_layout-b1': typeof NestedLayoutB1RouteWithChildren
  '/nested/_layout-b2': typeof NestedLayoutB2RouteWithChildren
  '/foo/_layout-b5/$id': typeof FooLayoutB5IdRoute
  '/jested/_layout-b3/_layout-c2': typeof JestedLayoutB3LayoutC2RouteWithChildren
  '/jested/_layout-b4/foo': typeof JestedLayoutB4FooRoute
  '/nested/_layout-b1/_layout-c1': typeof NestedLayoutB1LayoutC1RouteWithChildren
  '/nested/_layout-b2/foo': typeof NestedLayoutB2FooRoute
  '/foo/_layout-b5/': typeof FooLayoutB5IndexRoute
  '/jested/_layout-b3/': typeof JestedLayoutB3IndexRoute
  '/nested/_layout-b1/': typeof NestedLayoutB1IndexRoute
  '/jested/_layout-b3/_layout-c2/bar': typeof JestedLayoutB3LayoutC2BarRoute
  '/nested/_layout-b1/_layout-c1/bar': typeof NestedLayoutB1LayoutC1BarRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/jested'
    | ''
    | '/foo'
    | '/in-folder'
    | '/bar'
    | '/foo/bar'
    | '/nested'
    | '/foo/$id'
    | '/jested/foo'
    | '/nested/foo'
    | '/foo/'
    | '/jested/'
    | '/nested/'
    | '/jested/bar'
    | '/nested/bar'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/jested'
    | ''
    | '/foo'
    | '/in-folder'
    | '/bar'
    | '/foo/bar'
    | '/nested'
    | '/foo/$id'
    | '/jested/foo'
    | '/nested/foo'
    | '/jested/bar'
    | '/nested/bar'
  id:
    | '__root__'
    | '/'
    | '/jested'
    | '/_layout-a1'
    | '/_layout-a2'
    | '/foo'
    | '/foo/_layout-b5'
    | '/(folder)/in-folder'
    | '/_layout-a1/foo'
    | '/_layout-a2/bar'
    | '/foo/bar'
    | '/jested/_layout-b3'
    | '/jested/_layout-b4'
    | '/nested'
    | '/nested/_layout-b1'
    | '/nested/_layout-b2'
    | '/foo/_layout-b5/$id'
    | '/jested/_layout-b3/_layout-c2'
    | '/jested/_layout-b4/foo'
    | '/nested/_layout-b1/_layout-c1'
    | '/nested/_layout-b2/foo'
    | '/foo/_layout-b5/'
    | '/jested/_layout-b3/'
    | '/nested/_layout-b1/'
    | '/jested/_layout-b3/_layout-c2/bar'
    | '/nested/_layout-b1/_layout-c1/bar'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  JestedRouteRoute: typeof JestedRouteRouteWithChildren
  LayoutA1Route: typeof LayoutA1RouteWithChildren
  LayoutA2Route: typeof LayoutA2RouteWithChildren
  FooRoute: typeof FooRouteWithChildren
  folderInFolderRoute: typeof folderInFolderRoute
  NestedRoute: typeof NestedRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  JestedRouteRoute: JestedRouteRouteWithChildren,
  LayoutA1Route: LayoutA1RouteWithChildren,
  LayoutA2Route: LayoutA2RouteWithChildren,
  FooRoute: FooRouteWithChildren,
  folderInFolderRoute: folderInFolderRoute,
  NestedRoute: NestedRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/jested",
        "/_layout-a1",
        "/_layout-a2",
        "/foo",
        "/(folder)/in-folder",
        "/nested"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/jested": {
      "filePath": "jested/route.tsx",
      "children": [
        "/jested/_layout-b3",
        "/jested/_layout-b4"
      ]
    },
    "/_layout-a1": {
      "filePath": "_layout-a1.tsx",
      "children": [
        "/_layout-a1/foo"
      ]
    },
    "/_layout-a2": {
      "filePath": "_layout-a2.tsx",
      "children": [
        "/_layout-a2/bar"
      ]
    },
    "/foo": {
      "filePath": "foo/_layout-b5",
      "children": [
        "/foo/_layout-b5",
        "/foo/bar"
      ]
    },
    "/foo/_layout-b5": {
      "filePath": "foo/_layout-b5/route.tsx",
      "parent": "/foo",
      "children": [
        "/foo/_layout-b5/$id",
        "/foo/_layout-b5/"
      ]
    },
    "/(folder)/in-folder": {
      "filePath": "(folder)/in-folder.tsx"
    },
    "/_layout-a1/foo": {
      "filePath": "_layout-a1/foo.tsx",
      "parent": "/_layout-a1"
    },
    "/_layout-a2/bar": {
      "filePath": "_layout-a2/bar.tsx",
      "parent": "/_layout-a2"
    },
    "/foo/bar": {
      "filePath": "foo/bar.tsx",
      "parent": "/foo"
    },
    "/jested/_layout-b3": {
      "filePath": "jested/_layout-b3.tsx",
      "parent": "/jested",
      "children": [
        "/jested/_layout-b3/_layout-c2",
        "/jested/_layout-b3/"
      ]
    },
    "/jested/_layout-b4": {
      "filePath": "jested/_layout-b4.tsx",
      "parent": "/jested",
      "children": [
        "/jested/_layout-b4/foo"
      ]
    },
    "/nested": {
      "filePath": "nested",
      "children": [
        "/nested/_layout-b1",
        "/nested/_layout-b2"
      ]
    },
    "/nested/_layout-b1": {
      "filePath": "nested/_layout-b1.tsx",
      "parent": "/nested",
      "children": [
        "/nested/_layout-b1/_layout-c1",
        "/nested/_layout-b1/"
      ]
    },
    "/nested/_layout-b2": {
      "filePath": "nested/_layout-b2.tsx",
      "parent": "/nested",
      "children": [
        "/nested/_layout-b2/foo"
      ]
    },
    "/foo/_layout-b5/$id": {
      "filePath": "foo/_layout-b5/$id.tsx",
      "parent": "/foo/_layout-b5"
    },
    "/jested/_layout-b3/_layout-c2": {
      "filePath": "jested/_layout-b3/_layout-c2.tsx",
      "parent": "/jested/_layout-b3",
      "children": [
        "/jested/_layout-b3/_layout-c2/bar"
      ]
    },
    "/jested/_layout-b4/foo": {
      "filePath": "jested/_layout-b4/foo.tsx",
      "parent": "/jested/_layout-b4"
    },
    "/nested/_layout-b1/_layout-c1": {
      "filePath": "nested/_layout-b1/_layout-c1.tsx",
      "parent": "/nested/_layout-b1",
      "children": [
        "/nested/_layout-b1/_layout-c1/bar"
      ]
    },
    "/nested/_layout-b2/foo": {
      "filePath": "nested/_layout-b2/foo.tsx",
      "parent": "/nested/_layout-b2"
    },
    "/foo/_layout-b5/": {
      "filePath": "foo/_layout-b5/index.tsx",
      "parent": "/foo/_layout-b5"
    },
    "/jested/_layout-b3/": {
      "filePath": "jested/_layout-b3/index.tsx",
      "parent": "/jested/_layout-b3"
    },
    "/nested/_layout-b1/": {
      "filePath": "nested/_layout-b1/index.tsx",
      "parent": "/nested/_layout-b1"
    },
    "/jested/_layout-b3/_layout-c2/bar": {
      "filePath": "jested/_layout-b3/_layout-c2/bar.tsx",
      "parent": "/jested/_layout-b3/_layout-c2"
    },
    "/nested/_layout-b1/_layout-c1/bar": {
      "filePath": "nested/_layout-b1/_layout-c1/bar.tsx",
      "parent": "/nested/_layout-b1/_layout-c1"
    }
  }
}
ROUTE_MANIFEST_END */
