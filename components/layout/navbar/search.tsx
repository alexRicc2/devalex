'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { createUrl } from "@/lib/utils";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = useState('')

  useEffect(()=>{
    setSearchValue(searchParams?.get('q') || '');
  }, [searchParams, setSearchValue])
  const onSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    console.log('e:', e)
    const val = e.target as HTMLFormElement
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString())

    if(search.value){
      newParams.set('q', searchValue)
    }
    else {
      newParams.delete('q')
    }
    router.push(createUrl('/search', newParams))
  }

  return (
    <form onSubmit={onSubmit} className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input 
        type="text"
        name="search"
        placeholder="search.."
        autoComplete="off"
        value={searchValue}
        onChange={(e)=> setSearchValue(e.target.value)}
        className="w-full bg-white px-4 py-2 text-sm text-white placeholder:text-neutral-400 bg-transparent border-neutral-800 border rounded-lg"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4"/>
      </div>

    </form>
  )
}