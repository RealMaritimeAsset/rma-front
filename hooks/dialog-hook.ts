import { ReactNode } from 'react';
import { create } from 'zustand';

interface DialogProps {
  isOpen: boolean;
  title: string;
  contents?: string | ReactNode;
  loading: boolean;
  onOpen: (params: {
    title: string;
    contents?: string | ReactNode;
    onConfirm?: () => Promise<void>;
  }) => void;
  onClose: () => void;
  data: any;
  setData(data: any): void;
  toggle: () => void;
  callback: () => Promise<void>;
}

export const useDialog = create<DialogProps>((set, get) => ({
  isOpen: false,
  loading: false,
  title: '',
  contents: '',
  onOpen: ({ title, contents, onConfirm }) => {
    set({
      isOpen: true,
      title,
      contents,
      callback: onConfirm
    });
  },
  onClose: () => {
    set(
      {
        isOpen: false,
        title: '',
        contents: ''
      },
      false
    );
  },
  data: {},
  setData: (data) => set({ data: { data } }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  callback: () => Promise.resolve()
}));
