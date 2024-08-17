import { useContext } from "react";
import {
  PlaceholderContext,
  PlaceHolderContextType,
} from "../context/placeHoderContext";
export const usePlaceHolderContext = (): PlaceHolderContextType => {
  const context = useContext(PlaceholderContext);
  if (!context) {
    throw new Error(
      "usePlaceHolderContext must be used within a PlaceHolderProvider"
    );
  }
  return context;
};
