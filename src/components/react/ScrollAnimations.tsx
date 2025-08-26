'use client'

import { useEffect, useRef } from 'react'

export default function ScrollAnimations() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view')
          observerRef.current?.unobserve(entry.target)
        }
      })
    }

    observerRef.current = new IntersectionObserver(intersectionCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -20px 0px',
    })

    const setupAnimations = (container: HTMLElement | Document) => {
      const animatedElements = container.querySelectorAll('.scroll-animate:not(.is-in-view)')
      animatedElements.forEach((el) => observerRef.current?.observe(el))

      const staggerContainers = container.querySelectorAll('.stagger-container')
      staggerContainers.forEach((staggerContainer) => {
        const children = staggerContainer.querySelectorAll('.scroll-animate')
        children.forEach((child, index) => {
          const htmlChild = child as HTMLElement
          htmlChild.style.transitionDelay = `${index * 100}ms`
        })
      })
    }

    setupAnimations(document)

    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              setupAnimations(node)
            }
          })
        }
      }
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observerRef.current?.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}