import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'

interface MessChatProps {
    result: string
    role: 'user' | 'ai'
}

const MessChat = ({role, result}: MessChatProps) => {
  const variantStyle = {
    user: 'ml-auto',
    ai: 'mr-auto',
  }

  return (
    <Card className={`my-3 w-fit mx-2 max-w-[60rem] ${variantStyle[role]}`}>
        <CardTitle className='p-3'>
            {role === 'user' ? 'User' : 'AI'}
        </CardTitle>
        <CardContent>
          {result}
        </CardContent>
    </Card>
  )
}

export default MessChat