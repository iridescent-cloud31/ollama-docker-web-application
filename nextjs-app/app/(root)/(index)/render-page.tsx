"use client"
import React, { useState } from 'react'
import ShowChat from './components/show-chat'
import { Input } from 'postcss'
import InputChat from './components/input-chat'
import MessChat from './components/mess-chat'


const RenderPage = () => {
    const [mess, setMess] = useState<string[]>([])
    const [result, setResult] = useState<string[]>([])

    console.log(mess)
    console.log(result)

    return (
        <main className='flex flex-col gap-3'>
            <ShowChat>
                <>
                    {result && (
                        result.map((item, index) => {
                            return <>
                                <MessChat
                                    key={index}
                                    result={item}
                                    role='ai'
                                />   
                                {
                                    result[index] && (
                                        <MessChat
                                            key={index}
                                            result={result[index]}
                                            role='ai'
                                        />  
                                    )
                                }
                            </>
                        })
                    )}
                </>
            </ShowChat>
            <InputChat 
                onChangeMess={setMess}
                onChangeResult={setResult}
            />
        </main>
    )
}

export default RenderPage