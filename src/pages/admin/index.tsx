import { Heading, VStack } from "@chakra-ui/react";
import MainLayout from "components/Layout/Sidebar";
import React from "react";

type Props = {};

const AdminBasePage = (props: Props) => {
  return (
    <VStack w="100%" alignItems="flex-start">
      <Heading size="lg">Map of Jamaica</Heading>
    </VStack>
  );
};

export default AdminBasePage;

AdminBasePage.getLayout = function getLayout(page: any) {
  return <MainLayout pageTitle="Prisoner">{page}</MainLayout>;
};
