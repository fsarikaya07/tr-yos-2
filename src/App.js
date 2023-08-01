import AppRouter from "./router/AppRouter";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { YosProvider } from "./context/Context";
import { BrowserRouter } from "react-router-dom";


function App() {

  let universities = [
    {
      id: 1,
      name: "Boğaziçi Üniversitesi",
      establishedYear: 1971,
      history: "Boğaziçi Üniversitesi, 1971 yılında İstanbul'da kurulmuştur...",
      language: "Türkçe, İngilizce",
      address: "Bebek, İstanbul",
      departments: ["Mühendislik", "İşletme", "Fen-Edebiyat"],
      tuitionFee: 15000,
      quota: 500,
      contact: {
        phone: "+90 212 359 54 00",
        email: "info@boun.edu.tr",
      },
    },
    {
      id: 2,
      name: "Orta Doğu Teknik Üniversitesi",
      establishedYear: 1956,
      history:
        "Orta Doğu Teknik Üniversitesi, 1956 yılında Ankara'da kurulmuştur...",
      language: "Türkçe, İngilizce",
      address: "Çankaya, Ankara",
      departments: ["Mühendislik", "Bilgisayar", "Mimarlık"],
      tuitionFee: 12000,
      quota: 600,
      contact: {
        phone: "+90 312 210 2000",
        email: "info@metu.edu.tr",
      },
    },
    {
      id: 3,
      name: "İstanbul Teknik Üniversitesi",
      establishedYear: 1773,
      history:
        "İstanbul Teknik Üniversitesi, 1773 yılında İstanbul'da kurulmuştur...",
      language: "Türkçe, İngilizce",
      address: "Maslak, İstanbul",
      departments: ["Mimarlık", "İnşaat", "Elektrik-Elektronik"],
      tuitionFee: 14000,
      quota: 550,
      contact: {
        phone: "+90 212 285 3000",
        email: "info@itu.edu.tr",
      },
    },
    // Diğer üniversiteler...
  ];

  return (
   <BrowserRouter>
    <AuthProvider>
        <YosProvider>
          <AppRouter universities={universities} />
        </YosProvider>
      </AuthProvider>
   </BrowserRouter>
      
  );
}
//Hocam 1
export default App;












