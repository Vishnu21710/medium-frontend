import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const ComingSoon = (props: Props) => {
    return (
        <Card className=' bg-gray-50/80'>
            <CardHeader className='space-y-5'>
                <CardTitle>New Feature Launching Soon</CardTitle>
                <CardDescription>Get ready for an update! Our team is hard at work developing a new feature that will elevate your user experience. Keep an eye out for more information.</CardDescription>
            </CardHeader>
            <CardContent>
                <Link to={"/"}> 
                    <Button className='border-green-600 text-green-600 hover:bg-green-400' variant={"outline"}>
                        Exlore Stories
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}

export default ComingSoon