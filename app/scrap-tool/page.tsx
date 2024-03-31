import Image from 'next/image'
import {TextAreaAndButton} from '../core'
export default async function Home() {
  // const weatherData : Promise<weatherReponse> = await weatherService()

  return (
    <main >
     <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Scrap email from website</h1>
        <div className="flex space-x-4">
        <TextAreaAndButton type='input'/>
        <TextAreaAndButton />
        </div>
      </div>
    </div>
    </main>
  )
}