export default function EventCardGrid({ children }) {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="grid gap-6 px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
                    {children}
                </div>
            </div>
        </section>
    )
}
