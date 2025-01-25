import Container from "../Container";

export default function AboutStore() {
  return (
    <Container className="mt-2 md:mt-4 lg:px-20 md:px-[70px] px-6">
      <div className="space-y-3 mt-10 mb-20">
        <h5 className="text-myBlack text-xs md:text-sm font-bold">
          Store Information Electronic Raisya
        </h5>
        <div className="space-y-1">
          <h6 className="text-myBlack text-xs font-semibold">
            Description Electronic Raisya
          </h6>
          <p className="text-xs text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            voluptate molestiae est non unde officiis reprehenderit obcaecati
            vitae doloremque, exercitationem minima laborum molestias, neque
            reiciendis delectus, rerum laboriosam assumenda saepe.
          </p>
        </div>
      </div>
    </Container>
  );
}
