import { boot } from "quasar/wrappers";
import microApp from "@micro-zoe/micro-app";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  microApp.start();
});
