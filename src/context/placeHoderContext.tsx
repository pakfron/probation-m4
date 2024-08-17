import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { DataPlaceHolder } from "../type/jsonPlaceHolder.type";
import { getPlaceHolderPost } from "../api/placeHolder.service";

export interface PlaceHolderContextType {
  jsonDump: DataPlaceHolder[];
  setJsonDump: Dispatch<SetStateAction<DataPlaceHolder[]>>;
  fetchPlaceHolder: () => Promise<DataPlaceHolder[] | undefined>;
}

export const PlaceholderContext = createContext<PlaceHolderContextType | null>(
  null
);

export const PlaceHolderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [jsonDump, setJsonDump] = useState<DataPlaceHolder[]>([]);

  const fetchPlaceHolder = async () => {
    try {
      const result = await getPlaceHolderPost();
      if (result.length) return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PlaceholderContext.Provider
      value={{ jsonDump, setJsonDump, fetchPlaceHolder }}
    >
      {children}
    </PlaceholderContext.Provider>
  );
};

export const usePlaceHolderContext = () =>
  useContext<PlaceHolderContextType | null>(PlaceholderContext);
