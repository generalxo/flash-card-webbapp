import { createContext, useContext } from "react";

type CreateCardContextType = {
    card: ICard | null;
    deckId: string | null;
    createCard: (card: ICard) => void;
}

type Props = { children: React.ReactNode };

const CreateCardContext = createContext<CreateCardContextType>({} as CreateCardContextType);

export const CreateCardProvider = ({ children }: Props) => {

    const createCard = (card: ICard) => {
        //temp create srevice that will go here
        console.log(card);
    };

    return (
        <CreateCardContext.Provider value={{ card: null, deckId: null, createCard }}>
            {children}
        </CreateCardContext.Provider>
    );
};

export const useCreateCard = () => useContext(CreateCardContext);