import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Heading,
    Text
    // Lorem
} from '@chakra-ui/react'
import { t } from "i18next";


function Settings(props) {
    return (
        <>

        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{ t("settings") }</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box p={5} shadow='md' borderWidth='1px'>
                        <Heading fontSize='xl'>{t("labels.theme")}</Heading>
                        {/* <Text mt={4}>{desc}</Text> */}
                    </Box>
                    <Box p={5} shadow='md' borderWidth='1px'>
                        <Heading fontSize='xl'>{t("labels.message")}</Heading>
                        {/* <Text mt={4}>{desc}</Text> */}
                    </Box>
                    <Box p={5} shadow='md' borderWidth='1px'>
                        <Heading fontSize='xl'>{t("labels.language")}</Heading>
                        {/* <Text mt={4}>{desc}</Text> */}
                    </Box>
                    {/* body da modal... */}
                </ModalBody>

                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={props.onClose}>
                    { t("buttons.close") }
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
}

export default Settings