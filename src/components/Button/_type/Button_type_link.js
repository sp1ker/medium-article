import { withBemMod } from "bem-vue";
import { cnButton } from "../index";

export const withButtonTypeLink = withBemMod(
  cnButton(),
  { type: "link" },
  Button => {
    return {
      functional: true,
      render(h, context) {
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
