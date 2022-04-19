import Marquee from "../components/marquee";
import { motion, isValidMotionProp } from "framer-motion";
import { Button, Icon } from "@chakra-ui/react";
import { MdSettings } from 'react-icons/md'

const defaultBackgroundColor = "#333"
const defaultFontColor = "#a4f644"

const CustomButton = motion(Button, {
    shouldForwardProp: isValidMotionProp,
})

function Base() {
  return (
    <div className="Base">
        <div>
            <CustomButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            colorScheme="blue"
            className="config-button"
            >
                <Icon as={ MdSettings } />
            </CustomButton>
        </div>
        <Marquee 
        backgroundColor={defaultBackgroundColor} 
        color={defaultFontColor} 
        />
    </div>
  );
}

export default Base;
