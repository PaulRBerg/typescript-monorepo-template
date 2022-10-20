import { helloFromSrcBar } from "~/bar";

export function helloFromComponents() {
  helloFromSrcBar();
  console.log(
    "@project/components: Hello World, I am the `components` package",
  );
}
