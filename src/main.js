import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/works";
import "./templates/components/sections/reviews/reviews.js";
import "./scripts/scroll";
import "./scripts/hamburgerMenu";
import "./scripts/sendForm";