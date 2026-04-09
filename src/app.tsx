import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import { Link, Meta, MetaProvider, Title } from "@solidjs/meta";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <MetaProvider>
            <Title>sink.cat</Title>
            <Link rel="shortcut icon" href="/cat.png" type="image/x-icon" />
            <Meta name="og:title" content="sink.cat" />
            <Meta name="og:thumbnail" content="/cat.png" />
          </MetaProvider>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
