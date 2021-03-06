export interface User {
  username: string
  token: string
}

export interface Repo {
  name: string
  id: string
  createdAt: string
  updatedAt: string
  selected: boolean
}

export interface Size {
  width: number | undefined
  height: number | undefined
}
