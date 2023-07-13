import React from 'react'
import Feature from './Feature'

const Features = () => {
    return (
        <div className='flex flex-col sm:flex-row w-screen items-center justify-center'>
            <Feature
                feature={'Feature 1'}
                src={'/feature1.jpg'}
                featureData={'Talk about some of the details of your offer with a focus on the value people get back.'}
            />
            <Feature
                feature={'Feature 2'}
                src={'/feature2.jpg'}
                featureData={'Is there a pain point that your service resolves? Tell visitors about it here.'}
            />
            <Feature
                feature={'Feature 3'}
                src={'/feature3.jpg'}
                featureData={'Alternatively, you could use this section to address some frequently asked questions.'}
            />
        </div>
    )
}

export default Features