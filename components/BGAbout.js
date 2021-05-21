import Image from 'next/image'

export default function BGImage() {
  return (
    <Image 
      src="/nathan-dumlao-J2gEgTPM_OA-unsplash.jpg"
      alt="Timber export company from UA"
      layout="fill"
      objectFit="cover"
      quality={50}
    />
  )
} 