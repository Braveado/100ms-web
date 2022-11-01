import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Flex, Box, Text, styled } from "@100mslive/react-ui";
import { ToastManager } from "./Toast/ToastManager";
import { useNavigation } from "./hooks/useNavigation";
import { getRoutePrefix } from "../common/utils";
import LogoForLight from "../images/logo-dark.svg";
import PlaceholderBg from "../images/post_leave.png";
import FeedbackModal from "./FeedbackModal";

const LogoImg = styled("img", {
  maxHeight: "$14",
  p: "$2",
  w: "auto",
});

const Logo = () => {
  return <LogoImg src={LogoForLight} alt="Brand Logo" width={132} height={40} />;
};

const PostLeave = () => {
  const navigate = useNavigation();
  const { roomId, role } = useParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(role == "interviewer")
      setOpen(true);
  }, []);

  return (
    <Fragment >
    {open && <FeedbackModal open={open} onOpenChange={setOpen} />}
    <Flex justify="center" align="center" 
      css={{ size: "100%", bg: "$mainBg" }}>
      <Box
        css={{                    
          w: "100%",
          h: "100%",          
          backgroundImage: `url(${PlaceholderBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          "@lg": {
            width: "0%",
            height: "100%",
          },
        }}
      />
      <Box
        css={{
          overflow: "hidden",
          w: "100%",
          h: "100%",
          bg: "$white"
        }}
      >
        <Flex
          align="left" direction="column"
          css={{ w: "100%", h: "100%", px: "10%" }}
        >
          <Flex align="end"
            css={{ w: "100%", h: "25%", pb: "5%" }}
          >
            <Logo />
          </Flex>
          <Flex justify="center" direction="column"
            css={{ w: "100%", h: "50%" }}
          >
            <Text              
              variant="h6"
              css={{ color: "black", fontWeight: "$semiBold" }}
            >
              You left the meeting
            </Text>
            <Text              
              variant="sm"
              css={{ color: "gray", mt: "$10" }}
            >
              Here are quick actions you can take
            </Text>
            <Flex justify="left"
              css={{ mt: "$8" }}
            >
              <Button
                css={{ w: "100%", minWidth: "180px" }}
                onClick={() => {
                  let previewUrl = "/preview/" + roomId;
                  if (role) previewUrl += "/" + role;
                  navigate(previewUrl);
                  ToastManager.clearAllToast();
                }}                
                data-testid="join_again_btn"
              >
                <Text
                  variant="sm"
                  css={{ fontWeight: "$semiBold", my: "6px" }}
                >
                  Join meeting again
                </Text>                
              </Button>
              <Box css={{ mx: "10px" }} />
              {role == "interviewer" ? 
                <Button variant="standard"
                  css={{ w: "100%", minWidth: "180px" }}                  
                  onClick={() => {
                    window.open("https://my.simbiosis.team", "_blank");
                  }}                
                  data-testid="go_to_dashboard_btn"
                >
                  <Text
                    variant="sm"
                    css={{ fontWeight: "$semiBold", my: "6px" }}
                  >
                    Your dashboard
                  </Text> 
                </Button>
              :
                <Box css={{ w: "100%", minWidth: "180px", px: "16px" }} />
              }
            </Flex>
            {role == "interviewer" &&
              <Flex justify="left"
                css={{ mt: "$8" }}
              >
                <Button
                  css={{ w: "100%", minWidth: "180px" }}
                  onClick={() => {
                    setOpen(true);
                  }}                
                  data-testid="join_again_btn"
                >
                  <Text
                    variant="sm"
                    css={{ fontWeight: "$semiBold", my: "6px" }}
                  >
                    Leave feedback
                  </Text>                
                </Button>
                <Box css={{ mx: "10px" }} />
                <Box css={{ w: "100%", minWidth: "180px", px: "16px" }} />
              </Flex>
            }
          </Flex>           
          <Flex align="start"
            css={{ w: "100%", h: "25%", pt: "10%" }}
          >
            <Flex align="end" gap="1">
              <Text          
                variant="xs"              
                css={{ py: "1px", color: "gray" }}
              >
                Need help?
              </Text>
              <Button variant=""
                css={{ p: "0", bg: "$transparent" }}                
                onClick={(e) => {
                  window.location.href = "mailto:hello@simbiosis.team";
                  e.preventDefault();
                }}             
                data-testid="contact_us_btn"
              >
                <Text              
                  variant="sm"                              
                  css={{ color: "$brandDefault" }}
                >
                  Contact us
                </Text>
              </Button>
            </Flex>            
          </Flex>                  
        </Flex>
      </Box>
    </Flex>
    </Fragment>
  );
};

export default PostLeave;
