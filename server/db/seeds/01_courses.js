exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(() => {
      // Inserts seed entries
      return knex('courses').insert([
        {id: 1, name: 'Cape Kidnappers', address: '446 Clifton Road, Te Awanga, Hawkes Bay 4180 New Zealand', latitude: '-39.640799', longitude: '176.989530', phone_number: '+64 6 873 1018', email: 'info@capekidnappers.com', description: 'This is a lovely course', image: 'http://static1.squarespace.com/static/5793d6b1d2b857dd709bce0d/57940e466a49633f949842b0/5ae04cb52b6a283777fcf2f5/1524649370294/Cape-Kidnappers-New-Zealand-Golf-Course.jpg?format=1000w', rank: '1st'},
        {id: 2, name: 'Kauri Cliffs', address: '139 Tepene Tablelands Rd, Matauri Bay 0245', latitude: '-35.064845', longitude: '173.908679', phone_number: '09-407 0010', email: 'info@kauricliffs.com', description: 'This is a nice course', image: 'https://farm1.nzstatic.com/_proxy/imageproxy_1y/serve/ce990118-b282-47f1-a873-c59da3b51369-2018321111452.jpg?outputformat=jpg&quality=80&transformationsystem=letterbox&width=940&height=530&source=https://media.newzealand.com/getattachment/ce990118-b282-47f1-a873-c59da3b51369/ce990118-b282-47f1-a873-c59da3b51369-2018321111452.jpg&securitytoken=16B8D5A0E0908EBD21BDA162CD1E5EF6', rank: '2nd'},
        {id: 3, name: 'Jacks Point', address: `Jack's Point Restaurant, 9348, Mcadam Dr, Kawarau Falls`, latitude: '-45.076864', longitude: '168.741293', phone_number: '03-450 2050', email: 'golf@jackspoint.com', description: 'This is a great course', image: 'https://farm1.nzstatic.com/_proxy/imageproxy_1y/serve/15th--tee-to-green-091.webp?height=530&outputformat=webp&quality=80&source=1595595&transformationratio=1.3&transformationsystem=autoboxfit&width=940&securitytoken=09EF5B072DCA886A19908403E7832EBD', rank: '3rd'}
      ])
    })
}
