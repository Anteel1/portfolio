import React from 'react'

export default async function  getAboutPage() {
    const res = await fetch('http://api.weatherapi.com/v1/current.json?q=10.762622,106.660172&key=36a7e755912b4a35b9735815230712',
    {
      method:'GET',
      next:{revalidate:3600} // cache
    })
    if(!res.ok) throw new Error('Failed to fetch data !')
    return res.json()
}
