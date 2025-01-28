import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { authFormDef, authValidationSchema } from "@/models/validations/auth.validation";
import { AuthServices } from "@/services/auth.services";
import { useAuthStore } from "@/store/auth.store";
import { LoaderIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

// Define Zod schema for validation
const formSchema = authValidationSchema;

type FormData = authFormDef;


const NameEmailForm: React.FC = () => {
  const {walletAddress, setLoading, loading, token, setUserID} = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const route = useRouter()

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    console.log("Form submitted:", data);
    try {
      const response = await AuthServices.RegisterUser({...data, walletAddress});
      console.log(response);
      localStorage.setItem("ctn", token);
      localStorage.setItem("userid", response.data._id);
      setUserID(response.data._id);
      toast({
        description: `Welcome onboard ${data.name}!🎉.`,
      })
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast({
        description: `Error creating your account`,
      })
    }
    setLoading(false);
  };

  return (
    <Card className=" mx-auto bg-transparent text-white border-none">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" {...register("name")} className="mt-1 border-2 border-[#353C4A] py-[15px] px-[15px] text-[10px]/[28px] h-full rounded-[10px]" />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} className="mt-1 border-2 border-[#353C4A] py-[15px] px-[15px] text-[10px]/[28px] h-full rounded-[10px]" />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <CardFooter className="p-0 w-full">
            <Button type="submit" className="hover:drop-shadow-[10px_9px_22px_rgba(20,78,227,0.38)] px-32 h-[50px] rounded-lg w-[183px] text-white text-base font-semibold bg-[#181E29] border-[#353C4A]">
            {loading ? <LoaderIcon className="animate-spin"/> : "Submit"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default NameEmailForm;
