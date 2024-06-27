type Todo ={
    id: string
    task: string
    completed: boolean
}

type AppState = {
    list: [Todo]
}

export type { Todo, AppState}