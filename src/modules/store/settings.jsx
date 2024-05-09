"use client"

import { setGeneral, setCategories } from "@/lib/store/settings/settingsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const SetSettings = ({ data }) => {

    const dispatch = useDispatch();
    const setGeneralData = (settings) => dispatch(setGeneral(settings));
    const setCategoriesData = (cats) => dispatch(setCategories(cats))

    useEffect(() => {
        setGeneralData(data.settings);
        setCategoriesData(data.categories);
        //eslint-disable-next-line
    }, []);
    return null;
}

export default SetSettings;