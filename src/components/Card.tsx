import { Card } from "@chakra-ui/react"

interface ICard {
  id: string,
  children: any;
}

export const DCard = ({ children }: any) => {

  return (
      <Card
        boxSize='sm'
        align='center'
        boxShadow='xl'
        bg='#73818f'
        textColor='white'
      >
        { children }
        
      </Card>
  )
}
