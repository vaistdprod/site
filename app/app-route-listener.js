"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function GTMRouteListener() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "spa_route_change",
        newPath: pathname,
        newQuery: searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}