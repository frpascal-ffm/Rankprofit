'use client'

import { createContext, useContext, useState } from 'react'

interface FormModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const FormModalContext = createContext<FormModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

export function FormModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <FormModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </FormModalContext.Provider>
  )
}

export const useFormModal = () => useContext(FormModalContext)
