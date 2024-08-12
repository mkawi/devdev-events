"use client"

import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogHeader, DialogTitle, DialogFooter } from "@/components/Dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import { Button } from "@/components/Button"
import { Label } from "@/components/Label"
import { Input } from "@/components/Input"
import { Textarea } from "@/components/Textarea"
import { useState } from "react"
import { DatePickerWithRange } from "./DatePicker"
import { DateRange } from "react-day-picker"
import { addDays } from "date-fns"
import { addEvent as ae } from "@/app/(auth)/actions"

export function CreateEvent() {
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [eType, setType] = useState("Online")
  const [price, setPrice] = useState(0)
  const [imgurl, setImgurl] = useState("")
  const [desc, setDesc] = useState("")
  const [date, setDate] = useState<DateRange>({
    from: addDays(Date.now(), 0),
    to: addDays(Date.now(), 7),
  })
  const addEvent = ae.bind(null, date)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-sm font-medium">Create a new event</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create a new event</DialogTitle>
        </DialogHeader>
        <form action={addEvent}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 items-center gap-2">
              <Label htmlFor="title">Title<span className="text-red-600">*</span></Label>
              <Input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="location">Location</Label>
              <Label htmlFor="type">Type</Label>
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Input id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
              <Select value={eType} name="type" onValueChange={setType}>
                <SelectTrigger >
                  <SelectValue placeholder="Select type of event" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Online">Online</SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                  <SelectItem value="In-Person">In-Person</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 items-center gap-2">
              <Label htmlFor="date-range">Start/End Date<span className="text-red-600">*</span></Label>
              <DatePickerWithRange date={date} setDate={setDate} />
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Label htmlFor="price">Price (£)</Label>
              <Label htmlFor="image-url">Image URL</Label>
            </div>
            <div className="grid grid-cols-2 items-center gap-2">
              <Input id="price" name="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
              <Input id="image-url" name="imgurl" value={imgurl} onChange={(e) => setImgurl(e.target.value)} />
            </div>
            <div className="grid grid-cols-1 items-center gap-2">
              <Label htmlFor="description">Description<span className="text-red-600">*</span></Label>
              <Textarea id="description" name="desc" required value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
          </div>
          <DialogFooter className="flex justify-end">
            {/* <DialogClose asChild> */}
            <Button type="submit">Add event</Button>
            {/* </DialogClose> */}
            <DialogClose asChild>
              <Button variant="outline" type="button" className="ml-2">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}