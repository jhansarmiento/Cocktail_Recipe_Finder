import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useAppStore';
import type { Recipe } from '../types';

export default function Modal() {

    const modal = useAppStore(state => state.modal)
    const closeModal = useAppStore(state => state.closeModal)
    const selectedRecipe = useAppStore(state => state.selectedRecipe)

    const renderIngredients = () => {
        const ingredients : React.JSX.Element[] = []

        for( let i = 1; i <= 10 ; i++) {
            const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe]
            const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe]

            if( ingredient && measure) {
                ingredients.push(
                    <li 
                        key={i}
                        className='text-white text-base list-decimal font-light pl-3'
                    >{ingredient} - {measure}</li>
                )
            }
        }

        return ingredients
    }

    return (
        <>
        <Transition appear show={modal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-20"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-20"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black opacity-25" />
                </TransitionChild>
                

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="relative transform overflow-hidden rounded-lg px-4 pt-5 pb-4 bg-white/10 backdrop-blur-lg
                                                text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                            <img 
                                src={selectedRecipe.strDrinkThumb} 
                                alt={`Image of ${selectedRecipe.strDrink}`} 
                                className='mx-auto w-80 rounded-lg mt-2'
                            />
                            <DialogTitle as="h3" className="text-white text-2xl font-extrabold my-5 text-center">
                                {selectedRecipe.strDrink}
                            </DialogTitle>
                            <DialogTitle as="h3" className="text-white text-xl font-bold my-3">
                                Ingredients & Measures:
                            </DialogTitle>
                                {renderIngredients()}
                            <DialogTitle as="h3" className="text-white text-xl font-bold my-3">
                                Instructions:
                            </DialogTitle>
                            <p className='text-white pl-3'>{selectedRecipe.strInstructions}</p>
                        </DialogPanel>
                    </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
        </>
    )
}