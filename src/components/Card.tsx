import { Card } from "@chakra-ui/react"

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
