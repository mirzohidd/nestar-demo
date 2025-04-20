import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack, Container, Box } from "@mui/material";
import { NextPage } from "next";

const PropertyDetail: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>PROPERTY DETAIL MOBILE</Stack>;
  } else {
    return <Container>PROPERTY DETAIL</Container>;
  }
};
export default withLayoutBasic(PropertyDetail);
