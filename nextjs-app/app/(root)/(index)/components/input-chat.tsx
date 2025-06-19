import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { chatAction } from '@/lib/actions/chat-action'
import { on } from 'events'
import { Send } from 'lucide-react'
import { handleWebpackExternalForEdgeRuntime } from 'next/dist/build/webpack/plugins/middleware-plugin'
import { handleClientScriptLoad } from 'next/script'
import React, { useState } from 'react'

interface InputChatProps {
    onChangeMess: (e: any) => void
    onChangeResult: (e: any) => void
}

const InputChat = ({onChangeMess, onChangeResult}: InputChatProps) => {
    const [value, setVal] = useState("")

    const hamdleGetResult = async (prompt: string) => {
        const data = await chatAction({
            prompt: prompt,
        });
        onChangeResult((prev: string) => {
            return [...prev, data.result];
        });
    }

    return (
        <section className='flex gap-2 container mx-auto my-3'>
            <Input
                type='text'
                minLength={10}
                maxLength={1000}
                className=''
                onChange={(e) => {
                    setVal(e.target.value)
                }}
                placeholder='Type your question here...'
            />
            <Button onClick={() => {
                onChangeMess((prev: string) => {
                    return [...prev, value]
                });
                hamdleGetResult(value);
            }}>
                <Send />
            </Button>
        </section>
    )
}

export default InputChat