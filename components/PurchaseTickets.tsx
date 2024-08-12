import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogHeader, DialogTitle, DialogFooter } from "@/components/Dialog"
import { Button } from "@/components/Button"
import { Label } from "./Label"
import { Input } from "./Input"
import { subscribeEvent } from "@/app/(auth)/actions"

export function PurchaseTickets({ event }) {
  const purchaseEvent = subscribeEvent.bind(null, event.id)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full md:w-auto">
          Buy Tickets
        </Button>
      </DialogTrigger>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>Confirm Purchase</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-2">
            <Label htmlFor="name">Title</Label>
            <Label htmlFor="qnty">Quantity</Label>
          </div>
          <hr />
          <div className="grid grid-cols-2 items-center gap-2">
            <p>{event.title}@{event.location}</p>
            <Input id="qnty" name="qnty" type="number" value={1} disabled />
          </div>
          <hr />
          <div className="grid items-center gap-2">
            <p className="text-right">Total: £{event.price}</p>
          </div>
        </div>
        <DialogFooter className="flex justify-end">
          <form action={purchaseEvent}>
            <Button type="submit">Confirm</Button>
          </form>
          <DialogClose asChild>
            <Button variant="outline" type="button" className="ml-2">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}