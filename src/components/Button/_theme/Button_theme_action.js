import { withBemMod } from "bem-vue";
import { cnButton } from "../index";

export const withButtonThemeAction = withBemMod(cnButton(), {
  theme: "action"
});
