/// <reference types="astro/client" />
type KVNamespace = import("@cloudflare/workers-types").KVNamespace;
type ENV = {
  lastlocation: KVNamespace;
};

type Runtime = import("@astrojs/cloudflare").Runtime<ENV>;
declare namespace App {
  interface Locals extends Runtime {}
}