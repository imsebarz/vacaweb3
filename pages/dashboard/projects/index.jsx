//components
import MainLayout from "../../../layouts/MainLayout";
import ProjectCard from "../../../components/projects/ProjectCard";
import Loading from "../../../components/Loading";
import { getProjects } from "../../../utils/services";
import { useEffect, useState } from "react";
import projectMakerABI from "../../../utils/projectMakerABI.json";
import {
  useAccount,
  useConnect,
  useContract,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { ethers } from "ethers";

//IF YOU WANT YOU CAN SERVER THE DATA THROUGH STATIC PROPS
//IN MY OPINION IS BETTER FOR THE PERFORMANCE

export async function getStaticProps(context) {
  //HERE ASYNC PROJECTS FUNCTIONS
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}

const DashBoard = ({ projects }) => {
  const CONTRACT_ADDRESS = "0x51fCd56Ae21B2B60A3757B37E5a8F2B17F54F4Fc";
  const { address: user } = useAccount()

  const { data } = useContractRead({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: projectMakerABI,
    functionName: "getProjectsCount",
    watch: true,
  });

  let count = parseInt(data?._hex)

  const { config } = usePrepareContractWrite({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: projectMakerABI,
    functionName: 'makeProyecto',
    args: [200, user, user, 2000]
  })
  
  const { write } = useContractWrite(config)
  
  

  useEffect(() => {
    if (data) {
      console.log(
        "🚀 ~ file: index.jsx ~ line 45 ~ useEffect ~ data",
        data
      );
    }
  }, [data]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);
  

  return (
    <MainLayout>
      <h1 className="text-2xl " style={{ color: "black" }}>
        Financia la educación de nuevo talento
      </h1>
       <button  disabled={!write} onClick={() => write?.()}>Crear Proyecto</button>
      {/* <button disabled={!write} onClick={() => write?.()}>Obtener cantidad de proyectos</button>  */}
      
      {isLoading && <Loading />}
      {!isLoading && (
        <>
        <h1 >Tenemos {count} proyectos</h1>
        <section>
          {projects.slice(0,count).map((project, key) => (
            <ProjectCard key={key} {...project} />
            ))}
        </section>
            </>
      )}
    </MainLayout>
  );
};

export default DashBoard;
