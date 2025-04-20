import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Community: NextPage = () => {
 
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>CS MOBILE</Stack>;
  } else {
    return (
      <div style={{ marginTop: "20px 0" }}>
        <Stack className={"container"}>CS</Stack>
      </div>
    );
  }
  
};

export default withLayoutBasic(Community);
