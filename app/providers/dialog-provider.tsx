'use client';
import { useDialog } from '@/hooks/dialog-hook';
import { Button } from '@/components/ui/button';
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

export const DialogProvider = () => {
  const { onOpen, isOpen, toggle, onClose } = useDialog();
  const onSubmit = async () => {};
  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className="sm:min-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register your company</DialogTitle>
          <DialogDescription>
            If you register, you can mint rwa
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Company Name
            </Label>
            <Input
              id="name"
              //   defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
                defaultValue="@peduarte"
              className="col-span-3"
            />
          </div> */}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
