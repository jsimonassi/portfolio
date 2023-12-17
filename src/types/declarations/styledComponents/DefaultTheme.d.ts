import "styled-components";

type TypographyItem = Pick<CSSObject, "fontFamily" | "fontStyle" | "fontWeight" | "fontSize" | "lineHeight" | "color">;

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primaryColor: string;
      secondaryColor: string;
      accentColor: string;

      surface1: string;
      surface2: string;
      surface3: string;

      textAndIcons1: string;
      textAndIcons2: string;
    };
  }
}
