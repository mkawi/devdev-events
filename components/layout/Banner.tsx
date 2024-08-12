export default function Banner({ title }) {
    return (
        <section className="w-full py-12 md:py-12 lg:py-16 xl:py-20 bg-gray-100">
            <div className="px-4 md:px-6">
                <div className="flex flex-col items-center space-y-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-4xl lg:text-4xl">
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    )
}
