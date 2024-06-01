'use client';
import { useDialog } from '@/hooks/dialog-hook';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const DialogProvider = () => {
  const { onOpen, isOpen, toggle } = useDialog();
  const [loading, setLoading] = useState();
  const onSubmit = async () => {};
  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className="sm:max-w-[700px] h-[500px] flex flex-col">
        <DialogHeader>
          <div className=" text-3xl">Register your Business</div>
          <div className=" text-xl text-gray-500 pt-3">
            Make changes to your Business here. Click save when you're done.
          </div>
        </DialogHeader>

        <form onSubmit={onSubmit} className=" " noValidate>
          <div className={cn('pt-4  flex-col  w-full')}>
            <div className="bg-slate-300 text-xl font-semibold">
              Business Name
            </div>
            <input type="text" />
            <Button type="submit" className=" rounded-lg" size="sm">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
