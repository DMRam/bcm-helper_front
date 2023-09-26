import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleFunction, addValuesFunction } from "../../store/switcher-slice";
import { UserInterface } from "../interfaces/Interfaces";



/**
 * This Hook is being used to connect (redux) switcher-slice in order to store data
 * @returns 
 */
export const useData = () => {

    /**
     * Data and functions coming from slice
     */
    const dispatch = useAppDispatch();
    const isVisible = useAppSelector((state) => state.ui.isVisible)
    const allUsersCollected = useAppSelector((state) => state.ui.initialData)

    // This function need to send an User to my store/switcher-slice
    const firstValuesFromApi = (user:UserInterface) => {

    }
    const toggleToTrue = () => {
        dispatch(toggleFunction())
    }
    const updatingAddValuesFunction = (user:UserInterface[]) => {
        dispatch(addValuesFunction(user))
       
    }

    return {
        isVisible,
        toggleToTrue,
        updatingAddValuesFunction,
        allUsersCollected
    }
}
