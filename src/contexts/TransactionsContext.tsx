import { createContext, useEffect, useState } from "react";

interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    category: string
    price: number
    createdAt: string
  }

interface TranctionContextType {
    transactions: Transaction[]
}

export const TransactionsContext = createContext({} as TranctionContextType)

interface TransactionsProviderProps {
    children: React.ReactNode
}

export function TransactionsProvider({children} : TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
      async function loadTransaction(){
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()
  
        setTransactions(data)
      }
      loadTransaction()
    }, [])
    
    return(
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}