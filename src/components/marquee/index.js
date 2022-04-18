import "./Marquee.css";
import { t } from "i18next";

function Marquee({backgroundColor, color}) {

  return (
    <div 
      className="marquee"
      style={{ "backgroundColor": backgroundColor, "color": color }}
    >
        <p>
          { t("message") }
        </p>
    </div>
  );
}

export default Marquee;
