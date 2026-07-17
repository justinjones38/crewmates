import styles from "./Layout.module.css";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { supabase } from "../services/client";

export default function Layout() {
  const [crewmates, setCrewmates] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const { data, error } = await supabase.from("crewmates").select().order("created_at", {ascending: true});

    if (error) {
      setError(true);
      return;
    }
    setCrewmates(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <Outlet context={{ crewmates, error, fetchData }} />
      </div>
    </div>
  );
}
