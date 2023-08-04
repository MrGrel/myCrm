import { useDispatch, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, rootState } from '../store/store';
import { useSelector } from 'react-redux';

export const useTypeDispatch = () => useDispatch<AppDispatch>();
export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector;
