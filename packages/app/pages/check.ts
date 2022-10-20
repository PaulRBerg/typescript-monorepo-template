import { helloFromComponents } from "@project/components";
import { helloFromSrcFoo } from "~/foo";

export function helloFromApp() {
  helloFromComponents();
  helloFromSrcFoo();
}
