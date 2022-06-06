export interface FocusedStatusBarProps {
  backgroundColor: string;
}

export interface NTFCardProps {
  data: {
    id: string;
    name: string;
    creator: string;
    price: number;
    description: string;
    image: any;
    bids: {
      id: string;
      name: string;
      price: number;
      image: any;
      date: string;
    }[];
  };
}
