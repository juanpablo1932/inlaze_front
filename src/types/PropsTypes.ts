export type OnBoardingProps = {
  header?: React.ReactNode;
  navbar?: React.ReactNode;
  content?: JSX.Element | JSX.Element[];
  footer?: React.ReactNode;
};

export interface SearchButtonProps {
  value: string;
  callback: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface DrinksCardProps {
  sectionName?: string;
  img: string;
  drinkName: string;
  falseBottom?: boolean | undefined;
  otherText?: string;
  handleNavigate?: () => void;
}
