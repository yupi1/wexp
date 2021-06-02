import Image from 'next/image'

export default function Services() {
  return (
    <section className="Services">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus voluptates error facere quae odit quos harum? Placeat, exercitationem in assumenda et omnis ea culpa perferendis possimus mollitia praesentium rerum?
      <Image 
        src="/timber_4.jpg"
        width={400}
        height={400}
        objectFit="contain"
        layout="fixed"
      />
    </section>
  )
}