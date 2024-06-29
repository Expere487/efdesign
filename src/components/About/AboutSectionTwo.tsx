import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Tasarlayalım
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Çalışmalarımıza sizin paylaştığınız brifler öncülüğünde başlarız. İlk aşamamız her zaman sizin kimliğinizi modern ve profesyonel bir şekilde dijital dünyada 
                  var etmektir. Bu amaçla çıktığımız yolda ilk durağımız tasarımdır. Tasarımlarımızda kurumsal kimliğinizi, tarihinizi ve hizmetlerinizi kaynak ediniriz.
                  Siz tasarımı onayladıktan sonra bir sonra ki aşama olan <mark className="bg-primary text-white">kodlamaya</mark> geçeriz.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Kodlayalım
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Kurumsal kimliğinizi, tarihinizi ve hizmetlerinizi baz aldığımız tasarımımız onaylandıktan sonra ki aşama kodlamadır. Bu aşamada tasarımınızı hızlıca kod dökeriz. Kodlamanın bir başka parçası
                  ise işlevselliktir. Bu aşamada tamamlandığında <mark className="bg-primary text-white">yayınlamaya</mark> geçeriz.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Yayınlayalım
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  İlk iki aşama tamamlandıktan sonra ise artık projenize yayına alır ve sizin dijital dünyada ki varlığınız başlar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
