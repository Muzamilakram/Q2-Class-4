import Cart from "./components/card";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 p-8">
            <h1 className="text-5xl font-bold text-black mb-12 text-center"><i><u>STUDENT IDENTIFICATION CARDS</u></i></h1>
            <div className="flex flex-col w-full items-center gap-6">
                <Cart name='Muzamil Akram' age={18} rollno={1345} classe='GIAIC Quarter 2' />
                <Cart name='Ali Aamir' age={21} rollno={1538} classe='GIAIC Quarter 2' />
                <Cart name='Mumtaz Ali' age={20} rollno={1684} classe='GIAIC Quarter 2' />
            </div>
            <br></br>
            <p><b><i><u>Created By Muzamil Akram</u></i></b></p>
        </div>
    );
}