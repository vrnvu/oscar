import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import { AutosizeTextarea } from "./ui/autosize-textarea";
import { useToast } from "@/hooks/use-toast";


interface InputAreaCardProps {
    example: string
}

export default function InputAreaCard({ example }: InputAreaCardProps) {
    const { toast } = useToast()

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
                <CardTitle className="text-sm font-medium">Summarize example</CardTitle>
            </CardHeader>
            <CardContent>
                <AutosizeTextarea
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your text here..."
                    defaultValue={example}
                />
                <Button
                    onClick={() => {
                        toast({
                            title: "Summarize",
                            description: "Text has been send to summarize"
                        })
                    }}
                >
                    summarize
                </Button>
            </CardContent>
        </Card >
    );
}