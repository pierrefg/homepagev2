import Image from "next/image";
// import coverPic from './research/imgs/diatom.png';
import coverPic from './data-science/imgs/saos.png';

export default function Science() {
    return (
        <div className="md:flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl">
            <div className="w-1/3 md:w-1/4 mx-auto md:h-full">
                <Image
                    src={coverPic}
                    className="md:object-cover md:h-full md:w-full rounded-full md:rounded-none"
                    priority
                />
            </div>
            <div className="md:w-3/4 flex flex-col gap-4">
                <h1 className="text-xl">
                    Informatique
                </h1>
                <div className="flex flex-col gap-4 md:min-h-[500px]">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sapien condimentum, placerat est non, egestas massa. Etiam vel malesuada justo. Etiam eget dolor sit amet lorem convallis congue at vitae mi. Duis malesuada mauris eget orci pellentesque laoreet. Vestibulum vehicula nec mi sed feugiat. Vivamus lacinia ligula in mauris lobortis scelerisque eu ac purus. Aenean consectetur, quam vel mollis elementum, augue ipsum viverra turpis, ut interdum ante tortor ut leo. Integer ac purus luctus, euismod ligula non, facilisis odio. Sed id lacinia nulla.
                        Maecenas non ultrices velit. Cras fermentum, metus et mollis condimentum, justo nisl scelerisque leo, et vestibulum mi risus nec nulla. Nullam ac tincidunt metus. Fusce vehicula tellus quis dolor tincidunt, in malesuada ligula maximus. Donec dapibus sollicitudin fermentum. Mauris efficitur est ut neque gravida, eu bibendum elit porttitor. Vivamus a purus in sapien mollis malesuada a et velit. Sed at fringilla ante. Ut vitae pellentesque augue. Morbi mauris est, viverra eget erat vitae, molestie consequat urna. Nulla ac imperdiet enim, nec faucibus ligula. Pellentesque ut posuere turpis. Fusce sed sodales tellus, at vulputate est. Donec velit tortor, consectetur eu purus a, pharetra placerat arcu.   
                    </p>
                </div>
            </div>
        </div>
    );
}