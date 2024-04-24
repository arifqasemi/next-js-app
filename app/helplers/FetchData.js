'use client'
import React, { useState } from 'react'


const FetchData = async() => {
    // alert('dome')
    // const [fetchedData,setFetchedData]= useState()

    try{
        const response = await fetch('http://localhost:3000/api/posts')
        if(!response.ok){
            console.log('some error')

        }else{

            const data = await response.json()
            console.log(data)
            return data
        }

    }catch(error){
        console.log('error occured',error)
    }



//   return {fetchedData}
}

export default FetchData
