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
      <DialogContent className="sm:max-w-[700px] h-[400px] flex flex-col">
        <DialogHeader>
          <div className=" text-3xl">Register your Business</div>
          <div className=" text-xl text-gray-500 pt-3">
            Make changes to your Business here. Click save when you're done.
          </div>
        </DialogHeader>

        <form onSubmit={onSubmit} className=" " noValidate>
          <div className="pt-4  flex-col  w-full">
            <div className=" text-xl font-semibold p-4">Business Name</div>
            <div className="flex flex-col h-40">
              <input
                type=" pb-5"
                className=" w-8/12 p-2 border border-gray-400 rounded "
              />
              <div className="flex justify-center mt-14">
                <Button
                  type="submit"
                  className=" rounded-lg w-[80px]"
                  size="sm"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
