import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  CrossIcon,
} from "@100mslive/react-icons";
import {
  Button,
  Dialog,
  Flex,
  IconButton,
  Text,
} from "@100mslive/react-ui";

const iconStyle = {
  color: '#2F80FF', 
  fontSize: '40px',
};

const FeedbackModal = ({ open, onOpenChange }) => {
  const { roomId } = useParams();
  const [count, setCount] = useState(0);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content
          css={{
            w: "min(600px, 90%)",
            height: "min(400px, 90%)",
            p: 0,
            r: "$4",
          }}
        >
          <Dialog.Close
            css={{ position: "absolute", right: "$10", top: "$10" }}
          >
            <IconButton as="div" data-testid="dialog_cross_icon">
              <CrossIcon />
            </IconButton>
          </Dialog.Close>

          <Flex align="center" justify="center" direction="column"
            css={{ w: "100%", h: "100%" }}
          >
            <Text variant="h5"
              css={{ px: "10%", textAlign: "center" }}
            >
              Please tell use about your interview experience with the candidate
            </Text>
            <Flex justify="left" gap="4"
              css={{ mt: "$16" }}
            >
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
          </Flex>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FeedbackModal;
