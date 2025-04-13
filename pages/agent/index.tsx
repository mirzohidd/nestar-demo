import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const AgentList: NextPage = () => {
  console.log("Community page");
  return (
    <div style={{margin:"20px 0"}}>
      <Stack className="container">AgentList</Stack>
    </div>
  );
};

export default withLayoutBasic(AgentList);
