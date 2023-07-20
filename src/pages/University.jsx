import "../components/Style/University.css";
import { useYosContext } from "../context/Context";
import UniversityCard from "../components/university/UniversityCard";

const University = () => {
  const { universities } = useYosContext();
  return (
    <div className="page-title">
      <div className="p-5 mb-2 bg-primary text-white">
        <h2 className="p-title fw-bold mx-5">Universites</h2>
        <span className="fw-small mx-5">
          Tüm Üniversiteleri Kontrol Edebilirsiniz eN
        </span>
      </div>

      {/* Univercity cards */}
      <div>
        {universities.map((item) => (
          <UniversityCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default University;
