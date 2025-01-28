import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { shortenURLFormDef, shortenURLValidationSchema } from "@/models/validations/shorten-url.validation";
import { GoLink } from "react-icons/go";
import { useUrlStore } from "@/store/url.store";
import { ShortenUrlService } from "@/services/shorten-url.services";
import { toast } from "@/hooks/use-toast";
import { LoaderIcon } from "lucide-react";

export const LinkForm = () => {
    const { setShortUrl, setError, loading, setLoading, shortUrl } = useUrlStore()

    const form = useForm<shortenURLFormDef>({
        resolver: zodResolver(shortenURLValidationSchema),
        defaultValues: {
            url: "",
        },
    })

    async function onSubmit(values: shortenURLFormDef) {
        console.log(values);
        setError("");
        setLoading(true);
        try {
            const userId = "677088ed4b1b61e1808a75f6"; 
            const longUrl = values.url;
            const response = await ShortenUrlService.shortenUrl({longUrl});
            setShortUrl(response.shortUrl);
            form.reset();
        } catch {
            setError("Error shortening URL:client");
        }
    }

    useEffect(() => {
        toast({
            description: `Your shortened url is readyyy!🎉. ${shortUrl}`,
          })
          console.log(shortUrl);
          setLoading(false)
    }, [shortUrl])
    return (
        <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="relative text-[#C9CED6] mt-[46px]">
                    <GoLink className="absolute top-[26px]  left-[25px] my-auto" />
                    <FormField
                        control={form.control}
                        name="url"

                        render={({ field }) => (
                            <FormItem >
                                <FormControl>
                                    <Input placeholder="Enter the link here" {...field} className="border-4 border-[#353C4A] py-[21px] px-[25px] pl-[60px] text-[16px]/[28px] h-full rounded-[48px]" />
                                </FormControl>
                                <FormMessage />
                                {shortUrl}
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="absolute right-[7.5px] top-2 w-[183px] hover:drop-shadow-[10px_9px_22px_rgba(20,78,227,0.38)] px-[25px] h-[50px]  text-white text-base font-semibold rounded-[48px] hover:bg-[#111b34] bg-[#144EE3]" >
                        {loading ? <LoaderIcon className="animate-spin"/> : "Shorten Now!"}
                    </Button>
                </form>
            </Form>
    );
}