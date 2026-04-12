'use client'

import { createContext, useContext, useState } from 'react'

interface ModalOptions {
  package?: string
}

interface FormModalContextType {
  isOpen: boolean
  modalType: 'entwurf' | 'seo'
  selectedPackage: string | null
  openModal: (type?: 'entwurf' | 'seo', options?: ModalOptions) => void
  closeModal: () => void
}

const FormModalContext = createContext<FormModalContextType>({
  isOpen: false,
  modalType: 'entwurf',
  selectedPackage: null,
  openModal: () => {},
  closeModal: () => {},
})

export function FormModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState<'entwurf' | 'seo'>('entwurf')
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  return (
    <FormModalContext.Provider
      value={{
        isOpen,
        modalType,
        selectedPackage,
        openModal: (type = 'entwurf', options) => {
          setModalType(type)
          setSelectedPackage(options?.package ?? null)
          setIsOpen(true)
        },
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </FormModalContext.Provider>
  )
}

export const useFormModal = () => useContext(FormModalContext)
