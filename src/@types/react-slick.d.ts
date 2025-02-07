declare module "react-slick" {
  import { Component } from "react";

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    // Add other settings as needed
  }

  export class Slider extends Component<Settings> {}
  export default Slider;
}
