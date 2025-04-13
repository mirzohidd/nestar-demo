import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Community: NextPage = () => {
  console.log("Community page");
  return (
    <div style={{margin:"20px 0"}}>
      <Stack className="container">CS CENTER</Stack>
    </div>
  );
};

export default withLayoutBasic(Community);
