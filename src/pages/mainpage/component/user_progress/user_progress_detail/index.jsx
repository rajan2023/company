import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BoldText, SmallText, ProgessLayout, AlignText } from "./index.style";
const UserProgressDetail = () => {
  var percentage = "60";
  return (
    <ProgessLayout>
      <div style={{ width: 90, height: 90, fontWeight: "600" }}>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: "#00ccf2",
            textColor: "#555",
            textSize: "2rem",
          })}
          value={percentage}
          text={`${percentage}%`}
          strokeWidth="12"
        />
      </div>
      <AlignText>
        <BoldText>(६९९/७५६)</BoldText>
        <SmallText>स्थानिय</SmallText>
        <BoldText>LISA</BoldText>
      </AlignText>
    </ProgessLayout>
  );
};
export default UserProgressDetail;
