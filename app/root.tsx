import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "pnpm-remix-base",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

const App = () => {
  return (
    <html lang="ko">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default App;
