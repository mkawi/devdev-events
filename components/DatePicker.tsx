"use client"

import { format } from "date-fns"
import { CalendarIcon } from "@/components/icons/CalendarIcon"

import { cn } from "@/lib/utils"
import { Button } from "@/components/Button"
import { Calendar } from "@/components/Calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/Popover"

export function DatePickerWithRange({
    date, setDate
}) {
    return (
        <div className="grid gap-2">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-auto justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date range</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                        name="date"
                        required
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
