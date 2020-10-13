import { withBemMod } from "bem-vue";
import { cnButton } from "../index";
import "./Button_theme_action.css";

export const withButtonThemeAction = withBemMod(cnButton(), {
  theme: "action"
});
