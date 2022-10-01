//components
import MainLayout from "../../../layouts/MainLayout";
import ProjectCard from "../../../components/projects/ProjectCard";
import Loading from "../../../components/Loading";
import { getProjects } from "../../../utils/services";
import { useEffect, useState } from "react";
import ABI from "../../../utils/ABI.json";
import {
  useAccount,
  useConnect,
  useContract,
  useContractRead,
  useContractWrite,
  useNetwork,
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
  const CONTRACT_ADDRESS = "0xAfDdCE9E0cA4f63dD32e7733Aead3573C9721aF4";

  const { data: totalSupplyData } = useContractRead({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: ABI,
    functionName: "message",
    watch: true,
  });

  useEffect(() => {
    if (totalSupplyData) {
      console.log(
        "🚀 ~ file: index.jsx ~ line 45 ~ useEffect ~ totalSupplyData",
        totalSupplyData
      );
    }
  }, [totalSupplyData]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <MainLayout>
      <h1 className="text-2xl " style={{ color: "black" }}>
        Financia la educación de nuevo talento
      </h1>
      {isLoading && <Loading />}
      {!isLoading && (
        <section>
          {projects.map((project, key) => (
            <ProjectCard key={key} {...project} />
          ))}
        </section>
      )}
    </MainLayout>
  );
};

export default DashBoard;
