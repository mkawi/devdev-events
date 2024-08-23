export default function Container({ children }) {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 -mt-6">
            <div className="max-w-4xl mx-auto p-6">
                {children}
            </div>
        </section>
    )
}
