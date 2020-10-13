import { withBemMod } from "bem-vue";
import { cnButton } from "../index";
import "./Button_type_link.css";

export const withButtonTypeLink = withBemMod(
  cnButton(),
  { type: "link" },
  (Button) => {
    return {
      functional: true,
      render(h, context) {
        console.log(Button);
        return h(
          Button,
          {
            ...context.data,
            props: { ...context.props, tag: "a" }
          },
          context.children
        );
      }
    };
  }
);
