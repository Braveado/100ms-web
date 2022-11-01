import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Button, Flex, Box, Text, styled } from "@100mslive/react-ui";
import { ToastManager } from "./Toast/ToastManager";
import { useNavigation } from "./hooks/useNavigation";
import { getRoutePrefix } from "../common/utils";
import LogoForLight from "../images/logo-dark.svg";
import PlaceholderBg from "../images/post_leave.png";

const LogoImg = styled("img", {
  maxHeight: "$14",
  p: "$2",
  w: "auto",
});

const Logo = () => {
  return <LogoImg src={LogoForLight} alt="Brand Logo" width={132} height={40} />;
};

const iconStyle = {
  color: '#2F80FF', 
  fontSize: '40px',
};

const PostLeave = () => {
  const navigate = useNavigation();
  const { roomId, role } = useParams();
  const [count, setCount] = useState(0);
  return (
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
              You left the {getRoutePrefix() ? "stream" : "room"}
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
              <Box>
                <Text variant="sm"
                  css={{ color: "gray", mt: "$10" }}>
                  Leave feedback
                </Text>
                <Flex justify="left" gap="4"
                  css={{ mt: "$8" }}>
                  <Button variant="" 
                    css={{ p: "0", bg: "$transparent"}}                    
                    onClick={() => {
                      window.open(`https://my.simbiosis.team/interview-feedback/${roomId}?rating=${count}`, "_self");
                    }} 
                    onMouseEnter={() => setCount(1)}                    
                    data-testid="feedback_btn_1"
                  >
                    {count >= 1 ? <AiFillStar style={iconStyle} />               
                    : <AiOutlineStar style={iconStyle} />}
                  </Button>
                  <Button variant="" 
                    css={{ p: "0", bg: "$transparent" }}                    
                    onClick={() => {
                      window.open(`https://my.simbiosis.team/interview-feedback/${roomId}?rating=${count}`, "_self");
                    }} 
                    onMouseEnter={() => setCount(2)}
                    data-testid="feedback_btn_2"
                  >
                    {count >= 2 ? <AiFillStar style={iconStyle} />               
                    : <AiOutlineStar style={iconStyle} />}             
                  </Button> 
                  <Button variant="" 
                    css={{ p: "0", bg: "$transparent" }}                    
                    onClick={() => {
                      window.open(`https://my.simbiosis.team/interview-feedback/${roomId}?rating=${count}`, "_self");
                    }}  
                    onMouseEnter={() => setCount(3)}
                    data-testid="feedback_btn_3"
                  >
                    {count >= 3 ? <AiFillStar style={iconStyle} />               
                    : <AiOutlineStar style={iconStyle} />}              
                  </Button> 
                  <Button variant="" 
                    css={{ p: "0", bg: "$transparent" }}                    
                    onClick={() => {
                      window.open(`https://my.simbiosis.team/interview-feedback/${roomId}?rating=${count}`, "_self");
                    }} 
                    onMouseEnter={() => setCount(4)}
                    data-testid="feedback_btn_4"
                  >
                    {count >= 4 ? <AiFillStar style={iconStyle} />               
                    : <AiOutlineStar style={iconStyle} />}              
                  </Button> 
                  <Button variant="" 
                    css={{ p: "0", bg: "$transparent" }}                    
                    onClick={() => {
                      window.open(`https://my.simbiosis.team/interview-feedback/${roomId}?rating=${count}`, "_self");
                    }} 
                    onMouseEnter={() => setCount(5)}
                    data-testid="feedback_btn_5"
                  >
                    {count >= 5 ? <AiFillStar style={iconStyle} />               
                    : <AiOutlineStar style={iconStyle} />}              
                  </Button>                               
                </Flex>
              </Box>
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
  );
};

export default PostLeave;
