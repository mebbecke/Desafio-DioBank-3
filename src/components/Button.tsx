import { Button, Center } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

interface IButton {
    id: string,
    onClick: MouseEventHandler,
    text: string
}

export const DButton = ({ id, onClick, text }: IButton) => {
    return (
        <Center marginTop='15px'>
            <Button 
            id={id} 
            onClick={onClick} 
            colorScheme='pink' 
            variant='solid' 
            size='md'
            >
            {text}
            </Button>
        </Center>
    )
}
