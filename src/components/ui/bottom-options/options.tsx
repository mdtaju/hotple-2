import { Tooltip } from "@mui/material";
import { AiOutlinePicture } from "react-icons/ai";
import { RiRefreshLine } from "react-icons/ri";

export default function BottomOptions() {
  return (
    <div className="bottom_menu_options_container">
      <div className="bottom_menu_options_inner_container">
        <Tooltip title="사진과 텍스트만 보기" placement="left">
          <button>
            <AiOutlinePicture style={{ width: "20px", height: "20px" }} />
          </button>
        </Tooltip>
        <Tooltip title="새로 고치다" placement="left">
          <button>
            <RiRefreshLine style={{ width: "20px", height: "20px" }} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
