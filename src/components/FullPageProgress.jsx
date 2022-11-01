import { Loading, Flex, Text } from "@100mslive/react-ui";

const FullPageProgress = () => (
  <Flex justify="center" align="center" direction="column" css={{ size: "100%" }}>
    <Loading size={100} />
    <Text color="white" variant="sm">
      If connecting is taking longer than expected, please try refreshing the page
    </Text>
  </Flex>
);

export default FullPageProgress;
