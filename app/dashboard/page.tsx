import type {Metadata} from 'next'

// Adds metadata to head and title tags.
export const metadata: Metadata = {
    title: 'Custom title Dashboard'
}

export default function Page() {
    return <p>Dashboard Page</p>
}