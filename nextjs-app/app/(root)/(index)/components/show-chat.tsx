import { ScrollArea } from '@radix-ui/react-scroll-area'
import React, { ReactNode } from 'react'

interface ShowChatProps {
    children: ReactNode
}

const ShowChat = ({children}: ShowChatProps) => {
  return (
    <>
        <ScrollArea className='container mx-auto h-[70vh] rounded-md border-2 border-foreground'>
            {children}
        </ScrollArea>
    </>
  )
}

export default ShowChat