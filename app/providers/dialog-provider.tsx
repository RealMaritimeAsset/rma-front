// 'use client';
// import { useDialog } from '@/hooks/dialog-hook';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger
// } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { cn } from '@/lib/utils';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { deployRwaContract } from '../actions/client/business';
// export const DialogProvider = () => {
//   const { onOpen, isOpen, toggle } = useDialog();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     business_name: '',
//     name: '',
//     symbol: '',
//     address: '',
//     stablecoin_address: ''
//   });

//   // console.log(
//   //   'process.env.RMA_STABLE_COIN_ADDRESS',
//   //   process.env.RMA_STABLE_COIN_ADDRESS
//   // );
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const onSubmit = async () => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await deployRwaContract(
//         // formData.business_name,
//         formData.name,
//         formData.symbol,
//         formData.address,
//         formData.stablecoin_address
//       );
//       setLoading(false);
//       toggle(); // Dialog 닫기
//     } catch (error) {
//       console.error('Error deploying contract:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={toggle}>
//       <DialogContent className="sm:max-w-[700px] h-auto flex flex-col">
//         <DialogHeader>
//           <div className="text-3xl">Register your Business</div>
//           <div className="text-xl text-gray-500 pt-3">
//             Make changes to your Business here. Click save when you're done.
//           </div>
//         </DialogHeader>

//         <form onSubmit={onSubmit} className="pt-4 flex-col w-full" noValidate>
//           <div className="pt-4 flex-col w-full">
//             <div className="text-xl font-semibold p-4">
//               Business Information
//             </div>
//             <div className="flex flex-col h-auto space-y-4">
//               <div className="flex flex-col">
//                 <label htmlFor="business_name" className="text-lg">
//                   Business Name
//                 </label>
//                 <input
//                   id="business_name"
//                   name="business_name"
//                   type="text"
//                   className="w-full p-2 border border-gray-400 rounded"
//                   value={formData.business_name}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="name" className="text-lg">
//                   RMA Token Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   className="w-full p-2 border border-gray-400 rounded"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="symbol" className="text-lg">
//                   RMA Token Symbol
//                 </label>
//                 <input
//                   id="symbol"
//                   name="symbol"
//                   type="text"
//                   className="w-full p-2 border border-gray-400 rounded"
//                   value={formData.symbol}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="address" className="text-lg">
//                   Admin Address
//                 </label>
//                 <input
//                   id="address"
//                   name="address"
//                   type="text"
//                   className="w-full p-2 border border-gray-400 rounded"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="address" className="text-lg">
//                   Stablecoin Address
//                 </label>
//                 <input
//                   id="stablecoin_address"
//                   name="stablecoin_address"
//                   type="text"
//                   className="w-full p-2 border border-gray-400 rounded"
//                   value={formData.stablecoin_address}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="flex justify-center mt-6">
//                 <Button
//                   type="submit"
//                   className="rounded-lg w-[80px]"
//                   size="sm"
//                   disabled={loading}
//                 >
//                   {loading ? 'Loading...' : 'Submit'}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

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
import { deployRwaContract } from '../actions/client/business';

// export const DialogProvider = () => {
//   const { onOpen, isOpen, toggle } = useDialog();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     business_name: '',
//     name: '',
//     symbol: '',
//     address: '',
//     stablecoin_address: process.env.NEXT_PUBLIC_RMA_STABLE_COIN_ADDRESS || ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await deployRwaContract(
//         formData.name,
//         formData.symbol,
//         formData.address,
//         formData.stablecoin_address
//       );
//       setLoading(false);
//       toggle(); // Dialog 닫기
//     } catch (error) {
//       console.error('Error deploying contract:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={toggle}>
//       <DialogContent className="sm:max-w-[700px] h-auto flex flex-col">
//         <DialogHeader>
//           <div className="text-3xl">Register your Business</div>
//           <div className="text-xl text-gray-500 pt-3">
//             Make changes to your Business here. Click save when you're done.
//           </div>
//         </DialogHeader>

//         <form onSubmit={onSubmit} className="pt-4 flex-col w-full" noValidate>
//           <div className="pt-4 flex-col w-full">
//             <div className="text-xl font-semibold p-4">
//               Business Information
//             </div>
//             <div className="flex flex-col h-auto space-y-4">
//               <div className="flex flex-col">
//                 <label htmlFor="business_name" className="text-lg">
//                   Business Name
//                 </label>
//                 <input
//                   id="business_name"
//                   name="business_name"
//                   type="text"
//                   className="w-full p-2 border border-gray-400 rounded"
//                   value={formData.business_name}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="name" className="text-lg">
//                   RMA Token Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   className="w-full p-2 border border-gray-400 rounded"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="symbol" className="text-lg">
//                   RMA Token Symbol
//                 </label>
//                 <input
//                   id="symbol"
//                   name="symbol"
//                   type="text"
//                   className="w-full p-2 border border-gray-400 rounded"
//                   value={formData.symbol}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="address" className="text-lg">
//                   Admin Address
//                 </label>
//                 <input
//                   id="address"
//                   name="address"
//                   type="text"
//                   className="w-full p-2 border border-gray-400 rounded"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="stablecoin_address" className="text-lg">
//                   Stablecoin Address
//                 </label>
//                 <input
//                   id="stablecoin_address"
//                   name="stablecoin_address"
//                   type="text"
//                   className="w-full p-2 border border-gray-400 rounded"
//                   value={formData.stablecoin_address}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="flex justify-center mt-6">
//                 <Button
//                   type="submit"
//                   className="rounded-lg w-[80px]"
//                   size="sm"
//                   disabled={loading}
//                 >
//                   {loading ? 'Loading...' : 'Submit'}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

export const DialogProvider = () => {
  const { isOpen, toggle } = useDialog();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    business_name: '',
    name: '',
    symbol: '',
    address: '',
    stablecoin_address: process.env.NEXT_PUBLIC_RMA_STABLE_COIN_ADDRESS || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await deployRwaContract(
        formData.name,
        formData.symbol,
        formData.address,
        formData.stablecoin_address
      );
      setLoading(false);
      toggle(); // Dialog 닫기
    } catch (error) {
      console.error('Error deploying contract:', error);
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className="sm:max-w-[700px] h-auto flex flex-col">
        <DialogHeader>
          <div className="text-3xl">Register your Business</div>
          <div className="text-xl text-gray-500 pt-3">
            Make changes to your Business here. Click save when you're done.
          </div>
        </DialogHeader>

        <form onSubmit={onSubmit} className="pt-4 flex-col w-full" noValidate>
          <div className="pt-4 flex-col w-full">
            <div className="text-xl font-semibold p-4">
              Business Information
            </div>
            <div className="flex flex-col h-auto space-y-4">
              <div className="flex flex-col">
                <label htmlFor="business_name" className="text-lg">
                  Business Name
                </label>
                <input
                  id="business_name"
                  name="business_name"
                  type="text"
                  className="w-full p-2 border border-gray-400 rounded"
                  value={formData.business_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg">
                  RMA Token Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full p-2 border border-gray-400 rounded"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="symbol" className="text-lg">
                  RMA Token Symbol
                </label>
                <input
                  id="symbol"
                  name="symbol"
                  type="text"
                  className="w-full p-2 border border-gray-400 rounded"
                  value={formData.symbol}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address" className="text-lg">
                  Admin Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="w-full p-2 border border-gray-400 rounded"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="stablecoin_address" className="text-lg">
                  Stablecoin Address
                </label>
                <input
                  id="stablecoin_address"
                  name="stablecoin_address"
                  type="text"
                  className="w-full p-2 border border-gray-400 rounded"
                  value={formData.stablecoin_address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex justify-center mt-6">
                <Button
                  type="submit"
                  className="rounded-lg w-[80px]"
                  size="sm"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Submit'}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
