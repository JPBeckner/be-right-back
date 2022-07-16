import Marquee from "../components/marquee";
import Settings from "../components/modal";
import { motion, isValidMotionProp } from "framer-motion";
import { Button, Icon, Center, useDisclosure } from "@chakra-ui/react";
import { MdSettings } from 'react-icons/md'


const defaultBackgroundColor = "#333"
const defaultFontColor = "#a4f644"
// const defaultButtonColor = "#403f3f"
// const defaultBorderColor = "#c4c2c2"

const CustomButton = motion(Button, {
    shouldForwardProp: isValidMotionProp,
})


function Base() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="Base">
        <Settings 
        isOpen={ isOpen } 
        onClose={ onClose} 
        />
        <Center>
            <CustomButton
            position="absolute"
            top="15"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            color={ defaultFontColor }
            className="config-button"
            variant='outline'
            onClick={ onOpen }
            _hover={{ bg: defaultBackgroundColor }}
            _active={{ bg: defaultBackgroundColor }}
            >
                <Icon as={ MdSettings } />
            </CustomButton>
        </Center>
        <Marquee 
        backgroundColor={defaultBackgroundColor} 
        color={defaultFontColor} 
        />
    </div>
  );
}

export default Base;
