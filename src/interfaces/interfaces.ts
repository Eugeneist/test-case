export interface PostListProps {
    userId: number
    id: number
    title: string
    body: string
}

export interface PostProps {
    userId: number
    title: string
    body: string
}

export interface ModalProps {
    close?: boolean
    children: React.ReactNode
}