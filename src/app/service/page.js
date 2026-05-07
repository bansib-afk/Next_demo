import Header from "@/_components/Header";
import ServiceItem from "@/_components/ServiceItem";
import ServiceList from "@/_components/ServiceList";

export default function Service(){
    const services = [
    "Web Development",
    "Mobile App Development",
    "Consulting Services",
    "Digital Marketing",
  ];
    return(
        <div className="flex-1">
              <div className="flex justify-center items-center flex-col gap-5">
                <h1>Our Service </h1>
                <p>Welcome to the Service Page</p>
                {/* using thiswe avoid the subchild component tpo act as client component */}
                <ServiceList content={services.map((service) => (
                          <ServiceItem key={service} content={service} />
                        ))} />
              </div>
            </div>
    )
}
